const works = [
  {
    id: "zi-li-qian-kun",
    title: "字裏乾坤",
    category: "web",
    description: "漢字探源互動教學網站，帶領學生探索漢字形音義的演變與文化底蘊",
    tech: "React + TypeScript + Vite + Tailwind CSS",
    thumbnail: "/images/thumbnails/zi-li-qian-kun-cover.png",
    link: "https://lisruii.github.io/-/zi-li-qian-kun/",
    featured: true,
  },
  {
    id: "li-bai",
    title: "走進詩仙李白的世界",
    category: "web",
    description: "香港小學唐詩互動學習網站，沉浸式詩歌探索體驗",
    tech: "React + Vite + Tailwind CSS + Framer Motion",
    thumbnail: "/images/thumbnails/li-bai-thumb.png",
    link: "https://lisruii.github.io/-/li-bai/",
    featured: true,
  },
  {
    id: "bu-jian-lian-zi-lu",
    title: "部件煉字爐",
    category: "web",
    description: "香港小學 P.3-P.4 漢字學習互動網站，透過組合部件認識漢字結構，含限時挑戰、連擊獎勵與煉字爐組合動畫",
    tech: "HTML + CSS + JavaScript (Vanilla) + Web Audio API",
    thumbnail: "/images/thumbnails/bu-jian-lian-zi-lu-cover.jpeg",
    link: "https://lisruii.github.io/-/bu-jian-lian-zi-lu/",
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
    id: "narrative-writing-p6",
    title: "記敘文寫作增潤課程",
    category: "teaching",
    description: "小六中文寫作增潤教材，帶領學生掌握記敘文六要素、情節轉折、人物描寫與句子升級",
    tech: "HTML + CSS + JavaScript",
    thumbnail: "/images/thumbnails/narrative-writing-p6-cover.jpg",
    link: "works/narrative-writing-p6.html",
    featured: true,
  },
  {
    id: "mecha-transform",
    title: "機甲變身",
    category: "video",
    description: "可作為描寫文寫作導入材料，引導學生觀察角色外型、動作、場景等變化",
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
  { key: "teaching", label: "教學資源" },
  { key: "video", label: "影片" },
];

export const featuredWorks = works.filter((w) => w.featured);
export const homeFeaturedWorks = featuredWorks.slice(0, 3);
