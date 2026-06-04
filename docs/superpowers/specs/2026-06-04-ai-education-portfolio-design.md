# AI 教育作品展示網站 — 設計規格書

> 日期：2026-06-04
> 狀態：設計階段

---

## 1. 專案概述

建立一個個人 AI 教育作品展示網站，用於陳列李帥銳的 AI 教育相關作品。網站需同時服務三類受眾：教師/教育工作者、學生/家長、潛在雇主。

## 2. 設計風格：人文典雅風（Literary Ink）

### 2.1 色彩方案

| 顏色 | 色碼 | 用途 |
|------|------|------|
| 宣紙米白 | `#FBF7F0` | 背景主色 |
| 墨色 | `#2C2416` | 主文字 |
| 硃砂紅 | `#C04040` | 重點色、連結、按鈕 |
| 青藍色 | `#5B7B8A` | 次要裝飾、詩意元素 |
| 古金 | `#B8956A` | 卡片邊框、分隔線 |

### 2.2 字體方案

- **標題：** 思源宋體 (Noto Serif TC) — 書卷氣質
- **內文：** 思源黑體 (Noto Sans TC) — 閱讀舒適
- 字體透過 Google Fonts CDN 引入

### 2.3 設計元素

- 水墨山水裝飾插圖（Hero 背景，淡雅半透明）
- 圓角卡片（12px），hover 浮起 + 古金邊框出現
- Navbar 初始透明 → 下滑後半透明宣紙米白底
- 硃砂紅印章風格點綴（如分隔線、按鈕樣式）

---

## 3. 技術架構

### 3.1 技術棧

| 項目 | 選擇 |
|------|------|
| 框架 | React 18 |
| 建置工具 | Vite |
| CSS | Tailwind CSS v4 |
| 動畫 | Framer Motion |
| 路由 | React Router v7 |
| 圖標 | lucide-react |
| 部署 | Vercel / Netlify |

### 3.2 專案結構

```
ai-education-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── hero-bg.png          # 水墨山水背景
│       └── profile.jpg          # 個人照片
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css                # Tailwind + 全域樣式
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── WorkCard.jsx
│   │   └── FilterTabs.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Works.jsx
│   │   └── About.jsx
│   └── data/
│       └── works.js             # 作品資料陣列
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-06-04-ai-education-portfolio-design.md
```

---

## 4. 頁面設計

### 4.1 全域元件

**Navbar：**
- Logo（左側）+ 導航連結：首頁、作品展示、關於我（右側）
- 初始狀態透明，向下滾動後變為半透明宣紙米白底 + 輕微模糊效果
- 移動端使用漢堡選單

**Footer：**
```
© 2026 李帥銳 · AI 教育作品集
✉️ lishuairui2003@gmail.com
📞 5633 5872
```

### 4.2 首頁 `/`

1. **Hero 區塊**
   - 水墨山水插畫背景（淡雅半透明）
   - 姓名：李帥銳
   - 副標：AI 教育作品集
   - 標語：用 AI 點亮中文教育的無限可能
   - CTA 按鈕：[ 瀏覽作品 ] [ 關於我 ]
   - 硃砂紅按鈕＋淡入動畫（墨色暈染效果）

2. **精選作品區**
   - 標題：精選作品
   - 展示 3 張精選作品卡片（橫向排列）
   - 卡片 hover：微微浮起 + 古金邊框浮現

### 4.3 作品展示頁 `/works`

1. **分類篩選標籤**
   - [ 全部 ] [ Web App ] [ 影片 ]

2. **作品卡片牆**
   - 網格排列（桌面 3 欄 → 平板 2 欄 → 手機 1 欄）
   - 每張卡片內容：
     - 封面縮圖
     - 作品名稱（宋體標題）
     - 一句話描述
     - 類型標籤（Web App / 影片）
     - [ 進入作品 → ] 按鈕

3. **點擊行為**
   - Web App → 外連到該作品獨立網址（新分頁）
   - 影片 → 外連到 Google Drive 連結（新分頁）

### 4.4 關於我頁面 `/about`

1. 照片（圓角裁切）＋ 姓名（李帥銳 / Li Shuairui）
2. 身分簡介：香港中文教育工作者、AI + 教育的探索者
3. 個人描述：將 AI 技術融入中文教學，打造讓學生沉浸其中的學習體驗
4. 技能專長區（標籤式展示）
5. 聯絡方式：✉️ lishuairui2003@gmail.com / 📞 5633 5872

---

## 5. 作品資料

### 5.1 作品清單

| # | 作品名稱 | 類型 | 形式 | 描述 | 連結 |
|---|---------|------|------|------|------|
| 1 | 走進李白的詩世界 | Web App | React SPA | 香港小學唐詩互動學習網站 | 獨立網址 |
| 2 | AI 作文批改 | Web App | Express + Claude API | AI 輔助中文作文批改工具 | 獨立網址 |
| 3 | 寫作小精靈 | Web App | HTML + Tesseract.js + Claude API | AI 寫作助手，OCR + AI 評分 | 獨立網址 |
| 4 | 機甲變身 | 影片 | .mp4 | AI 生成動畫影片 | Google Drive |
| 5 | 《卡夫卡變蟲記》 | 影片 | .mov | AI 繪本故事影片 | Google Drive |

### 5.2 分類

| 分類 | 作品 |
|------|------|
| 全部 | 所有 5 個作品 |
| Web App | #1 李白的詩世界、#2 AI 作文批改、#3 寫作小精靈 |
| 影片 | #4 機甲變身、#5 卡夫卡變蟲記 |

---

## 6. 互動與動畫

| 元素 | 動畫效果 |
|------|---------|
| Hero 背景 | framer-motion 淡入（墨色暈染效果，約 1.5s） |
| 作品卡片 hover | 輕微上浮 (translateY: -4px) + 古金邊框漸現 |
| Navbar 滾動 | 透明 → 半透明米白底 + backdrop-blur |
| 頁面切換 | React Router 路由切換，無頁面刷新 |
| 分類標籤切換 | 淡入淡出過濾卡片 |

---

## 7. 不包含的內容（YAGNI）

- 暗色模式（後續可加）
- 多語言切換
- CMS / 後端 API
- 社群連結（GitHub、LinkedIn）
- 聯絡表單（直接用 mailto 連結）
- 作品內頁（直接外連到各作品獨立網址）
- SEO meta（後續可加）

---

## 8. 部署

- 平台：Vercel 或 Netlify（免費方案）
- 建置指令：`npm run build`
- 輸出目錄：`dist/`
- 自訂網域：後續決定

---

## 9. 作品外連設定

開發初期，所有作品連結使用佔位網址。上線前需提供：

- 每個 Web App 的實際部署網址
- 每個影片的 Google Drive 分享連結

---
