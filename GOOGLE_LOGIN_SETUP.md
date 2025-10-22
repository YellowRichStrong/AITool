# Google 登录配置指南

## 🚀 快速开始

要启用真实的Google登录功能，您需要按照以下步骤配置Google Client ID：

### 1. 创建Google Cloud项目

1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 创建新项目或选择现有项目
3. 启用 Google Identity Services API

### 2. 配置OAuth 2.0客户端ID

1. 在Google Cloud Console中，转到"凭据"页面
2. 点击"创建凭据" → "OAuth 2.0客户端ID"
3. 选择"Web应用程序"
4. 在"已获授权的JavaScript来源"中添加您的域名：
   - `http://localhost` (用于本地测试)
   - `https://yourdomain.com` (您的实际域名)
5. 在"已获授权的重定向URI"中添加：
   - `http://localhost` (用于本地测试)
   - `https://yourdomain.com` (您的实际域名)

### 3. 获取Client ID

创建完成后，您会得到一个Client ID，格式类似：
```
123456789-abcdefghijklmnop.apps.googleusercontent.com
```

### 4. 更新代码

在 `script.js` 文件中找到这一行：
```javascript
client_id: 'YOUR_GOOGLE_CLIENT_ID', // 需要替换为实际的Google Client ID
```

将其替换为您的实际Client ID：
```javascript
client_id: '123456789-abcdefghijklmnop.apps.googleusercontent.com',
```

### 5. 测试功能

1. 保存文件并刷新页面
2. 点击【登录】按钮
3. 点击"使用Google登录"
4. 选择您的Google账户
5. 确认授权
6. 查看登录成功效果

## 🔧 当前状态

目前代码已经配置为使用Google Identity Services API，但使用的是占位符Client ID。

## 📝 注意事项

- 确保您的域名在Google Cloud Console中已正确配置
- 本地测试时使用 `http://localhost`
- 生产环境使用HTTPS域名
- Client ID是公开的，可以安全地包含在前端代码中

## 🎯 功能特性

- ✅ 真实的Google OAuth 2.0登录
- ✅ 获取用户基本信息（姓名、邮箱、头像）
- ✅ 安全的JWT token验证
- ✅ 自动更新用户界面
- ✅ 退出登录功能
- ✅ 响应式设计

配置完成后，您就可以享受完整的Google登录体验了！

