// 示例数据 - 分类数据（多语言支持）
// 当前语言（需要在数据之前定义）
let currentLang = 'zh-cn';

const categoriesData = {
    'zh-cn': [
        { id: 1, name: "文本生成", description: "AI写作助手和内容创作工具", icon: "fas fa-pen-fancy", toolCount: 25, color: "#667eea" },
        { id: 2, name: "图像处理", description: "AI图像生成和编辑工具", icon: "fas fa-image", toolCount: 18, color: "#764ba2" },
        { id: 3, name: "视频制作", description: "AI视频生成和编辑工具", icon: "fas fa-video", toolCount: 12, color: "#f093fb" },
        { id: 4, name: "音频处理", description: "AI音频生成和处理工具", icon: "fas fa-music", toolCount: 15, color: "#f5576c" },
        { id: 5, name: "代码开发", description: "AI编程助手和代码生成工具", icon: "fas fa-code", toolCount: 20, color: "#4facfe" },
        { id: 6, name: "办公效率", description: "AI办公助手和生产力工具", icon: "fas fa-briefcase", toolCount: 22, color: "#43e97b" },
        { id: 7, name: "数据分析", description: "AI数据分析和可视化工具", icon: "fas fa-chart-bar", toolCount: 16, color: "#fa709a" },
        { id: 8, name: "设计工具", description: "AI设计助手和创意工具", icon: "fas fa-palette", toolCount: 14, color: "#ffecd2" },
        { id: 9, name: "营销工具", description: "AI营销和推广工具", icon: "fas fa-bullhorn", toolCount: 19, color: "#a8edea" }
    ],
    'en': [
        { id: 1, name: "Text Generation", description: "AI writing assistants and content creation tools", icon: "fas fa-pen-fancy", toolCount: 25, color: "#667eea" },
        { id: 2, name: "Image Processing", description: "AI image generation and editing tools", icon: "fas fa-image", toolCount: 18, color: "#764ba2" },
        { id: 3, name: "Video Production", description: "AI video generation and editing tools", icon: "fas fa-video", toolCount: 12, color: "#f093fb" },
        { id: 4, name: "Audio Processing", description: "AI audio generation and processing tools", icon: "fas fa-music", toolCount: 15, color: "#f5576c" },
        { id: 5, name: "Code Development", description: "AI programming assistants and code generation tools", icon: "fas fa-code", toolCount: 20, color: "#4facfe" },
        { id: 6, name: "Office Productivity", description: "AI office assistants and productivity tools", icon: "fas fa-briefcase", toolCount: 22, color: "#43e97b" },
        { id: 7, name: "Data Analysis", description: "AI data analysis and visualization tools", icon: "fas fa-chart-bar", toolCount: 16, color: "#fa709a" },
        { id: 8, name: "Design Tools", description: "AI design assistants and creative tools", icon: "fas fa-palette", toolCount: 14, color: "#ffecd2" },
        { id: 9, name: "Marketing Tools", description: "AI marketing and promotion tools", icon: "fas fa-bullhorn", toolCount: 19, color: "#a8edea" }
    ],
    'zh-tw': [
        { id: 1, name: "文本生成", description: "AI寫作助手和內容創作工具", icon: "fas fa-pen-fancy", toolCount: 25, color: "#667eea" },
        { id: 2, name: "圖像處理", description: "AI圖像生成和編輯工具", icon: "fas fa-image", toolCount: 18, color: "#764ba2" },
        { id: 3, name: "視頻製作", description: "AI視頻生成和編輯工具", icon: "fas fa-video", toolCount: 12, color: "#f093fb" },
        { id: 4, name: "音頻處理", description: "AI音頻生成和處理工具", icon: "fas fa-music", toolCount: 15, color: "#f5576c" },
        { id: 5, name: "代碼開發", description: "AI編程助手和代碼生成工具", icon: "fas fa-code", toolCount: 20, color: "#4facfe" },
        { id: 6, name: "辦公效率", description: "AI辦公助手和生產力工具", icon: "fas fa-briefcase", toolCount: 22, color: "#43e97b" },
        { id: 7, name: "數據分析", description: "AI數據分析和可視化工具", icon: "fas fa-chart-bar", toolCount: 16, color: "#fa709a" },
        { id: 8, name: "設計工具", description: "AI設計助手和創意工具", icon: "fas fa-palette", toolCount: 14, color: "#ffecd2" },
        { id: 9, name: "營銷工具", description: "AI營銷和推廣工具", icon: "fas fa-bullhorn", toolCount: 19, color: "#a8edea" }
    ],
    'ja': [
        { id: 1, name: "テキスト生成", description: "AIライティングアシスタントとコンテンツ作成ツール", icon: "fas fa-pen-fancy", toolCount: 25, color: "#667eea" },
        { id: 2, name: "画像処理", description: "AI画像生成および編集ツール", icon: "fas fa-image", toolCount: 18, color: "#764ba2" },
        { id: 3, name: "動画制作", description: "AI動画生成および編集ツール", icon: "fas fa-video", toolCount: 12, color: "#f093fb" },
        { id: 4, name: "音声処理", description: "AI音声生成および処理ツール", icon: "fas fa-music", toolCount: 15, color: "#f5576c" },
        { id: 5, name: "コード開発", description: "AIプログラミングアシスタントとコード生成ツール", icon: "fas fa-code", toolCount: 20, color: "#4facfe" },
        { id: 6, name: "オフィス生産性", description: "AIオフィスアシスタントと生産性ツール", icon: "fas fa-briefcase", toolCount: 22, color: "#43e97b" },
        { id: 7, name: "データ分析", description: "AIデータ分析と可視化ツール", icon: "fas fa-chart-bar", toolCount: 16, color: "#fa709a" },
        { id: 8, name: "デザインツール", description: "AIデザインアシスタントとクリエイティブツール", icon: "fas fa-palette", toolCount: 14, color: "#ffecd2" },
        { id: 9, name: "マーケティングツール", description: "AIマーケティングとプロモーションツール", icon: "fas fa-bullhorn", toolCount: 19, color: "#a8edea" }
    ],
    'ko': [
        { id: 1, name: "텍스트 생성", description: "AI 라이팅 어시스턴트 및 콘텐츠 제작 도구", icon: "fas fa-pen-fancy", toolCount: 25, color: "#667eea" },
        { id: 2, name: "이미지 처리", description: "AI 이미지 생성 및 편집 도구", icon: "fas fa-image", toolCount: 18, color: "#764ba2" },
        { id: 3, name: "비디오 제작", description: "AI 비디오 생성 및 편집 도구", icon: "fas fa-video", toolCount: 12, color: "#f093fb" },
        { id: 4, name: "오디오 처리", description: "AI 오디오 생성 및 처리 도구", icon: "fas fa-music", toolCount: 15, color: "#f5576c" },
        { id: 5, name: "코드 개발", description: "AI 프로그래밍 어시스턴트 및 코드 생성 도구", icon: "fas fa-code", toolCount: 20, color: "#4facfe" },
        { id: 6, name: "사무 생산성", description: "AI 사무 어시스턴트 및 생산성 도구", icon: "fas fa-briefcase", toolCount: 22, color: "#43e97b" },
        { id: 7, name: "데이터 분석", description: "AI 데이터 분석 및 시각화 도구", icon: "fas fa-chart-bar", toolCount: 16, color: "#fa709a" },
        { id: 8, name: "디자인 도구", description: "AI 디자인 어시스턴트 및 크리에이티브 도구", icon: "fas fa-palette", toolCount: 14, color: "#ffecd2" },
        { id: 9, name: "마케팅 도구", description: "AI 마케팅 및 프로모션 도구", icon: "fas fa-bullhorn", toolCount: 19, color: "#a8edea" }
    ]
};

categoriesData['es'] = [
        { id: 1, name: "Generación de Texto", description: "Asistentes de escritura IA y herramientas de creación de contenido", icon: "fas fa-pen-fancy", toolCount: 25, color: "#667eea" },
        { id: 2, name: "Procesamiento de Imágenes", description: "Herramientas de generación y edición de imágenes IA", icon: "fas fa-image", toolCount: 18, color: "#764ba2" },
        { id: 3, name: "Producción de Video", description: "Herramientas de generación y edición de video IA", icon: "fas fa-video", toolCount: 12, color: "#f093fb" },
        { id: 4, name: "Procesamiento de Audio", description: "Herramientas de generación y procesamiento de audio IA", icon: "fas fa-music", toolCount: 15, color: "#f5576c" },
        { id: 5, name: "Desarrollo de Código", description: "Asistentes de programación IA y herramientas de generación de código", icon: "fas fa-code", toolCount: 20, color: "#4facfe" },
        { id: 6, name: "Productividad de Oficina", description: "Asistentes de oficina IA y herramientas de productividad", icon: "fas fa-briefcase", toolCount: 22, color: "#43e97b" },
        { id: 7, name: "Análisis de Datos", description: "Herramientas de análisis de datos y visualización IA", icon: "fas fa-chart-bar", toolCount: 16, color: "#fa709a" },
        { id: 8, name: "Herramientas de Diseño", description: "Asistentes de diseño IA y herramientas creativas", icon: "fas fa-palette", toolCount: 14, color: "#ffecd2" },
        { id: 9, name: "Herramientas de Marketing", description: "Herramientas de marketing y promoción IA", icon: "fas fa-bullhorn", toolCount: 19, color: "#a8edea" }
    ];
    categoriesData['fr'] = [
        { id: 1, name: "Génération de Texte", description: "Assistants d'écriture IA et outils de création de contenu", icon: "fas fa-pen-fancy", toolCount: 25, color: "#667eea" },
        { id: 2, name: "Traitement d'Images", description: "Outils de génération et d'édition d'images IA", icon: "fas fa-image", toolCount: 18, color: "#764ba2" },
        { id: 3, name: "Production Vidéo", description: "Outils de génération et d'édition de vidéos IA", icon: "fas fa-video", toolCount: 12, color: "#f093fb" },
        { id: 4, name: "Traitement Audio", description: "Outils de génération et de traitement audio IA", icon: "fas fa-music", toolCount: 15, color: "#f5576c" },
        { id: 5, name: "Développement de Code", description: "Assistants de programmation IA et outils de génération de code", icon: "fas fa-code", toolCount: 20, color: "#4facfe" },
        { id: 6, name: "Productivité de Bureau", description: "Assistants de bureau IA et outils de productivité", icon: "fas fa-briefcase", toolCount: 22, color: "#43e97b" },
        { id: 7, name: "Analyse de Données", description: "Outils d'analyse de données et de visualisation IA", icon: "fas fa-chart-bar", toolCount: 16, color: "#fa709a" },
        { id: 8, name: "Outils de Design", description: "Assistants de design IA et outils créatifs", icon: "fas fa-palette", toolCount: 14, color: "#ffecd2" },
        { id: 9, name: "Outils Marketing", description: "Outils de marketing et de promotion IA", icon: "fas fa-bullhorn", toolCount: 19, color: "#a8edea" }
    ];
    categoriesData['de'] = [
        { id: 1, name: "Textgenerierung", description: "KI-Schreibassistenten und Content-Erstellungstools", icon: "fas fa-pen-fancy", toolCount: 25, color: "#667eea" },
        { id: 2, name: "Bildverarbeitung", description: "KI-Bildgenerierungs- und Bearbeitungstools", icon: "fas fa-image", toolCount: 18, color: "#764ba2" },
        { id: 3, name: "Videoproduktion", description: "KI-Videogenerierungs- und Bearbeitungstools", icon: "fas fa-video", toolCount: 12, color: "#f093fb" },
        { id: 4, name: "Audioverarbeitung", description: "KI-Audiogenerierungs- und Verarbeitungstools", icon: "fas fa-music", toolCount: 15, color: "#f5576c" },
        { id: 5, name: "Code-Entwicklung", description: "KI-Programmierassistenten und Code-Generierungstools", icon: "fas fa-code", toolCount: 20, color: "#4facfe" },
        { id: 6, name: "Büro-Produktivität", description: "KI-Büroassistenten und Produktivitätstools", icon: "fas fa-briefcase", toolCount: 22, color: "#43e97b" },
        { id: 7, name: "Datenanalyse", description: "KI-Datenanalyse- und Visualisierungstools", icon: "fas fa-chart-bar", toolCount: 16, color: "#fa709a" },
        { id: 8, name: "Design-Tools", description: "KI-Design-Assistenten und kreative Tools", icon: "fas fa-palette", toolCount: 14, color: "#ffecd2" },
        { id: 9, name: "Marketing-Tools", description: "KI-Marketing- und Werbetools", icon: "fas fa-bullhorn", toolCount: 19, color: "#a8edea" }
    ];
    categoriesData['pt'] = [
        { id: 1, name: "Geração de Texto", description: "Assistentes de escrita IA e ferramentas de criação de conteúdo", icon: "fas fa-pen-fancy", toolCount: 25, color: "#667eea" },
        { id: 2, name: "Processamento de Imagens", description: "Ferramentas de geração e edição de imagens IA", icon: "fas fa-image", toolCount: 18, color: "#764ba2" },
        { id: 3, name: "Produção de Vídeo", description: "Ferramentas de geração e edição de vídeo IA", icon: "fas fa-video", toolCount: 12, color: "#f093fb" },
        { id: 4, name: "Processamento de Áudio", description: "Ferramentas de geração e processamento de áudio IA", icon: "fas fa-music", toolCount: 15, color: "#f5576c" },
        { id: 5, name: "Desenvolvimento de Código", description: "Assistentes de programação IA e ferramentas de geração de código", icon: "fas fa-code", toolCount: 20, color: "#4facfe" },
        { id: 6, name: "Produtividade de Escritório", description: "Assistentes de escritório IA e ferramentas de produtividade", icon: "fas fa-briefcase", toolCount: 22, color: "#43e97b" },
        { id: 7, name: "Análise de Dados", description: "Ferramentas de análise de dados e visualização IA", icon: "fas fa-chart-bar", toolCount: 16, color: "#fa709a" },
        { id: 8, name: "Ferramentas de Design", description: "Assistentes de design IA e ferramentas criativas", icon: "fas fa-palette", toolCount: 14, color: "#ffecd2" },
        { id: 9, name: "Ferramentas de Marketing", description: "Ferramentas de marketing e promoção IA", icon: "fas fa-bullhorn", toolCount: 19, color: "#a8edea" }
    ];
    categoriesData['ru'] = [
        { id: 1, name: "Генерация Текста", description: "AI-помощники для письма и инструменты создания контента", icon: "fas fa-pen-fancy", toolCount: 25, color: "#667eea" },
        { id: 2, name: "Обработка Изображений", description: "Инструменты генерации и редактирования изображений AI", icon: "fas fa-image", toolCount: 18, color: "#764ba2" },
        { id: 3, name: "Производство Видео", description: "Инструменты генерации и редактирования видео AI", icon: "fas fa-video", toolCount: 12, color: "#f093fb" },
        { id: 4, name: "Обработка Аудио", description: "Инструменты генерации и обработки аудио AI", icon: "fas fa-music", toolCount: 15, color: "#f5576c" },
        { id: 5, name: "Разработка Кода", description: "AI-помощники для программирования и инструменты генерации кода", icon: "fas fa-code", toolCount: 20, color: "#4facfe" },
        { id: 6, name: "Офисная Продуктивность", description: "AI-помощники для офиса и инструменты продуктивности", icon: "fas fa-briefcase", toolCount: 22, color: "#43e97b" },
        { id: 7, name: "Анализ Данных", description: "Инструменты анализа данных и визуализации AI", icon: "fas fa-chart-bar", toolCount: 16, color: "#fa709a" },
        { id: 8, name: "Инструменты Дизайна", description: "AI-помощники для дизайна и творческие инструменты", icon: "fas fa-palette", toolCount: 14, color: "#ffecd2" },
        { id: 9, name: "Маркетинговые Инструменты", description: "Инструменты маркетинга и продвижения AI", icon: "fas fa-bullhorn", toolCount: 19, color: "#a8edea" }
    ];

// 动态获取当前语言的分类数据
function getCategories() {
    const lang = currentLang || 'zh-cn';
    return categoriesData[lang] || categoriesData['en'] || categoriesData['zh-cn'];
}

const categories = getCategories();

// 工具数据（多语言支持）
const toolsData = {
    'zh-cn': [
        { id: 1, name: "ChatGPT", description: "强大的AI对话助手，能够回答各种问题并协助完成多种任务", category: "文本生成", rating: 4.8, reviews: 1250, tags: ["免费", "在线"], image: "fas fa-comments", url: "https://chat.openai.com", featured: true, popular: true },
        { id: 2, name: "Midjourney", description: "专业的AI图像生成工具，能够根据文字描述生成高质量艺术作品", category: "图像处理", rating: 4.7, reviews: 890, tags: ["付费", "在线"], image: "fas fa-paint-brush", url: "https://midjourney.com", featured: true, popular: true },
        { id: 3, name: "GitHub Copilot", description: "AI编程助手，能够自动补全代码并提供编程建议", category: "代码开发", rating: 4.6, reviews: 2100, tags: ["付费", "插件"], image: "fas fa-code", url: "https://github.com/features/copilot", featured: true, popular: true },
        { id: 4, name: "Runway", description: "AI视频编辑和生成平台，支持多种视频处理功能", category: "视频制作", rating: 4.5, reviews: 560, tags: ["付费", "在线"], image: "fas fa-film", url: "https://runwayml.com", featured: true, popular: true }
    ],
    'en': [
        { id: 1, name: "ChatGPT", description: "Powerful AI conversation assistant capable of answering various questions and assisting with multiple tasks", category: "Text Generation", rating: 4.8, reviews: 1250, tags: ["Free", "Online"], image: "fas fa-comments", url: "https://chat.openai.com", featured: true, popular: true },
        { id: 2, name: "Midjourney", description: "Professional AI image generation tool that creates high-quality artwork from text descriptions", category: "Image Processing", rating: 4.7, reviews: 890, tags: ["Paid", "Online"], image: "fas fa-paint-brush", url: "https://midjourney.com", featured: true, popular: true },
        { id: 3, name: "GitHub Copilot", description: "AI programming assistant that auto-completes code and provides coding suggestions", category: "Code Development", rating: 4.6, reviews: 2100, tags: ["Paid", "Plugin"], image: "fas fa-code", url: "https://github.com/features/copilot", featured: true, popular: true },
        { id: 4, name: "Runway", description: "AI video editing and generation platform with multiple video processing features", category: "Video Production", rating: 4.5, reviews: 560, tags: ["Paid", "Online"], image: "fas fa-film", url: "https://runwayml.com", featured: true, popular: true }
    ],
    'zh-tw': [
        { id: 1, name: "ChatGPT", description: "強大的AI對話助手，能夠回答各種問題並協助完成多種任務", category: "文本生成", rating: 4.8, reviews: 1250, tags: ["免費", "在線"], image: "fas fa-comments", url: "https://chat.openai.com", featured: true, popular: true },
        { id: 2, name: "Midjourney", description: "專業的AI圖像生成工具，能夠根據文字描述生成高質量藝術作品", category: "圖像處理", rating: 4.7, reviews: 890, tags: ["付費", "在線"], image: "fas fa-paint-brush", url: "https://midjourney.com", featured: true, popular: true },
        { id: 3, name: "GitHub Copilot", description: "AI編程助手，能夠自動補全代碼並提供編程建議", category: "代碼開發", rating: 4.6, reviews: 2100, tags: ["付費", "插件"], image: "fas fa-code", url: "https://github.com/features/copilot", featured: true, popular: true },
        { id: 4, name: "Runway", description: "AI視頻編輯和生成平台，支持多種視頻處理功能", category: "視頻製作", rating: 4.5, reviews: 560, tags: ["付費", "在線"], image: "fas fa-film", url: "https://runwayml.com", featured: true, popular: true }
    ],
    'ja': [
        { id: 1, name: "ChatGPT", description: "様々な質問に答え、複数のタスクをサポートする強力なAI会話アシスタント", category: "テキスト生成", rating: 4.8, reviews: 1250, tags: ["無料", "オンライン"], image: "fas fa-comments", url: "https://chat.openai.com", featured: true, popular: true },
        { id: 2, name: "Midjourney", description: "テキストの説明から高品質なアートワークを作成するプロフェッショナルAI画像生成ツール", category: "画像処理", rating: 4.7, reviews: 890, tags: ["有料", "オンライン"], image: "fas fa-paint-brush", url: "https://midjourney.com", featured: true, popular: true },
        { id: 3, name: "GitHub Copilot", description: "コードを自動補完し、プログラミングの提案を提供するAIプログラミングアシスタント", category: "コード開発", rating: 4.6, reviews: 2100, tags: ["有料", "プラグイン"], image: "fas fa-code", url: "https://github.com/features/copilot", featured: true, popular: true },
        { id: 4, name: "Runway", description: "複数の動画処理機能を備えたAI動画編集・生成プラットフォーム", category: "動画制作", rating: 4.5, reviews: 560, tags: ["有料", "オンライン"], image: "fas fa-film", url: "https://runwayml.com", featured: true, popular: true }
    ],
    'ko': [
        { id: 1, name: "ChatGPT", description: "다양한 질문에 답하고 여러 작업을 지원하는 강력한 AI 대화 어시스턴트", category: "텍스트 생성", rating: 4.8, reviews: 1250, tags: ["무료", "온라인"], image: "fas fa-comments", url: "https://chat.openai.com", featured: true, popular: true },
        { id: 2, name: "Midjourney", description: "텍스트 설명에서 고품질 아트워크를 생성하는 전문 AI 이미지 생성 도구", category: "이미지 처리", rating: 4.7, reviews: 890, tags: ["유료", "온라인"], image: "fas fa-paint-brush", url: "https://midjourney.com", featured: true, popular: true },
        { id: 3, name: "GitHub Copilot", description: "코드를 자동 완성하고 프로그래밍 제안을 제공하는 AI 프로그래밍 어시스턴트", category: "코드 개발", rating: 4.6, reviews: 2100, tags: ["유료", "플러그인"], image: "fas fa-code", url: "https://github.com/features/copilot", featured: true, popular: true },
        { id: 4, name: "Runway", description: "여러 비디오 처리 기능을 갖춘 AI 비디오 편집 및 생성 플랫폼", category: "비디오 제작", rating: 4.5, reviews: 560, tags: ["유료", "온라인"], image: "fas fa-film", url: "https://runwayml.com", featured: true, popular: true }
    ]
};

toolsData['es'] = [
        { id: 1, name: "ChatGPT", description: "Potente asistente de conversación IA capaz de responder diversas preguntas y asistir en múltiples tareas", category: "Generación de Texto", rating: 4.8, reviews: 1250, tags: ["Gratis", "En línea"], image: "fas fa-comments", url: "https://chat.openai.com", featured: true, popular: true },
        { id: 2, name: "Midjourney", description: "Herramienta profesional de generación de imágenes IA que crea obras de arte de alta calidad a partir de descripciones de texto", category: "Procesamiento de Imágenes", rating: 4.7, reviews: 890, tags: ["Pago", "En línea"], image: "fas fa-paint-brush", url: "https://midjourney.com", featured: true, popular: true },
        { id: 3, name: "GitHub Copilot", description: "Asistente de programación IA que autocompleta código y proporciona sugerencias de programación", category: "Desarrollo de Código", rating: 4.6, reviews: 2100, tags: ["Pago", "Plugin"], image: "fas fa-code", url: "https://github.com/features/copilot", featured: true, popular: true },
        { id: 4, name: "Runway", description: "Plataforma de edición y generación de video IA con múltiples funciones de procesamiento de video", category: "Producción de Video", rating: 4.5, reviews: 560, tags: ["Pago", "En línea"], image: "fas fa-film", url: "https://runwayml.com", featured: true, popular: true }
    ];
    toolsData['fr'] = [
        { id: 1, name: "ChatGPT", description: "Assistant de conversation IA puissant capable de répondre à diverses questions et d'assister dans plusieurs tâches", category: "Génération de Texte", rating: 4.8, reviews: 1250, tags: ["Gratuit", "En ligne"], image: "fas fa-comments", url: "https://chat.openai.com", featured: true, popular: true },
        { id: 2, name: "Midjourney", description: "Outil professionnel de génération d'images IA qui crée des œuvres d'art de haute qualité à partir de descriptions textuelles", category: "Traitement d'Images", rating: 4.7, reviews: 890, tags: ["Payant", "En ligne"], image: "fas fa-paint-brush", url: "https://midjourney.com", featured: true, popular: true },
        { id: 3, name: "GitHub Copilot", description: "Assistant de programmation IA qui complète automatiquement le code et fournit des suggestions de programmation", category: "Développement de Code", rating: 4.6, reviews: 2100, tags: ["Payant", "Plugin"], image: "fas fa-code", url: "https://github.com/features/copilot", featured: true, popular: true },
        { id: 4, name: "Runway", description: "Plateforme d'édition et de génération de vidéos IA avec plusieurs fonctions de traitement vidéo", category: "Production Vidéo", rating: 4.5, reviews: 560, tags: ["Payant", "En ligne"], image: "fas fa-film", url: "https://runwayml.com", featured: true, popular: true }
    ];
    toolsData['de'] = [
        { id: 1, name: "ChatGPT", description: "Leistungsstarker KI-Gesprächsassistent, der verschiedene Fragen beantworten und bei mehreren Aufgaben helfen kann", category: "Textgenerierung", rating: 4.8, reviews: 1250, tags: ["Kostenlos", "Online"], image: "fas fa-comments", url: "https://chat.openai.com", featured: true, popular: true },
        { id: 2, name: "Midjourney", description: "Professionelles KI-Bildgenerierungstool, das hochwertige Kunstwerke aus Textbeschreibungen erstellt", category: "Bildverarbeitung", rating: 4.7, reviews: 890, tags: ["Bezahlt", "Online"], image: "fas fa-paint-brush", url: "https://midjourney.com", featured: true, popular: true },
        { id: 3, name: "GitHub Copilot", description: "KI-Programmierassistent, der Code automatisch vervollständigt und Programmiervorschläge bietet", category: "Code-Entwicklung", rating: 4.6, reviews: 2100, tags: ["Bezahlt", "Plugin"], image: "fas fa-code", url: "https://github.com/features/copilot", featured: true, popular: true },
        { id: 4, name: "Runway", description: "KI-Videobearbeitungs- und Generierungsplattform mit mehreren Videoverarbeitungsfunktionen", category: "Videoproduktion", rating: 4.5, reviews: 560, tags: ["Bezahlt", "Online"], image: "fas fa-film", url: "https://runwayml.com", featured: true, popular: true }
    ];
    toolsData['pt'] = [
        { id: 1, name: "ChatGPT", description: "Poderoso assistente de conversação IA capaz de responder várias perguntas e auxiliar em múltiplas tarefas", category: "Geração de Texto", rating: 4.8, reviews: 1250, tags: ["Grátis", "Online"], image: "fas fa-comments", url: "https://chat.openai.com", featured: true, popular: true },
        { id: 2, name: "Midjourney", description: "Ferramenta profissional de geração de imagens IA que cria obras de arte de alta qualidade a partir de descrições de texto", category: "Processamento de Imagens", rating: 4.7, reviews: 890, tags: ["Pago", "Online"], image: "fas fa-paint-brush", url: "https://midjourney.com", featured: true, popular: true },
        { id: 3, name: "GitHub Copilot", description: "Assistente de programação IA que completa código automaticamente e fornece sugestões de programação", category: "Desenvolvimento de Código", rating: 4.6, reviews: 2100, tags: ["Pago", "Plugin"], image: "fas fa-code", url: "https://github.com/features/copilot", featured: true, popular: true },
        { id: 4, name: "Runway", description: "Plataforma de edição e geração de vídeo IA com múltiplas funções de processamento de vídeo", category: "Produção de Vídeo", rating: 4.5, reviews: 560, tags: ["Pago", "Online"], image: "fas fa-film", url: "https://runwayml.com", featured: true, popular: true }
    ];
    toolsData['ru'] = [
        { id: 1, name: "ChatGPT", description: "Мощный AI-помощник для разговоров, способный отвечать на различные вопросы и помогать в нескольких задачах", category: "Генерация Текста", rating: 4.8, reviews: 1250, tags: ["Бесплатно", "Онлайн"], image: "fas fa-comments", url: "https://chat.openai.com", featured: true, popular: true },
        { id: 2, name: "Midjourney", description: "Профессиональный инструмент генерации изображений AI, создающий высококачественные произведения искусства из текстовых описаний", category: "Обработка Изображений", rating: 4.7, reviews: 890, tags: ["Платно", "Онлайн"], image: "fas fa-paint-brush", url: "https://midjourney.com", featured: true, popular: true },
        { id: 3, name: "GitHub Copilot", description: "AI-помощник для программирования, который автоматически завершает код и предоставляет рекомендации по программированию", category: "Разработка Кода", rating: 4.6, reviews: 2100, tags: ["Платно", "Плагин"], image: "fas fa-code", url: "https://github.com/features/copilot", featured: true, popular: true },
        { id: 4, name: "Runway", description: "Платформа редактирования и генерации видео AI с множеством функций обработки видео", category: "Производство Видео", rating: 4.5, reviews: 560, tags: ["Платно", "Онлайн"], image: "fas fa-film", url: "https://runwayml.com", featured: true, popular: true }
    ];

// 动态获取当前语言的工具数据
function getTools() {
    const lang = currentLang || 'zh-cn';
    return toolsData[lang] || toolsData['en'] || toolsData['zh-cn'];
}

const tools = getTools();

// AI工具新闻文章数据
const articles = [
    {
        id: 1,
        title: "OpenAI发布GPT-4 Turbo：更强大的AI助手即将到来",
        summary: "OpenAI最新发布的GPT-4 Turbo在性能、速度和成本方面都有显著提升，为AI应用开发带来新的可能性。",
        content: `
            <h3>GPT-4 Turbo的主要特性</h3>
            <p>GPT-4 Turbo是OpenAI最新推出的大型语言模型，相比之前的版本有以下显著改进：</p>
            <ul>
                <li><strong>更长的上下文窗口</strong>：支持128K tokens的上下文长度，可以处理更长的文档和对话</li>
                <li><strong>更快的响应速度</strong>：推理速度提升2-3倍，用户体验更加流畅</li>
                <li><strong>更低的成本</strong>：API调用成本降低50%，让更多开发者能够使用</li>
                <li><strong>更强的多模态能力</strong>：支持图像、音频等多种输入格式</li>
            </ul>
            
            <h3>对AI工具生态的影响</h3>
            <p>GPT-4 Turbo的发布将对整个AI工具生态产生深远影响：</p>
            <p>首先，更长的上下文窗口使得AI助手能够更好地理解和处理复杂任务，特别是在文档分析、代码审查等场景中表现更加出色。</p>
            <p>其次，成本的降低将推动更多创新应用的诞生，让中小企业和个人开发者也能充分利用AI技术。</p>
            
            <h3>未来展望</h3>
            <p>随着GPT-4 Turbo的普及，我们可以期待看到更多基于此模型的创新应用，特别是在教育、医疗、创意设计等领域。</p>
        `,
        author: "张伟",
        authorAvatar: "https://i.pravatar.cc/150?img=12",
        publishDate: "2024-01-15",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
        tags: ["OpenAI", "GPT-4", "AI技术", "机器学习"],
        views: 12580,
        likes: 892,
        category: "AI技术"
    },
    {
        id: 2,
        title: "Midjourney V6震撼发布：AI绘画进入新纪元",
        summary: "Midjourney最新版本V6带来了前所未有的AI绘画能力，在细节表现、风格控制和创意表达方面都有质的飞跃。",
        content: `
            <h3>V6版本的突破性改进</h3>
            <p>Midjourney V6在多个方面实现了重大突破：</p>
            <ul>
                <li><strong>超高清细节</strong>：支持4K分辨率输出，细节表现力大幅提升</li>
                <li><strong>智能风格理解</strong>：更好地理解艺术风格和创作意图</li>
                <li><strong>文本渲染优化</strong>：在图像中生成文字的能力显著改善</li>
                <li><strong>多语言支持</strong>：支持中文、日文等多种语言的提示词</li>
            </ul>
            
            <h3>创作体验的革新</h3>
            <p>新版本让AI绘画变得更加直观和高效。用户可以通过更自然的语言描述来生成图像，系统能够更好地理解复杂的创作需求。</p>
            <p>特别是在商业设计、概念艺术、插画创作等领域，V6版本的表现已经接近甚至超越专业设计师的水平。</p>
            
            <h3>对创意产业的影响</h3>
            <p>Midjourney V6的发布标志着AI绘画技术进入了一个新的发展阶段，将对广告、游戏、影视等创意产业产生深远影响。</p>
        `,
        author: "李娜",
        authorAvatar: "https://i.pravatar.cc/150?img=45",
        publishDate: "2024-01-12",
        image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&h=400&fit=crop",
        tags: ["Midjourney", "AI绘画", "数字艺术", "创意设计"],
        views: 9876,
        likes: 654,
        category: "AI艺术"
    },
    {
        id: 3,
        title: "Claude 3系列发布：Anthropic挑战AI助手新高度",
        summary: "Anthropic推出的Claude 3系列在安全性、准确性和实用性方面都有显著提升，为AI助手市场带来新的竞争格局。",
        content: `
            <h3>Claude 3系列的技术优势</h3>
            <p>Claude 3系列包含三个不同规模的模型：</p>
            <ul>
                <li><strong>Claude 3 Haiku</strong>：最快的模型，适合实时对话和简单任务</li>
                <li><strong>Claude 3 Sonnet</strong>：平衡性能和速度，适合大多数应用场景</li>
                <li><strong>Claude 3 Opus</strong>：最强大的模型，适合复杂分析和创作任务</li>
            </ul>
            
            <h3>安全性和可靠性</h3>
            <p>Anthropic在Claude 3系列中特别注重安全性和可靠性：</p>
            <p>模型经过严格的训练和测试，能够更好地避免有害内容的生成，在敏感话题上表现更加谨慎和负责任。</p>
            
            <h3>应用场景扩展</h3>
            <p>Claude 3系列在代码编写、文档分析、创意写作等方面都有出色表现，特别适合需要高准确性和安全性的企业应用。</p>
        `,
        author: "王强",
        authorAvatar: "https://i.pravatar.cc/150?img=33",
        publishDate: "2024-01-10",
        image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&h=400&fit=crop",
        tags: ["Claude", "Anthropic", "AI安全", "企业AI"],
        views: 7654,
        likes: 432,
        category: "AI技术"
    },
    {
        id: 4,
        title: "Runway Gen-3：视频生成AI的新里程碑",
        summary: "Runway推出的Gen-3在视频生成质量、时长和创意控制方面都有重大突破，为内容创作者带来全新的工具。",
        content: `
            <h3>Gen-3的核心特性</h3>
            <p>Runway Gen-3在视频生成领域实现了多项突破：</p>
            <ul>
                <li><strong>高质量输出</strong>：支持4K视频生成，画面质量显著提升</li>
                <li><strong>更长时长</strong>：单次生成最长可达10秒的高质量视频</li>
                <li><strong>精确控制</strong>：更好的运动控制和场景一致性</li>
                <li><strong>多风格支持</strong>：支持多种艺术风格和视觉效果</li>
            </ul>
            
            <h3>创作流程的革新</h3>
            <p>Gen-3让视频创作变得更加简单和直观。用户可以通过文本描述、图像参考或视频片段来生成新的视频内容。</p>
            <p>特别是在广告制作、社交媒体内容、教育视频等领域，Gen-3为创作者提供了强大的工具支持。</p>
            
            <h3>技术发展趋势</h3>
            <p>Runway Gen-3的发布标志着AI视频生成技术进入了一个新的发展阶段，未来我们可能会看到更多基于此技术的创新应用。</p>
        `,
        author: "赵敏",
        authorAvatar: "https://i.pravatar.cc/150?img=47",
        publishDate: "2024-01-08",
        image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&h=400&fit=crop",
        tags: ["Runway", "视频生成", "AI视频", "内容创作"],
        views: 5432,
        likes: 321,
        category: "AI视频"
    },
    {
        id: 5,
        title: "GitHub Copilot Workspace：AI编程助手的全新体验",
        summary: "GitHub推出的Copilot Workspace为开发者提供了更智能的编程环境，从代码生成到项目规划都有AI的深度参与。",
        content: `
            <h3>Workspace的创新功能</h3>
            <p>GitHub Copilot Workspace带来了多项创新功能：</p>
            <ul>
                <li><strong>智能项目规划</strong>：AI可以帮助规划项目结构和功能模块</li>
                <li><strong>代码审查助手</strong>：自动检测代码质量和潜在问题</li>
                <li><strong>文档生成</strong>：自动生成API文档和代码注释</li>
                <li><strong>测试用例生成</strong>：基于代码自动生成测试用例</li>
            </ul>
            
            <h3>开发效率的提升</h3>
            <p>Workspace通过AI的深度集成，显著提升了开发效率。开发者可以专注于核心业务逻辑，而将重复性的工作交给AI处理。</p>
            <p>特别是在大型项目的开发中，Workspace能够帮助团队更好地协作和保持代码质量的一致性。</p>
            
            <h3>对软件开发的影响</h3>
            <p>GitHub Copilot Workspace的发布标志着AI辅助编程进入了一个新的阶段，将对软件开发行业产生深远影响。</p>
        `,
        author: "刘洋",
        authorAvatar: "https://i.pravatar.cc/150?img=68",
        publishDate: "2024-01-05",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
        tags: ["GitHub", "Copilot", "AI编程", "软件开发"],
        views: 8765,
        likes: 567,
        category: "AI编程"
    },
    {
        id: 6,
        title: "AI工具市场趋势分析：2024年将迎来爆发式增长",
        summary: "根据最新市场研究，AI工具市场在2024年预计将增长300%，企业级AI应用将成为主要驱动力。",
        content: `
            <h3>市场增长驱动因素</h3>
            <p>AI工具市场的快速增长主要受到以下因素驱动：</p>
            <ul>
                <li><strong>企业数字化转型</strong>：越来越多的企业开始采用AI工具提升效率</li>
                <li><strong>技术成本降低</strong>：AI技术的成本持续下降，让更多企业能够负担</li>
                <li><strong>人才短缺</strong>：AI工具帮助企业在人才短缺的情况下保持竞争力</li>
                <li><strong>政策支持</strong>：各国政府都在推动AI技术的发展和应用</li>
            </ul>
            
            <h3>主要应用领域</h3>
            <p>2024年AI工具的主要应用领域包括：</p>
            <p>内容创作、客户服务、数据分析、营销自动化、人力资源管理等。这些领域的AI工具预计将获得最大的市场增长。</p>
            
            <h3>投资机会分析</h3>
            <p>对于投资者而言，AI工具市场提供了丰富的投资机会。特别是在垂直领域的AI解决方案、AI基础设施和AI安全等方面。</p>
            
            <h3>未来展望</h3>
            <p>随着技术的不断进步和应用的深入，AI工具市场将在未来几年继续保持高速增长，成为推动经济发展的重要力量。</p>
        `,
        author: "陈静",
        authorAvatar: "https://i.pravatar.cc/150?img=20",
        publishDate: "2024-01-03",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        tags: ["市场分析", "AI趋势", "企业应用", "投资机会"],
        views: 12345,
        likes: 789,
        category: "市场分析"
    }
];

// 文章翻译映射（用于显示，原始数据保持不变）
const articleTranslations = {
    'en': {
        1: {
            title: "OpenAI Releases GPT-4 Turbo: A More Powerful AI Assistant is Coming",
            summary: "OpenAI's newly released GPT-4 Turbo offers significant improvements in performance, speed, and cost, bringing new possibilities to AI application development.",
            tags: ["OpenAI", "GPT-4", "AI Technology", "Machine Learning"],
            category: "AI Technology"
        },
        2: {
            title: "Midjourney V6 Stunning Release: AI Art Enters a New Era",
            summary: "Midjourney's latest version V6 brings unprecedented AI painting capabilities with qualitative leaps in detail expression, style control, and creative expression.",
            tags: ["Midjourney", "AI Art", "Digital Art", "Creative Design"],
            category: "AI Art"
        },
        3: {
            title: "Claude 3 Series Launch: Anthropic Challenges New Heights in AI Assistants",
            summary: "Anthropic's Claude 3 series shows significant improvements in safety, accuracy, and practicality, bringing a new competitive landscape to the AI assistant market.",
            tags: ["Claude", "Anthropic", "AI Security", "Enterprise AI"],
            category: "AI Technology"
        },
        4: {
            title: "Runway Gen-3: A New Milestone in AI Video Generation",
            summary: "Runway's Gen-3 achieves major breakthroughs in video generation quality, duration, and creative control, bringing brand new tools to content creators.",
            tags: ["Runway", "Video Generation", "AI Video", "Content Creation"],
            category: "AI Video"
        },
        5: {
            title: "GitHub Copilot Workspace: A Brand New Experience in AI Programming Assistance",
            summary: "GitHub's Copilot Workspace offers developers a smarter programming environment with AI deeply integrated from code generation to project planning.",
            tags: ["GitHub", "Copilot", "AI Programming", "Software Development"],
            category: "AI Programming"
        },
        6: {
            title: "AI Tools Market Trend Analysis: Explosive Growth Expected in 2024",
            summary: "According to the latest market research, the AI tools market is expected to grow 300% in 2024, with enterprise AI applications as the main driver.",
            tags: ["Market Analysis", "AI Trends", "Enterprise Applications", "Investment Opportunities"],
            category: "Market Analysis"
        }
    },
    'ja': {
        1: {
            title: "OpenAIがGPT-4 Turboを発表：より強力なAIアシスタントが間もなく登場",
            summary: "OpenAIが最新発表したGPT-4 Turboは、パフォーマンス、速度、コストの面で大幅に改善され、AIアプリケーション開発に新たな可能性をもたらします。",
            tags: ["OpenAI", "GPT-4", "AI技術", "機械学習"],
            category: "AI技術"
        },
        2: {
            title: "Midjourney V6が衝撃発表：AIアートが新時代へ",
            summary: "Midjourney最新版V6は、かつてないAI絵画能力をもたらし、詳細表現、スタイルコントロール、クリエイティブ表現の面で飛躍的な向上を遂げました。",
            tags: ["Midjourney", "AIアート", "デジタルアート", "クリエイティブデザイン"],
            category: "AIアート"
        },
        3: {
            title: "Claude 3シリーズ発表：AnthropicがAIアシスタントの新高度に挑戦",
            summary: "Anthropicが推出するClaude 3シリーズは、安全性、精度、実用性の面で大幅に改善され、AIアシスタント市場に新たな競争構造をもたらします。",
            tags: ["Claude", "Anthropic", "AIセキュリティ", "企業AI"],
            category: "AI技術"
        },
        4: {
            title: "Runway Gen-3：動画生成AIの新しいマイルストーン",
            summary: "Runwayが推出したGen-3は、動画生成品質、長さ、クリエイティブコントロールの面で大きなブレークスルーを達成し、コンテンツクリエイターに全く新しいツールを提供します。",
            tags: ["Runway", "動画生成", "AI動画", "コンテンツ制作"],
            category: "AI動画"
        },
        5: {
            title: "GitHub Copilot Workspace：AIプログラミングアシスタントの全新体験",
            summary: "GitHubが推出したCopilot Workspaceは、開発者によりスマートなプログラミング環境を提供し、コード生成からプロジェクト計画までAIが深く関与します。",
            tags: ["GitHub", "Copilot", "AIプログラミング", "ソフトウェア開発"],
            category: "AIプログラミング"
        },
        6: {
            title: "AIツール市場のトレンド分析：2024年は爆発的成長を迎える",
            summary: "最新の市場調査によると、AIツール市場は2024年に300%の成長が予測され、企業AIアプリケーションが主な推進力になると見られています。",
            tags: ["市場分析", "AIトレンド", "企業応用", "投資機会"],
            category: "市場分析"
        }
    },
    'ko': {
        1: {
            title: "OpenAI, GPT-4 Turbo 발표: 더 강력한 AI 어시스턴트 곧 출시",
            summary: "OpenAI가 최신 발표한 GPT-4 Turbo는 성능, 속도, 비용 면에서 크게 개선되어 AI 애플리케이션 개발에 새로운 가능성을 제공합니다.",
            tags: ["OpenAI", "GPT-4", "AI 기술", "머신러닝"],
            category: "AI 기술"
        },
        2: {
            title: "Midjourney V6 충격 발표: AI 아트의 새로운 시대",
            summary: "Midjourney 최신 버전 V6는 전례 없는 AI 그림 능력을 제공하며, 세부 표현, 스타일 제어 및 창의적 표현에서 비약적인 발전을 이루었습니다.",
            tags: ["Midjourney", "AI 아트", "디지털 아트", "창의적 디자인"],
            category: "AI 아트"
        },
        3: {
            title: "Claude 3 시리즈 발표: Anthropic이 AI 어시스턴트의 새로운 높이에 도전",
            summary: "Anthropic이 출시한 Claude 3 시리즈는 안전성, 정확성, 실용성 면에서 크게 개선되어 AI 어시스턴트 시장에 새로운 경쟁 구도를 가져옵니다.",
            tags: ["Claude", "Anthropic", "AI 보안", "기업 AI"],
            category: "AI 기술"
        },
        4: {
            title: "Runway Gen-3: 비디오 생성 AI의 새로운 이정표",
            summary: "Runway가 출시한 Gen-3는 비디오 생성 품질, 길이, 창의적 제어 면에서 큰 돌파구를 마련하여 콘텐츠 크리에이터에게 완전히 새로운 도구를 제공합니다.",
            tags: ["Runway", "비디오 생성", "AI 비디오", "콘텐츠 제작"],
            category: "AI 비디오"
        },
        5: {
            title: "GitHub Copilot Workspace: AI 프로그래밍 어시스턴트의 전혀 새로운 경험",
            summary: "GitHub가 출시한 Copilot Workspace는 개발자에게 더 스마트한 프로그래밍 환경을 제공하며, 코드 생성부터 프로젝트 계획까지 AI가 깊이 관여합니다.",
            tags: ["GitHub", "Copilot", "AI 프로그래밍", "소프트웨어 개발"],
            category: "AI 프로그래밍"
        },
        6: {
            title: "AI 도구 시장 트렌드 분석: 2024년 폭발적 성장 예상",
            summary: "최신 시장 조사에 따르면 AI 도구 시장은 2024년에 300% 성장이 예상되며, 기업 AI 애플리케이션이 주요 동력이 될 것으로 보입니다.",
            tags: ["시장 분석", "AI 트렌드", "기업 응용", "투자 기회"],
            category: "시장 분석"
        }
    },
    'es': {
        1: {
            title: "OpenAI lanza GPT-4 Turbo: Un asistente de IA más potente está en camino",
            summary: "El recién lanzado GPT-4 Turbo de OpenAI ofrece mejoras significativas en rendimiento, velocidad y costo, aportando nuevas posibilidades al desarrollo de aplicaciones de IA.",
            tags: ["OpenAI", "GPT-4", "Tecnología IA", "Aprendizaje Automático"],
            category: "Tecnología IA"
        },
        2: {
            title: "Lanzamiento impactante de Midjourney V6: El arte IA entra en una nueva era",
            summary: "La última versión V6 de Midjourney trae capacidades de pintura IA sin precedentes, con mejoras cualitativas en expresión de detalles, control de estilo y expresión creativa.",
            tags: ["Midjourney", "Arte IA", "Arte Digital", "Diseño Creativo"],
            category: "Arte IA"
        },
        3: {
            title: "Lanzamiento de la serie Claude 3: Anthropic desafía nuevas alturas en asistentes IA",
            summary: "La serie Claude 3 de Anthropic muestra mejoras significativas en seguridad, precisión y practicidad, trayendo una nueva estructura competitiva al mercado de asistentes IA.",
            tags: ["Claude", "Anthropic", "Seguridad IA", "IA Empresarial"],
            category: "Tecnología IA"
        },
        4: {
            title: "Runway Gen-3: Un nuevo hito en la generación de video con IA",
            summary: "Gen-3 de Runway logra avances importantes en calidad, duración y control creativo de generación de video, ofreciendo herramientas completamente nuevas para creadores de contenido.",
            tags: ["Runway", "Generación de Video", "Video IA", "Creación de Contenido"],
            category: "Video IA"
        },
        5: {
            title: "GitHub Copilot Workspace: Una experiencia completamente nueva en asistencia de programación IA",
            summary: "Copilot Workspace de GitHub ofrece a los desarrolladores un entorno de programación más inteligente, con IA profundamente integrada desde la generación de código hasta la planificación de proyectos.",
            tags: ["GitHub", "Copilot", "Programación IA", "Desarrollo de Software"],
            category: "Programación IA"
        },
        6: {
            title: "Análisis de tendencias del mercado de herramientas IA: Crecimiento explosivo en 2024",
            summary: "Según la última investigación de mercado, se espera que el mercado de herramientas IA crezca un 300% en 2024, con aplicaciones empresariales de IA como principal impulsor.",
            tags: ["Análisis de Mercado", "Tendencias IA", "Aplicaciones Empresariales", "Oportunidades de Inversión"],
            category: "Análisis de Mercado"
        }
    },
    'fr': {
        1: {
            title: "OpenAI lance GPT-4 Turbo : Un assistant IA plus puissant arrive bientôt",
            summary: "Le GPT-4 Turbo récemment lancé par OpenAI offre des améliorations significatives en termes de performance, vitesse et coût, apportant de nouvelles possibilités au développement d'applications IA.",
            tags: ["OpenAI", "GPT-4", "Technologie IA", "Apprentissage Automatique"],
            category: "Technologie IA"
        },
        2: {
            title: "Lancement choc de Midjourney V6 : L'art IA entre dans une nouvelle ère",
            summary: "La dernière version V6 de Midjourney apporte des capacités de peinture IA sans précédent, avec des améliorations qualitatives dans l'expression des détails, le contrôle de style et l'expression créative.",
            tags: ["Midjourney", "Art IA", "Art Numérique", "Design Créatif"],
            category: "Art IA"
        },
        3: {
            title: "Lancement de la série Claude 3 : Anthropic défie de nouvelles hauteurs en assistants IA",
            summary: "La série Claude 3 d'Anthropic présente des améliorations significatives en matière de sécurité, précision et praticité, apportant une nouvelle structure compétitive au marché des assistants IA.",
            tags: ["Claude", "Anthropic", "Sécurité IA", "IA d'Entreprise"],
            category: "Technologie IA"
        },
        4: {
            title: "Runway Gen-3 : Une nouvelle étape dans la génération vidéo par IA",
            summary: "Gen-3 de Runway réalise des percées majeures en qualité, durée et contrôle créatif de génération vidéo, offrant des outils entièrement nouveaux aux créateurs de contenu.",
            tags: ["Runway", "Génération Vidéo", "Vidéo IA", "Création de Contenu"],
            category: "Vidéo IA"
        },
        5: {
            title: "GitHub Copilot Workspace : Une expérience entièrement nouvelle en assistance de programmation IA",
            summary: "Copilot Workspace de GitHub offre aux développeurs un environnement de programmation plus intelligent, avec l'IA profondément intégrée de la génération de code à la planification de projet.",
            tags: ["GitHub", "Copilot", "Programmation IA", "Développement Logiciel"],
            category: "Programmation IA"
        },
        6: {
            title: "Analyse des tendances du marché des outils IA : Croissance explosive en 2024",
            summary: "Selon les dernières recherches de marché, le marché des outils IA devrait croître de 300% en 2024, avec les applications IA d'entreprise comme principal moteur.",
            tags: ["Analyse de Marché", "Tendances IA", "Applications d'Entreprise", "Opportunités d'Investissement"],
            category: "Analyse de Marché"
        }
    },
    'de': {
        1: {
            title: "OpenAI veröffentlicht GPT-4 Turbo: Ein leistungsstärkerer KI-Assistent steht bevor",
            summary: "Das kürzlich von OpenAI veröffentlichte GPT-4 Turbo bietet deutliche Verbesserungen bei Leistung, Geschwindigkeit und Kosten und eröffnet neue Möglichkeiten für die KI-Anwendungsentwicklung.",
            tags: ["OpenAI", "GPT-4", "KI-Technologie", "Maschinelles Lernen"],
            category: "KI-Technologie"
        },
        2: {
            title: "Schockierende Veröffentlichung von Midjourney V6: KI-Kunst tritt in eine neue Ära ein",
            summary: "Die neueste Version V6 von Midjourney bringt beispiellose KI-Malfähigkeiten mit qualitativen Verbesserungen bei Detailausdruck, Stilkontrolle und kreativer Expression.",
            tags: ["Midjourney", "KI-Kunst", "Digitale Kunst", "Kreatives Design"],
            category: "KI-Kunst"
        },
        3: {
            title: "Veröffentlichung der Claude 3-Serie: Anthropic fordert neue Höhen bei KI-Assistenten heraus",
            summary: "Die Claude 3-Serie von Anthropic zeigt deutliche Verbesserungen in Bezug auf Sicherheit, Genauigkeit und Praktikabilität und bringt eine neue Wettbewerbsstruktur auf den KI-Assistentenmarkt.",
            tags: ["Claude", "Anthropic", "KI-Sicherheit", "Unternehmens-KI"],
            category: "KI-Technologie"
        },
        4: {
            title: "Runway Gen-3: Ein neuer Meilenstein in der KI-Videogenerierung",
            summary: "Gen-3 von Runway erzielt bedeutende Durchbrüche bei Qualität, Länge und kreativer Kontrolle der Videogenerierung und bietet Content-Erstellern völlig neue Werkzeuge.",
            tags: ["Runway", "Videogenerierung", "KI-Video", "Content-Erstellung"],
            category: "KI-Video"
        },
        5: {
            title: "GitHub Copilot Workspace: Eine völlig neue Erfahrung in KI-Programmierassistenz",
            summary: "Copilot Workspace von GitHub bietet Entwicklern eine intelligentere Programmierumgebung mit tief integrierter KI von der Code-Generierung bis zur Projektplanung.",
            tags: ["GitHub", "Copilot", "KI-Programmierung", "Softwareentwicklung"],
            category: "KI-Programmierung"
        },
        6: {
            title: "Trendanalyse des KI-Tools-Marktes: Explosives Wachstum im Jahr 2024",
            summary: "Laut aktueller Marktforschung wird erwartet, dass der KI-Tools-Markt im Jahr 2024 um 300% wachsen wird, wobei Unternehmens-KI-Anwendungen als Haupttreiber gelten.",
            tags: ["Marktanalyse", "KI-Trends", "Unternehmensanwendungen", "Investitionsmöglichkeiten"],
            category: "Marktanalyse"
        }
    },
    'pt': {
        1: {
            title: "OpenAI lança GPT-4 Turbo: Um assistente de IA mais poderoso está a caminho",
            summary: "O recém-lançado GPT-4 Turbo da OpenAI oferece melhorias significativas em desempenho, velocidade e custo, trazendo novas possibilidades ao desenvolvimento de aplicações de IA.",
            tags: ["OpenAI", "GPT-4", "Tecnologia IA", "Aprendizado de Máquina"],
            category: "Tecnologia IA"
        },
        2: {
            title: "Lançamento impactante do Midjourney V6: A arte IA entra em uma nova era",
            summary: "A versão mais recente V6 do Midjourney traz capacidades de pintura IA sem precedentes, com melhorias qualitativas na expressão de detalhes, controle de estilo e expressão criativa.",
            tags: ["Midjourney", "Arte IA", "Arte Digital", "Design Criativo"],
            category: "Arte IA"
        },
        3: {
            title: "Lançamento da série Claude 3: Anthropic desafia novas alturas em assistentes IA",
            summary: "A série Claude 3 da Anthropic apresenta melhorias significativas em segurança, precisão e praticidade, trazendo uma nova estrutura competitiva ao mercado de assistentes IA.",
            tags: ["Claude", "Anthropic", "Segurança IA", "IA Empresarial"],
            category: "Tecnologia IA"
        },
        4: {
            title: "Runway Gen-3: Um novo marco na geração de vídeo por IA",
            summary: "Gen-3 da Runway alcança avanços importantes em qualidade, duração e controle criativo de geração de vídeo, oferecendo ferramentas completamente novas para criadores de conteúdo.",
            tags: ["Runway", "Geração de Vídeo", "Vídeo IA", "Criação de Conteúdo"],
            category: "Vídeo IA"
        },
        5: {
            title: "GitHub Copilot Workspace: Uma experiência completamente nova em assistência de programação IA",
            summary: "Copilot Workspace do GitHub oferece aos desenvolvedores um ambiente de programação mais inteligente, com IA profundamente integrada desde a geração de código até o planejamento de projeto.",
            tags: ["GitHub", "Copilot", "Programação IA", "Desenvolvimento de Software"],
            category: "Programação IA"
        },
        6: {
            title: "Análise de tendências do mercado de ferramentas IA: Crescimento explosivo em 2024",
            summary: "De acordo com a pesquisa de mercado mais recente, espera-se que o mercado de ferramentas IA cresça 300% em 2024, com aplicações empresariais de IA como principal impulsionador.",
            tags: ["Análise de Mercado", "Tendências IA", "Aplicações Empresariais", "Oportunidades de Investimento"],
            category: "Análise de Mercado"
        }
    },
    'ru': {
        1: {
            title: "OpenAI выпускает GPT-4 Turbo: Более мощный AI-ассистент уже близко",
            summary: "Недавно выпущенный OpenAI GPT-4 Turbo предлагает значительные улучшения в производительности, скорости и стоимости, открывая новые возможности для разработки AI-приложений.",
            tags: ["OpenAI", "GPT-4", "AI-технология", "Машинное обучение"],
            category: "AI-технология"
        },
        2: {
            title: "Шокирующий релиз Midjourney V6: AI-арт вступает в новую эру",
            summary: "Последняя версия V6 от Midjourney предлагает беспрецедентные возможности AI-рисования с качественными улучшениями в выражении деталей, контроле стиля и творческом выражении.",
            tags: ["Midjourney", "AI-арт", "Цифровое искусство", "Креативный дизайн"],
            category: "AI-арт"
        },
        3: {
            title: "Выпуск серии Claude 3: Anthropic бросает вызов новым высотам AI-ассистентов",
            summary: "Серия Claude 3 от Anthropic демонстрирует значительные улучшения в безопасности, точности и практичности, принося новую конкурентную структуру на рынок AI-ассистентов.",
            tags: ["Claude", "Anthropic", "AI-безопасность", "Корпоративный AI"],
            category: "AI-технология"
        },
        4: {
            title: "Runway Gen-3: Новая веха в генерации видео с помощью AI",
            summary: "Gen-3 от Runway достигает значительных прорывов в качестве, длительности и творческом контроле генерации видео, предлагая создателям контента совершенно новые инструменты.",
            tags: ["Runway", "Генерация видео", "AI-видео", "Создание контента"],
            category: "AI-видео"
        },
        5: {
            title: "GitHub Copilot Workspace: Совершенно новый опыт AI-помощника в программировании",
            summary: "Copilot Workspace от GitHub предлагает разработчикам более умную среду программирования с глубоко интегрированным AI от генерации кода до планирования проекта.",
            tags: ["GitHub", "Copilot", "AI-программирование", "Разработка ПО"],
            category: "AI-программирование"
        },
        6: {
            title: "Анализ тенденций рынка AI-инструментов: Взрывной рост в 2024 году",
            summary: "Согласно последним исследованиям рынка, ожидается, что рынок AI-инструментов вырастет на 300% в 2024 году, при этом корпоративные AI-приложения станут основным драйвером.",
            tags: ["Анализ рынка", "AI-тренды", "Корпоративные приложения", "Инвестиционные возможности"],
            category: "Анализ рынка"
        }
    }
};

// 获取翻译后的文章信息
function getArticleTranslation(article, lang) {
    if (lang === 'zh-cn' || !articleTranslations[lang] || !articleTranslations[lang][article.id]) {
        return {
            title: article.title,
            summary: article.summary,
            tags: article.tags,
            category: article.category
        };
    }
    return articleTranslations[lang][article.id];
}

// AI对话相关数据
const aiResponses = {
    greetings: [
        "您好！我是您的AI助手，很高兴为您服务！",
        "嗨！有什么可以帮助您的吗？",
        "欢迎！我可以帮您推荐AI工具或解答相关问题。"
    ],
    toolRecommendations: {
        "文案": "推荐您使用ChatGPT、Copy.ai或Jasper，它们都是优秀的文案生成工具。",
        "图片": "建议尝试Midjourney、DALL-E 2或Stable Diffusion，它们都能生成高质量图像。",
        "编程": "GitHub Copilot、Tabnine和CodeWhisperer是很好的AI编程助手选择。",
        "视频": "Runway、Pika Labs和Synthesia都是优秀的AI视频生成工具。",
        "音频": "ElevenLabs、Murf和Descript可以帮助您处理音频内容。"
    },
    comparisons: {
        "chatgpt claude": "ChatGPT更适合创意写作和对话，而Claude在逻辑推理和代码分析方面更强。",
        "midjourney dall": "Midjourney在艺术风格图像生成方面更出色，DALL-E 2在概念理解上更准确。"
    }
};

// DOM元素
const categoryFilters = document.getElementById('categoryFilters');
const toolsGrid = document.getElementById('toolsGrid');
const toolsCount = document.getElementById('toolsCount');
const filterSearch = document.getElementById('filterSearch');
const popularToolsGrid = document.getElementById('popularToolsGrid');
const latestArticlesGrid = document.getElementById('latestArticlesGrid');
const loginModal = document.getElementById('loginModal');
const loginModalClose = document.getElementById('loginModalClose');
const googleLoginBtn = document.getElementById('googleLoginBtn');
const loginForm = document.getElementById('loginForm');
const searchInput = document.getElementById('searchInput');
const heroSearchInput = document.getElementById('heroSearchInput');
const aiChatContainer = document.getElementById('aiChatContainer');
const aiChatToggle = document.getElementById('aiChatToggle');
const aiChatWindow = document.getElementById('aiChatWindow');
const aiChatMessages = document.getElementById('aiChatMessages');
const aiChatInput = document.getElementById('aiChatInput');
const aiChatSend = document.getElementById('aiChatSend');
const unreadBadge = document.getElementById('unreadBadge');
const toolModal = document.getElementById('toolModal');

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    console.log('====================================');
    console.log('🚀 页面DOM加载完成');
    console.log('====================================');
    
    // 检查关键元素是否存在
    const toolsGrid = document.getElementById('toolsGrid');
    const viewBtns = document.querySelectorAll('.view-btn');
    console.log('toolsGrid:', toolsGrid);
    console.log('视图切换按钮数量:', viewBtns.length);
    
    // 立即绑定登录按钮
    const loginBtn = document.querySelector('.btn-login');
    const loginModal = document.getElementById('loginModal');
    
    console.log('登录按钮:', loginBtn);
    console.log('登录模态框:', loginModal);
    
    if (loginBtn) {
        loginBtn.onclick = function(e) {
            e.preventDefault();
            console.log('登录按钮被点击！');
            if (loginModal) {
                loginModal.style.display = 'flex';
                loginModal.classList.add('active');
                console.log('模态框已显示');
            }
        };
    }
    
    // 绑定谷歌登录按钮
    const googleBtn = document.getElementById('googleLoginBtn');
    if (googleBtn) {
        googleBtn.onclick = function(e) {
            e.preventDefault();
            console.log('谷歌登录按钮被点击');
            alert('Google登录演示成功！\n用户: 测试用户\n邮箱: test@gmail.com');
            
            // 关闭模态框
            if (loginModal) {
                loginModal.style.display = 'none';
                loginModal.classList.remove('active');
            }
            
            // 更新导航栏
            updateNavAfterLogin();
        };
    }
    
    renderCategoryFilters();
    renderTools();
    renderPopularTools();
    renderLatestArticles();
    initializeAIChat();
    initializeEventListeners();
    initializeGoogleLogin();
    
    // 全局点击监听（调试用）
    document.addEventListener('click', function(e) {
        if (e.target.closest('.view-btn')) {
            console.log('👆 检测到点击视图切换按钮！');
            console.log('被点击的元素:', e.target);
            console.log('最近的 .view-btn:', e.target.closest('.view-btn'));
        }
    });
    
    console.log('====================================');
    console.log('✅ 所有初始化完成');
    console.log('====================================');
});

// 渲染分类筛选选项
function renderCategoryFilters() {
    categoryFilters.innerHTML = '';
    const currentCategories = getCategories(); // 使用当前语言的分类数据
    currentCategories.forEach(category => {
        const filterOption = document.createElement('label');
        filterOption.className = 'filter-option';
        filterOption.innerHTML = `
            <input type="checkbox" value="${category.name}">
            <span class="checkmark"></span>
            ${category.name} (${category.toolCount})
        `;
        
        filterOption.addEventListener('change', () => {
            applyFilters();
        });
        
        categoryFilters.appendChild(filterOption);
    });
}

// 渲染工具列表
function renderTools(filteredTools = null) {
    const toolsToRender = filteredTools || getTools(); // 使用当前语言的工具数据
    toolsGrid.innerHTML = '';
    
    // 设置默认网格视图
    if (!toolsGrid.classList.contains('grid-view') && !toolsGrid.classList.contains('list-view')) {
        toolsGrid.classList.add('grid-view');
    }
    
    toolsToRender.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        
        const badgeClass = tool.tags.includes('免费') || tool.tags.includes('Free') ? 'free' : '';
        const badgeText = tool.tags.includes('免费') || tool.tags.includes('Free') ? t('tools.free') : t('tools.featured');
        
        toolCard.innerHTML = `
            <div class="tool-header">
                <div class="tool-icon">
                    <i class="${tool.image}"></i>
                </div>
                <div class="tool-title-section">
                    <div class="tool-badge ${badgeClass}">${badgeText}</div>
                    <div class="tool-name">${tool.name}</div>
                </div>
            </div>
            <div class="tool-content">
                <div class="tool-rating">
                    <div class="stars">${generateStars(tool.rating)}</div>
                    <span class="tool-rating-text">(${tool.reviews}k ${t('tools.reviews')})</span>
                </div>
                <div class="tool-description">${tool.description}</div>
                <div class="tool-tags">
                    ${tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        toolCard.addEventListener('click', () => {
            showToolModal(tool);
        });
        
        toolsGrid.appendChild(toolCard);
    });
    
    // 更新工具数量
    toolsCount.textContent = `${t('tools.showing')} ${toolsToRender.length} ${t('tools.of')} 500+ ${t('tools.toolsText')}`;
}

// 渲染热门工具
function renderPopularTools() {
    const currentTools = getTools(); // 使用当前语言的工具数据
    const popularTools = currentTools.filter(tool => tool.popular);
    renderToolsGrid(popularTools, popularToolsGrid);
}

// 渲染最新文章
function renderLatestArticles() {
    latestArticlesGrid.innerHTML = '';
    articles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.className = 'article-card';
        articleCard.onclick = () => showArticleDetail(article);
        
        // 获取文章的点赞数据
        const articleLikesData = JSON.parse(localStorage.getItem('articleLikesData') || '{}');
        const currentLikes = articleLikesData[article.id] !== undefined ? articleLikesData[article.id] : article.likes;
        
        // 获取当前语言的翻译
        const translation = getArticleTranslation(article, currentLang);
        
        articleCard.innerHTML = `
            <div class="article-image">
                <img src="${article.image}" alt="${translation.title}" onerror="this.src='https://via.placeholder.com/400x200/667eea/ffffff?text=AI+Article'">
            </div>
            <div class="article-content">
                <div class="article-meta">
                    <div class="article-author">
                        <img src="${article.authorAvatar}" alt="作者头像" class="author-avatar" onerror="this.src='https://via.placeholder.com/40x40/764ba2/ffffff?text=${article.author.charAt(0)}'">
                        <span>${article.author}</span>
                    </div>
                    <span>${article.publishDate}</span>
                </div>
                <h3 class="article-title">${translation.title}</h3>
                <p class="article-summary">${translation.summary}</p>
                <div class="article-tags">
                    ${translation.tags.map(tag => `<span class="article-tag">${tag}</span>`).join('')}
                </div>
                <div class="article-footer">
                    <div class="article-stats">
                        <span><i class="fas fa-eye"></i> ${article.views} ${t('article.views')}</span>
                        <span><i class="fas fa-heart"></i> ${currentLikes} ${t('article.likes')}</span>
                    </div>
                </div>
            </div>
        `;
        
        latestArticlesGrid.appendChild(articleCard);
    });
}

// 渲染工具网格
function renderToolsGrid(toolsArray, container) {
    container.innerHTML = '';
    toolsArray.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <div class="tool-image">
                <i class="${tool.image}"></i>
            </div>
            <div class="tool-content">
                <div class="tool-name">${tool.name}</div>
                <div class="tool-description">${tool.description}</div>
                <div class="tool-rating">
                    <div class="stars">${generateStars(tool.rating)}</div>
                    <span class="tool-rating-text">${tool.rating} (${tool.reviews}${t('tools.reviews')})</span>
                </div>
                <div class="tool-tags">
                    ${tool.tags.map(tag => `<span class="tag ${tag === '免费' ? 'free' : tag === '付费' ? 'premium' : ''}">${tag}</span>`).join('')}
                </div>
                <div class="tool-actions">
                    <button class="btn-primary" onclick="openTool('${tool.url}')">${t('tools.useNow')}</button>
                    <button class="btn-secondary" onclick="toggleFavorite(${tool.id})">
                        <i class="far fa-heart"></i> ${t('tools.favorite')}
                    </button>
                </div>
            </div>
        `;
        toolCard.addEventListener('click', (e) => {
            if (!e.target.closest('.tool-actions')) {
                showToolModal(tool);
            }
        });
        container.appendChild(toolCard);
    });
}

// 生成星级评分
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// 显示工具详情模态框
function showToolModal(tool) {
    document.getElementById('modalToolName').textContent = tool.name;
    document.getElementById('modalToolImage').src = '';
    document.getElementById('modalToolStars').innerHTML = generateStars(tool.rating);
    document.getElementById('modalToolRating').textContent = tool.rating;
    document.getElementById('modalToolReviews').textContent = `(${tool.reviews} ${t('tools.reviews')})`;
    document.getElementById('modalToolDescription').textContent = tool.description;
    
    const tagsContainer = document.getElementById('modalToolTags');
    tagsContainer.innerHTML = tool.tags.map(tag => 
        `<span class="tag ${tag === '免费' || tag === 'Free' ? 'free' : tag === '付费' ? 'premium' : ''}">${tag}</span>`
    ).join('');
    
    const downloadBtn = document.getElementById('modalToolDownload');
    if (downloadBtn) {
        downloadBtn.innerHTML = `<i class="fas fa-external-link-alt"></i> ${t('tools.useNow')}`;
        downloadBtn.onclick = () => openTool(tool.url);
    }
    
    const favoriteBtn = document.getElementById('modalToolFavorite');
    if (favoriteBtn) {
        favoriteBtn.innerHTML = `<i class="far fa-heart"></i> ${t('tools.favorite')}`;
        favoriteBtn.onclick = () => toggleFavorite(tool.id);
    }
    
    toolModal.classList.add('active');
}

// 打开工具链接
function openTool(url) {
    window.open(url, '_blank');
}

// 切换收藏状态
function toggleFavorite(toolId) {
    // 这里可以添加收藏逻辑
    console.log('Toggle favorite:', toolId);
}

// 应用筛选条件
function applyFilters() {
    const searchTerm = filterSearch.value.toLowerCase();
    const selectedCategories = Array.from(document.querySelectorAll('#categoryFilters input:checked')).map(cb => cb.value);
    const selectedPricing = Array.from(document.querySelectorAll('#pricingFilters input:checked')).map(cb => cb.value);
    
    let filteredTools = tools.filter(tool => {
        // 搜索筛选
        const matchesSearch = !searchTerm || 
            tool.name.toLowerCase().includes(searchTerm) ||
            tool.description.toLowerCase().includes(searchTerm) ||
            tool.category.toLowerCase().includes(searchTerm);
        
        // 分类筛选
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(tool.category);
        
        // 价格筛选
        const matchesPricing = selectedPricing.length === 0 || selectedPricing.some(pricing => {
            switch(pricing) {
                case 'free':
                    return tool.tags.includes('免费');
                case 'freemium':
                    return tool.tags.includes('免费') && tool.tags.includes('付费');
                case 'subscription':
                    return tool.tags.includes('付费');
                case 'one-time':
                    return tool.tags.includes('一次性');
                default:
                    return true;
            }
        });
        
        return matchesSearch && matchesCategory && matchesPricing;
    });
    
    renderTools(filteredTools);
}

// 初始化AI聊天功能
function initializeAIChat() {
    let isOpen = false;
    let unreadCount = 3;
    
    // 切换聊天窗口
    aiChatToggle.addEventListener('click', () => {
        isOpen = !isOpen;
        aiChatWindow.classList.toggle('active', isOpen);
        
        if (isOpen) {
            unreadCount = 0;
            unreadBadge.style.display = 'none';
        }
    });
    
    // 发送消息
    aiChatSend.addEventListener('click', sendAIMessage);
    aiChatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendAIMessage();
        }
    });
    
    // 快捷操作
    document.querySelectorAll('.quick-action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = e.target.dataset.action;
            handleQuickAction(action);
        });
    });
    
    // 关闭聊天
    document.getElementById('aiChatClose').addEventListener('click', () => {
        isOpen = false;
        aiChatWindow.classList.remove('active');
    });
    
    // 最小化聊天
    document.getElementById('aiChatMinimize').addEventListener('click', () => {
        isOpen = false;
        aiChatWindow.classList.remove('active');
    });
    
    function sendAIMessage() {
        const message = aiChatInput.value.trim();
        if (!message) return;
        
        // 添加用户消息
        addMessage(message, 'user');
        aiChatInput.value = '';
        
        // 模拟AI回复
        setTimeout(() => {
            const aiResponse = generateAIResponse(message);
            addMessage(aiResponse, 'ai');
        }, 1000);
    }
    
    function addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const avatar = sender === 'ai' ? 'fas fa-robot' : 'fas fa-user';
        
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="${avatar}"></i>
            </div>
            <div class="message-content">
                <p>${content}</p>
                <div class="message-time">刚刚</div>
            </div>
        `;
        
        aiChatMessages.appendChild(messageDiv);
        aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
    }
    
    function generateAIResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // 检查是否是问候语
        if (lowerMessage.includes('你好') || lowerMessage.includes('hi') || lowerMessage.includes('hello')) {
            return aiResponses.greetings[Math.floor(Math.random() * aiResponses.greetings.length)];
        }
        
        // 检查工具推荐
        for (const [keyword, response] of Object.entries(aiResponses.toolRecommendations)) {
            if (lowerMessage.includes(keyword)) {
                return response;
            }
        }
        
        // 检查工具对比
        for (const [keywords, response] of Object.entries(aiResponses.comparisons)) {
            if (keywords.split(' ').every(keyword => lowerMessage.includes(keyword))) {
                return response;
            }
        }
        
        // 默认回复
        const defaultResponses = [
            "这是一个很有趣的问题！根据您的需求，我建议您查看我们平台上的相关工具分类。",
            "我可以帮您推荐合适的AI工具。请告诉我您具体需要什么功能？",
            "如果您需要更具体的建议，可以告诉我您的使用场景，我会为您推荐最合适的工具。"
        ];
        
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }
    
    function handleQuickAction(action) {
        let message = '';
        switch (action) {
            case 'recommend':
                message = '请推荐一些好用的AI工具';
                break;
            case 'compare':
                message = '帮我对比几个AI工具';
                break;
            case 'tutorial':
                message = '如何使用这些AI工具？';
                break;
        }
        
        if (message) {
            aiChatInput.value = message;
            sendAIMessage();
        }
    }
}

// 初始化事件监听器
function initializeEventListeners() {
    // 语言切换功能
    initLanguageSelector();
    
    // 搜索功能
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }
    
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            if (searchInput) {
                performSearch(searchInput.value);
            }
        });
    }
    
    const heroSearchInput = document.getElementById('heroSearchInput');
    if (heroSearchInput) {
        heroSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(heroSearchInput.value);
            }
        });
    }
    
    const heroSearchBtn = document.getElementById('heroSearchBtn');
    if (heroSearchBtn) {
        heroSearchBtn.addEventListener('click', () => {
            if (heroSearchInput) {
                performSearch(heroSearchInput.value);
            }
        });
    }
    
    // 筛选搜索
    if (filterSearch) {
        filterSearch.addEventListener('input', () => {
            applyFilters();
        });
    }
    
    // 价格筛选
    document.querySelectorAll('#pricingFilters input').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            applyFilters();
        });
    });
    
    // 视图切换
    const viewBtns = document.querySelectorAll('.view-btn');
    console.log('找到的视图切换按钮数量:', viewBtns.length);
    console.log('视图切换按钮:', viewBtns);
    
    if (viewBtns.length === 0) {
        console.error('⚠️ 警告：未找到视图切换按钮！');
        // 延迟重试
        setTimeout(() => {
            const retryBtns = document.querySelectorAll('.view-btn');
            console.log('重试后找到的按钮数量:', retryBtns.length);
            if (retryBtns.length > 0) {
                bindViewToggle(retryBtns);
            }
        }, 1000);
    } else {
        bindViewToggle(viewBtns);
    }
    
    // 视图切换绑定函数
    function bindViewToggle(buttons) {
        buttons.forEach((btn, index) => {
            console.log(`绑定第 ${index + 1} 个按钮:`, btn, 'data-view:', btn.dataset.view);
            
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const view = this.dataset.view;
                console.log('🖱️ 视图切换按钮被点击！view =', view);
                
                // 更新按钮状态
                buttons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                console.log('✅ 按钮状态已更新');
                
                // 切换视图模式
                const toolsGrid = document.getElementById('toolsGrid');
                if (toolsGrid) {
                    if (view === 'grid') {
                        toolsGrid.classList.remove('list-view');
                        toolsGrid.classList.add('grid-view');
                        console.log('📊 已切换到网格视图');
                    } else if (view === 'list') {
                        toolsGrid.classList.remove('grid-view');
                        toolsGrid.classList.add('list-view');
                        console.log('📋 已切换到列表视图');
                    }
                    console.log('toolsGrid.className =', toolsGrid.className);
                } else {
                    console.error('❌ toolsGrid 元素未找到');
                }
            });
        });
        console.log('✅ 视图切换功能绑定完成');
    }
    
    // 个人中心模态框关闭
    const profileModalClose = document.getElementById('profileModalClose');
    if (profileModalClose) {
        profileModalClose.addEventListener('click', () => {
            const profileModal = document.getElementById('profileModal');
            if (profileModal) {
                profileModal.classList.remove('active');
            }
        });
    }
    
    // 点击个人中心模态框外部关闭
    const profileModal = document.getElementById('profileModal');
    if (profileModal) {
        profileModal.addEventListener('click', (e) => {
            if (e.target === profileModal) {
                profileModal.classList.remove('active');
            }
        });
    }
    
    // 模态框关闭
    const modalClose = document.getElementById('modalClose');
    if (modalClose && toolModal) {
        modalClose.addEventListener('click', () => {
            toolModal.classList.remove('active');
        });
    }
    
    // 点击模态框外部关闭
    if (toolModal) {
        toolModal.addEventListener('click', (e) => {
            if (e.target === toolModal) {
                toolModal.classList.remove('active');
            }
        });
    }
    
    // 文章详情模态框关闭
    const articleModalClose = document.getElementById('articleModalClose');
    const articleModal = document.getElementById('articleModal');
    
    if (articleModalClose && articleModal) {
        articleModalClose.addEventListener('click', () => {
            articleModal.classList.remove('active');
        });
        
        // 点击文章模态框外部关闭
        articleModal.addEventListener('click', (e) => {
            if (e.target === articleModal) {
                articleModal.classList.remove('active');
            }
        });
    }
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 执行搜索
function performSearch(query) {
    if (!query.trim()) return;
    
    const results = tools.filter(tool => 
        tool.name.toLowerCase().includes(query.toLowerCase()) ||
        tool.description.toLowerCase().includes(query.toLowerCase()) ||
        tool.category.toLowerCase().includes(query.toLowerCase())
    );
    
    console.log('Search results:', results);
    // 这里可以实现搜索结果页面或筛选显示
}

// 工具提示功能
function showTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: #333;
        color: white;
        padding: 0.5rem;
        border-radius: 5px;
        font-size: 0.8rem;
        z-index: 1000;
        pointer-events: none;
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
    
    setTimeout(() => {
        document.body.removeChild(tooltip);
    }, 2000);
}

// 懒加载图片
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// 初始化懒加载
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
});

// 性能监控
window.addEventListener('load', function() {
    console.log('页面加载完成');
});

// 初始化谷歌登录
function initializeGoogleLogin() {
    console.log('初始化谷歌登录');
    
    // 直接绑定谷歌登录按钮事件（不依赖Google API）
    const googleBtn = document.getElementById('googleLoginBtn');
    if (googleBtn) {
        googleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('谷歌登录按钮被点击');
            
            // 检查Google API是否可用
            if (typeof google !== 'undefined' && google.accounts) {
                console.log('使用真实Google登录');
                // 使用Google One Tap登录
                google.accounts.id.prompt((notification) => {
                    console.log('Google One Tap通知:', notification);
                });
            } else {
                console.log('使用演示模式Google登录');
                // 演示模式 - 模拟Google登录
                simulateGoogleLogin();
            }
        });
    } else {
        console.error('谷歌登录按钮未找到');
    }
}

// 模拟Google登录（演示模式）
function simulateGoogleLogin() {
    // 显示Google登录弹窗的模拟效果
    const googleLoginWindow = window.open('', 'googleLogin', 'width=500,height=600,scrollbars=yes,resizable=yes');
    
    googleLoginWindow.document.write(`
        <html>
        <head>
            <title>Google 登录</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; text-align: center; }
                .google-logo { width: 100px; height: 100px; margin: 20px auto; }
                .login-form { max-width: 300px; margin: 0 auto; }
                .form-group { margin: 15px 0; }
                .form-group input { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; }
                .login-btn { background: #4285f4; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }
                .login-btn:hover { background: #3367d6; }
            </style>
        </head>
        <body>
            <div class="google-logo">
                <svg width="100" height="100" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
            </div>
            <h2>使用Google账户登录</h2>
            <div class="login-form">
                <div class="form-group">
                    <input type="email" id="googleEmail" placeholder="输入您的Google邮箱" value="user@gmail.com">
                </div>
                <div class="form-group">
                    <input type="password" id="googlePassword" placeholder="输入密码" value="password123">
                </div>
                <button class="login-btn" onclick="loginSuccess()">登录</button>
            </div>
            <script>
                function loginSuccess() {
                    const email = document.getElementById('googleEmail').value;
                    const userInfo = {
                        name: email.split('@')[0],
                        email: email,
                        picture: 'https://via.placeholder.com/32x32/4285f4/ffffff?text=' + email.charAt(0).toUpperCase()
                    };
                    
                    // 发送消息到父窗口
                    window.opener.postMessage({
                        type: 'GOOGLE_LOGIN_SUCCESS',
                        userInfo: userInfo
                    }, '*');
                    
                    window.close();
                }
            </script>
        </body>
        </html>
    `);
    
    // 监听来自弹窗的消息
    window.addEventListener('message', function(event) {
        if (event.data.type === 'GOOGLE_LOGIN_SUCCESS') {
            console.log('收到Google登录成功消息:', event.data.userInfo);
            handleGoogleLoginSuccess(event.data.userInfo);
        }
    });
}

// 处理Google登录成功
function handleGoogleLoginSuccess(userInfo) {
    console.log('Google登录成功:', userInfo);
    
    // 显示登录成功信息
    alert(`Google登录成功！\n用户: ${userInfo.name}\n邮箱: ${userInfo.email}`);
    
    // 关闭登录模态框
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('active');
    }
    
    // 更新导航栏显示用户已登录
    updateNavAfterLogin(userInfo);
}

// 更新导航栏显示登录状态
function updateNavAfterLogin(userInfo = null) {
    const navAuth = document.querySelector('.nav-auth');
    if (navAuth) {
        // 使用真实用户信息或默认测试信息
        const displayName = userInfo ? userInfo.name : '测试用户';
        const displayEmail = userInfo ? userInfo.email : 'test@gmail.com';
        const displayPicture = userInfo ? userInfo.picture : 'https://via.placeholder.com/32x32/007bff/ffffff?text=T';
        
        navAuth.innerHTML = `
            <div class="user-info" onclick="showProfile()">
                <img src="${displayPicture}" alt="用户头像" class="user-avatar">
                <span class="user-name">${displayName}</span>
            </div>
        `;
        
        // 保存用户信息到全局变量
        window.currentUser = {
            name: displayName,
            email: displayEmail,
            picture: displayPicture,
            loginTime: new Date(),
            favorites: [],
            downloads: []
        };
        
        // 添加样式
        const style = document.createElement('style');
        style.textContent = `
            .user-info {
                display: flex;
                align-items: center;
                gap: 0.8rem;
                cursor: pointer;
                padding: 0.5rem;
                border-radius: 20px;
                transition: all 0.3s ease;
            }
            .user-info:hover {
                background: #f0f8ff;
                transform: scale(1.05);
            }
            .user-avatar {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                border: 2px solid #007bff;
            }
            .user-name {
                color: #333;
                font-weight: 500;
                font-size: 0.9rem;
            }
        `;
        document.head.appendChild(style);
    }
}

// 退出登录
function logout() {
    const navAuth = document.querySelector('.nav-auth');
    if (navAuth) {
        navAuth.innerHTML = `
            <button class="btn-login">登录</button>
        `;
        
        // 重新绑定登录按钮事件
        const loginBtn = document.querySelector('.btn-login');
        if (loginBtn) {
            loginBtn.onclick = function(e) {
                e.preventDefault();
                const loginModal = document.getElementById('loginModal');
                if (loginModal) {
                    loginModal.style.display = 'flex';
                    loginModal.classList.add('active');
                }
            };
        }
    }
    
    // 清除用户信息
    window.currentUser = null;
    
    // 关闭个人中心模态框
    const profileModal = document.getElementById('profileModal');
    if (profileModal) {
        profileModal.classList.remove('active');
    }
    
    alert('已退出登录');
}

// 处理谷歌登录回调
function handleGoogleLogin(response) {
    try {
        console.log('收到Google登录响应:', response);
        
        // 解码JWT token获取用户信息
        const userInfo = JSON.parse(atob(response.credential.split('.')[1]));
        console.log('谷歌登录成功:', userInfo);
        
        // 显示登录成功信息
        alert(`谷歌登录成功！\n用户: ${userInfo.name}\n邮箱: ${userInfo.email}`);
        
        // 关闭登录模态框
        const modal = document.getElementById('loginModal');
        if (modal) {
            modal.style.display = 'none';
            modal.classList.remove('active');
        }
        
        // 更新导航栏显示用户已登录
        updateNavAfterLogin(userInfo);
        
        // 这里可以发送用户信息到后端进行验证和创建会话
        // sendUserInfoToBackend(userInfo);
        
    } catch (error) {
        console.error('谷歌登录失败:', error);
        alert('谷歌登录失败，请重试');
    }
}

// 更新用户界面
function updateUserUI(userInfo) {
    const navAuth = document.querySelector('.nav-auth');
    navAuth.innerHTML = `
        <div class="user-info">
            <img src="${userInfo.picture}" alt="用户头像" class="user-avatar">
            <span class="user-name">${userInfo.name}</span>
            <button class="btn-logout" onclick="logout()">退出</button>
        </div>
    `;
    
    // 添加用户信息样式
    const style = document.createElement('style');
    style.textContent = `
        .user-info {
            display: flex;
            align-items: center;
            gap: 0.8rem;
        }
        .user-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 2px solid #007bff;
        }
        .user-name {
            color: #333;
            font-weight: 500;
            font-size: 0.9rem;
        }
        .btn-logout {
            background: transparent;
            border: 1px solid #dc3545;
            color: #dc3545;
            padding: 0.3rem 0.8rem;
            border-radius: 15px;
            cursor: pointer;
            font-size: 0.8rem;
            transition: all 0.3s ease;
        }
        .btn-logout:hover {
            background: #dc3545;
            color: white;
        }
    `;
    document.head.appendChild(style);
}

// 退出登录
function logout() {
    if (typeof google !== 'undefined') {
        google.accounts.id.disableAutoSelect();
    }
    
    // 恢复原始登录按钮
    const navAuth = document.querySelector('.nav-auth');
    navAuth.innerHTML = `
        <button class="btn-login">登录</button>
        <button class="btn-register">注册</button>
    `;
    
    // 重新绑定登录按钮事件
    document.querySelector('.btn-login').addEventListener('click', () => {
        loginModal.classList.add('active');
    });
    
    alert('已退出登录');
}

// 显示个人中心
function showProfile() {
    if (!window.currentUser) {
        alert('请先登录');
        return;
    }
    
    const profileModal = document.getElementById('profileModal');
    if (profileModal) {
        // 更新个人中心信息
        updateProfileInfo();
        profileModal.classList.add('active');
    }
}

// 更新个人中心信息
function updateProfileInfo() {
    if (!window.currentUser) return;
    
    document.getElementById('profileAvatar').src = window.currentUser.picture;
    document.getElementById('profileName').textContent = window.currentUser.name;
    document.getElementById('profileEmail').textContent = window.currentUser.email;
    
    // 计算登录天数
    const loginDays = Math.floor((new Date() - window.currentUser.loginTime) / (1000 * 60 * 60 * 24)) + 1;
    document.getElementById('loginDays').textContent = loginDays;
    
    // 更新统计数据
    document.getElementById('favoriteCount').textContent = window.currentUser.favorites.length;
    document.getElementById('downloadCount').textContent = window.currentUser.downloads.length;
}

// 个人中心功能函数
function showFavorites() {
    alert('我的收藏功能\n\n这里将显示您收藏的所有AI工具');
}

function showDownloads() {
    alert('下载历史功能\n\n这里将显示您下载过的所有AI工具');
}

function showRecommendations() {
    alert('推荐工具功能\n\n基于您的使用习惯，为您推荐合适的AI工具');
}

function showAccountSettings() {
    alert('账户信息设置\n\n可以修改用户名、邮箱等基本信息');
}

function showNotificationSettings() {
    alert('通知设置\n\n管理邮件通知、推送通知等设置');
}

function showPrivacySettings() {
    alert('隐私设置\n\n管理数据隐私、账户安全等设置');
}

function showHelp() {
    alert('帮助中心\n\n常见问题、使用教程、技术支持');
}

function showFeedback() {
    alert('意见反馈\n\n您的建议对我们很重要，请告诉我们您的想法');
}

function showAbout() {
    alert('关于我们\n\nAI工具大全 - 专业的AI工具发现平台\n版本: 1.0.0');
}

// 导出函数供HTML调用
window.openTool = openTool;
window.toggleFavorite = toggleFavorite;
window.showToolModal = showToolModal;
window.logout = logout;
window.updateNavAfterLogin = updateNavAfterLogin;
window.showProfile = showProfile;
window.showFavorites = showFavorites;
window.showDownloads = showDownloads;
window.showRecommendations = showRecommendations;
window.showAccountSettings = showAccountSettings;
window.showNotificationSettings = showNotificationSettings;
window.showPrivacySettings = showPrivacySettings;
window.showHelp = showHelp;
window.showFeedback = showFeedback;
window.showAbout = showAbout;

// 显示文章详情
function showArticleDetail(article) {
    const articleModal = document.getElementById('articleModal');
    if (!articleModal) return;
    
    // 获取点赞数据（从 localStorage 读取额外点赞数）
    const articleLikesData = JSON.parse(localStorage.getItem('articleLikesData') || '{}');
    const currentLikes = articleLikesData[article.id] !== undefined ? articleLikesData[article.id] : article.likes;
    
    // 更新文章信息
    document.getElementById('modalArticleTitle').textContent = article.title;
    document.getElementById('modalArticleAuthorAvatar').src = article.authorAvatar;
    document.getElementById('modalArticleAuthor').textContent = article.author;
    document.getElementById('modalArticleDate').textContent = article.publishDate;
    document.getElementById('modalArticleViews').textContent = `${article.views} ${t('article.views')}`;
    document.getElementById('modalArticleLikes').textContent = `${currentLikes} ${t('article.likes')}`;
    document.getElementById('modalArticleImage').src = article.image;
    document.getElementById('modalArticleSummary').textContent = article.summary;
    document.getElementById('modalArticleContent').innerHTML = article.content;
    
    // 更新标签
    const tagsContainer = document.getElementById('modalArticleTags');
    tagsContainer.innerHTML = article.tags.map(tag => 
        `<span class="article-tag">${tag}</span>`
    ).join('');
    
    // 绑定点赞按钮事件
    const likeBtn = document.getElementById('modalArticleLike');
    const likesDisplay = document.getElementById('modalArticleLikes');
    
    if (likeBtn) {
        // 移除之前的事件监听器（如果有）
        const newLikeBtn = likeBtn.cloneNode(true);
        likeBtn.parentNode.replaceChild(newLikeBtn, likeBtn);
        
        // 检查是否已点赞
        const likedArticles = JSON.parse(localStorage.getItem('likedArticles') || '[]');
        const isLiked = likedArticles.includes(article.id);
        
        if (isLiked) {
            newLikeBtn.classList.add('liked');
            newLikeBtn.innerHTML = `<i class="fas fa-heart"></i> ${t('article.liked')}`;
        } else {
            newLikeBtn.classList.remove('liked');
            newLikeBtn.innerHTML = `<i class="far fa-heart"></i> ${t('article.like')}`;
        }
        
        // 添加点击事件
        newLikeBtn.addEventListener('click', () => {
            const likedArticles = JSON.parse(localStorage.getItem('likedArticles') || '[]');
            const articleLikesData = JSON.parse(localStorage.getItem('articleLikesData') || '{}');
            const isCurrentlyLiked = likedArticles.includes(article.id);
            
            // 初始化该文章的点赞数
            if (articleLikesData[article.id] === undefined) {
                articleLikesData[article.id] = article.likes;
            }
            
            if (isCurrentlyLiked) {
                // 取消点赞
                const index = likedArticles.indexOf(article.id);
                likedArticles.splice(index, 1);
                articleLikesData[article.id]--;
                newLikeBtn.classList.remove('liked');
                newLikeBtn.innerHTML = `<i class="far fa-heart"></i> ${t('article.like')}`;
                
                // 显示提示
                showTooltip(newLikeBtn, t('notifications.likeCanceled'));
            } else {
                // 点赞
                likedArticles.push(article.id);
                articleLikesData[article.id]++;
                newLikeBtn.classList.add('liked');
                newLikeBtn.innerHTML = `<i class="fas fa-heart"></i> ${t('article.liked')}`;
                
                // 显示提示
                showTooltip(newLikeBtn, t('notifications.likeSuccess'));
                
                // 添加动画效果
                newLikeBtn.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    newLikeBtn.style.transform = 'scale(1)';
                }, 200);
            }
            
            // 保存到localStorage
            localStorage.setItem('likedArticles', JSON.stringify(likedArticles));
            localStorage.setItem('articleLikesData', JSON.stringify(articleLikesData));
            
            // 更新显示的点赞数
            likesDisplay.textContent = `${articleLikesData[article.id]} ${t('article.likes')}`;
        });
    }
    
    // 绑定分享按钮事件
    const shareBtn = document.getElementById('modalArticleShare');
    if (shareBtn) {
        const newShareBtn = shareBtn.cloneNode(true);
        shareBtn.parentNode.replaceChild(newShareBtn, shareBtn);
        
        newShareBtn.addEventListener('click', () => {
            // 复制链接到剪贴板
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                showTooltip(newShareBtn, t('notifications.linkCopied'));
            }).catch(() => {
                showTooltip(newShareBtn, t('article.share'));
            });
        });
    }
    
    // 绑定收藏按钮事件
    const bookmarkBtn = document.getElementById('modalArticleBookmark');
    if (bookmarkBtn) {
        const newBookmarkBtn = bookmarkBtn.cloneNode(true);
        bookmarkBtn.parentNode.replaceChild(newBookmarkBtn, bookmarkBtn);
        
        // 检查是否已收藏
        const bookmarkedArticles = JSON.parse(localStorage.getItem('bookmarkedArticles') || '[]');
        const isBookmarked = bookmarkedArticles.includes(article.id);
        
        if (isBookmarked) {
            newBookmarkBtn.innerHTML = `<i class="fas fa-bookmark"></i> ${t('article.bookmarked')}`;
        } else {
            newBookmarkBtn.innerHTML = `<i class="far fa-bookmark"></i> ${t('article.bookmark')}`;
        }
        
        newBookmarkBtn.addEventListener('click', () => {
            const bookmarkedArticles = JSON.parse(localStorage.getItem('bookmarkedArticles') || '[]');
            const isCurrentlyBookmarked = bookmarkedArticles.includes(article.id);
            
            if (isCurrentlyBookmarked) {
                // 取消收藏
                const index = bookmarkedArticles.indexOf(article.id);
                bookmarkedArticles.splice(index, 1);
                newBookmarkBtn.innerHTML = `<i class="far fa-bookmark"></i> ${t('article.bookmark')}`;
                showTooltip(newBookmarkBtn, t('notifications.bookmarkCanceled'));
            } else {
                // 收藏
                bookmarkedArticles.push(article.id);
                newBookmarkBtn.innerHTML = `<i class="fas fa-bookmark"></i> ${t('article.bookmarked')}`;
                showTooltip(newBookmarkBtn, t('notifications.bookmarkSuccess'));
            }
            
            // 保存到localStorage
            localStorage.setItem('bookmarkedArticles', JSON.stringify(bookmarkedArticles));
        });
    }
    
    // 显示模态框
    articleModal.classList.add('active');
}

window.showArticleDetail = showArticleDetail;

// 语言切换功能
const translations = {
    'en': {
        nav: {
            logo: 'AI Tools Hub',
            home: 'Home',
            categories: 'Categories',
            popular: 'Popular',
            latest: 'Latest'
        },
        hero: {
            title: 'Discover the Best AI Tools',
            subtitle: 'Explore powerful AI tools to enhance your productivity',
            searchPlaceholder: 'Search AI tools...'
        },
        sections: {
            categories: 'Tool Categories',
            allTools: 'All AI Tools',
            popularTools: 'Popular Recommendations',
            latestArticles: 'Latest Articles'
        },
        sidebar: {
            filters: 'Filters',
            category: 'Category',
            pricing: 'Pricing'
        },
        tools: {
            free: 'Free',
            featured: 'Featured',
            reviews: 'reviews',
            useNow: 'Use Now',
            favorite: 'Favorite',
            showing: 'Showing',
            of: 'of',
            toolsText: 'tools'
        },
        filters: {
            search: 'Search tools...',
            category: 'Category',
            pricing: 'Pricing',
            free: 'Free',
            freemium: 'Freemium',
            subscription: 'Subscription',
            oneTime: 'One-time Purchase'
        },
        article: {
            readMore: 'Read More',
            views: 'views',
            likes: 'likes',
            like: 'Like',
            liked: 'Liked',
            share: 'Share',
            bookmark: 'Bookmark',
            bookmarked: 'Bookmarked'
        },
        footer: {
            title: 'AI Tools Hub',
            description: 'Professional AI Tool Discovery Platform',
            quickLinks: 'Quick Links',
            contact: 'Contact Us',
            about: 'About Us',
            contactUs: 'Contact',
            help: 'Help Center',
            copyright: '2024 AI Tools Hub. All rights reserved.'
        },
        notifications: {
            languageChanged: 'Language changed to',
            likeSuccess: 'Liked successfully!',
            likeCanceled: 'Like canceled',
            bookmarkSuccess: 'Bookmarked successfully!',
            bookmarkCanceled: 'Bookmark canceled',
            linkCopied: 'Link copied to clipboard!'
        }
    },
    'zh-cn': {
        nav: {
            logo: 'AI工具大全',
            home: '首页',
            categories: '分类',
            popular: '热门',
            latest: '最新'
        },
        hero: {
            title: '发现最佳AI工具',
            subtitle: '探索强大的AI工具，提升你的生产力',
            searchPlaceholder: '搜索AI工具...'
        },
        sections: {
            categories: '工具分类',
            allTools: '所有AI工具',
            popularTools: '热门推荐',
            latestArticles: '最新文章'
        },
        sidebar: {
            filters: '筛选',
            category: '分类',
            pricing: '价格'
        },
        tools: {
            free: '免费',
            featured: '精选',
            reviews: '条评价',
            useNow: '立即使用',
            favorite: '收藏',
            showing: '显示',
            of: '共',
            toolsText: '个工具'
        },
        filters: {
            search: '搜索工具...',
            category: '分类',
            pricing: '价格',
            free: '免费',
            freemium: '免费+付费',
            subscription: '订阅',
            oneTime: '一次性购买'
        },
        article: {
            readMore: '阅读全文',
            views: '阅读',
            likes: '点赞',
            like: '点赞',
            liked: '已点赞',
            share: '分享',
            bookmark: '收藏',
            bookmarked: '已收藏'
        },
        footer: {
            title: 'AI工具大全',
            description: '专业的AI工具发现平台',
            quickLinks: '快速链接',
            contact: '联系我们',
            about: '关于我们',
            contactUs: '联系我们',
            help: '帮助中心',
            copyright: '2024 AI工具大全. 保留所有权利.'
        },
        notifications: {
            languageChanged: '语言已切换到',
            likeSuccess: '点赞成功！',
            likeCanceled: '已取消点赞',
            bookmarkSuccess: '收藏成功！',
            bookmarkCanceled: '已取消收藏',
            linkCopied: '链接已复制到剪贴板！'
        }
    },
    'zh-tw': {
        nav: {
            logo: 'AI工具大全',
            home: '首頁',
            categories: '分類',
            popular: '熱門',
            latest: '最新'
        },
        hero: {
            title: '發現AI工具',
            subtitle: '探索強大的AI工具，提升你的生產力',
            searchPlaceholder: '搜索AI工具...'
        },
        sections: {
            categories: '工具分類',
            allTools: '所有AI工具',
            popularTools: '熱門推薦',
            latestArticles: '最新文章'
        },
        sidebar: {
            filters: '篩選',
            category: '分類',
            pricing: '價格'
        },
        tools: {
            free: '免費',
            featured: '精選',
            reviews: '條評價',
            useNow: '立即使用',
            favorite: '收藏',
            showing: '顯示',
            of: '共',
            toolsText: '個工具'
        },
        filters: {
            search: '搜索工具...',
            category: '分類',
            pricing: '價格',
            free: '免費',
            freemium: '免費+付費',
            subscription: '訂閱',
            oneTime: '一次性購買'
        },
        article: {
            readMore: '閱讀全文',
            views: '閱讀',
            likes: '點讚',
            like: '點讚',
            liked: '已點讚',
            share: '分享',
            bookmark: '收藏',
            bookmarked: '已收藏'
        },
        footer: {
            title: 'AI工具大全',
            description: '專業的AI工具發現平台',
            quickLinks: '快速鏈接',
            contact: '聯系我們',
            about: '關於我們',
            contactUs: '聯系我們',
            help: '幫助中心',
            copyright: '2024 AI工具大全. 保留所有權利.'
        },
        notifications: {
            languageChanged: '語言已切換到',
            likeSuccess: '點讚成功！',
            likeCanceled: '已取消點讚',
            bookmarkSuccess: '收藏成功！',
            bookmarkCanceled: '已取消收藏',
            linkCopied: '鏈接已複製到剪貼板！'
        }
    },
    'ja': {
        nav: {
            logo: 'AIツール大全',
            home: 'ホーム',
            categories: 'カテゴリ',
            popular: '人気',
            latest: '最新'
        },
        hero: {
            title: '最高のAIツールを発見',
            subtitle: '生産性を向上させる強力なAIツールを探索',
            searchPlaceholder: 'AIツールを検索...'
        },
        sections: {
            categories: 'ツールカテゴリ',
            allTools: 'すべてのAIツール',
            popularTools: '人気のおすすめ',
            latestArticles: '最新記事'
        },
        sidebar: {
            filters: 'フィルター',
            category: 'カテゴリ',
            pricing: '価格'
        },
        tools: {
            free: '無料',
            featured: '注目',
            reviews: 'レビュー',
            useNow: '今すぐ使用',
            favorite: 'お気に入り',
            showing: '表示中',
            of: '/',
            toolsText: 'ツール'
        },
        filters: {
            search: 'ツールを検索...',
            category: 'カテゴリ',
            pricing: '価格',
            free: '無料',
            freemium: 'フリーミアム',
            subscription: 'サブスクリプション',
            oneTime: '買い切り'
        },
        article: {
            readMore: '続きを読む',
            views: '閲覧',
            likes: 'いいね',
            like: 'いいね',
            liked: 'いいね済み',
            share: '共有',
            bookmark: 'ブックマーク',
            bookmarked: 'ブックマーク済み'
        },
        footer: {
            title: 'AIツール大全',
            description: 'プロフェッショナルAIツール発見プラットフォーム',
            quickLinks: 'クイックリンク',
            contact: 'お問い合わせ',
            about: '私たちについて',
            contactUs: 'お問い合わせ',
            help: 'ヘルプセンター',
            copyright: '© 2024 AIツール大全. All rights reserved.'
        },
        notifications: {
            languageChanged: '言語を変更しました',
            likeSuccess: 'いいねしました！',
            likeCanceled: 'いいねを取り消しました',
            bookmarkSuccess: 'ブックマークしました！',
            bookmarkCanceled: 'ブックマークを取り消しました',
            linkCopied: 'リンクをコピーしました！'
        }
    },
    'ko': {
        nav: {
            logo: 'AI 도구 모음',
            home: '홈',
            categories: '카테고리',
            popular: '인기',
            latest: '최신'
        },
        hero: {
            title: '최고의 AI 도구 발견',
            subtitle: '생산성을 향상시키는 강력한 AI 도구 탐색',
            searchPlaceholder: 'AI 도구 검색...'
        },
        sections: {
            categories: '도구 카테고리',
            allTools: '모든 AI 도구',
            popularTools: '인기 추천',
            latestArticles: '최신 기사'
        },
        sidebar: {
            filters: '필터',
            category: '카테고리',
            pricing: '가격'
        },
        tools: {
            free: '무료',
            featured: '추천',
            reviews: '리뷰',
            useNow: '지금 사용',
            favorite: '즐겨찾기',
            showing: '표시 중',
            of: '/',
            toolsText: '도구'
        },
        filters: {
            search: '도구 검색...',
            category: '카테고리',
            pricing: '가격',
            free: '무료',
            freemium: '프리미엄',
            subscription: '구독',
            oneTime: '일회 구매'
        },
        article: {
            readMore: '더 읽기',
            views: '조회',
            likes: '좋아요',
            like: '좋아요',
            liked: '좋아요 완료',
            share: '공유',
            bookmark: '북마크',
            bookmarked: '북마크 완료'
        },
        footer: {
            title: 'AI 도구 모음',
            description: '전문 AI 도구 발견 플랫폼',
            quickLinks: '빠른 링크',
            contact: '문의하기',
            about: '소개',
            contactUs: '문의하기',
            help: '도움말 센터',
            copyright: '© 2024 AI 도구 모음. All rights reserved.'
        },
        notifications: {
            languageChanged: '언어 변경됨',
            likeSuccess: '좋아요 완료!',
            likeCanceled: '좋아요 취소됨',
            bookmarkSuccess: '북마크 완료!',
            bookmarkCanceled: '북마크 취소됨',
            linkCopied: '링크가 복사되었습니다!'
        }
    },
    'es': {
        nav: {
            logo: 'Herramientas AI',
            home: 'Inicio',
            categories: 'Categorías',
            popular: 'Popular',
            latest: 'Recientes'
        },
        hero: {
            title: 'Descubre las Mejores Herramientas de IA',
            subtitle: 'Explora herramientas de IA potentes para mejorar tu productividad',
            searchPlaceholder: 'Buscar herramientas de IA...'
        },
        sections: {
            categories: 'Categorías de Herramientas',
            allTools: 'Todas las Herramientas de IA',
            popularTools: 'Recomendaciones Populares',
            latestArticles: 'Artículos Recientes'
        },
        sidebar: {
            filters: 'Filtros',
            category: 'Categoría',
            pricing: 'Precio'
        },
        tools: {
            free: 'Gratis',
            featured: 'Destacado',
            reviews: 'reseñas',
            useNow: 'Usar Ahora',
            favorite: 'Favorito',
            showing: 'Mostrando',
            of: 'de',
            toolsText: 'herramientas'
        },
        filters: {
            search: 'Buscar herramientas...',
            category: 'Categoría',
            pricing: 'Precio',
            free: 'Gratis',
            freemium: 'Freemium',
            subscription: 'Suscripción',
            oneTime: 'Compra Única'
        },
        article: {
            readMore: 'Leer Más',
            views: 'vistas',
            likes: 'me gusta',
            like: 'Me Gusta',
            liked: 'Te Gusta',
            share: 'Compartir',
            bookmark: 'Guardar',
            bookmarked: 'Guardado'
        },
        footer: {
            title: 'Herramientas AI',
            description: 'Plataforma Profesional de Descubrimiento de Herramientas de IA',
            quickLinks: 'Enlaces Rápidos',
            contact: 'Contacto',
            about: 'Acerca de',
            contactUs: 'Contáctanos',
            help: 'Centro de Ayuda',
            copyright: '© 2024 Herramientas AI. Todos los derechos reservados.'
        },
        notifications: {
            languageChanged: 'Idioma cambiado a',
            likeSuccess: '¡Me gusta exitoso!',
            likeCanceled: 'Me gusta cancelado',
            bookmarkSuccess: '¡Guardado exitosamente!',
            bookmarkCanceled: 'Guardado cancelado',
            linkCopied: '¡Enlace copiado al portapapeles!'
        }
    },
    'fr': {
        nav: {
            logo: 'Outils IA',
            home: 'Accueil',
            categories: 'Catégories',
            popular: 'Populaire',
            latest: 'Récent'
        },
        hero: {
            title: 'Découvrez les Meilleurs Outils IA',
            subtitle: 'Explorez des outils IA puissants pour améliorer votre productivité',
            searchPlaceholder: 'Rechercher des outils IA...'
        },
        sections: {
            categories: 'Catégories d\'Outils',
            allTools: 'Tous les Outils IA',
            popularTools: 'Recommandations Populaires',
            latestArticles: 'Articles Récents'
        },
        sidebar: {
            filters: 'Filtres',
            category: 'Catégorie',
            pricing: 'Prix'
        },
        tools: {
            free: 'Gratuit',
            featured: 'En Vedette',
            reviews: 'avis',
            useNow: 'Utiliser Maintenant',
            favorite: 'Favori',
            showing: 'Affichage',
            of: 'de',
            toolsText: 'outils'
        },
        filters: {
            search: 'Rechercher des outils...',
            category: 'Catégorie',
            pricing: 'Prix',
            free: 'Gratuit',
            freemium: 'Freemium',
            subscription: 'Abonnement',
            oneTime: 'Achat Unique'
        },
        article: {
            readMore: 'Lire Plus',
            views: 'vues',
            likes: 'j\'aime',
            like: 'J\'aime',
            liked: 'Aimé',
            share: 'Partager',
            bookmark: 'Marquer',
            bookmarked: 'Marqué'
        },
        footer: {
            title: 'Outils IA',
            description: 'Plateforme Professionnelle de Découverte d\'Outils IA',
            quickLinks: 'Liens Rapides',
            contact: 'Contact',
            about: 'À Propos',
            contactUs: 'Nous Contacter',
            help: 'Centre d\'Aide',
            copyright: '© 2024 Outils IA. Tous droits réservés.'
        },
        notifications: {
            languageChanged: 'Langue changée en',
            likeSuccess: 'Aimé avec succès!',
            likeCanceled: 'J\'aime annulé',
            bookmarkSuccess: 'Marqué avec succès!',
            bookmarkCanceled: 'Marque-page annulé',
            linkCopied: 'Lien copié dans le presse-papiers!'
        }
    },
    'de': {
        nav: {
            logo: 'KI-Tools',
            home: 'Startseite',
            categories: 'Kategorien',
            popular: 'Beliebt',
            latest: 'Neueste'
        },
        hero: {
            title: 'Entdecken Sie die Besten KI-Tools',
            subtitle: 'Erkunden Sie leistungsstarke KI-Tools zur Steigerung Ihrer Produktivität',
            searchPlaceholder: 'KI-Tools suchen...'
        },
        sections: {
            categories: 'Tool-Kategorien',
            allTools: 'Alle KI-Tools',
            popularTools: 'Beliebte Empfehlungen',
            latestArticles: 'Neueste Artikel'
        },
        sidebar: {
            filters: 'Filter',
            category: 'Kategorie',
            pricing: 'Preis'
        },
        tools: {
            free: 'Kostenlos',
            featured: 'Empfohlen',
            reviews: 'Bewertungen',
            useNow: 'Jetzt Nutzen',
            favorite: 'Favorit',
            showing: 'Anzeigen',
            of: 'von',
            toolsText: 'Tools'
        },
        filters: {
            search: 'Tools suchen...',
            category: 'Kategorie',
            pricing: 'Preis',
            free: 'Kostenlos',
            freemium: 'Freemium',
            subscription: 'Abonnement',
            oneTime: 'Einmaliger Kauf'
        },
        article: {
            readMore: 'Mehr Lesen',
            views: 'Aufrufe',
            likes: 'Gefällt mir',
            like: 'Gefällt mir',
            liked: 'Gefällt mir',
            share: 'Teilen',
            bookmark: 'Lesezeichen',
            bookmarked: 'Gespeichert'
        },
        footer: {
            title: 'KI-Tools',
            description: 'Professionelle KI-Tool-Entdeckungsplattform',
            quickLinks: 'Schnellzugriff',
            contact: 'Kontakt',
            about: 'Über Uns',
            contactUs: 'Kontaktieren Sie Uns',
            help: 'Hilfecenter',
            copyright: '© 2024 KI-Tools. Alle Rechte vorbehalten.'
        },
        notifications: {
            languageChanged: 'Sprache geändert zu',
            likeSuccess: 'Erfolgreich bewertet!',
            likeCanceled: 'Bewertung abgebrochen',
            bookmarkSuccess: 'Erfolgreich gespeichert!',
            bookmarkCanceled: 'Lesezeichen entfernt',
            linkCopied: 'Link in Zwischenablage kopiert!'
        }
    },
    'pt': {
        nav: {
            logo: 'Ferramentas de IA',
            home: 'Início',
            categories: 'Categorias',
            popular: 'Popular',
            latest: 'Recentes'
        },
        hero: {
            title: 'Descubra as Melhores Ferramentas de IA',
            subtitle: 'Explore ferramentas de IA poderosas para melhorar sua produtividade',
            searchPlaceholder: 'Pesquisar ferramentas de IA...'
        },
        sections: {
            categories: 'Categorias de Ferramentas',
            allTools: 'Todas as Ferramentas de IA',
            popularTools: 'Recomendações Populares',
            latestArticles: 'Artigos Recentes'
        },
        sidebar: {
            filters: 'Filtros',
            category: 'Categoria',
            pricing: 'Preço'
        },
        tools: {
            free: 'Grátis',
            featured: 'Destaque',
            reviews: 'avaliações',
            useNow: 'Usar Agora',
            favorite: 'Favorito',
            showing: 'Mostrando',
            of: 'de',
            toolsText: 'ferramentas'
        },
        filters: {
            search: 'Pesquisar ferramentas...',
            category: 'Categoria',
            pricing: 'Preço',
            free: 'Grátis',
            freemium: 'Freemium',
            subscription: 'Assinatura',
            oneTime: 'Compra Única'
        },
        article: {
            readMore: 'Ler Mais',
            views: 'visualizações',
            likes: 'curtidas',
            like: 'Curtir',
            liked: 'Curtido',
            share: 'Compartilhar',
            bookmark: 'Salvar',
            bookmarked: 'Salvo'
        },
        footer: {
            title: 'Ferramentas de IA',
            description: 'Plataforma Profissional de Descoberta de Ferramentas de IA',
            quickLinks: 'Links Rápidos',
            contact: 'Contato',
            about: 'Sobre Nós',
            contactUs: 'Entre em Contato',
            help: 'Central de Ajuda',
            copyright: '© 2024 Ferramentas de IA. Todos os direitos reservados.'
        },
        notifications: {
            languageChanged: 'Idioma alterado para',
            likeSuccess: 'Curtido com sucesso!',
            likeCanceled: 'Curtida cancelada',
            bookmarkSuccess: 'Salvo com sucesso!',
            bookmarkCanceled: 'Marcador cancelado',
            linkCopied: 'Link copiado para a área de transferência!'
        }
    },
    'ru': {
        nav: {
            logo: 'ИИ Инструменты',
            home: 'Главная',
            categories: 'Категории',
            popular: 'Популярное',
            latest: 'Новые'
        },
        hero: {
            title: 'Откройте для себя лучшие инструменты ИИ',
            subtitle: 'Исследуйте мощные инструменты ИИ для повышения вашей продуктивности',
            searchPlaceholder: 'Поиск инструментов ИИ...'
        },
        sections: {
            categories: 'Категории Инструментов',
            allTools: 'Все Инструменты ИИ',
            popularTools: 'Популярные Рекомендации',
            latestArticles: 'Последние Статьи'
        },
        sidebar: {
            filters: 'Фильтры',
            category: 'Категория',
            pricing: 'Цена'
        },
        tools: {
            free: 'Бесплатно',
            featured: 'Рекомендуемые',
            reviews: 'отзывов',
            useNow: 'Использовать Сейчас',
            favorite: 'Избранное',
            showing: 'Показано',
            of: 'из',
            toolsText: 'инструментов'
        },
        filters: {
            search: 'Поиск инструментов...',
            category: 'Категория',
            pricing: 'Цена',
            free: 'Бесплатно',
            freemium: 'Условно-бесплатный',
            subscription: 'Подписка',
            oneTime: 'Разовая Покупка'
        },
        article: {
            readMore: 'Читать Далее',
            views: 'просмотров',
            likes: 'лайков',
            like: 'Нравится',
            liked: 'Понравилось',
            share: 'Поделиться',
            bookmark: 'Сохранить',
            bookmarked: 'Сохранено'
        },
        footer: {
            title: 'ИИ Инструменты',
            description: 'Профессиональная платформа для поиска инструментов ИИ',
            quickLinks: 'Быстрые Ссылки',
            contact: 'Контакты',
            about: 'О Нас',
            contactUs: 'Свяжитесь с Нами',
            help: 'Центр Помощи',
            copyright: '© 2024 ИИ Инструменты. Все права защищены.'
        },
        notifications: {
            languageChanged: 'Язык изменен на',
            likeSuccess: 'Успешно понравилось!',
            likeCanceled: 'Лайк отменен',
            bookmarkSuccess: 'Успешно сохранено!',
            bookmarkCanceled: 'Закладка отменена',
            linkCopied: 'Ссылка скопирована в буфер обмена!'
        }
    }
};

// 获取翻译文本
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
        value = value[k];
        if (!value) return key;
    }
    return value;
}

// 切换语言
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('selectedLanguage', lang);
    updatePageLanguage();
}

// 更新页面语言
function updatePageLanguage() {
    // 更新导航栏Logo
    const navLogo = document.querySelector('.nav-logo span');
    if (navLogo) {
        navLogo.textContent = t('nav.logo');
    }
    
    // 更新导航栏链接
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks.length >= 4) {
        navLinks[0].textContent = t('nav.home');
        navLinks[1].textContent = t('nav.categories');
        navLinks[2].textContent = t('nav.popular');
        navLinks[3].textContent = t('nav.latest');
    }
    
    // 更新搜索框placeholder
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.placeholder = t('hero.searchPlaceholder');
    }
    
    const filterSearch = document.getElementById('filterSearch');
    if (filterSearch) {
        filterSearch.placeholder = t('filters.search');
    }
    
    // 更新侧边栏标题
    const filtersSidebar = document.querySelector('.filters-sidebar h3');
    if (filtersSidebar) {
        filtersSidebar.textContent = t('sidebar.filters');
    }
    
    // 更新侧边栏分类和价格标题
    const filterSections = document.querySelectorAll('.filter-section h4');
    if (filterSections.length >= 2) {
        filterSections[0].textContent = t('sidebar.category');
        filterSections[1].textContent = t('sidebar.pricing');
    }
    
    // 更新价格筛选选项
    const pricingOptions = document.querySelectorAll('#pricingFilters .filter-option');
    if (pricingOptions.length >= 4) {
        // 获取每个label的最后一个文本节点并更新
        const updateLabelText = (label, text) => {
            // 移除旧的文本节点
            Array.from(label.childNodes).forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    label.removeChild(node);
                }
            });
            // 添加新的文本节点
            label.appendChild(document.createTextNode('\n                                ' + text + '\n                            '));
        };
        
        updateLabelText(pricingOptions[0], t('filters.free'));
        updateLabelText(pricingOptions[1], t('filters.freemium'));
        updateLabelText(pricingOptions[2], t('filters.subscription'));
        updateLabelText(pricingOptions[3], t('filters.oneTime'));
    }
    
    // 更新工具区域标题
    const toolsHeader = document.querySelector('.tools-title-section h2');
    if (toolsHeader) {
        toolsHeader.textContent = t('sections.allTools');
    }
    
    // 更新章节标题
    const sectionTitles = document.querySelectorAll('.section-title');
    if (sectionTitles.length >= 2) {
        sectionTitles[0].textContent = t('sections.popularTools');
        sectionTitles[1].textContent = t('sections.latestArticles');
    }
    
    // 更新页脚
    const footerSections = document.querySelectorAll('.footer-section');
    if (footerSections.length >= 3) {
        // 页脚第一列
        footerSections[0].querySelector('h3').textContent = t('footer.title');
        footerSections[0].querySelector('p').textContent = t('footer.description');
        
        // 页脚第二列
        footerSections[1].querySelector('h4').textContent = t('footer.quickLinks');
        const quickLinks = footerSections[1].querySelectorAll('li a');
        if (quickLinks.length >= 4) {
            quickLinks[0].textContent = t('nav.home');
            quickLinks[1].textContent = t('nav.categories');
            quickLinks[2].textContent = t('nav.popular');
            quickLinks[3].textContent = t('nav.latest');
        }
        
        // 页脚第三列
        footerSections[2].querySelector('h4').textContent = t('footer.contact');
        const contactLinks = footerSections[2].querySelectorAll('li a');
        if (contactLinks.length >= 3) {
            contactLinks[0].textContent = t('footer.about');
            contactLinks[1].textContent = t('footer.contactUs');
            contactLinks[2].textContent = t('footer.help');
        }
    }
    
    // 更新页脚版权
    const footerBottom = document.querySelector('.footer-bottom p');
    if (footerBottom) {
        footerBottom.textContent = t('footer.copyright');
    }
    
    // 重新加载当前语言的数据
    const newCategories = getCategories();
    const newTools = getTools();
    
    // 重新渲染所有动态内容
    if (typeof renderCategoryFilters === 'function') {
        renderCategoryFilters();
    }
    
    if (typeof renderTools === 'function') {
        renderTools();
    }
    
    if (typeof renderPopularTools === 'function') {
        renderPopularTools();
    }
    
    if (typeof renderLatestArticles === 'function') {
        renderLatestArticles();
    }
}

function initLanguageSelector() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageOptions = document.querySelectorAll('.language-option');
    
    if (!languageBtn || !languageDropdown) return;
    
    // 点击按钮切换下拉菜单
    languageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageDropdown.classList.toggle('active');
        languageBtn.classList.toggle('active');
    });
    

    
    // 点击语言选项
    languageOptions.forEach((option, index) => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.dataset.lang;
            const flagSrc = option.querySelector('.flag-icon').src;
            const langText = option.querySelector('span').textContent;
            
            console.log('=== 语言切换 ===');
            console.log('当前语言:', currentLang);
            console.log('新语言:', lang);
            
            // 移除所有active状态
            languageOptions.forEach(opt => {
                opt.classList.remove('active');
                const checkIcon = opt.querySelector('.fa-check');
                if (checkIcon) checkIcon.remove();
            });
            
            // 添加active状态和勾选图标
            option.classList.add('active');
            const checkIcon = document.createElement('i');
            checkIcon.className = 'fas fa-check';
            option.appendChild(checkIcon);
            
            // 更新按钮显示
            languageBtn.querySelector('.flag-icon').src = flagSrc;
            languageBtn.querySelector('span').textContent = langText;
            
            // 关闭下拉菜单
            languageDropdown.classList.remove('active');
            languageBtn.classList.remove('active');
            
            // 保存并切换语言
            localStorage.setItem('selectedLanguage', lang);
            currentLang = lang;
            
            console.log('语言已更新为:', currentLang);
            console.log('开始更新页面...');
            
            // 立即更新页面语言
            updatePageLanguage();
            
            console.log('页面更新完成');
        });
    });
    

    
    // 点击页面其他地方关闭下拉菜单
    document.addEventListener('click', (e) => {
        if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove('active');
            languageBtn.classList.remove('active');
        }
    });
    

}

// 加载保存的语言设置
function loadSavedLanguage() {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang && savedLang !== currentLang) {
        currentLang = savedLang;
        const option = document.querySelector(`.language-option[data-lang="${savedLang}"]`);
        if (option) {
            // 更新UI但不触发点击事件
            const languageBtn = document.getElementById('languageBtn');
            const languageOptions = document.querySelectorAll('.language-option');
            const flagSrc = option.querySelector('.flag-icon').src;
            const langText = option.querySelector('span').textContent;
            
            languageOptions.forEach(opt => {
                opt.classList.remove('active');
                const checkIcon = opt.querySelector('.fa-check');
                if (checkIcon) checkIcon.remove();
            });
            
            option.classList.add('active');
            const checkIcon = document.createElement('i');
            checkIcon.className = 'fas fa-check';
            option.appendChild(checkIcon);
            
            if (languageBtn) {
                languageBtn.querySelector('.flag-icon').src = flagSrc;
                languageBtn.querySelector('span').textContent = langText;
            }
            
            console.log('加载保存的语言:', currentLang);
        }
    }
}

// 显示语言切换通知
function showLanguageChangeNotification(langText) {
    const notification = document.createElement('div');
    notification.className = 'language-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${t('notifications.languageChanged')} ${langText}</span>
    `;
    
    // 添加通知样式
    const style = document.createElement('style');
    style.textContent = `
        .language-notification {
            position: fixed;
            top: 80px;
            right: 20px;
            background: #4caf50;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
            gap: 0.75rem;
            z-index: 10000;
            animation: slideInRight 0.3s ease, slideOutRight 0.3s ease 2.7s;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
        
        .language-notification i {
            font-size: 1.2rem;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    // 3秒后移除通知
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
