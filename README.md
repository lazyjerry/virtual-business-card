# SHU-HSIEN LIN's CYBER TERMINAL - Personal Terminal Card

🖥️ 一個以終端機風格呈現的個人介紹頁面，靈感來自 [nz03's Cyber Terminal on Hugging Face](https://huggingface.co/spaces/nz03/nz03)，並依照個人需求進行重製與擴充，適合用作個人名片、社群分享與技術形象展示。

## 🔧 修改說明

本專案原始為 nz03 於 Hugging Face Spaces 發布之 Cyber Terminal 頁面，使用 Canvas 與 JavaScript 實作了 Matrix 背景動畫與打字效果。本版本基於其 HTML 結構與邏輯：

- 新增社群連結與技能矩陣
- 自訂樣式與配色（Tailwind 與客製 CSS）
- 增加 SEO Meta 與社群預覽圖片（`og-image.png`）
- 加入 favicon（`logo.png`）

## 📄 網頁用途

- 作為個人品牌的視覺展示
- 技術背景與技能矩陣的互動式名片
- 可嵌入至 GitHub Pages、個人網站首頁，或分享於社群平台

## 📁 專案結構

html/
├── index.html # 主頁面
├── script.js # Matrix 背景動畫與終端打字邏輯
├── style.css # 自訂樣式
├── og-image.png # 社群預覽圖
├── logo.png # Favicon
├── LICENSE # Apache 2.0 授權條款
└── README.md # 專案說明文件

## 🔑 授權條款

本專案原始程式碼採用 **Apache License 2.0**，您可以自由地使用、修改與發佈本頁面，但請保留原始授權與來源註記。

> 本版本修改自 [https://huggingface.co/spaces/nz03/nz03](https://huggingface.co/spaces/nz03/nz03)
