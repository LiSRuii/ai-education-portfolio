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
      <div className="mb-4 flex h-40 items-center justify-center overflow-hidden rounded-lg bg-antique-gold/10">
        {work.thumbnail.startsWith("/") ? (
          <img
            src={import.meta.env.BASE_URL + work.thumbnail.slice(1)}
            alt={work.title}
            className="h-full w-full object-cover"
          />
        ) : work.thumbnail.startsWith("http") ? (
          <img
            src={work.thumbnail}
            alt={work.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-4xl">{work.thumbnail}</span>
        )}
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
