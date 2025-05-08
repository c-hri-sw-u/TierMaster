// Tier management system
export class TierManager {
    constructor() {
        this.maxTiers = 16;
        this.defaultTiers = ['S', 'A', 'B', 'C', 'D', 'F'];
        this.tiers = [...this.defaultTiers];
        
        // Store tier quantity limits (null = unlimited)
        this.tierLimits = {};
        this.defaultTiers.forEach(tier => this.tierLimits[tier] = null);
        
        // Store custom tier names (if different from the key)
        this.tierNames = {};
        this.defaultTiers.forEach(tier => this.tierNames[tier] = tier);
        
        // Predefined colors for all possible tiers
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

        // The full alphabet for tier generation (without duplicate 'S')
        this.tierLetters = ['S', 'A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
                            'N', 'O', 'P', 'Q', 'R', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        // Initialize CSS variables for all possible tiers
        this.initializeCSSVariables();
    }

    // Initialize CSS variables for all possible tiers
    initializeCSSVariables() {
        const style = document.documentElement.style;
        // Set tier colors
        Object.entries(this.predefinedColors).forEach(([tier, color]) => {
            style.setProperty(`--${tier.toLowerCase()}-tier-color`, color);
        });
    }

    // Get all tiers
    getTiers() {
        return this.tiers;
    }

    // Get tier color (based on position, not tier name)
    getTierColor(tier) {
        const index = this.tiers.indexOf(tier);
        if (index === -1) return null;
        
        // Get color based on position in default tier array
        const colorTier = this.defaultTiers[index] || this.tierLetters[index];
        return this.predefinedColors[colorTier] || '#cccccc';
    }

    // Get tier display name
    getTierName(tier) {
        return this.tierNames[tier] || tier;
    }

    // Set tier display name
    setTierName(tier, name) {
        if (!this.tiers.includes(tier)) return false;
        this.tierNames[tier] = name;
        return true;
    }

    // Get tier limit
    getTierLimit(tier) {
        return this.tierLimits[tier] !== undefined ? this.tierLimits[tier] : null;
    }

    // Set tier limit
    setTierLimit(tier, limit) {
        if (!this.tiers.includes(tier)) return false;
        // Convert to number or null
        this.tierLimits[tier] = limit === null || limit === '' ? null : parseInt(limit);
        return true;
    }

    // Add a new tier
    addTier() {
        console.log("TierManager.addTier 被调用");
        console.log("当前 tiers:", JSON.stringify(this.tiers));
        
        if (this.tiers.length >= this.maxTiers) {
            console.warn('Maximum number of tiers reached');
            return false;
        }

        // 查找下一个按顺序的字母（不在当前tiers中的）
        const standardTierOrder = ['S', 'A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
        
        console.log("查找下一个可用字母");
        let nextTier = null;
        for (const letter of standardTierOrder) {
            if (!this.tiers.includes(letter)) {
                nextTier = letter;
                console.log("找到下一个字母:", nextTier);
                break;
            }
        }
        
        // 如果标准序列中没找到，则使用其他字母
        if (!nextTier) {
            console.log("标准序列中没有可用字母，尝试使用其他字母");
            for (const letter of this.tierLetters) {
                if (!this.tiers.includes(letter) && !standardTierOrder.includes(letter)) {
                    nextTier = letter;
                    console.log("找到其他可用字母:", nextTier);
                    break;
                }
            }
        }
        
        if (nextTier) {
            console.log("添加新字母:", nextTier);
            this.tiers.push(nextTier);
            this.tierLimits[nextTier] = null;
            this.tierNames[nextTier] = nextTier;
            return true;
        }
        
        return false;
    }

    // Add a specific tier (if available)
    addSpecificTier(tierLetter) {
        if (this.tiers.length >= this.maxTiers) {
            console.warn('Maximum number of tiers reached');
            return false;
        }

        if (this.tiers.includes(tierLetter)) {
            console.warn('Tier already exists');
            return false;
        }

        this.tiers.push(tierLetter);
        this.tierLimits[tierLetter] = null;
        this.tierNames[tierLetter] = tierLetter;
        return true;
    }

    // Remove a tier
    removeTier(tier) {
        const index = this.tiers.indexOf(tier);
        if (index === -1) return false;

        this.tiers.splice(index, 1);
        // We keep the tierLimits and tierNames in case the tier is added back later
        return true;
    }

    // Reorder a tier from oldIndex to newIndex
    reorderTier(oldIndex, newIndex) {
        if (oldIndex < 0 || oldIndex >= this.tiers.length || 
            newIndex < 0 || newIndex >= this.tiers.length) {
            return false;
        }

        const tier = this.tiers[oldIndex];
        this.tiers.splice(oldIndex, 1);
        this.tiers.splice(newIndex, 0, tier);
        return true;
    }

    // Check if adding an item to a tier would exceed its limit
    isAtLimit(tier, currentItemCount) {
        const limit = this.getTierLimit(tier);
        if (limit === null) return false; // No limit
        return currentItemCount >= limit;
    }

    // Get all tier colors for the current tiers
    getCurrentTierColors() {
        const colors = {};
        this.tiers.forEach((tier, index) => {
            const colorTier = this.defaultTiers[index] || this.tierLetters[index];
            colors[tier] = this.predefinedColors[colorTier] || '#cccccc';
        });
        return colors;
    }

    // Reset to default tiers
    resetToDefault() {
        this.tiers = [...this.defaultTiers];
        this.defaultTiers.forEach(tier => {
            this.tierLimits[tier] = null;
            this.tierNames[tier] = tier;
        });
        return true;
    }
} 