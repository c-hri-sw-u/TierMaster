/**
 * 国际化(i18n)模块 - 处理多语言支持
 */
class I18n {
    constructor() {
        // 默认语言
        this.defaultLang = 'en';
        
        // 翻译映射
        this.translations = {
            'en': {
                // 通用
                'mainTitle': 'TierMaster',
                'itemsTitle': 'Items',
                'loading': 'Loading...',
                'noTitle': 'No Title',
                'ok': 'OK',
                'cancel': 'Cancel',
                'confirm': 'Confirm',
                'delete': 'Delete',
                'save': 'OK',
                'edit': 'Edit',
                'clear': 'Clear',
                'copy': 'Copy',
                'skip': 'Skip',
                'next': 'Next',
                'share': 'Share',
                'settings': 'Settings',
                'upload': 'Upload',
                'download': 'Download',
                'reset': 'Reset',
                'add': 'Add',
                'remove': 'Remove',
                'close': 'Close',
                'move': 'Move',
                'tier': 'Tier',
                'tierLevel': 'Level',
                'items': 'Items',
                'title': 'Title',
                'access': 'Access',
                'imageRatio': 'Image Ratio',
                'selectedItems': 'Selected Items',
                'tierLimitReached': 'Tier limit reached',
                'errorItemNotFound': 'Item not found',
                'imageLoadError': 'Error loading image',
                'itemNotExist': 'Item does not exist',
                'buyCoffee': 'Buy Me a Coffee',
                
                // 下载功能
                'preparingDownload': 'Preparing download...',
                'processingImages': 'Processing images',
                'generatingZip': 'Generating ZIP file',
                'downloadComplete': 'Download complete',
                'downloadError': 'Download error',
                'noItemsToDownload': 'No items to download. All items have been skipped.',
                'exportedItems': 'Exported Items',
                'itemsExported': 'Items exported',
                
                // 特定功能
                'chooseFiles': 'Choose Files',
                'enterText': 'Enter Text',
                'clearItems': 'Clear Items',
                'generateCards': 'Generate',
                'shareTitle': 'Share Your Tier List',
                'shareLinkDesc': 'Copy the link below to share your tier list:',
                'shareOrDownload': 'Share or Download',
                'downloadImage': 'Download as Image',
                'shareLink': 'Share Link',
                'itemsCleared': 'All items have been cleared',
                'cardsCreated': '{count} cards created',
                'createdCards': '{count} cards created',
                'allItemsClassified': 'All items have been classified',
                'completed': 'Completed',
                'confirmDeleteTier': 'Are you sure you want to delete tier {tier}? All items in this tier will be moved to unclassified.',
                'confirmResetTiers': 'Are you sure you want to reset all tiers to default? This will move all classified items back to unclassified.',
                'createItemsFromText': 'Create Items From Text',
                'textInputGuide': 'Enter each item on a new line. Empty lines will be ignored.',
                'contact': 'Contact',
                'yourList': 'Your List',
                'totalVotes': 'Total Votes',
                'voteSummary': 'Vote Summary',
                'basicSettings': 'Basic Settings',
                'tierManagement': 'Tier Management',
                'itemsManagement': 'Items Management',
                
                // 设置
                'settingsTitle': 'Settings',
                'titleSetting': 'Title',
                'titlePlaceholder': 'Enter your tier list title',
                'accessSetting': 'Access',
                'accessPublic': 'Public',
                'accessPrivate': 'Private',
                'imageSetting': 'Image Ratio',
                'imagePortrait': 'Portrait',
                'imageSquare': 'Square',
                'imageLandscape': 'Landscape',
                'imageRound': 'Round',
                'tierSettings': 'Tier Settings',
                'tierName': 'Name',
                'tierLimit': 'Limit',
                'addTier': 'Add Tier',
                'resetTiers': 'Reset Tiers',
                'yourName': 'Your Name',
                'createdBy': 'Created by {name}',
                
                // 错误
                'error': 'Error',
                'errorOccurred': 'An error occurred',
                'fileError': 'Error processing file',
                'storageError': 'Storage quota exceeded',
                'reset_confirm': 'Are you sure you want to reset all classifications? This will move all items back to the unclassified area and clear all skipped statuses.',
                // 重置确认弹窗
                'resetConfirmTitle': 'Confirm Reset',
                'resetConfirmMessage': 'Are you sure you want to reset all classifications? This will move all items back to the unclassified area and clear all skipped statuses.',
                'confirmReset': 'Confirm Reset',
                'resetSuccess': 'Reset successful',
                
                // 分享功能
                'downloadAsImage': 'Download as Image',
                'shareToSocial': 'Share to social media',
                'copied': 'Copied!',
                'preparingShare': 'Preparing to share...',
                'previewLoading': 'Loading preview...',
                'previewGenerating': 'Generating preview...',
                'wechatScan': 'Scan with WeChat',
                'wechatShareTip': 'Open WeChat and scan this QR code to share',
                'downloadSuccess': 'Image downloaded successfully',
                'comments': 'Comments',
                'writeComment': 'Write a comment...',
                'selectItemFirst': 'Select an item to comment',
                'noComments': 'No comments yet',
                'editComment': 'Double click to edit',
            },
            'zh': {
                // 通用
                'mainTitle': 'TierMaster',
                'itemsTitle': '项目',
                'loading': '加载中...',
                'noTitle': '无标题',
                'ok': '确定',
                'cancel': '取消',
                'confirm': '确认',
                'delete': '删除',
                'save': '好的',
                'edit': '编辑',
                'clear': '清空',
                'copy': '复制',
                'skip': '跳过',
                'next': '下一个',
                'share': '分享',
                'settings': '设置',
                'upload': '上传',
                'download': '下载',
                'reset': '重置',
                'add': '添加',
                'remove': '移除',
                'close': '关闭',
                'move': '移动',
                'tier': '级别',
                'tierLevel': '级',
                'items': '项目',
                'title': '标题',
                'access': '访问权限',
                'imageRatio': '图片比例',
                'selectedItems': '已选项目',
                'tierLimitReached': '已达上限',
                'errorItemNotFound': '找不到项目',
                'imageLoadError': '图片加载错误',
                'itemNotExist': '项目不存在',
                'buyCoffee': '请我喝咖啡',
                
                // 下载功能
                'preparingDownload': '准备下载...',
                'processingImages': '处理图片中',
                'generatingZip': '生成压缩文件中',
                'downloadComplete': '下载完成',
                'downloadError': '下载失败',
                'noItemsToDownload': '没有项目可下载，所有项目都已被跳过。',
                'exportedItems': '导出的项目',
                'itemsExported': '导出项目数量',
                
                // 特定功能
                'chooseFiles': '选择文件',
                'enterText': '输入文本',
                'clearItems': '清空项目',
                'generateCards': '生成卡片',
                'shareTitle': '分享你的Tier列表',
                'shareLinkDesc': '复制以下链接分享你的Tier列表：',
                'shareOrDownload': '分享或下载',
                'downloadImage': '下载为图片',
                'shareLink': '分享链接',
                'itemsCleared': '所有项目已清空',
                'cardsCreated': '已创建{count}个卡片',
                'createdCards': '已创建{count}个卡片',
                'allItemsClassified': '所有的项目已分类',
                'completed': '已完成',
                'confirmDeleteTier': '确定要删除Tier {tier}吗？此Tier中的所有项目将被移回未分类。',
                'confirmResetTiers': '确定要重置所有Tier为默认值吗？所有已分类的项目将被移回未分类。',
                'createItemsFromText': '从文本创建项目',
                'textInputGuide': '每行输入一个项目，空行将被忽略。',
                'contact': '联系我们',
                'yourList': '你的列表',
                'totalVotes': '总投票数',
                'voteSummary': '投票摘要',
                'basicSettings': '基础设置',
                'tierManagement': 'Tier管理',
                'itemsManagement': '项目管理',
                
                // 设置
                'settingsTitle': '设置',
                'titleSetting': '标题',
                'titlePlaceholder': '输入你的tier列表标题',
                'accessSetting': '访问权限',
                'accessPublic': '公开',
                'accessPrivate': '私有',
                'imageSetting': '图片比例',
                'imagePortrait': '纵向',
                'imageSquare': '方形',
                'imageLandscape': '横向',
                'imageRound': '圆形',
                'tierSettings': 'Tier设置',
                'tierName': '名称',
                'tierLimit': '限制',
                'addTier': '添加Tier',
                'resetTiers': '重置Tier',
                'yourName': '您的名字',
                'createdBy': '由 {name} 创建',
                
                // 错误
                'error': '错误',
                'errorOccurred': '发生错误',
                'fileError': '处理文件时出错',
                'storageError': '存储空间不足',
                'reset_confirm': '确定要重置所有分类吗？这将把所有项目移回未分类区域并清除所有已跳过状态。',
                // 重置确认弹窗
                'resetConfirmTitle': '确认重置',
                'resetConfirmMessage': '您确定要重置所有分类吗？这将会把所有项目移回未分类区域并清除所有跳过状态。',
                'confirmReset': '确认重置',
                'resetSuccess': '重置成功',
                
                // 分享功能
                'downloadAsImage': '下载为图片',
                'shareToSocial': '分享到社交媒体',
                'copied': '已复制!',
                'preparingShare': '准备分享中...',
                'previewLoading': '加载预览中...',
                'previewGenerating': '生成预览中...',
                'wechatScan': '使用微信扫描',
                'wechatShareTip': '打开微信扫描二维码分享',
                'downloadSuccess': '图片下载成功',
                'comments': '评论',
                'writeComment': '写评论...',
                'selectItemFirst': '请先选择一个项目',
                'noComments': '暂无评论',
                'editComment': '双击编辑',
            },
            'ja': {
                // 通用
                'mainTitle': 'TierMaster',
                'itemsTitle': 'アイテム',
                'loading': '読み込み中...',
                'noTitle': 'タイトルなし',
                'ok': '確認',
                'cancel': 'キャンセル',
                'confirm': '確認',
                'delete': '削除',
                'save': 'OKです',
                'edit': '編集',
                'clear': 'クリア',
                'copy': 'コピー',
                'skip': 'スキップ',
                'next': '次へ',
                'share': '共有',
                'settings': '設定',
                'upload': 'アップロード',
                'download': 'ダウンロード',
                'reset': 'リセット',
                'add': '追加',
                'remove': '削除',
                'close': '閉じる',
                'move': '移動',
                'tier': 'ランク',
                'tierLevel': 'レベル',
                'items': 'アイテム',
                'title': 'タイトル',
                'access': 'アクセス',
                'imageRatio': '画像比率',
                'selectedItems': '選択されたアイテム',
                'tierLimitReached': 'ランク制限に達しました',
                'errorItemNotFound': 'アイテムが見つかりません',
                'imageLoadError': '画像の読み込みエラー',
                'itemNotExist': 'アイテムが存在しません',
                'buyCoffee': 'コーヒーを奢る',
                
                // 特定機能
                'chooseFiles': 'ファイルを選択',
                'enterText': 'テキストを入力',
                'clearItems': 'アイテムをクリア',
                'generateCards': '生成',
                'shareTitle': 'ランキングを共有',
                'shareLinkDesc': '以下のリンクを共有してください：',
                'shareOrDownload': '共有またはダウンロード',
                'downloadImage': '画像としてダウンロード',
                'shareLink': 'リンクを共有',
                'itemsCleared': 'すべてのアイテムがクリアされました',
                'cardsCreated': '{count}枚のカードが作成されました',
                'createdCards': '{count}枚のカードが作成されました',
                'allItemsClassified': 'すべてのアイテムが分類されました',
                'completed': '完了',
                'confirmDeleteTier': 'ランク {tier} を削除してもよろしいですか？このランクのすべてのアイテムは未分類に移動されます。',
                'confirmResetTiers': 'すべてのランクをデフォルトにリセットしてもよろしいですか？分類されたすべてのアイテムは未分類に戻ります。',
                'createItemsFromText': 'テキストからアイテムを作成',
                'textInputGuide': '各行に1つのアイテムを入力してください。空行は無視されます。',
                'contact': 'お問い合わせ',
                'yourList': 'あなたのリスト',
                'totalVotes': '総投票数',
                'voteSummary': '投票の概要',
                'basicSettings': '基本設定',
                'tierManagement': 'ランク管理',
                'itemsManagement': 'アイテム管理',
                
                // 設定
                'settingsTitle': '設定',
                'titleSetting': 'タイトル',
                'titlePlaceholder': 'ランキングのタイトルを入力',
                'accessSetting': 'アクセス',
                'accessPublic': '公開',
                'accessPrivate': '非公開',
                'imageSetting': '画像比率',
                'imagePortrait': '縦長',
                'imageSquare': '正方形',
                'imageLandscape': '横長',
                'imageRound': '円形',
                'tierSettings': 'ランク設定',
                'tierName': '名前',
                'tierLimit': '制限',
                'addTier': 'ランクを追加',
                'resetTiers': 'ランクをリセット',
                'yourName': 'Your Name',
                'createdBy': 'Created by {name}',
                
                // エラー
                'error': 'エラー',
                'errorOccurred': 'エラーが発生しました',
                'fileError': 'ファイル処理エラー',
                'storageError': 'ストレージ容量超過',
                'reset_confirm': '本当にすべての分類をリセットしますか？これにより、すべてのアイテムが未分類エリアに戻り、スキップ状態がクリアされます。',
                
                // 分享功能
                'downloadAsImage': '画像としてダウンロード',
                'shareToSocial': 'SNSでシェア',
                'copied': 'コピーしました!',
                'preparingShare': 'シェアの準備中...',
                'previewLoading': 'プレビューを読み込み中...',
                'previewGenerating': 'プレビューを生成中...',
                'wechatScan': 'WeChatでスキャン',
                'wechatShareTip': 'WeChatを開いてQRコードをスキャンしてシェア',
                'downloadSuccess': '画像のダウンロードに成功しました',
                'comments': '评论',
                'writeComment': '写评论...',
                'selectItemFirst': '请先选择一个项目',
                'noComments': '暂无评论',
                'editComment': '双击编辑',
            },
            'ko': {
                // 통용
                'mainTitle': 'TierMaster',
                'itemsTitle': '아이템',
                'loading': '로딩 중...',
                'noTitle': '제목 없음',
                'ok': '확인',
                'cancel': '취소',
                'confirm': '확인',
                'delete': '삭제',
                'save': '저장',
                'edit': '편집',
                'clear': '지우기',
                'copy': '복사',
                'skip': '건너뛰기',
                'next': '다음',
                'share': '공유',
                'settings': '설정',
                'upload': '업로드',
                'download': '다운로드',
                'reset': '재설정',
                'add': '추가',
                'remove': '제거',
                'close': '닫기',
                'move': '이동',
                'tier': '등급',
                'tierLevel': '레벨',
                'items': '아이템',
                'title': '제목',
                'access': '접근 권한',
                'imageRatio': '이미지 비율',
                'selectedItems': '선택된 아이템',
                'tierLimitReached': '등급 제한에 도달함',
                'errorItemNotFound': '아이템을 찾을 수 없음',
                'imageLoadError': '이미지 로드 오류',
                'itemNotExist': '아이템이 존재하지 않음',
                'buyCoffee': '커피 사주기',
                
                // 특정 기능
                'chooseFiles': '파일 선택',
                'enterText': '텍스트 입력',
                'clearItems': '아이템 지우기',
                'generateCards': '생성',
                'shareTitle': '등급 목록 공유',
                'shareLinkDesc': '아래 링크를 복사하여 공유하세요:',
                'shareOrDownload': '공유 또는 다운로드',
                'downloadImage': '이미지로 다운로드',
                'shareLink': '링크 공유',
                'itemsCleared': '모든 아이템이 지워졌습니다',
                'cardsCreated': '{count}개의 카드가 생성되었습니다',
                'createdCards': '{count}개의 카드가 생성되었습니다',
                'allItemsClassified': '모든 아이템이 분류되었습니다',
                'completed': '완료됨',
                'confirmDeleteTier': '정말로 등급 {tier}을(를) 삭제하시겠습니까? 이 등급의 모든 아이템은 미분류로 이동됩니다.',
                'confirmResetTiers': '모든 등급을 기본값으로 초기화하시겠습니까? 분류된 모든 아이템은 미분류로 돌아갑니다.',
                'createItemsFromText': '텍스트에서 아이템 생성',
                'textInputGuide': '각 줄에 하나의 아이템을 입력하세요. 빈 줄은 무시됩니다.',
                'contact': '문의하기',
                'yourList': '나의 목록',
                'totalVotes': '총 투표수',
                'voteSummary': '투표 요약',
                'basicSettings': '기본 설정',
                'tierManagement': '등급 관리',
                'itemsManagement': '아이템 관리',
                
                // 설정
                'settingsTitle': '설정',
                'titleSetting': '제목',
                'titlePlaceholder': '등급 목록 제목 입력',
                'accessSetting': '접근 권한',
                'accessPublic': '공개',
                'accessPrivate': '비공개',
                'imageSetting': '이미지 비율',
                'imagePortrait': '세로형',
                'imageSquare': '정사각형',
                'imageLandscape': '가로형',
                'imageRound': '원형',
                'tierSettings': '등급 설정',
                'tierName': '이름',
                'tierLimit': '제한',
                'addTier': '등급 추가',
                'resetTiers': '등급 초기화',
                'yourName': 'Your Name',
                'createdBy': 'Created by {name}',
                
                // 오류
                'error': '오류',
                'errorOccurred': '오류가 발생했습니다',
                'fileError': '파일 처리 오류',
                'storageError': '저장 공간 부족',
                'reset_confirm': '모든 분류를 재설정하시겠습니까? 이렇게 하면 모든 항목이 미분류 영역으로 이동하고 건너뛴 상태가 모두 지워집니다.',
                
                // 분석 기능
                'downloadAsImage': '이미지로 다운로드',
                'shareToSocial': '소셜 미디어에 공유',
                'copied': '복사됨!',
                'preparingShare': '공유 준비 중...',
                'previewLoading': '미리보기 로딩 중...',
                'previewGenerating': '미리보기 생성 중...',
                'wechatScan': 'WeChat으로 스캔',
                'wechatShareTip': 'WeChat을 열고 QR 코드를 스캔하여 공유',
                'downloadSuccess': '이미지 다운로드 성공',
                'comments': '评论',
                'writeComment': '写评论...',
                'selectItemFirst': '请先选择一个项目',
                'noComments': '暂无评论',
                'editComment': '双击编辑',
            },
            'es': {
                // General
                'mainTitle': 'TierMaster',
                'itemsTitle': 'Elementos',
                'loading': 'Cargando...',
                'noTitle': 'Sin título',
                'ok': 'Aceptar',
                'cancel': 'Cancelar',
                'confirm': 'Confirmar',
                'delete': 'Eliminar',
                'save': 'Guardar',
                'edit': 'Editar',
                'clear': 'Limpiar',
                'copy': 'Copiar',
                'skip': 'Omitir',
                'next': 'Siguiente',
                'share': 'Compartir',
                'settings': 'Configuración',
                'upload': 'Subir',
                'download': 'Descargar',
                'reset': 'Reiniciar',
                'add': 'Añadir',
                'remove': 'Eliminar',
                'close': 'Cerrar',
                'move': 'Mover',
                'tier': 'Nivel',
                'tierLevel': 'Nivel',
                'items': 'Elementos',
                'title': 'Título',
                'access': 'Acceso',
                'imageRatio': 'Proporción de imagen',
                'selectedItems': 'Elementos seleccionados',
                'tierLimitReached': 'Límite de nivel alcanzado',
                'errorItemNotFound': 'Elemento no encontrado',
                'imageLoadError': 'Error al cargar la imagen',
                'itemNotExist': 'El elemento no existe',
                'buyCoffee': 'Invítame a un café',
                
                // Funciones específicas
                'chooseFiles': 'Elegir archivos',
                'enterText': 'Introducir texto',
                'clearItems': 'Limpiar elementos',
                'generateCards': 'Generar',
                'shareTitle': 'Compartir tu lista de niveles',
                'shareLinkDesc': 'Copia el siguiente enlace para compartir tu lista:',
                'shareOrDownload': 'Compartir o descargar',
                'downloadImage': 'Descargar como imagen',
                'shareLink': 'Compartir enlace',
                'itemsCleared': 'Todos los elementos han sido borrados',
                'cardsCreated': '{count} tarjetas creadas',
                'createdCards': '{count} tarjetas creadas',
                'allItemsClassified': 'Todos los elementos han sido clasificados',
                'completed': 'Completado',
                'confirmDeleteTier': '¿Estás seguro de que quieres eliminar el nivel {tier}? Todos los elementos de este nivel volverán a no clasificados.',
                'confirmResetTiers': '¿Estás seguro de que quieres restablecer todos los niveles? Todos los elementos clasificados volverán a no clasificados.',
                'createItemsFromText': 'Crear elementos desde texto',
                'textInputGuide': 'Introduce cada elemento en una nueva línea. Las líneas vacías serán ignoradas.',
                'contact': 'Contacto',
                'yourList': 'Tu lista',
                'totalVotes': 'Votos totales',
                'voteSummary': 'Resumen de votos',
                'basicSettings': 'Configuración básica',
                'tierManagement': 'Gestión de niveles',
                'itemsManagement': 'Gestión de elementos',
                
                // Configuración
                'settingsTitle': 'Configuración',
                'titleSetting': 'Título',
                'titlePlaceholder': 'Introduce el título de tu lista',
                'accessSetting': 'Acceso',
                'accessPublic': 'Público',
                'accessPrivate': 'Privado',
                'imageSetting': 'Proporción de imagen',
                'imagePortrait': 'Vertical',
                'imageSquare': 'Cuadrada',
                'imageLandscape': 'Horizontal',
                'imageRound': 'Redonda',
                'tierSettings': 'Configuración de niveles',
                'tierName': 'Nombre',
                'tierLimit': 'Límite',
                'addTier': 'Añadir nivel',
                'resetTiers': 'Restablecer niveles',
                'yourName': 'Your Name',
                'createdBy': 'Created by {name}',
                
                // Errores
                'error': 'Error',
                'errorOccurred': 'Ha ocurrido un error',
                'fileError': 'Error al procesar el archivo',
                'storageError': 'Cuota de almacenamiento excedida',
                'reset_confirm': '¿Estás seguro de que quieres reiniciar todas las clasificaciones? Esto moverá todos los elementos de vuelta al área sin clasificar y borrará todos los estados omitidos.',
                
                // Funciones de compartir
                'downloadAsImage': 'Descargar como imagen',
                'shareToSocial': 'Compartir en redes sociales',
                'copied': '¡Copiado!',
                'preparingShare': 'Preparando para compartir...',
                'previewLoading': 'Cargando vista previa...',
                'previewGenerating': 'Generando vista previa...',
                'wechatScan': 'Escanear con WeChat',
                'wechatShareTip': 'Abra WeChat y escanee este código QR para compartir',
                'downloadSuccess': 'Imagen descargada con éxito',
                'comments': '评论',
                'writeComment': '写评论...',
                'selectItemFirst': '请先选择一个项目',
                'noComments': '暂无评论',
                'editComment': '双击编辑',
            },
            'fr': {
                // Général
                'mainTitle': 'TierMaster',
                'itemsTitle': 'Éléments',
                'loading': 'Chargement...',
                'noTitle': 'Sans titre',
                'ok': 'OK',
                'cancel': 'Annuler',
                'confirm': 'Confirmer',
                'delete': 'Supprimer',
                'save': 'OK',
                'edit': 'Modifier',
                'clear': 'Effacer',
                'copy': 'Copier',
                'skip': 'Passer',
                'next': 'Suivant',
                'share': 'Partager',
                'settings': 'Paramètres',
                'upload': 'Télécharger',
                'download': 'Télécharger',
                'reset': 'Réinitialiser',
                'add': 'Ajouter',
                'remove': 'Supprimer',
                'close': 'Fermer',
                'move': 'Déplacer',
                'tier': 'Niveau',
                'tierLevel': 'Niveau',
                'items': 'Éléments',
                'title': 'Titre',
                'access': 'Accès',
                'imageRatio': 'Format d\'image',
                'selectedItems': 'Éléments sélectionnés',
                'tierLimitReached': 'Limite de niveau atteinte',
                'errorItemNotFound': 'Élément non trouvé',
                'imageLoadError': 'Erreur de chargement d\'image',
                'itemNotExist': 'L\'élément n\'existe pas',
                'buyCoffee': 'Offrez-moi un café',
                
                // Fonctionnalités spécifiques
                'chooseFiles': 'Choisir des fichiers',
                'enterText': 'Saisir du texte',
                'clearItems': 'Effacer les éléments',
                'generateCards': 'Générer',
                'shareTitle': 'Partagez votre liste',
                'shareLinkDesc': 'Copiez le lien ci-dessous pour partager votre liste:',
                'shareOrDownload': 'Partager ou télécharger',
                'downloadImage': 'Télécharger comme image',
                'shareLink': 'Partager le lien',
                'itemsCleared': 'Tous les éléments ont été effacés',
                'cardsCreated': '{count} cartes créées',
                'createdCards': '{count} cartes créées',
                'allItemsClassified': 'Tous les éléments ont été classés',
                'completed': 'Terminé',
                'confirmDeleteTier': 'Êtes-vous sûr de vouloir supprimer le niveau {tier}? Tous les éléments de ce niveau seront déplacés vers non classés.',
                'confirmResetTiers': 'Êtes-vous sûr de vouloir réinitialiser tous les niveaux? Tous les éléments classés reviendront à non classés.',
                'createItemsFromText': 'Créer des éléments à partir de texte',
                'textInputGuide': 'Entrez chaque élément sur une nouvelle ligne. Les lignes vides seront ignorées.',
                'contact': 'Contact',
                'yourList': 'Votre liste',
                'totalVotes': 'Total des votes',
                'voteSummary': 'Résumé des votes',
                'basicSettings': 'Paramètres de base',
                'tierManagement': 'Gestion des niveaux',
                'itemsManagement': 'Gestion des éléments',
                
                // Paramètres
                'settingsTitle': 'Paramètres',
                'titleSetting': 'Titre',
                'titlePlaceholder': 'Entrez le titre de votre liste',
                'accessSetting': 'Accès',
                'accessPublic': 'Public',
                'accessPrivate': 'Privé',
                'imageSetting': 'Format d\'image',
                'imagePortrait': 'Portrait',
                'imageSquare': 'Carré',
                'imageLandscape': 'Paysage',
                'imageRound': 'Rond',
                'tierSettings': 'Paramètres de niveau',
                'tierName': 'Nom',
                'tierLimit': 'Limite',
                'addTier': 'Ajouter un niveau',
                'resetTiers': 'Réinitialiser les niveaux',
                'yourName': 'Your Name',
                'createdBy': 'Created by {name}',
                
                // Erreurs
                'error': 'Erreur',
                'errorOccurred': 'Une erreur s\'est produite',
                'fileError': 'Erreur lors du traitement du fichier',
                'storageError': 'Quota de stockage dépassé',
                'reset_confirm': 'Êtes-vous sûr de vouloir réinitialiser toutes les classifications ? Cela déplacera tous les éléments vers la zone non classée et effacera tous les statuts ignorés.',
                
                // Fonctions de partage
                'downloadAsImage': 'Télécharger comme image',
                'shareToSocial': 'Partager sur les réseaux sociaux',
                'copied': 'Copié!',
                'preparingShare': 'Préparation du partage...',
                'previewLoading': 'Chargement de l\'aperçu...',
                'previewGenerating': 'Génération de l\'aperçu...',
                'wechatScan': 'Scanner avec WeChat',
                'wechatShareTip': 'Ouvrez WeChat et scannez ce QR code pour partager',
                'downloadSuccess': 'Image téléchargée avec succès',
                'comments': '评论',
                'writeComment': '写评论...',
                'selectItemFirst': '请先选择一个项目',
                'noComments': '暂无评论',
                'editComment': '双击编辑',
            },
            'de': {
                // Allgemein
                'mainTitle': 'TierMaster',
                'itemsTitle': 'Elemente',
                'loading': 'Wird geladen...',
                'noTitle': 'Kein Titel',
                'ok': 'OK',
                'cancel': 'Abbrechen',
                'confirm': 'Bestätigen',
                'delete': 'Löschen',
                'save': 'In Ordnung',
                'edit': 'Bearbeiten',
                'clear': 'Löschen',
                'copy': 'Kopieren',
                'skip': 'Überspringen',
                'next': 'Weiter',
                'share': 'Teilen',
                'settings': 'Einstellungen',
                'upload': 'Hochladen',
                'download': 'Herunterladen',
                'reset': 'Zurücksetzen',
                'add': 'Hinzufügen',
                'remove': 'Entfernen',
                'close': 'Schließen',
                'move': 'Verschieben',
                'tier': 'Stufe',
                'tierLevel': 'Level',
                'items': 'Elemente',
                'title': 'Titel',
                'access': 'Zugriff',
                'imageRatio': 'Bildformat',
                'selectedItems': 'Ausgewählte Elemente',
                'tierLimitReached': 'Stufenlimit erreicht',
                'errorItemNotFound': 'Element nicht gefunden',
                'imageLoadError': 'Fehler beim Laden des Bildes',
                'itemNotExist': 'Element existiert nicht',
                'buyCoffee': 'Spendier mir einen Kaffee',
                
                // Spezifische Funktionen
                'chooseFiles': 'Dateien auswählen',
                'enterText': 'Text eingeben',
                'clearItems': 'Elemente löschen',
                'generateCards': 'Generieren',
                'shareTitle': 'Teile deine Tier-Liste',
                'shareLinkDesc': 'Kopiere den Link unten, um deine Liste zu teilen:',
                'shareOrDownload': 'Teilen oder Herunterladen',
                'downloadImage': 'Als Bild herunterladen',
                'shareLink': 'Link teilen',
                'itemsCleared': 'Alle Elemente wurden gelöscht',
                'cardsCreated': '{count} Karten erstellt',
                'createdCards': '{count} Karten erstellt',
                'allItemsClassified': 'Alle Elemente wurden klassifiziert',
                'completed': 'Abgeschlossen',
                'confirmDeleteTier': 'Bist du sicher, dass du die Stufe {tier} löschen möchtest? Alle Elemente in dieser Stufe werden zu unklassifiziert verschoben.',
                'confirmResetTiers': 'Bist du sicher, dass du alle Stufen zurücksetzen möchtest? Alle klassifizierten Elemente werden zu unklassifiziert zurückgesetzt.',
                'createItemsFromText': 'Elemente aus Text erstellen',
                'textInputGuide': 'Gib jedes Element in einer neuen Zeile ein. Leere Zeilen werden ignoriert.',
                'contact': 'Kontakt',
                'yourList': 'Deine Liste',
                'totalVotes': 'Gesamtstimmen',
                'voteSummary': 'Abstimmungszusammenfassung',
                'basicSettings': 'Grundeinstellungen',
                'tierManagement': 'Stufenverwaltung',
                'itemsManagement': 'Elementverwaltung',
                
                // Einstellungen
                'settingsTitle': 'Einstellungen',
                'titleSetting': 'Titel',
                'titlePlaceholder': 'Gib den Titel deiner Liste ein',
                'accessSetting': 'Zugriff',
                'accessPublic': 'Öffentlich',
                'accessPrivate': 'Privat',
                'imageSetting': 'Bildformat',
                'imagePortrait': 'Hochformat',
                'imageSquare': 'Quadratisch',
                'imageLandscape': 'Querformat',
                'imageRound': 'Rund',
                'tierSettings': 'Stufeneinstellungen',
                'tierName': 'Name',
                'tierLimit': 'Limit',
                'addTier': 'Stufe hinzufügen',
                'resetTiers': 'Stufen zurücksetzen',
                'yourName': 'Your Name',
                'createdBy': 'Created by {name}',
                
                // Fehler
                'error': 'Fehler',
                'errorOccurred': 'Ein Fehler ist aufgetreten',
                'fileError': 'Fehler bei der Dateiverarbeitung',
                'storageError': 'Speicherplatzkontingent überschritten',
                'reset_confirm': 'Sind Sie sicher, dass Sie alle Klassifikationen zurücksetzen möchten? Dadurch werden alle Elemente in den nicht klassifizierten Bereich zurückgesetzt und alle übersprungenen Status gelöscht.',
                
                // Teilen-Funktionen
                'downloadAsImage': 'Als Bild herunterladen',
                'shareToSocial': 'In sozialen Medien teilen',
                'copied': 'Kopiert!',
                'preparingShare': 'Freigabe wird vorbereitet...',
                'previewLoading': 'Vorschau wird geladen...',
                'previewGenerating': 'Vorschau wird generiert...',
                'wechatScan': 'Mit WeChat scannen',
                'wechatShareTip': 'Öffnen Sie WeChat und scannen Sie diesen QR-Code zum Teilen',
                'downloadSuccess': 'Bild erfolgreich heruntergeladen',
                'comments': '评论',
                'writeComment': '写评论...',
                'selectItemFirst': '请先选择一个项目',
                'noComments': '暂无评论',
                'editComment': '双击编辑',
            },
            'it': {
                // Generale
                'mainTitle': 'TierMaster',
                'itemsTitle': 'Elementi',
                'loading': 'Caricamento...',
                'noTitle': 'Senza titolo',
                'ok': 'OK',
                'cancel': 'Annulla',
                'confirm': 'Conferma',
                'delete': 'Elimina',
                'save': 'Dividi',
                'edit': 'Modifica',
                'clear': 'Cancella',
                'copy': 'Copia',
                'skip': 'Salta',
                'next': 'Avanti',
                'share': 'Condividi',
                'settings': 'Impostazioni',
                'upload': 'Carica',
                'download': 'Scarica',
                'reset': 'Ripristina',
                'add': 'Aggiungi',
                'remove': 'Rimuovi',
                'close': 'Chiudi',
                'move': 'Sposta',
                'tier': 'Livello',
                'tierLevel': 'Livello',
                'items': 'Elementi',
                'title': 'Titolo',
                'access': 'Accesso',
                'imageRatio': 'Proporzioni immagine',
                'selectedItems': 'Elementi selezionati',
                'tierLimitReached': 'Limite livello raggiunto',
                'errorItemNotFound': 'Elemento non trovato',
                'imageLoadError': 'Errore caricamento immagine',
                'itemNotExist': 'Elemento non esistente',
                'buyCoffee': 'Offrimi un caffè',
                
                // Funzionalità specifiche
                'chooseFiles': 'Scegli file',
                'enterText': 'Inserisci testo',
                'clearItems': 'Cancella elementi',
                'generateCards': 'Genera',
                'shareTitle': 'Condividi la tua lista',
                'shareLinkDesc': 'Copia il link qui sotto per condividere la tua lista:',
                'shareOrDownload': 'Condividi o scarica',
                'downloadImage': 'Scarica come immagine',
                'shareLink': 'Condividi link',
                'itemsCleared': 'Tutti gli elementi sono stati cancellati',
                'cardsCreated': '{count} carte create',
                'createdCards': '{count} carte create',
                'allItemsClassified': 'Tutti gli elementi sono stati classificati',
                'completed': 'Completato',
                'confirmDeleteTier': 'Sei sicuro di voler eliminare il livello {tier}? Tutti gli elementi in questo livello saranno spostati in non classificati.',
                'confirmResetTiers': 'Sei sicuro di voler reimpostare tutti i livelli? Tutti gli elementi classificati torneranno in non classificati.',
                'createItemsFromText': 'Crea elementi dal testo',
                'textInputGuide': 'Inserisci ogni elemento su una nuova riga. Le righe vuote saranno ignorate.',
                'contact': 'Contatti',
                'yourList': 'La tua lista',
                'totalVotes': 'Voti totali',
                'voteSummary': 'Riepilogo voti',
                'basicSettings': 'Impostazioni di base',
                'tierManagement': 'Gestione livelli',
                'itemsManagement': 'Gestione elementi',
                
                // Impostazioni
                'settingsTitle': 'Impostazioni',
                'titleSetting': 'Titolo',
                'titlePlaceholder': 'Inserisci il titolo della tua lista',
                'accessSetting': 'Accesso',
                'accessPublic': 'Pubblico',
                'accessPrivate': 'Privato',
                'imageSetting': 'Proporzioni immagine',
                'imagePortrait': 'Verticale',
                'imageSquare': 'Quadrata',
                'imageLandscape': 'Orizzontale',
                'imageRound': 'Rotonda',
                'tierSettings': 'Impostazioni livello',
                'tierName': 'Nome',
                'tierLimit': 'Limite',
                'addTier': 'Aggiungi livello',
                'resetTiers': 'Reimposta livelli',
                'yourName': 'Your Name',
                'createdBy': 'Created by {name}',
                
                // Errori
                'error': 'Errore',
                'errorOccurred': 'Si è verificato un errore',
                'fileError': 'Errore nell\'elaborazione del file',
                'storageError': 'Quota di archiviazione superata',
                'reset_confirm': 'Sei sicuro di voler ripristinare tutte le classificazioni? Questo sposterà tutti gli elementi nell\'area non classificata e cancellerà tutti gli stati saltati.',
                
                // Funzioni di condivisione
                'downloadAsImage': 'Scarica come immagine',
                'shareToSocial': 'Condividi sui social media',
                'copied': 'Copiato!',
                'preparingShare': 'Preparazione della condivisione...',
                'previewLoading': 'Caricamento anteprima...',
                'previewGenerating': 'Generazione anteprima...',
                'wechatScan': 'Scansiona con WeChat',
                'wechatShareTip': 'Apri WeChat e scansiona questo codice QR per condividere',
                'downloadSuccess': 'Immagine scaricata con successo',
                'comments': '评论',
                'writeComment': '写评论...',
                'selectItemFirst': '请先选择一个项目',
                'noComments': '暂无评论',
                'editComment': '双击编辑',
            }
        };
        
        // 当前语言
        this.currentLang = this.getStoredLanguage() || this.getBrowserLanguage() || this.defaultLang;
    }
    
    /**
     * 初始化i18n
     */
    init() {
        try {
            // 确保translations对象正确初始化
            if (!this.translations || typeof this.translations !== 'object') {
                console.error('初始化i18n失败: translations对象未正确初始化');
                this.translations = {
                    'zh': { 'error': '错误' },
                    'en': { 'error': 'Error' }
                };
                this.currentLang = 'zh';
            }
            
            // 确保当前语言存在
            if (!this.currentLang || !this.translations[this.currentLang]) {
                console.warn(`语言 "${this.currentLang}" 不存在，使用默认语言: ${this.defaultLang}`);
                this.currentLang = this.defaultLang;
            }
            
            // 加载默认语言
            this.setLanguage(this.currentLang);
            
            // 应用所有翻译
            this.applyTranslations();
            
            console.log(`i18n初始化完成，当前语言: ${this.currentLang}`);
        } catch (e) {
            console.error('i18n初始化失败:', e);
        }
    }
    
    /**
     * 从localStorage获取存储的语言
     */
    getStoredLanguage() {
        return localStorage.getItem('tiermaker-language');
    }
    
    /**
     * 获取浏览器语言
     */
    getBrowserLanguage() {
        try {
            // 获取浏览器语言
            const browserLang = navigator.language || navigator.userLanguage || '';
            
            // 如果没有获取到语言，直接返回null
            if (!browserLang) {
                return null;
            }
            
            // 提取主要语言代码
            const primaryLang = browserLang.split('-')[0];
            
            // 检查是否支持该语言
            if (primaryLang && this.translations && this.translations[primaryLang]) {
                return primaryLang;
            }
        } catch (e) {
            console.error('获取浏览器语言时出错:', e);
        }
        
        return null;
    }
    
    /**
     * 设置当前语言
     * @param {string} lang - 语言代码
     */
    setLanguage(lang) {
        try {
            // 检查是否提供了语言参数
            if (!lang) {
                console.warn(`未提供语言代码，使用默认语言: ${this.defaultLang}`);
                lang = this.defaultLang;
            }
            
            // 检查是否支持该语言
            if (!this.translations || !this.translations[lang]) {
                console.warn(`不支持的语言: ${lang}，使用默认语言: ${this.defaultLang}`);
                lang = this.defaultLang;
            }
            
            // 如果默认语言也不存在，创建一个空对象避免错误
            if (!this.translations[lang]) {
                console.error(`默认语言 ${this.defaultLang} 不存在，创建空对象避免错误`);
                this.translations[lang] = {};
            }
            
            // 更新当前语言
            this.currentLang = lang;
            
            // 存储语言选择
            try {
                localStorage.setItem('tiermaker-language', lang);
            } catch (e) {
                console.warn('无法保存语言设置到localStorage:', e);
            }
            
            // 翻译页面
            this.translatePage();
            
            // 触发语言变更事件
            try {
                const event = new CustomEvent('languageChanged', { detail: { language: lang } });
                document.dispatchEvent(event);
            } catch (e) {
                console.warn('触发语言变更事件失败:', e);
            }
            
            console.log(`语言已切换为: ${lang}`);
        } catch (e) {
            console.error('设置语言失败:', e);
        }
    }
    
    /**
     * 翻译整个页面
     */
    translatePage() {
        // 查找所有带有data-i18n属性的元素
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);
            
            // 检查是否有data-i18n-attr属性，如果有则翻译该属性
            const attrName = el.getAttribute('data-i18n-attr');
            if (attrName) {
                el.setAttribute(attrName, translation);
            } else {
                // 否则翻译元素内容
                el.textContent = translation;
            }
        });
        
        // 翻译具有固定ID的元素
        this.translateStaticElements();
    }
    
    /**
     * 翻译具有固定ID的特定元素
     */
    translateStaticElements() {
        // 主标题 - 只在没有自定义标题的情况下翻译，且保留原始逻辑防止破坏用户自定义标题
        const mainTitle = document.getElementById('main-title');
        if (mainTitle && !localStorage.getItem('tiermaker-custom-title')) {
            mainTitle.textContent = this.t('mainTitle');
        }
        
        // 不翻译网站头部名称，它应该一直保持为"TierMaker"
        
        // 项目标题
        const itemsTitle = document.querySelector('.category-title');
        if (itemsTitle) {
            // 保留计数部分
            const countSpan = itemsTitle.querySelector('.items-count');
            const count = countSpan ? countSpan.textContent : '';
            itemsTitle.innerHTML = `${this.t('itemsTitle')} <span class="items-count">${count}</span>`;
        }
        
        // 按钮文本
        const buttons = {
            'choose-files-btn': 'chooseFiles',
            'type-texts-btn': 'enterText',
            'clear-items-btn': 'clearItems',
            'generate-cards-btn': 'generateCards',
            'share-btn': 'share',
            'setting-btn': 'settings',
            'setting-btn2': 'settings',
            'download-btn': 'download',
            'save-settings-btn': 'save',
            'cancel-settings-btn': 'cancel',
            'close-share-btn': 'cancel',
            'copy-link-btn': 'copy',
            'cancel-text-btn': 'cancel',
            'add-tier-btn': 'addTier',
            'reset-tiers-btn': 'resetTiers',
            'buy-coffee-btn': 'buyCoffee',
        };
        
        // 翻译按钮
        Object.entries(buttons).forEach(([id, key]) => {
            const button = document.getElementById(id);
            if (button) {
                button.textContent = this.t(key);
            }
        });
        
        // 设置面板元素
        const settingsElements = {
            'settings-title': 'settingsTitle',
            'title-label': 'titleSetting',
            'access-label': 'accessSetting',
            'image-ratio-label': 'imageSetting',
            'tier-settings-title': 'tierSettings'
        };
        
        // 翻译设置面板
        Object.entries(settingsElements).forEach(([id, key]) => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = this.t(key);
            }
        });
        
        // 选择框选项
        const accessSelect = document.getElementById('access-select');
        if (accessSelect) {
            const options = accessSelect.querySelectorAll('option');
            options.forEach(option => {
                const value = option.value;
                if (value === 'public') {
                    option.textContent = this.t('accessPublic');
                } else if (value === 'private') {
                    option.textContent = this.t('accessPrivate');
                }
            });
        }
        
        const imageRatioSelect = document.getElementById('image-ratio-select');
        if (imageRatioSelect) {
            const options = imageRatioSelect.querySelectorAll('option');
            options.forEach(option => {
                const value = option.value;
                if (value === 'portrait') {
                    option.textContent = this.t('imagePortrait');
                } else if (value === 'square') {
                    option.textContent = this.t('imageSquare');
                } else if (value === 'landscape') {
                    option.textContent = this.t('imageLandscape');
                } else if (value === 'round') {
                    option.textContent = this.t('imageRound');
                }
            });
        }
        
        // 分享面板
        const shareElements = {
            'share-title': 'shareTitle',
            'share-link-desc': 'shareLinkDesc'
        };
        
        // 翻译分享面板
        Object.entries(shareElements).forEach(([id, key]) => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = this.t(key);
            }
        });
    }
    
    /**
     * 翻译指定的键
     * @param {string} key - 翻译键
     * @param {Object} params - 替换参数
     * @return {string} 翻译后的文本
     */
    t(key, params = {}) {
        try {
            // 检查键是否有效
            if (!key) {
                console.warn('翻译键为空');
                return '';
            }
            
            // 获取当前语言的翻译
            const currentTranslations = 
                (this.translations && this.translations[this.currentLang]) || 
                (this.translations && this.translations[this.defaultLang]) || 
                {};
            
            // 获取翻译文本
            let text = currentTranslations[key];
            if (!text) {
                console.warn(`未找到翻译: ${key}`);
                
                // 如果当前语言没有该翻译，尝试使用默认语言
                if (this.currentLang !== this.defaultLang && 
                    this.translations && 
                    this.translations[this.defaultLang] && 
                    this.translations[this.defaultLang][key]) {
                    text = this.translations[this.defaultLang][key];
                    console.log(`使用默认语言(${this.defaultLang})的翻译: ${key}`);
                } else {
                    return key; // 返回键作为文本
                }
            }
            
            // 替换参数
            if (params && typeof params === 'object') {
                for (const [paramKey, paramValue] of Object.entries(params)) {
                    if (paramValue !== undefined && paramValue !== null) {
                        text = text.replace(`{${paramKey}}`, paramValue);
                    }
                }
            }
            
            return text;
        } catch (e) {
            console.error(`翻译键 "${key}" 时出错:`, e);
            return key || '';
        }
    }
    
    /**
     * 专门翻译设置模态框
     */
    translateSettingsModal() {
        // 设置标题
        const settingModal = document.getElementById('setting-modal');
        if (settingModal) {
            const modalTitle = settingModal.querySelector('h2');
            if (modalTitle) {
                modalTitle.textContent = this.t('settings');
            }
            
            // 翻译所有section标题
            const sectionTitles = settingModal.querySelectorAll('.setting-section h3');
            if (sectionTitles.length > 0) {
                if (sectionTitles[0]) sectionTitles[0].textContent = this.t('basicSettings');
                if (sectionTitles[1]) sectionTitles[1].textContent = this.t('tierManagement');
                if (sectionTitles[2]) sectionTitles[2].textContent = this.t('itemsManagement');
            }
            
            // 翻译表格标题
            const tableHeaders = settingModal.querySelectorAll('th');
            tableHeaders.forEach(th => {
                const text = th.textContent.trim().toLowerCase();
                switch(text) {
                    case 'move': th.textContent = this.t('move'); break;
                    case 'tier': th.textContent = this.t('tier'); break;
                    case 'title': 
                    case 'name': th.textContent = this.t('tierName'); break;
                    case 'limit': th.textContent = this.t('tierLimit'); break;
                    case 'delete': th.textContent = this.t('delete'); break;
                }
            });
            
            // 翻译标签
            const labels = settingModal.querySelectorAll('label');
            labels.forEach(label => {
                const text = label.textContent.trim().toLowerCase();
                switch(text) {
                    case 'access': label.textContent = this.t('access'); break;
                    case 'title': label.textContent = this.t('title'); break;
                    case 'image ratio': label.textContent = this.t('imageRatio'); break;
                    case 'items': label.textContent = this.t('items'); break;
                }
            });
            
            // 翻译按钮
            const buttons = settingModal.querySelectorAll('button');
            buttons.forEach(btn => {
                const text = btn.textContent.trim().toLowerCase();
                switch(text) {
                    case 'add tier': btn.textContent = this.t('addTier'); break;
                    case 'reset to default': btn.textContent = this.t('resetTiers'); break;
                    case 'choose files': btn.textContent = this.t('chooseFiles'); break;
                    case 'type texts': btn.textContent = this.t('enterText'); break;
                    case 'clear': btn.textContent = this.t('clear'); break;
                    case 'cancel': btn.textContent = this.t('cancel'); break;
                    case 'save': btn.textContent = this.t('save'); break;
                }
            });
            
            // 翻译下拉选项
            this.translateSelectOptions();
        }
        
        // 文本输入模态框
        const textModal = document.getElementById('text-input-modal');
        if (textModal) {
            const modalTitle = textModal.querySelector('h2');
            if (modalTitle) {
                modalTitle.textContent = this.t('createItemsFromText');
            }
            
            const guide = textModal.querySelector('#text-modal-guide');
            if (guide) {
                guide.textContent = this.t('textInputGuide');
            }
            
            const buttons = textModal.querySelectorAll('button');
            buttons.forEach(btn => {
                const text = btn.textContent.trim().toLowerCase();
                switch(text) {
                    case 'cancel': 
                    case '取消': btn.textContent = this.t('cancel'); break;
                    case 'generate cards': 
                    case '生成卡片': btn.textContent = this.t('generateCards'); break;
                }
            });
        }
    }
    
    /**
     * 翻译下拉选项
     */
    translateSelectOptions() {
        // 访问权限下拉框
        const accessSelect = document.getElementById('access-select');
        if (accessSelect) {
            const options = accessSelect.querySelectorAll('option');
            options.forEach(option => {
                const value = option.value;
                if (value === 'public') {
                    option.textContent = this.t('accessPublic');
                } else if (value === 'private') {
                    option.textContent = this.t('accessPrivate');
                }
            });
        }
        
        // 图片比例下拉框
        const imageRatioSelect = document.getElementById('image-ratio-select');
        if (imageRatioSelect) {
            const options = imageRatioSelect.querySelectorAll('option');
            options.forEach(option => {
                const value = option.value;
                if (value === 'portrait') {
                    option.textContent = this.t('imagePortrait');
                } else if (value === 'square') {
                    option.textContent = this.t('imageSquare');
                } else if (value === 'landscape') {
                    option.textContent = this.t('imageLandscape');
                } else if (value === 'round') {
                    option.textContent = this.t('imageRound');
                }
            });
        }
    }
    
    /**
     * 应用所有翻译
     */
    applyTranslations() {
        this.translatePage();
        this.translateSettingsModal();
    }
}

// 创建全局i18n实例
const i18n = new I18n();

// 导出
export default i18n; 