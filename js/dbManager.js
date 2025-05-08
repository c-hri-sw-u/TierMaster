/**
 * IndexedDB 存储管理器
 * 用于替代localStorage存储大量图片数据
 * 包含更多错误处理和调试信息
 */

// 数据库配置
const DB_NAME = 'tiermaker-db';
const DB_VERSION = 1;
const ITEMS_STORE = 'items';
const SETTINGS_STORE = 'settings';

// 数据库连接
let db = null;
let dbInitialized = false;
let dbInitializationError = null;

// 调试模式
const DEBUG_MODE = true;

// 调试日志
function logDebug(message, data = null) {
    if (DEBUG_MODE) {
        if (data) {
            console.log(`[dbManager] ${message}`, data);
        } else {
            console.log(`[dbManager] ${message}`);
        }
    }
}

// 错误日志
function logError(message, error) {
    console.error(`[dbManager ERROR] ${message}`, error);
}

/**
 * 检查IndexedDB可用性
 * @return {boolean} IndexedDB是否可用
 */
function isIndexedDBAvailable() {
    try {
        // 检查浏览器是否支持IndexedDB
        if (!window.indexedDB) {
            logError('浏览器不支持IndexedDB');
            return false;
        }
        
        // 在iOS Safari隐私浏览模式下, indexedDB可能存在但不可用
        // 尝试打开一个测试连接来确认
        const testRequest = indexedDB.open('__test__');
        testRequest.onerror = function() {
            logError('IndexedDB可能被禁用或在隐私浏览模式下');
            return false;
        };
        testRequest.onsuccess = function() {
            try {
                this.result.close();
                indexedDB.deleteDatabase('__test__');
            } catch (e) {
                logError('清理测试数据库失败', e);
            }
        };
        
        return true;
    } catch (e) {
        logError('检查IndexedDB可用性时出错', e);
        return false;
    }
}

/**
 * 初始化数据库
 * @return {Promise} 数据库连接Promise
 */
function initDB() {
    return new Promise((resolve, reject) => {
        // 如果已经有数据库连接，直接返回
        if (db) {
            logDebug('使用现有数据库连接');
            resolve(db);
            return;
        }
        
        // 如果已经初始化失败过，直接返回错误
        if (dbInitialized && dbInitializationError) {
            logError('之前的数据库初始化已失败', dbInitializationError);
            reject(dbInitializationError);
            return;
        }
        
        // 检查IndexedDB可用性
        if (!isIndexedDBAvailable()) {
            const error = new Error('IndexedDB 不可用');
            dbInitializationError = error;
            dbInitialized = true;
            reject(error);
            return;
        }
        
        logDebug('初始化 IndexedDB...');
        
        try {
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            
            request.onerror = function(event) {
                const error = event.target.error || new Error('打开IndexedDB失败');
                logError('IndexedDB 打开失败', error);
                dbInitializationError = error;
                dbInitialized = true;
                reject(error);
            };
            
            request.onsuccess = function(event) {
                db = event.target.result;
                logDebug('IndexedDB 连接成功');
                
                // 设置错误处理程序
                db.onerror = function(event) {
                    logError('数据库错误', event.target.error);
                };
                
                dbInitialized = true;
                resolve(db);
            };
            
            request.onupgradeneeded = function(event) {
                logDebug('创建/升级 IndexedDB 数据库架构...');
                const db = event.target.result;
                
                try {
                    // 创建项目存储
                    if (!db.objectStoreNames.contains(ITEMS_STORE)) {
                        const store = db.createObjectStore(ITEMS_STORE, { keyPath: 'id' });
                        store.createIndex('title', 'title', { unique: false });
                        logDebug('创建 items 存储');
                    }
                    
                    // 创建设置存储
                    if (!db.objectStoreNames.contains(SETTINGS_STORE)) {
                        const settingsStore = db.createObjectStore(SETTINGS_STORE, { keyPath: 'key' });
                        logDebug('创建 settings 存储');
                    }
                } catch (error) {
                    logError('创建存储对象时出错', error);
                    // 这个错误会在request.onerror中被捕获
                }
            };
            
            request.onblocked = function(event) {
                logError('数据库打开请求被阻塞', event);
                alert('数据库正被其他标签页使用。请关闭所有其他使用此应用的标签页，然后重试。');
                reject(new Error('数据库打开请求被阻塞'));
            };
        } catch (error) {
            logError('初始化数据库时出错', error);
            dbInitializationError = error;
            dbInitialized = true;
            reject(error);
        }
    });
}

/**
 * 保存项目到 IndexedDB
 * @param {Array} items - 项目数组
 * @param {Object} settings - 设置对象 (包含classified, unclassified, skipped等)
 * @return {Promise} 保存操作的Promise
 */
function saveItems(items, settings) {
    logDebug(`尝试保存 ${items.length} 个项目`);
    
    return initDB().then(() => {
        return new Promise((resolve, reject) => {
            if (!db) {
                const error = new Error('数据库未初始化');
                logError('保存失败', error);
                reject(error);
                return;
            }
            
            try {
                const transaction = db.transaction([ITEMS_STORE], 'readwrite');
                const store = transaction.objectStore(ITEMS_STORE);
                
                // 添加事务错误处理
                transaction.onerror = function(event) {
                    logError('保存项目事务出错', event.target.error);
                    reject(event.target.error);
                };
                
                // 添加事务完成处理
                transaction.oncomplete = function() {
                    logDebug('项目保存事务完成');
                };
                
                // 清空现有存储
                const clearRequest = store.clear();
                
                clearRequest.onsuccess = function() {
                    logDebug('已清空 items 存储，准备添加新项目');
                    
                    if (items.length === 0) {
                        logDebug('没有项目需要保存');
                        resolve();
                        return;
                    }
                    
                    // 存储项目 - 分批处理以避免内存问题
                    const BATCH_SIZE = 10; // 每批处理的项目数
                    const batches = [];
                    
                    for (let i = 0; i < items.length; i += BATCH_SIZE) {
                        batches.push(items.slice(i, i + BATCH_SIZE));
                    }
                    
                    logDebug(`分成 ${batches.length} 批处理项目`);
                    
                    let batchesProcessed = 0;
                    let itemsAdded = 0;
                    
                    // 逐批处理
                    function processBatch(index) {
                        if (index >= batches.length) {
                            logDebug(`所有批次处理完成，成功添加 ${itemsAdded} 个项目`);
                            resolve();
                            return;
                        }
                        
                        const batch = batches[index];
                        logDebug(`处理批次 ${index+1}/${batches.length}，包含 ${batch.length} 个项目`);
                        
                        let batchItemsAdded = 0;
                        
                        batch.forEach(item => {
                            // 确保item.id存在且是数字
                            if (item.id === undefined || item.id === null) {
                                item.id = Date.now() + Math.floor(Math.random() * 10000);
                                logDebug(`项目缺少ID，生成新ID: ${item.id}`);
                            }
                            
                            try {
                                const request = store.put(item);
                                
                                request.onsuccess = function() {
                                    batchItemsAdded++;
                                    itemsAdded++;
                                    
                                    if (batchItemsAdded === batch.length) {
                                        batchesProcessed++;
                                        logDebug(`批次 ${index+1} 完成，已处理 ${batchesProcessed}/${batches.length} 批`);
                                        processBatch(index + 1);
                                    }
                                };
                                
                                request.onerror = function(event) {
                                    logError(`保存项目时出错 (ID=${item.id})`, event.target.error);
                                    batchItemsAdded++;
                                    
                                    if (batchItemsAdded === batch.length) {
                                        batchesProcessed++;
                                        logDebug(`批次 ${index+1} 完成(有错误)，已处理 ${batchesProcessed}/${batches.length} 批`);
                                        processBatch(index + 1);
                                    }
                                };
                            } catch (error) {
                                logError(`添加项目时异常 (ID=${item.id})`, error);
                                batchItemsAdded++;
                                
                                if (batchItemsAdded === batch.length) {
                                    batchesProcessed++;
                                    processBatch(index + 1);
                                }
                            }
                        });
                    }
                    
                    // 开始处理第一批
                    processBatch(0);
                };
                
                clearRequest.onerror = function(event) {
                    logError('清空 items 存储时出错', event.target.error);
                    reject(event.target.error);
                };
                
                // 保存设置
                if (settings) {
                    saveSettings(settings).catch(error => {
                        logError('保存设置时出错', error);
                        // 不阻止继续保存项目
                    });
                }
            } catch (error) {
                logError('创建事务时出错', error);
                reject(error);
            }
        });
    }).catch(error => {
        logError('初始化数据库失败，无法保存项目', error);
        return Promise.reject(error);
    });
}

/**
 * 保存设置到 IndexedDB
 * @param {Object} settings - 键值对设置对象
 * @return {Promise} 保存操作的Promise
 */
function saveSettings(settings) {
    logDebug('保存设置...', settings ? Object.keys(settings) : 'undefined');
    
    if (!settings || typeof settings !== 'object') {
        return Promise.reject(new Error('设置参数无效'));
    }
    
    return initDB().then(() => {
        return new Promise((resolve, reject) => {
            if (!db) {
                const error = new Error('数据库未初始化');
                logError('保存设置失败', error);
                reject(error);
                return;
            }
            
            try {
                const transaction = db.transaction([SETTINGS_STORE], 'readwrite');
                const store = transaction.objectStore(SETTINGS_STORE);
                
                transaction.onerror = function(event) {
                    logError('保存设置事务出错', event.target.error);
                    reject(event.target.error);
                };
                
                transaction.oncomplete = function() {
                    logDebug('设置保存事务完成');
                    resolve();
                };
                
                // 保存每个设置项
                let settingsCount = 0;
                const settingsEntries = Object.entries(settings);
                
                if (settingsEntries.length === 0) {
                    // 如果没有设置项，直接解析
                    resolve();
                    return;
                }
                
                settingsEntries.forEach(([key, value]) => {
                    try {
                        // 预处理值，确保可以保存
                        let processedValue = value;
                        
                        // 将Set转换为数组
                        if (value instanceof Set) {
                            processedValue = Array.from(value);
                            logDebug(`转换设置 ${key} 从Set到数组`);
                        }
                        
                        const request = store.put({ key, value: processedValue });
                        
                        request.onsuccess = function() {
                            settingsCount++;
                            if (settingsCount === settingsEntries.length) {
                                logDebug(`所有 ${settingsCount} 项设置已保存`);
                            }
                        };
                        
                        request.onerror = function(event) {
                            logError(`保存设置项 ${key} 时出错`, event.target.error);
                            settingsCount++;
                        };
                    } catch (error) {
                        logError(`处理设置项 ${key} 时出错`, error);
                        settingsCount++;
                    }
                });
            } catch (error) {
                logError('创建设置事务时出错', error);
                reject(error);
            }
        });
    }).catch(error => {
        logError('初始化数据库失败，无法保存设置', error);
        return Promise.reject(error);
    });
}

/**
 * 从 IndexedDB 加载项目
 * @return {Promise} 加载操作的Promise，返回项目数组
 */
function loadItems() {
    logDebug('加载项目...');
    
    return initDB().then(() => {
        return new Promise((resolve, reject) => {
            if (!db) {
                const error = new Error('数据库未初始化');
                logError('加载项目失败', error);
                reject(error);
                return;
            }
            
            try {
                const transaction = db.transaction([ITEMS_STORE], 'readonly');
                const store = transaction.objectStore(ITEMS_STORE);
                
                transaction.onerror = function(event) {
                    logError('加载项目事务出错', event.target.error);
                    reject(event.target.error);
                };
                
                const request = store.getAll();
                
                request.onsuccess = function(event) {
                    const loadedItems = event.target.result || [];
                    logDebug(`从 IndexedDB 加载了 ${loadedItems.length} 个项目`);
                    resolve(loadedItems);
                };
                
                request.onerror = function(event) {
                    logError('加载项目时出错', event.target.error);
                    reject(event.target.error);
                };
            } catch (error) {
                logError('创建读取事务时出错', error);
                reject(error);
            }
        });
    }).catch(error => {
        logError('初始化数据库失败，无法加载项目', error);
        return Promise.reject(error);
    });
}

/**
 * 从 IndexedDB 加载设置
 * @param {Array} keys - 要加载的设置键数组 (可选，不提供则加载所有)
 * @return {Promise} 加载操作的Promise，返回设置对象
 */
function loadSettings(keys) {
    logDebug('加载设置...', keys);
    
    return initDB().then(() => {
        return new Promise((resolve, reject) => {
            if (!db) {
                const error = new Error('数据库未初始化');
                logError('加载设置失败', error);
                reject(error);
                return;
            }
            
            try {
                const transaction = db.transaction([SETTINGS_STORE], 'readonly');
                const store = transaction.objectStore(SETTINGS_STORE);
                const result = {};
                
                transaction.onerror = function(event) {
                    logError('加载设置事务出错', event.target.error);
                    reject(event.target.error);
                };
                
                if (keys && Array.isArray(keys) && keys.length > 0) {
                    // 加载指定的键
                    logDebug(`加载指定的 ${keys.length} 个设置键`);
                    let keysLoaded = 0;
                    
                    keys.forEach(key => {
                        try {
                            const request = store.get(key);
                            
                            request.onsuccess = function(event) {
                                if (event.target.result) {
                                    result[key] = event.target.result.value;
                                }
                                
                                keysLoaded++;
                                if (keysLoaded === keys.length) {
                                    logDebug('所有指定设置加载完成', Object.keys(result));
                                    resolve(result);
                                }
                            };
                            
                            request.onerror = function(event) {
                                logError(`加载设置 ${key} 时出错`, event.target.error);
                                keysLoaded++;
                                if (keysLoaded === keys.length) {
                                    resolve(result);
                                }
                            };
                        } catch (error) {
                            logError(`处理设置键 ${key} 时出错`, error);
                            keysLoaded++;
                            if (keysLoaded === keys.length) {
                                resolve(result);
                            }
                        }
                    });
                } else {
                    // 加载所有设置
                    logDebug('加载所有设置');
                    
                    const request = store.getAll();
                    
                    request.onsuccess = function(event) {
                        const items = event.target.result || [];
                        items.forEach(item => {
                            result[item.key] = item.value;
                        });
                        
                        logDebug(`加载了 ${items.length} 个设置项`, Object.keys(result));
                        resolve(result);
                    };
                    
                    request.onerror = function(event) {
                        logError('加载所有设置时出错', event.target.error);
                        reject(event.target.error);
                    };
                }
            } catch (error) {
                logError('创建设置读取事务时出错', error);
                reject(error);
            }
        });
    }).catch(error => {
        logError('初始化数据库失败，无法加载设置', error);
        return Promise.reject(error);
    });
}

/**
 * 删除指定项目
 * @param {number|string} id - 要删除的项目ID
 * @return {Promise} 删除操作的Promise
 */
function deleteItem(id) {
    logDebug(`删除项目 ID=${id}`);
    
    if (id === undefined || id === null) {
        return Promise.reject(new Error('无效的项目ID'));
    }
    
    return initDB().then(() => {
        return new Promise((resolve, reject) => {
            if (!db) {
                const error = new Error('数据库未初始化');
                logError('删除项目失败', error);
                reject(error);
                return;
            }
            
            try {
                const transaction = db.transaction([ITEMS_STORE], 'readwrite');
                const store = transaction.objectStore(ITEMS_STORE);
                
                transaction.onerror = function(event) {
                    logError('删除项目事务出错', event.target.error);
                    reject(event.target.error);
                };
                
                const request = store.delete(id);
                
                request.onsuccess = function() {
                    logDebug(`成功从 IndexedDB 删除项目: ID=${id}`);
                    resolve();
                };
                
                request.onerror = function(event) {
                    logError(`删除项目 ID=${id} 时出错`, event.target.error);
                    reject(event.target.error);
                };
            } catch (error) {
                logError('创建删除事务时出错', error);
                reject(error);
            }
        });
    }).catch(error => {
        logError('初始化数据库失败，无法删除项目', error);
        return Promise.reject(error);
    });
}

/**
 * 清空数据库
 * @return {Promise} 清空操作的Promise
 */
function clearDatabase() {
    logDebug('清空数据库...');
    
    return initDB().then(() => {
        return new Promise((resolve, reject) => {
            if (!db) {
                const error = new Error('数据库未初始化');
                logError('清空数据库失败', error);
                reject(error);
                return;
            }
            
            try {
                const transaction = db.transaction([ITEMS_STORE, SETTINGS_STORE], 'readwrite');
                
                transaction.onerror = function(event) {
                    logError('清空数据库事务出错', event.target.error);
                    reject(event.target.error);
                };
                
                transaction.oncomplete = function() {
                    logDebug('数据库清空事务完成');
                    resolve();
                };
                
                // 清空items存储
                const itemsStore = transaction.objectStore(ITEMS_STORE);
                const itemsClearRequest = itemsStore.clear();
                
                itemsClearRequest.onerror = function(event) {
                    logError('清空items存储时出错', event.target.error);
                    // 继续尝试清空settings
                };
                
                // 清空settings存储
                const settingsStore = transaction.objectStore(SETTINGS_STORE);
                const settingsClearRequest = settingsStore.clear();
                
                settingsClearRequest.onerror = function(event) {
                    logError('清空settings存储时出错', event.target.error);
                    // 已经在transaction.onerror中处理
                };
            } catch (error) {
                logError('创建清空事务时出错', error);
                reject(error);
            }
        });
    }).catch(error => {
        logError('初始化数据库失败，无法清空数据库', error);
        return Promise.reject(error);
    });
}

/**
 * 检查可用存储空间
 * @return {Promise} 返回包含 {quota, usage, remaining, usedPercentage} 的Promise
 */
function checkStorage() {
    logDebug('检查存储空间...');
    
    return new Promise((resolve, reject) => {
        if (navigator.storage && navigator.storage.estimate) {
            navigator.storage.estimate().then(estimate => {
                const quota = estimate.quota || 0;
                const usage = estimate.usage || 0;
                const remaining = quota - usage;
                const usedPercentage = quota > 0 ? (usage / quota) * 100 : 0;
                
                logDebug(`存储空间状态: ${(usage/1024/1024).toFixed(2)}MB / ${(quota/1024/1024).toFixed(2)}MB (${usedPercentage.toFixed(2)}%)`);
                
                resolve({
                    quota,
                    usage,
                    remaining,
                    usedPercentage
                });
            }).catch(error => {
                logError('检查存储空间时出错', error);
                
                // 返回默认值，避免阻止应用程序运行
                resolve({
                    quota: Number.MAX_SAFE_INTEGER,
                    usage: 0,
                    remaining: Number.MAX_SAFE_INTEGER,
                    usedPercentage: 0
                });
            });
        } else {
            logDebug('当前浏览器不支持存储空间检查，使用默认值');
            
            // 使用默认值，避免阻止应用程序运行
            resolve({
                quota: Number.MAX_SAFE_INTEGER,
                usage: 0,
                remaining: Number.MAX_SAFE_INTEGER,
                usedPercentage: 0
            });
        }
    });
}

// 导出模块接口
export const dbManager = {
    initDB,
    saveItems,
    saveSettings,
    loadItems,
    loadSettings,
    deleteItem,
    clearDatabase,
    checkStorage,
    isIndexedDBAvailable
};

// 为了兼容性，也支持默认导出
export default dbManager; 