# Script.js 代码导航索引

## 📚 快速导航

使用 `Ctrl+G`（或 `Cmd+G`）跳转到对应行号

### 1️⃣ 全局配置和数据 (Lines 1-900)
| 功能 | 行号范围 | 说明 |
|------|---------|------|
| 语言配置 | L1-2 | `currentLang` 变量定义 |
| 分类数据 | L4-117 | `categoriesData` 10种语言 |
| 分类访问函数 | L119-123 | `getCategories()` |
| 工具数据 | L127-383 | `toolsData` 180个工具 |
| 工具访问函数 | L385-389 | `getTools()` |
| 文章数据 | L393-578 | `articles` 文章列表 |
| 文章翻译数据 | L580-886 | `articleTranslations` |
| 文章翻译函数 | L888-899 | `getArticleTranslation()` |
| AI回复数据 | L901-918 | `aiResponses` |

### 2️⃣ DOM元素引用 (Lines 920-960)
| 元素用途 | 行号 | 变量名 |
|----------|------|--------|
| 工具筛选器 | L921 | `categoryFilters` |
| 工具网格 | L922 | `toolsGrid` |
| 工具计数 | L923 | `toolsCount` |
| 搜索输入框 | L924 | `filterSearch` |
| 热门工具网格 | L925 | `popularToolsGrid` |
| 最新文章网格 | L926 | `latestArticlesGrid` |
| 登录模态框 | L927-930 | `loginModal` 相关 |
| 搜索输入 | L931-932 | 搜索框 |
| AI聊天 | L933-940 | AI聊天元素 |
| 视图切换 | L941-953 | 网格/列表视图按钮 |

### 3️⃣ 工具展示模块 (Lines 960-1250)
| 功能 | 行号 | 函数名 |
|------|------|--------|
| 渲染分类筛选器 | L960-1013 | `renderCategoryFilters()` |
| 生成星级评分 | L1015-1034 | `generateStars()` |
| **渲染工具列表** | L1041-1101 | `renderTools()` ⭐ |
| **渲染分页导航** | L1104-1205 | `renderPagination()` ⭐ |
| 创建页码按钮 | L1208-1220 | `createPageButton()` |
| 滚动到工具区 | L1223-1229 | `scrollToToolsSection()` |
| 渲染热门工具 | L1232-1236 | `renderPopularTools()` |

### 4️⃣ 文章展示模块 (Lines 1238-1350)
| 功能 | 行号 | 函数名 |
|------|------|--------|
| 渲染最新文章 | L1238-1283 | `renderLatestArticles()` |
| 渲染工具网格 | L1286-1311 | `renderToolsGrid()` |
| 显示文章详情 | L1313-1486 | `showArticleDetail()` ⭐ |

### 5️⃣ 筛选和搜索模块 (Lines 1420-1483)
| 功能 | 行号 | 函数名 |
|------|------|--------|
| **应用筛选条件** | L1420-1471 | `applyFilters()` ⭐ |
| 执行搜索 | L1474-1482 | `performSearch()` |

### 6️⃣ 模态框模块 (Lines 1488-1700)
| 功能 | 行号 | 函数名 |
|------|------|--------|
| **显示工具详情** | L1488-1644 | `showToolModal()` ⭐ |
| 视图切换初始化 | L1647-1706 | `initViewToggle()` |

### 7️⃣ AI聊天模块 (Lines 1708-1850)
| 功能 | 行号 | 函数名 |
|------|------|--------|
| 初始化AI聊天 | L1708-1761 | `initAIChat()` |
| 发送消息 | L1762-1800 | `sendMessage()` |
| 显示消息 | L1801-1823 | `displayMessage()` |
| 获取AI回复 | L1824-1839 | `getAIResponse()` |

### 8️⃣ SEO优化模块 (Lines 1854-1993)
| 功能 | 行号 | 函数名 |
|------|------|--------|
| 添加工具结构化数据 | L1854-1889 | `addToolStructuredData()` |
| 添加文章结构化数据 | L1892-1993 | `addArticleStructuredData()` |

### 9️⃣ Google登录模块 (Lines 1995-2146)
| 功能 | 行号 | 说明 |
|------|------|------|
| 初始化Google登录 | L1995-2007 | `initializeGoogleLogin()` |
| 登录回调处理 | L2008-2103 | `handleCredentialResponse()` |
| 表单提交处理 | L2105-2137 | 表单事件监听 |
| 模态框控制 | L2139-2146 | 关闭按钮事件 |

### 🔟 多语言模块 - 翻译数据 (Lines 2148-3226)
| 语言 | 行号范围 | 说明 |
|------|---------|------|
| 英文 (en) | L2466-2523 | English translations |
| 中文简体 (zh-cn) | L2524-2585 | 简体中文翻译 |
| 中文繁体 (zh-tw) | L2586-2647 | 繁體中文翻譯 |
| 日文 (ja) | L2648-2709 | 日本語翻訳 |
| 韩文 (ko) | L2710-2771 | 한국어 번역 |
| 西班牙文 (es) | L2772-2833 | Traducciones españolas |
| 法文 (fr) | L2834-2895 | Traductions françaises |
| 德文 (de) | L2896-2957 | Deutsche Übersetzungen |
| 葡萄牙文 (pt) | L2958-3023 | Traduções portuguesas |
| 俄文 (ru) | L3024-3085 | Русские переводы |
| **分页翻译** | L2487, L2545... | `pagination.previous/next` ⭐ |

### 1️⃣1️⃣ 多语言模块 - 核心函数 (Lines 3227-3450)
| 功能 | 行号 | 函数名 |
|------|------|--------|
| **翻译函数** | L3227-3234 | `t(key)` ⭐ |
| 切换语言 | L3237-3241 | `switchLanguage()` |
| **更新页面语言** | L3244-3384 | `updatePageLanguage()` ⭐ |
| 初始化语言选择器 | L3386-3457 | `initLanguageSelector()` |
| 加载保存的语言 | L3459-3491 | `loadSavedLanguage()` |
| 显示语言切换通知 | L3494-3549 | `showLanguageChangeNotification()` |

### 1️⃣2️⃣ 初始化和事件监听 (Lines 3551-end)
| 功能 | 行号 | 说明 |
|------|------|------|
| 页面加载初始化 | L3551-3577 | DOMContentLoaded事件 |

---

## 🎯 核心功能快速定位

### 🔥 最常用功能
| 功能 | 快速跳转 |
|------|---------|
| 工具列表渲染 | → L1041 |
| 分页功能 | → L1104 |
| 筛选功能 | → L1420 |
| 工具详情弹窗 | → L1488 |
| 文章详情弹窗 | → L1313 |
| 多语言切换 | → L3237 |
| 翻译函数 | → L3227 |
| 分页翻译数据 | → L2487 |

### 🐛 BUG修复相关
| 问题 | 相关代码位置 |
|------|------------|
| 分页按钮多语言 | L1134, L1196（按钮文本）<br>L2487+（翻译数据）<br>L3354（语言更新） |
| 筛选重置分页 | L1459（重置currentPage） |
| 语言切换刷新 | L3244-3384（updatePageLanguage） |

---

## 📦 数据结构概览

### 工具数据结构 (toolsData)
```javascript
{
    id: Number,          // 工具ID
    name: String,        // 工具名称
    description: String, // 工具描述
    category: String,    // 所属分类
    rating: Number,      // 评分 (0-5)
    reviews: Number,     // 评论数
    tags: Array,         // 标签 ["免费", "在线"]
    image: String,       // 图标类名
    url: String,         // 官网链接
    featured: Boolean,   // 是否精选
    popular: Boolean     // 是否热门
}
```

### 分类数据结构 (categoriesData)
```javascript
{
    id: Number,          // 分类ID
    name: String,        // 分类名称
    description: String, // 分类描述
    icon: String,        // 图标类名
    toolCount: Number,   // 工具数量
    color: String        // 主题颜色
}
```

### 翻译数据结构 (translations)
```javascript
{
    'lang-code': {
        nav: {...},          // 导航栏翻译
        hero: {...},         // Hero区域翻译
        sections: {...},     // 章节标题翻译
        sidebar: {...},      // 侧边栏翻译
        tools: {...},        // 工具相关翻译
        pagination: {...},   // 分页翻译 ⭐
        filters: {...},      // 筛选器翻译
        article: {...},      // 文章相关翻译
        footer: {...},       // 页脚翻译
        notifications: {...} // 通知翻译
    }
}
```

---

## 🛠️ 使用技巧

### VSCode快捷键
- `Ctrl+G` (Cmd+G) - 跳转到指定行
- `Ctrl+F` (Cmd+F) - 搜索函数名
- `Ctrl+Shift+O` (Cmd+Shift+O) - 查看文件大纲
- `Ctrl+P` (Cmd+P) - 快速打开文件

### 搜索关键词
- 搜索 `function render` - 查找所有渲染函数
- 搜索 `function init` - 查找所有初始化函数
- 搜索 `translations` - 查找翻译相关代码
- 搜索 `pagination` - 查找分页相关代码
- 搜索 `addEventListener` - 查找所有事件监听器

---

## ✅ 文件已优化内容

1. ✅ 已添加模块分隔符注释（顶部）
2. ✅ 已添加数据访问层注释
3. ✅ 已创建完整的代码导航索引
4. ✅ 已备份原始文件（script.js.backup）

## 📝 维护建议

1. **添加新功能时**：
   - 找到对应的模块位置
   - 保持代码风格一致
   - 添加清晰的注释

2. **修改现有功能时**：
   - 使用本索引快速定位
   - 修改前阅读相关函数
   - 测试相关功能

3. **调试问题时**：
   - 参考"核心功能快速定位"表格
   - 查看数据结构说明
   - 检查多语言翻译数据

---

**祝您编码愉快！** 🚀
