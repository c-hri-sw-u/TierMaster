/**
 * Tier管理器 - 处理所有与tier相关的功能
 */
class TierManager {
    constructor() {
        // 最大tier数量
        this.maxTiers = 16;
        
        // 默认tier配置
        this.defaultTiers = ['S', 'A', 'B', 'C', 'D', 'F'];
        
        // 初始化tier列表
        this.tiers = [...this.defaultTiers];
        
        // tier名称映射
        this.tierNames = {};
        this.defaultTiers.forEach(tier => this.tierNames[tier] = tier);
        
        // tier限制
        this.tierLimits = {};
        this.defaultTiers.forEach(tier => this.tierLimits[tier] = null);
        
        // 所有可能的字母作为tier标识（排除重复的S）
        this.tierLetters = ['S', 'A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
                          'N', 'O', 'P', 'Q', 'R', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        
        // 预定义颜色，用于UI显示
        this.predefinedColors = {
            'S': '#ff9999',  // 红色
            'A': '#ffcc99',  // 橙色
            'B': '#ffed99',  // 黄色
            'C': '#ffff99',  // 浅黄
            'D': '#ccff99',  // 浅绿
            'F': '#99ffcc',  // 青绿
            'G': '#99ffff',  // 青色
            'H': '#99ccff',  // 浅蓝
            'I': '#9999ff',  // 蓝色
            'J': '#cc99ff',  // 浅紫
            'K': '#ff99ff',  // 粉紫
            'L': '#ff9999',  // 粉红
            'M': '#ffcc99',  // 浅橙
            'N': '#ffed99',  // 浅黄
            'O': '#ccff99',  // 浅绿
            'P': '#99ffcc'   // 浅青绿
        };
        
        // 初始化CSS变量
        this.initializeCSSVariables();
        
        // 加载已保存的tier设置
        this.loadTierSettings();
    }
    
    /**
     * 初始化CSS变量，用于全局样式
     */
    initializeCSSVariables() {
        const style = document.documentElement.style;
        // 设置tier颜色变量
        Object.entries(this.predefinedColors).forEach(([tier, color]) => {
            style.setProperty(`--${tier.toLowerCase()}-tier-color`, color);
        });
    }
    
    /**
     * 加载tier设置
     */
    loadTierSettings() {
        try {
            // 尝试从localStorage加载tier设置
            const savedTiers = localStorage.getItem('tiermaker-tiers');
            if (savedTiers) {
                const parsedData = JSON.parse(savedTiers);
                
                // 处理不同的数据格式 - 可能是数组或包含 tiers 属性的对象
                if (Array.isArray(parsedData)) {
                    // 直接使用数组
                    this.tiers = parsedData;
                } else if (parsedData && typeof parsedData === 'object') {
                    // 从对象中提取 tiers 数组
                    if (parsedData.tiers && Array.isArray(parsedData.tiers)) {
                        this.tiers = parsedData.tiers;
                    } else {
                        // 如果不是有效格式，使用默认值
                        console.warn('tiermaker-tiers 数据格式无效，使用默认值');
                        this.tiers = [...this.defaultTiers];
                    }
                    
                    // 如果对象中包含 tierNames 和 tierLimits，也一并加载
                    if (parsedData.tierNames) {
                        this.tierNames = parsedData.tierNames;
                    }
                    if (parsedData.tierLimits) {
                        this.tierLimits = parsedData.tierLimits;
                    }
                } else {
                    // 无效数据，使用默认值
                    console.warn('tiermaker-tiers 数据格式无效，使用默认值');
                    this.tiers = [...this.defaultTiers];
                }
            }
            
            // 仍然尝试单独加载 tierNames 和 tierLimits
            // 如果上面已经加载了，这里就会被覆盖，确保兼容性
            const savedTierNames = localStorage.getItem('tiermaker-tier-names');
            if (savedTierNames) {
                this.tierNames = JSON.parse(savedTierNames);
            }
            
            const savedTierLimits = localStorage.getItem('tiermaker-tier-limits');
            if (savedTierLimits) {
                this.tierLimits = JSON.parse(savedTierLimits);
            }
            
            // 确保 tiers 始终是数组
            if (!Array.isArray(this.tiers)) {
                console.error('尝试修复后 tiers 仍然不是数组，强制重置为默认值');
                this.tiers = [...this.defaultTiers];
            }
        } catch (e) {
            console.error('加载tier设置失败', e);
            // 加载失败时重置为默认设置
            this.resetToDefault();
        }
    }
    
    /**
     * 保存tier设置
     */
    saveTierSettings() {
        try {
            // 安全检查：确保 this.tiers 是数组
            if (!Array.isArray(this.tiers)) {
                console.error('saveTierSettings: this.tiers 不是数组，强制修复');
                this.tiers = [...this.defaultTiers];
            }
            
            // 保存tier列表
            localStorage.setItem('tiermaker-tiers', JSON.stringify(this.tiers));
            
            // 保存tier名称
            localStorage.setItem('tiermaker-tier-names', JSON.stringify(this.tierNames));
            
            // 保存tier限制
            localStorage.setItem('tiermaker-tier-limits', JSON.stringify(this.tierLimits));
        } catch (e) {
            console.error('保存tier设置失败', e);
        }
    }
    
    /**
     * 重置为默认设置
     */
    resetToDefault() {
        this.tiers = [...this.defaultTiers];
        this.defaultTiers.forEach(tier => {
            this.tierLimits[tier] = null;
            this.tierNames[tier] = tier;
        });
        this.saveTierSettings();
    }
    
    /**
     * 获取所有tier列表
     * @return {Array} tier列表
     */
    getTiers() {
        // 安全检查：确保 this.tiers 是数组
        if (!Array.isArray(this.tiers)) {
            console.error('getTiers: this.tiers 不是数组，强制修复');
            this.tiers = [...this.defaultTiers];
        }
        return this.tiers;
    }
    
    /**
     * 获取tier名称
     * @param {string} tier - tier标识
     * @return {string} tier名称
     */
    getTierName(tier) {
        return this.tierNames[tier] || tier;
    }
    
    /**
     * 设置tier名称
     * @param {string} tier - tier标识
     * @param {string} name - 新名称
     */
    setTierName(tier, name) {
        // 安全检查：确保 this.tiers 是数组
        if (!Array.isArray(this.tiers)) {
            console.error('setTierName: this.tiers 不是数组，强制修复');
            this.tiers = [...this.defaultTiers];
        }
        
        if (!tier || !this.tiers.includes(tier)) return false;
        
        this.tierNames[tier] = name;
        this.saveTierSettings();
        return true;
    }
    
    /**
     * 获取tier限制
     * @param {string} tier - tier标识
     * @return {number|null} tier限制数量，如果未设置则为null
     */
    getTierLimit(tier) {
        return this.tierLimits[tier] || null;
    }
    
    /**
     * 设置tier限制
     * @param {string} tier - tier标识
     * @param {number|null} limit - 限制数量，null表示无限制
     */
    setTierLimit(tier, limit) {
        // 安全检查：确保 this.tiers 是数组
        if (!Array.isArray(this.tiers)) {
            console.error('setTierLimit: this.tiers 不是数组，强制修复');
            this.tiers = [...this.defaultTiers];
        }
        
        if (!tier || !this.tiers.includes(tier)) return false;
        
        if (limit === null || limit === undefined || limit === '') {
            delete this.tierLimits[tier];
        } else {
            this.tierLimits[tier] = parseInt(limit);
        }
        
        this.saveTierSettings();
        return true;
    }
    
    /**
     * 获取tier颜色，基于位置而不是名称
     * @param {string} tier - tier标识
     * @return {string} tier颜色代码
     */
    getTierColor(tier) {
        // 安全检查：确保 this.tiers 是数组
        if (!Array.isArray(this.tiers)) {
            console.error('getTierColor: this.tiers 不是数组，强制修复');
            this.tiers = [...this.defaultTiers];
        }
        
        const index = this.tiers.indexOf(tier);
        if (index === -1) return '#CCCCCC';
        
        // 根据位置获取颜色，而不是直接用tier名称
        const colorTier = this.defaultTiers[index] || this.tierLetters[index];
        return this.predefinedColors[colorTier] || '#CCCCCC';
    }
    
    /**
     * 获取当前所有tier的颜色
     * @return {Object} tier颜色映射
     */
    getCurrentTierColors() {
        // 安全检查：确保 this.tiers 是数组
        if (!Array.isArray(this.tiers)) {
            console.error('getCurrentTierColors: this.tiers 不是数组，强制修复');
            this.tiers = [...this.defaultTiers];
        }
        
        const colors = {};
        this.tiers.forEach((tier, index) => {
            const colorTier = this.defaultTiers[index] || this.tierLetters[index];
            colors[tier] = this.predefinedColors[colorTier] || '#CCCCCC';
        });
        return colors;
    }
    
    /**
     * 检查添加项目到tier是否会超出限制
     * @param {string} tier - tier标识
     * @param {number} currentItemCount - 当前项目数量
     * @return {boolean} 是否已达到限制
     */
    isAtLimit(tier, currentItemCount) {
        const limit = this.getTierLimit(tier);
        if (limit === null) return false; // 没有限制
        return currentItemCount >= limit;
    }
    
    /**
     * 添加新tier
     * @return {boolean} 是否添加成功
     */
    addTier() {
        // 安全检查：确保 this.tiers 是数组
        if (!Array.isArray(this.tiers)) {
            console.error('addTier: this.tiers 不是数组，强制修复');
            this.tiers = [...this.defaultTiers];
        }
        
        if (this.tiers.length >= this.maxTiers) {
            console.warn('达到最大tier数量限制');
            return false;
        }
        
        // 查找下一个按顺序的字母（不在当前tiers中的）
        const standardTierOrder = ['S', 'A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
        
        let nextTier = null;
        for (const letter of standardTierOrder) {
            if (!this.tiers.includes(letter)) {
                nextTier = letter;
                break;
            }
        }
        
        // 如果标准序列中没找到，则使用其他字母
        if (!nextTier) {
            for (const letter of this.tierLetters) {
                if (!this.tiers.includes(letter) && !standardTierOrder.includes(letter)) {
                    nextTier = letter;
                    break;
                }
            }
        }
        
        // 如果还是没有可用的标识，则尝试使用数字
        if (!nextTier) {
            for (let i = 1; i <= 99; i++) {
                if (!this.tiers.includes(i.toString())) {
                    nextTier = i.toString();
                    break;
                }
            }
        }
        
        // 如果还是没有可用的标识，则返回失败
        if (!nextTier) {
            return false;
        }
        
        // 添加到tier列表
        this.tiers.push(nextTier);
        this.tierLimits[nextTier] = null;
        this.tierNames[nextTier] = nextTier;
        
        // 保存更改
        this.saveTierSettings();
        
        return true;
    }
    
    /**
     * 添加特定的tier（如果可用）
     * @param {string} tierLetter - 要添加的tier标识
     * @return {boolean} 是否添加成功
     */
    addSpecificTier(tierLetter) {
        if (this.tiers.length >= this.maxTiers) {
            console.warn('达到最大tier数量限制');
            return false;
        }

        if (this.tiers.includes(tierLetter)) {
            console.warn('Tier已存在');
            return false;
        }

        this.tiers.push(tierLetter);
        this.tierLimits[tierLetter] = null;
        this.tierNames[tierLetter] = tierLetter;
        
        // 保存更改
        this.saveTierSettings();
        
        return true;
    }
    
    /**
     * 移除指定tier
     * @param {string} tier - 要移除的tier标识
     * @return {boolean} 是否移除成功
     */
    removeTier(tier) {
        if (!tier || !this.tiers.includes(tier)) return false;
        
        // 从tier列表中移除
        this.tiers = this.tiers.filter(t => t !== tier);
        
        // 保存更改
        this.saveTierSettings();
        
        return true;
    }
    
    /**
     * 重新排序tier
     * @param {number} oldIndex - 原位置
     * @param {number} newIndex - 新位置
     * @return {boolean} 是否排序成功
     */
    reorderTier(oldIndex, newIndex) {
        if (typeof oldIndex === 'string') {
            // 如果传入的是tier而不是索引，则转换
            oldIndex = this.tiers.indexOf(oldIndex);
        }
        
        if (oldIndex < 0 || oldIndex >= this.tiers.length || 
            newIndex < 0 || newIndex >= this.tiers.length) {
            return false;
        }

        const tier = this.tiers[oldIndex];
        this.tiers.splice(oldIndex, 1);
        this.tiers.splice(newIndex, 0, tier);
        
        // 保存变更
        this.saveTierSettings();
        
        return true;
    }
    
    /**
     * 使用新的tier数组完全替换当前tier顺序
     * @param {Array} newTiers - 新的tier数组
     * @return {boolean} 是否成功
     */
    reorderTiers(newTiers) {
        // 验证newTiers中的所有tier都是有效的
        const validTiers = newTiers.filter(tier => this.tierLetters.includes(tier) || /^\d+$/.test(tier));
        
        // 如果有效tier数量与提供的不同，可能存在无效数据
        if (validTiers.length !== newTiers.length) {
            console.warn('部分tier无效，已被过滤');
        }
        
        // 替换当前tier列表
        this.tiers = validTiers;
        
        // 保存更改
        this.saveTierSettings();
        
        return validTiers.length > 0;
    }
    
    /**
     * 生成随机颜色
     * @return {string} 颜色代码
     */
    generateRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        
        // 生成亮色系
        for (let i = 0; i < 3; i++) {
            // 使用128-255范围的颜色值确保颜色较亮
            const value = Math.floor(Math.random() * 128) + 128;
            color += value.toString(16).padStart(2, '0');
        }
        
        return color;
    }
}

// 创建全局tierManager实例
const tierManager = new TierManager();

// 提供保存设置的全局方法
function saveTierSettings() {
    tierManager.saveTierSettings();
}

// 导出
export { tierManager, saveTierSettings };
export default tierManager; 