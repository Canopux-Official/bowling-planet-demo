import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ClipboardList } from "lucide-react";
import { Logo } from "./Logo";
import { useQuote } from "./QuoteCart";

const NAV = [
  { to: "/solutions", label: "Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/franchise", label: "Franchise" },
  { to: "/roi-calculator", label: "ROI Calculator" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { items, setOpen: setCartOpen } = useQuote();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const onDark = !scrolled;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-white/40 shadow-[0_10px_30px_-20px_rgba(8,17,32,0.25)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-[78px] items-center justify-between gap-8">
        <Link to="/" className={`flex items-center transition-all ${onDark ? "bg-white/95 rounded-md px-2 py-1.5" : ""}`}>
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `relative text-[14px] font-medium transition-colors group ${
                  onDark
                    ? isActive
                      ? "text-white font-semibold"
                      : "text-white/85 hover:text-white"
                    : isActive
                    ? "text-navy font-semibold"
                    : "text-navy/80 hover:text-navy"
                }`
              }
            >
              {n.label}
              <span
                className={`pointer-events-none absolute left-0 right-0 -bottom-1.5 mx-auto h-[2px] w-0 group-hover:w-full transition-[width] duration-300 ${
                  onDark ? "bg-green" : "bg-navy"
                }`}
              />
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCartOpen(true)}
            className={`relative hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-[10px] text-sm font-medium transition-all ${
              onDark
                ? "border border-white/30 text-white hover:bg-white/10"
                : "border border-border text-navy hover:border-navy"
            }`}
            aria-label="Open quote cart"
          >
            <ClipboardList className="h-4 w-4" />
            Quote Cart
            {items.length > 0 && (
              <span className="ml-1 inline-flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-green text-navy-deep text-xs font-bold">
                {items.length}
              </span>
            )}
          </button>
          <Link
            to="/contact"
            className={`hidden md:inline-flex items-center gap-2 text-sm font-semibold py-2.5 px-4 rounded-[10px] transition-all hover:scale-[1.02] ${
              onDark
                ? "bg-green text-navy-deep hover:bg-green-deep hover:text-white"
                : "bg-navy text-white hover:bg-navy-deep"
            }`}
          >
            Book a Consultation
          </Link>
          <button
            className={`lg:hidden p-2 rounded-md border ${onDark ? "border-white/40 text-white" : "border-border text-navy"}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-page py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-[15px] font-medium text-navy/85 hover:text-navy"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3 justify-center">
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
