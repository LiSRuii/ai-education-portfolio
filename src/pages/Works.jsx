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
