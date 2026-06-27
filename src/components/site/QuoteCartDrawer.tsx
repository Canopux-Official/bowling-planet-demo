import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuote } from "./QuoteCart";

export function QuoteCartDrawer() {
  const { open, setOpen, items, remove, clear } = useQuote();
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-navy/40"
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div>
            <p className="eyebrow">Request Quotation</p>
            <h3 className="text-xl">Your Project Wishlist</h3>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close" className="p-2 rounded-md hover:bg-secondary">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-auto p-5">
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Add solutions and attractions to build a tailored proposal request for your project.
            </p>
          ) : (
            <ul className="space-y-3">
              {items.map((it) => (
                <li key={it.id} className="flex items-start justify-between gap-3 p-3 border border-border rounded-[10px]">
                  <div>
                    <p className="font-semibold text-navy">{it.name}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{it.category}</p>
                  </div>
                  <button onClick={() => remove(it.id)} className="text-xs text-muted-foreground hover:text-destructive">
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t border-border p-5 space-y-3">
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-accent w-full justify-center"
          >
            Request Proposal
          </Link>
          {items.length > 0 && (
            <button onClick={clear} className="w-full text-xs text-muted-foreground hover:text-navy">
              Clear list
            </button>
          )}
        </div>
      </aside>
    </div>
  );
}
