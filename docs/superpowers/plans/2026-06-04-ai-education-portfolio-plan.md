# AI 教育作品展示網站 — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 3-page React SPA portfolio site showcasing 5 AI education works in a literary Chinese ink-wash aesthetic.

**Architecture:** React 18 SPA with React Router v7 for 3 routes (Home `/`, Works `/works`, About `/about`). Shared components (Navbar, Footer, WorkCard, FilterTabs) live in `src/components/`. Works data lives in `src/data/works.js`. Tailwind CSS v4 handles styling with CSS custom theme variables.

**Tech Stack:** React 18, Vite, Tailwind CSS v4, Framer Motion, React Router v7, lucide-react

---

### Task 1: Scaffold Vite + React project

**Files:**
- Create: `ai-education-portfolio/` (entire scaffold)

- [ ] **Step 1: Create the Vite project**

Run from `/Users/lishuairui/`:
```bash
cd /Users/lishuairui && npm create vite@latest ai-education-portfolio -- --template react
```

Expected: Scaffolds project with `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`, etc.

- [ ] **Step 2: Clean up default Vite boilerplate**

Remove files we don't need:
```bash
rm /Users/lishuairui/ai-education-portfolio/src/App.css
rm /Users/lishuairui/ai-education-portfolio/src/assets/react.svg
```

- [ ] **Step 3: Install all dependencies**

```bash
cd /Users/lishuairui/ai-education-portfolio && npm install react-router-dom framer-motion lucide-react
```

```bash
cd /Users/lishuairui/ai-education-portfolio && npm install -D tailwindcss @tailwindcss/postcss autoprefixer postcss
```

Expected: All packages install without errors.

- [ ] **Step 4: Commit**

```bash
cd /Users/lishuairui/ai-education-portfolio && git init && git add -A && git commit -m "chore: scaffold Vite + React project with dependencies"
```

---

### Task 2: Configure PostCSS and Tailwind CSS v4

**Files:**
- Create: `ai-education-portfolio/postcss.config.js`
- Rewrite: `ai-education-portfolio/src/index.css`

- [ ] **Step 1: Create postcss.config.js**

Write `ai-education-portfolio/postcss.config.js`:
```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

- [ ] **Step 2: Write index.css with Tailwind import and custom theme**

Write `ai-education-portfolio/src/index.css`:
```css
@import "tailwindcss";

/* ── 人文典雅風色彩主題 ── */
@theme {
  --color-paper: #FBF7F0;
  --color-ink: #2C2416;
  --color-vermilion: #C04040;
  --color-vermilion-light: #D46969;
  --color-cyan-blue: #5B7B8A;
  --color-cyan-blue-light: #7A9BA8;
  --color-antique-gold: #B8956A;
  --color-antique-gold-light: #D4B88C;

  --font-serif: "Noto Serif TC", "Songti SC", "PMingLiU", serif;
  --font-sans: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif;
}

/* ── 全域基礎樣式 ── */
html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-paper);
  color: var(--color-ink);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ── 自訂工具類 ── */
@utility font-serif {
  font-family: var(--font-serif);
}

@utility font-sans {
  font-family: var(--font-sans);
}
```

- [ ] **Step 3: Verify Tailwind compilation**

```bash
cd /Users/lishuairui/ai-education-portfolio && npx tailwindcss --help 2>&1 | head -5
```

Expected: Shows Tailwind CSS help text with version 4.x.

- [ ] **Step 4: Commit**

```bash
cd /Users/lishuairui/ai-education-portfolio && git add -A && git commit -m "chore: configure Tailwind CSS v4 with custom literary theme"
```

---

### Task 3: Update index.html with fonts and meta

**Files:**
- Modify: `ai-education-portfolio/index.html`

- [ ] **Step 1: Rewrite index.html**

Write `ai-education-portfolio/index.html`:
```html
<!doctype html>
<html lang="zh-HK">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="李帥銳 AI 教育作品集 — 用 AI 點亮中文教育的無限可能" />
    <title>AI 教育作品集 · 李帥銳</title>

    <!-- Google Fonts: 思源宋體 + 思源黑體 -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 2: Commit**

```bash
cd /Users/lishuairui/ai-education-portfolio && git add -A && git commit -m "chore: update index.html with Chinese fonts and meta"
```

---

### Task 4: Create works data file

**Files:**
- Create: `ai-education-portfolio/src/data/works.js`

- [ ] **Step 1: Create directory and data file**

```bash
mkdir -p /Users/lishuairui/ai-education-portfolio/src/data
```

Write `ai-education-portfolio/src/data/works.js`:
```js
const works = [
  {
    id: "li-bai",
    title: "走進李白的詩世界",
    category: "web",
    description: "香港小學唐詩互動學習網站，12 頁沉浸式詩歌探索體驗",
    tech: "React + Vite + Tailwind CSS + Framer Motion",
    thumbnail: "🖼️ 封面縮圖",
    link: "#", // TODO: 填入實際部署網址
    featured: true,
  },
  {
    id: "essay-grader",
    title: "AI 作文批改",
    category: "web",
    description: "AI 輔助中文作文批改工具，結合 Claude API 智能評分",
    tech: "Express + Anthropic SDK + Claude API",
    thumbnail: "🖼️ 封面縮圖",
    link: "#", // TODO: 填入實際部署網址
    featured: false,
  },
  {
    id: "writing-elf",
    title: "寫作小精靈",
    category: "web",
    description: "AI 寫作助手，支援 OCR 手寫辨識與 AI 智能評分回饋",
    tech: "HTML + Tesseract.js + Claude API",
    thumbnail: "🖼️ 封面縮圖",
    link: "https://lisruii.github.io/-/chinese-writing-tool.html", // 部署後更新
    featured: true,
  },
  {
    id: "mecha-transform",
    title: "機甲變身",
    category: "video",
    description: "AI 生成動畫影片，科幻機甲主題創意作品",
    tech: "AI 影片生成",
    thumbnail: "🖼️ 封面縮圖",
    link: "#", // TODO: 填入 Google Drive 連結
    featured: true,
  },
  {
    id: "kafka-bug",
    title: "《卡夫卡變蟲記》",
    category: "video",
    description: "AI 繪本故事影片，經典文學改編視覺化創作",
    tech: "AI 繪本生成",
    thumbnail: "🖼️ 封面縮圖",
    link: "#", // TODO: 填入 Google Drive 連結
    featured: false,
  },
];

export default works;

export const categories = [
  { key: "all", label: "全部" },
  { key: "web", label: "Web App" },
  { key: "video", label: "影片" },
];

export const featuredWorks = works.filter((w) => w.featured);
```

- [ ] **Step 2: Commit**

```bash
cd /Users/lishuairui/ai-education-portfolio && git add -A && git commit -m "feat: add works data file with all 5 AI projects"
```

---

### Task 5: Create Footer component

**Files:**
- Create: `ai-education-portfolio/src/components/Footer.jsx`

- [ ] **Step 1: Create components directory and Footer**

```bash
mkdir -p /Users/lishuairui/ai-education-portfolio/src/components
```

Write `ai-education-portfolio/src/components/Footer.jsx`:
```jsx
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-antique-gold/30 bg-paper py-8">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Divider ornament */}
        <div className="mx-auto mb-4 h-px w-16 bg-vermilion/40" />

        <p className="mb-2 text-sm text-ink/60 font-serif">
          &copy; 2026 李帥銳 &middot; AI 教育作品集
        </p>

        <div className="flex items-center justify-center gap-6 text-sm text-ink/50">
          <a
            href="mailto:lishuairui2003@gmail.com"
            className="flex items-center gap-1.5 transition-colors hover:text-vermilion"
          >
            <Mail size={14} />
            lishuairui2003@gmail.com
          </a>
          <a
            href="tel:+85256335872"
            className="flex items-center gap-1.5 transition-colors hover:text-vermilion"
          >
            <Phone size={14} />
            5633 5872
          </a>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/lishuairui/ai-education-portfolio && git add -A && git commit -m "feat: add Footer component with contact info"
```

---

### Task 6: Create Navbar component

**Files:**
- Create: `ai-education-portfolio/src/components/Navbar.jsx`

- [ ] **Step 1: Write Navbar.jsx**

Write `ai-education-portfolio/src/components/Navbar.jsx`:
```jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "首頁" },
  { to: "/works", label: "作品展示" },
  { to: "/about", label: "關於我" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-paper/80 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-ink transition-colors hover:text-vermilion font-serif tracking-wide"
        >
          李帥銳
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                isActive(link.to)
                  ? "text-vermilion"
                  : "text-ink/70 hover:text-vermilion"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="rounded-lg p-2 text-ink/70 hover:text-vermilion md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "關閉選單" : "開啟選單"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-antique-gold/20 bg-paper/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-2 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "bg-vermilion/10 text-vermilion"
                    : "text-ink/70 hover:bg-antique-gold/10 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/lishuairui/ai-education-portfolio && git add -A && git commit -m "feat: add Navbar component with scroll effect and mobile menu"
```

---

### Task 7: Create FilterTabs component

**Files:**
- Create: `ai-education-portfolio/src/components/FilterTabs.jsx`

- [ ] **Step 1: Write FilterTabs.jsx**

Write `ai-education-portfolio/src/components/FilterTabs.jsx`:
```jsx
import { categories } from "../data/works";

export default function FilterTabs({ activeCategory, onCategoryChange }) {
  return (
    <div className="mb-10 flex justify-center gap-2">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.key;
        return (
          <button
            key={cat.key}
            onClick={() => onCategoryChange(cat.key)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 ${
              isActive
                ? "border-vermilion bg-vermilion text-white shadow-sm"
                : "border-antique-gold/40 bg-transparent text-ink/60 hover:border-antique-gold hover:text-ink"
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/lishuairui/ai-education-portfolio && git add -A && git commit -m "feat: add FilterTabs component for category switching"
```

---

### Task 8: Create WorkCard component

**Files:**
- Create: `ai-education-portfolio/src/components/WorkCard.jsx`

- [ ] **Step 1: Write WorkCard.jsx**

Write `ai-education-portfolio/src/components/WorkCard.jsx`:
```jsx
import { ExternalLink, Monitor, Film } from "lucide-react";

export default function WorkCard({ work }) {
  const isVideo = work.category === "video";

  return (
    <a
      href={work.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-antique-gold/20 bg-white/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-antique-gold/60 hover:shadow-md"
    >
      {/* Thumbnail area */}
      <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-antique-gold/10 text-4xl">
        {work.thumbnail}
      </div>

      {/* Title */}
      <h3 className="mb-1 text-lg font-bold text-ink font-serif group-hover:text-vermilion transition-colors">
        {work.title}
      </h3>

      {/* Description */}
      <p className="mb-3 text-sm leading-relaxed text-ink/60">
        {work.description}
      </p>

      {/* Category tag + Link indicator */}
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
            isVideo
              ? "bg-cyan-blue/10 text-cyan-blue"
              : "bg-vermilion/10 text-vermilion"
          }`}
        >
          {isVideo ? (
            <>
              <Film size={12} /> 影片
            </>
          ) : (
            <>
              <Monitor size={12} /> Web App
            </>
          )}
        </span>

        <span className="flex items-center gap-1 text-xs text-antique-gold opacity-0 transition-opacity group-hover:opacity-100">
          進入作品 <ExternalLink size={12} />
        </span>
      </div>
    </a>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/lishuairui/ai-education-portfolio && git add -A && git commit -m "feat: add WorkCard component with hover effects"
```

---

### Task 9: Create About page

**Files:**
- Create: `ai-education-portfolio/src/pages/About.jsx`

- [ ] **Step 1: Create pages directory and About.jsx**

```bash
mkdir -p /Users/lishuairui/ai-education-portfolio/src/pages
```

Write `ai-education-portfolio/src/pages/About.jsx`:
```jsx
import { Mail, Phone, MapPin } from "lucide-react";

const SKILLS = [
  "AI 應用開發",
  "Web 前端開發",
  "React / Vue",
  "中文課程設計",
  "互動教材製作",
  "AI Prompt 工程",
  "Claude API 整合",
  "多媒體教學內容創作",
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-6">
        {/* Page title */}
        <h1 className="mb-12 text-center text-3xl font-bold text-ink font-serif">
          關於我
        </h1>

        {/* Profile card */}
        <div className="rounded-2xl border border-antique-gold/20 bg-white/60 p-8 shadow-sm md:p-12">
          {/* Photo + Name */}
          <div className="mb-8 flex flex-col items-center gap-6 md:flex-row md:items-start">
            {/* Profile photo */}
            <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-2xl border-2 border-antique-gold/30 shadow-md">
              <img
                src="/images/profile.jpg"
                alt="李帥銳"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-ink font-serif">李帥銳</h2>
              <p className="text-sm text-ink/50 font-sans">Li Shuairui</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
                <span className="rounded-full bg-vermilion/10 px-3 py-1 text-xs font-medium text-vermilion">
                  香港中文教育工作者
                </span>
                <span className="rounded-full bg-cyan-blue/10 px-3 py-1 text-xs font-medium text-cyan-blue">
                  AI + 教育的探索者
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="mb-8 border-l-2 border-vermilion/30 pl-4">
            <p className="text-ink/70 leading-relaxed">
              將 AI 技術融入中文教學，打造讓學生沉浸其中的學習體驗。
              致力於用科技點亮教育，讓每一個孩子都能在創新的學習方式中找到樂趣。
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-bold text-ink font-serif flex items-center gap-2">
              <span className="inline-block h-5 w-1 rounded-full bg-vermilion" />
              技能專長
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-antique-gold/30 bg-antique-gold/5 px-3 py-1.5 text-sm text-ink/70 transition-colors hover:border-vermilion/30 hover:bg-vermilion/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-ink font-serif flex items-center gap-2">
              <span className="inline-block h-5 w-1 rounded-full bg-vermilion" />
              聯絡方式
            </h3>
            <div className="flex flex-col gap-3 text-sm text-ink/60 sm:flex-row sm:gap-8">
              <a
                href="mailto:lishuairui2003@gmail.com"
                className="flex items-center gap-2 transition-colors hover:text-vermilion"
              >
                <Mail size={16} className="text-antique-gold" />
                lishuairui2003@gmail.com
              </a>
              <a
                href="tel:+85256335872"
                className="flex items-center gap-2 transition-colors hover:text-vermilion"
              >
                <Phone size={16} className="text-antique-gold" />
                5633 5872
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-antique-gold" />
                香港
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/lishuairui/ai-education-portfolio && git add -A && git commit -m "feat: add About page with profile, skills, and contact"
```

---

### Task 10: Create Works page

**Files:**
- Create: `ai-education-portfolio/src/pages/Works.jsx`

- [ ] **Step 1: Write Works.jsx**

Write `ai-education-portfolio/src/pages/Works.jsx`:
```jsx
import { useState } from "react";
import works from "../data/works";
import WorkCard from "../components/WorkCard";
import FilterTabs from "../components/FilterTabs";

export default function Works() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? works
      : works.filter((w) => w.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Page title */}
        <h1 className="mb-2 text-center text-3xl font-bold text-ink font-serif">
          作品展示
        </h1>
        <p className="mb-10 text-center text-sm text-ink/50">
          點擊作品卡片，進入完整體驗
        </p>

        {/* Filter tabs */}
        <FilterTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Works grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <p className="mt-12 text-center text-ink/40">暫無作品</p>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/lishuairui/ai-education-portfolio && git add -A && git commit -m "feat: add Works page with filtering and grid layout"
```

---

### Task 11: Create Home page

**Files:**
- Create: `ai-education-portfolio/src/pages/Home.jsx`

- [ ] **Step 1: Write Home.jsx**

Write `ai-education-portfolio/src/pages/Home.jsx`:
```jsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { featuredWorks } from "../data/works";
import WorkCard from "../components/WorkCard";

export default function Home() {
  return (
    <div>
      {/* ── Hero Section ── */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        {/* Ink-wash background layer */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-paper/40 via-paper/80 to-paper" />

        {/* Hero content */}
        <div className="relative z-10 px-6 text-center">
          <p className="mb-2 font-sans text-sm tracking-widest text-antique-gold uppercase">
            AI Education Portfolio
          </p>
          <h1 className="mb-3 text-5xl font-bold text-ink font-serif md:text-6xl">
            李帥銳
          </h1>
          <p className="mb-2 text-lg text-ink/70 font-serif">
            AI 教育作品集
          </p>
          <p className="mb-10 text-base text-ink/50">
            用 AI 點亮中文教育的無限可能
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/works"
              className="inline-flex items-center gap-2 rounded-full bg-vermilion px-7 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-vermilion-light hover:shadow-md"
            >
              瀏覽作品
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-antique-gold/50 px-7 py-3 text-sm font-medium text-ink/70 transition-all hover:border-antique-gold hover:text-ink"
            >
              關於我
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Works Section ── */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* Section heading */}
          <div className="mb-10 text-center">
            <div className="mx-auto mb-3 h-px w-12 bg-vermilion/40" />
            <h2 className="text-2xl font-bold text-ink font-serif">精選作品</h2>
          </div>

          {/* Featured cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredWorks.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>

          {/* View all link */}
          <div className="mt-10 text-center">
            <Link
              to="/works"
              className="inline-flex items-center gap-1 text-sm text-antique-gold transition-colors hover:text-vermilion"
            >
              查看所有作品 <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/lishuairui/ai-education-portfolio && git add -A && git commit -m "feat: add Home page with Hero and featured works sections"
```

---

### Task 12: Set up App.jsx with React Router and main.jsx entry

**Files:**
- Rewrite: `ai-education-portfolio/src/App.jsx`
- Rewrite: `ai-education-portfolio/src/main.jsx`

- [ ] **Step 1: Write App.jsx**

Write `ai-education-portfolio/src/App.jsx`:
```jsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";

function AnimatedRoutes() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
```

- [ ] **Step 2: Write main.jsx**

Write `ai-education-portfolio/src/main.jsx`:
```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

- [ ] **Step 3: Start dev server to verify**

```bash
cd /Users/lishuairui/ai-education-portfolio && npm run dev -- --host 127.0.0.1 --port 5173
```

Open `http://127.0.0.1:5173/` in browser.

Expected:
- Home page renders with Navbar, Hero, featured works, and Footer
- Navigate to `/works` — shows works grid with filter tabs
- Navigate to `/about` — shows profile page
- Navbar scroll effect works

- [ ] **Step 4: Commit**

```bash
cd /Users/lishuairui/ai-education-portfolio && git add -A && git commit -m "feat: wire up App.jsx with React Router and all pages"
```

---

### Task 13: Add Framer Motion page transitions and Hero animation

**Files:**
- Modify: `ai-education-portfolio/src/App.jsx`
- Modify: `ai-education-portfolio/src/pages/Home.jsx`

- [ ] **Step 1: Add page transition wrapper to App.jsx**

Replace `AnimatedRoutes` in `ai-education-portfolio/src/App.jsx`:
```jsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/works" element={<PageWrapper><Works /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
```

- [ ] **Step 2: Add Hero entrance animation to Home.jsx**

In `ai-education-portfolio/src/pages/Home.jsx`, wrap the Hero content in motion elements.

At the top, add import:
```jsx
import { motion } from "framer-motion";
```

Replace the Hero content div (the `relative z-10 px-6 text-center` div) with:
```jsx
<motion.div
  className="relative z-10 px-6 text-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
  <motion.p
    className="mb-2 font-sans text-sm tracking-widest text-antique-gold uppercase"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }}
  >
    AI Education Portfolio
  </motion.p>
  <motion.h1
    className="mb-3 text-5xl font-bold text-ink font-serif md:text-6xl"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
  >
    李帥銳
  </motion.h1>
  <motion.p
    className="mb-2 text-lg text-ink/70 font-serif"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.8 }}
  >
    AI 教育作品集
  </motion.p>
  <motion.p
    className="mb-10 text-base text-ink/50"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.8 }}
  >
    用 AI 點亮中文教育的無限可能
  </motion.p>
  <motion.div
    className="flex items-center justify-center gap-4"
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.0, duration: 0.8 }}
  >
    <Link
      to="/works"
      className="inline-flex items-center gap-2 rounded-full bg-vermilion px-7 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-vermilion-light hover:shadow-md"
    >
      瀏覽作品
      <ArrowRight size={16} />
    </Link>
    <Link
      to="/about"
      className="inline-flex items-center gap-2 rounded-full border border-antique-gold/50 px-7 py-3 text-sm font-medium text-ink/70 transition-all hover:border-antique-gold hover:text-ink"
    >
      關於我
    </Link>
  </motion.div>
</motion.div>
```

- [ ] **Step 3: Verify animations in browser**

```bash
cd /Users/lishuairui/ai-education-portfolio && npm run dev -- --host 127.0.0.1 --port 5173
```

Open `http://127.0.0.1:5173/`. Verify:
- Hero text animates in with staggered fade-up
- Page transitions animate on navigation

- [ ] **Step 4: Commit**

```bash
cd /Users/lishuairui/ai-education-portfolio && git add -A && git commit -m "feat: add Framer Motion page transitions and Hero animations"
```

---

### Task 14: Add assets — profile photo and hero background

**Files:**
- Create: `ai-education-portfolio/public/images/profile.jpg`
- Create: `ai-education-portfolio/public/images/hero-bg.png`
- Create: `ai-education-portfolio/public/favicon.svg`

- [ ] **Step 1: Create images directory and copy profile photo**

```bash
mkdir -p /Users/lishuairui/ai-education-portfolio/public/images
```

Copy the profile photo from the user's upload. The photo was provided during the design session. Locate and copy it:
```bash
# User to provide the source path of their profile photo, then:
cp /path/to/profile-photo.jpg /Users/lishuairui/ai-education-portfolio/public/images/profile.jpg
```

- [ ] **Step 2: Create a placeholder hero background**

Create a simple SVG-based ink-wash style background. Write `ai-education-portfolio/public/images/hero-bg.png`:

Since we need a real image, generate a simple CSS gradient as fallback and use a placeholder. For now, update `Home.jsx` to use a CSS gradient when the image is unavailable:

No changes needed — the CSS gradient overlay in Home.jsx handles the fallback. For the final hero-bg.png, the user can replace it with a real ink-wash mountain illustration later.

- [ ] **Step 3: Create favicon.svg**

Write `ai-education-portfolio/public/favicon.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="20" fill="#FBF7F0"/>
  <text x="50" y="68" text-anchor="middle" font-size="56" font-family="serif" fill="#C04040">李</text>
</svg>
```

- [ ] **Step 4: Commit**

```bash
cd /Users/lishuairui/ai-education-portfolio && git add -A && git commit -m "feat: add profile photo placeholder and favicon"
```

---

### Task 15: Final build, verify, and polish

**Files:**
- Potentially modify: any file with issues found during verification

- [ ] **Step 1: Run production build**

```bash
cd /Users/lishuairui/ai-education-portfolio && npm run build
```

Expected: Build succeeds with no errors. Output goes to `dist/`.

- [ ] **Step 2: Preview the production build**

```bash
cd /Users/lishuairui/ai-education-portfolio && npm run preview -- --host 127.0.0.1 --port 4173
```

Open `http://127.0.0.1:4173/` and verify:
- Home page: Hero animates, featured works show 3 cards
- Works page: All 5 works show, filtering works (全部/Web App/影片)
- About page: Profile, skills, contact display correctly
- Navbar: Scroll effect, mobile hamburger menu works
- Footer: Contact links work (mailto/tel)
- Page transitions: Smooth fade on navigation
- Responsive: Test at mobile (375px), tablet (768px), desktop (1280px)

- [ ] **Step 3: Fix any issues found**

Make corrections as needed, then re-run build to confirm:
```bash
cd /Users/lishuairui/ai-education-portfolio && npm run build
```

- [ ] **Step 4: Commit**

```bash
cd /Users/lishuairui/ai-education-portfolio && git add -A && git commit -m "chore: final build verified and polished"
```

---

## Post-Plan: Before Deployment

The following items need user input before going live:

1. **Web App URLs** — Provide actual deployment URLs for:
   - 走進李白的詩世界
   - AI 作文批改
   - 寫作小精靈

2. **Google Drive Links** — Provide shareable Google Drive links for:
   - 機甲變身
   - 《卡夫卡變蟲記》

3. **Profile Photo** — Provide the source file path of the profile photo

4. **Hero Background** — Optionally provide a custom ink-wash mountain illustration; otherwise CSS gradient fallback is used

5. **Deployment** — Deploy to Vercel:
   ```bash
   cd /Users/lishuairui/ai-education-portfolio && npx vercel --prod
   ```

---
