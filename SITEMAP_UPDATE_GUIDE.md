# 站点地图定期更新说明

## 概述

本项目包含自动化脚本，用于定期更新网站的 `sitemap.xml` 文件。站点地图对于SEO优化非常重要，它帮助搜索引擎更好地抓取和索引网站内容。

## 文件说明

1. **update-sitemap.py** - Python脚本，用于扫描网站目录并生成站点地图
2. **update-sitemap.sh** - Shell脚本，用于执行站点地图更新过程
3. **sitemap.xml** - 生成的站点地图文件

## 脚本功能

### update-sitemap.py

该Python脚本具有以下功能：

- 自动扫描网站根目录中的所有HTML文件
- 排除测试页面和其他不需要索引的文件
- 根据文件修改时间设置`lastmod`字段
- 为不同页面设置适当的优先级和更新频率
- 生成符合标准的XML格式站点地图

### update-sitemap.sh

该Shell脚本用于：

- 设置正确的工作目录
- 执行Python脚本
- 记录执行日志
- 提供错误处理机制

## 配置说明

脚本中的主要配置项：

```python
CONFIG = {
    'site_url': 'https://yoursite.com',  # 网站URL
    'root_dir': os.path.dirname(os.path.abspath(__file__)),  # 网站根目录
    'sitemap_file': os.path.join(os.path.dirname(os.path.abspath(__file__)), 'sitemap.xml'),  # 站点地图文件路径
    'exclude_patterns': [  # 排除模式
        'test-*',
        'debug-*',
        'login-test.html',
        'click-test.html',
        'sitemap.xml',
        'robots.txt',
        '*.md',
        '*.json',
        '*.toml',
        '*.css',
        '*.js',
        '.*'
    ],
    'page_priorities': {  # 页面优先级
        'index.html': 1.0,
        'contact.html': 0.8,
        'privacy.html': 0.5,
        'terms.html': 0.5
    },
    'change_frequencies': {  # 更新频率
        'index.html': 'weekly',
        'contact.html': 'monthly',
        'privacy.html': 'monthly',
        'terms.html': 'monthly'
    }
}
```

## 设置定期更新

### macOS/Linux 系统

使用 cron 设置定期任务：

1. 打开终端并编辑 crontab：
   ```bash
   crontab -e
   ```

2. 添加以下行以每天凌晨2点更新站点地图：
   ```bash
   0 2 * * * /Users/macbookpro/Desktop/cursor/ballstar/web/update-sitemap.sh >> /Users/macbookpro/Desktop/cursor/ballstar/web/sitemap-update.log 2>&1
   ```

3. 保存并退出编辑器

### 不同更新频率的cron示例

- **每天更新**：`0 2 * * *` (每天凌晨2点)
- **每周更新**：`0 2 * * 0` (每周日凌晨2点)
- **每月更新**：`0 2 1 * *` (每月1日凌晨2点)

## 手动执行

可以直接运行以下命令手动更新站点地图：

```bash
cd /Users/macbookpro/Desktop/cursor/ballstar/web
python3 update-sitemap.py
```

或者使用Shell脚本：

```bash
cd /Users/macbookpro/Desktop/cursor/ballstar/web
./update-sitemap.sh
```

## 验证站点地图

更新后，可以通过以下方式验证站点地图：

1. 直接打开 `sitemap.xml` 文件查看内容
2. 在浏览器中访问 `https://yoursite.com/sitemap.xml`
3. 使用在线XML验证工具检查格式

## 提交到搜索引擎

可以通过以下URL将站点地图提交给主要搜索引擎：

- Google: https://www.google.com/ping?sitemap=https://yoursite.com/sitemap.xml
- Bing: https://bing.com/ping?sitemap=https://yoursite.com/sitemap.xml

要自动提交，在 `update-sitemap.sh` 中取消注释相关行即可。

## 故障排除

### 常见问题

1. **权限问题**：
   确保脚本具有执行权限：
   ```bash
   chmod +x update-sitemap.sh
   ```

2. **Python未找到**：
   确保系统中安装了Python3：
   ```bash
   which python3
   ```

3. **路径问题**：
   确保脚本中的路径配置正确

### 日志查看

所有执行日志都会输出到终端，如果通过cron执行，日志会记录在 `sitemap-update.log` 文件中。

## 自定义配置

可以根据需要修改脚本中的配置：

1. **添加排除模式**：在 `exclude_patterns` 中添加需要排除的文件模式
2. **调整页面优先级**：修改 `page_priorities` 字典
3. **更改更新频率**：修改 `change_frequencies` 字典
4. **修改网站URL**：更新 `site_url` 配置项

## 注意事项

1. 站点地图文件会覆盖原有内容，请确保备份重要数据
2. 定期检查cron任务执行情况
3. 监控日志文件大小，避免占用过多磁盘空间
4. 如果网站结构发生重大变化，可能需要调整脚本配置