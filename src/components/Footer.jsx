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
