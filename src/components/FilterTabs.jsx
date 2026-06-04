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
