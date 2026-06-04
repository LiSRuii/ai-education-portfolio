import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
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
