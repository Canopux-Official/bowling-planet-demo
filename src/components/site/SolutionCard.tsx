import { ArrowUpRight, Plus, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuote } from "./QuoteCart";
import type { Solution } from "@/lib/solutions-data";

export function SolutionCard({ s }: { s: Solution }) {
  const { add, items } = useQuote();
  const added = items.some((i) => i.id === s.id);
  return (
    <article className="group card-surface overflow-hidden flex flex-col transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-22px_rgba(18,43,76,0.35)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={s.image}
          alt={s.name}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute top-3 left-3 text-[11px] font-semibold tracking-[0.18em] uppercase bg-white/95 text-navy px-2.5 py-1 rounded">
          {s.category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-[22px] leading-tight">{s.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
        <ul className="mt-4 grid grid-cols-2 gap-y-1.5 gap-x-3 text-[13px] text-navy/80">
          {s.highlights.map((h) => (
            <li key={h} className="flex items-start gap-1.5">
              <Check className="h-3.5 w-3.5 mt-0.5 text-green-deep shrink-0" />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
          <Link to={`/product/${s.id}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-green-deep">
            Explore solution <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            onClick={() => add({ id: s.id, name: s.name, category: s.category })}
            disabled={added}
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-[8px] border transition ${
              added
                ? "border-green-deep bg-green/15 text-green-deep cursor-default"
                : "border-border text-navy hover:border-navy"
            }`}
          >
            {added ? (
              <>
                <Check className="h-3.5 w-3.5" /> Added
              </>
            ) : (
              <>
                <Plus className="h-3.5 w-3.5" /> Add to quote
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
