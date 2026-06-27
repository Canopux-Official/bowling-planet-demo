import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type QuoteItem = { id: string; name: string; category: string };

type Ctx = {
  items: QuoteItem[];
  add: (it: QuoteItem) => void;
  remove: (id: string) => void;
  clear: () => void;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const QuoteCtx = createContext<Ctx | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("bp_quote");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("bp_quote", JSON.stringify(items));
    } catch {}
  }, [items]);

  const value = useMemo<Ctx>(
    () => ({
      items,
      add: (it) => setItems((cur) => (cur.find((c) => c.id === it.id) ? cur : [...cur, it])),
      remove: (id) => setItems((cur) => cur.filter((c) => c.id !== id)),
      clear: () => setItems([]),
      open,
      setOpen,
    }),
    [items, open]
  );

  return <QuoteCtx.Provider value={value}>{children}</QuoteCtx.Provider>;
}

export function useQuote() {
  const ctx = useContext(QuoteCtx);
  if (!ctx) throw new Error("useQuote must be used inside QuoteProvider");
  return ctx;
}
