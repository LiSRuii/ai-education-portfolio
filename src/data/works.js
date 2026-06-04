const works = [
  {
    id: "li-bai",
    title: "走進李白的詩世界",
    category: "web",
    description: "香港小學唐詩互動學習網站，沉浸式詩歌探索體驗",
    tech: "React + Vite + Tailwind CSS + Framer Motion",
    thumbnail: "/images/thumbnails/li-bai-thumb.png",
    link: "https://lisruii.github.io/-/li-bai/",
    featured: true,
  },
  {
    id: "writing-elf",
    title: "寫作小精靈",
    category: "web",
    description: "AI 輔助中文寫作與批改工具，支援 OCR 手寫辨識、智能評分與 Claude API 回饋",
    tech: "HTML + Tesseract.js + Claude API",
    thumbnail: "/images/thumbnails/writing-elf-cover.jpeg",
    link: "https://lisruii.github.io/-/chinese-writing-tool.html",
    featured: true,
  },
  {
    id: "mecha-transform",
    title: "機甲變身",
    category: "video",
    description: "激發學生創意寫作與語言表達，將 AI 創作融入跨學科教學活動",
    tech: "AI 影片生成",
    thumbnail: "/images/thumbnails/mecha-cover.jpg",
    link: "https://drive.google.com/file/d/11NXbJbA9KtZM_V4d4IWti1i9ImSON5WB/view?usp=sharing",
    featured: true,
  },
  {
    id: "kafka-bug",
    title: "《卡夫卡變蟲記》",
    category: "video",
    description: "通過影像重塑經典繪本作品，幫助學生視覺化理解文本，加深閱讀體驗",
    tech: "AI 繪本生成",
    thumbnail: "/images/thumbnails/kafka-cover.jpg",
    link: "https://drive.google.com/file/d/1OxRETeHeD7f1GomCMQ-46sCEz4XbDshi/view?usp=drive_link",
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
