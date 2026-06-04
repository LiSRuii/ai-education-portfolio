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
                src="/images/profile.svg"
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
