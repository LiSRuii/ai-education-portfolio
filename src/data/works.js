const works = [
  {
    id: "li-bai",
    title: "走進李白的詩世界",
    category: "web",
    description: "香港小學唐詩互動學習網站，12 頁沉浸式詩歌探索體驗",
    tech: "React + Vite + Tailwind CSS + Framer Motion",
    thumbnail: "/images/thumbnails/li-bai-thumb.png",
    link: "http://127.0.0.1:5174/",
    featured: true,
  },
  {
    id: "essay-grader",
    title: "AI 作文批改",
    category: "web",
    description: "AI 輔助中文作文批改工具，結合 Claude API 智能評分",
    tech: "Express + Anthropic SDK + Claude API",
    thumbnail: "🖼️ 封面縮圖",
    link: "#",
    featured: false,
  },
  {
    id: "writing-elf",
    title: "寫作小精靈",
    category: "web",
    description: "AI 寫作助手，支援 OCR 手寫辨識與 AI 智能評分回饋",
    tech: "HTML + Tesseract.js + Claude API",
    thumbnail: "🖼️ 封面縮圖",
    link: "https://lisruii.github.io/-/chinese-writing-tool.html",
    featured: true,
  },
  {
    id: "mecha-transform",
    title: "機甲變身",
    category: "video",
    description: "AI 生成動畫影片，科幻機甲主題創意作品",
    tech: "AI 影片生成",
    thumbnail: "🖼️ 封面縮圖",
    link: "#",
    featured: true,
  },
  {
    id: "kafka-bug",
    title: "《卡夫卡變蟲記》",
    category: "video",
    description: "AI 繪本故事影片，經典文學改編視覺化創作",
    tech: "AI 繪本生成",
    thumbnail: "🖼️ 封面縮圖",
    link: "#",
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
