import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook, Youtube, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";

const COMPANY: [string, string][] = [
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Careers", "/about"],
  ["Blog", "/about"],
];
const SOLUTIONS: [string, string][] = [
  ["Bowling Systems", "/solutions"],
  ["Arcade Games", "/solutions"],
  ["VR Experiences", "/solutions"],
  ["Redemption", "/solutions"],
  ["Kiddie Rides", "/solutions"],
  ["Carnival Games", "/solutions"],
];
const RESOURCES: [string, string][] = [
  ["ROI Calculator", "/roi-calculator"],
  ["Franchise", "/franchise"],
  ["Case Studies", "/about"],
  ["Industries", "/industries"],
  ["FAQs", "/about"],
];

const PARTNERS = ["IAAPA", "QUBICA AMF", "BRUNSWICK", "LAI GAMES", "BANDAI NAMCO", "SEGA"];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-page py-16 grid gap-12 lg:grid-cols-[1.5fr_repeat(3,1fr)_1.4fr]">
        <div>
          <div className="bg-white inline-flex p-3 rounded-[10px]">
            <Logo className="h-10" />
          </div>
          <p className="mt-5 text-sm text-cyan/80 max-w-xs leading-relaxed">
            Designing, supplying and supporting profitable family entertainment destinations across the globe.
          </p>
          <div className="flex gap-2.5 mt-6">
            {[
              [Linkedin, "https://linkedin.com"],
              [Instagram, "https://instagram.com"],
              [Facebook, "https://facebook.com"],
              [Youtube, "https://youtube.com"],
            ].map(([Icon, href], i) => {
              const I = Icon as typeof Linkedin;
              return (
                <a
                  key={i}
                  href={href as string}
                  aria-label="social"
                  className="p-2.5 rounded-md border border-white/15 hover:border-green hover:bg-green hover:text-navy-deep transition-all"
                >
                  <I className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <FooterCol title="Company" links={COMPANY} />
        <FooterCol title="Solutions" links={SOLUTIONS} />
        <FooterCol title="Resources" links={RESOURCES} />

        <div>
          <p className="eyebrow text-green">Newsletter</p>
          <div className="rule-accent mt-2 mb-4" />
          <p className="text-sm text-cyan/80 mb-4">Industry insights and project updates, quarterly.</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-stretch rounded-[10px] overflow-hidden border border-white/15 bg-white/[0.04] focus-within:border-green"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-transparent px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 outline-none"
            />
            <button className="px-3 bg-green text-navy-deep hover:bg-green-deep hover:text-white transition" aria-label="Subscribe">
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <ul className="mt-6 space-y-2.5 text-sm">
            <li className="flex items-start gap-2.5 text-cyan/80">
              <MapPin className="h-4 w-4 mt-0.5 text-green shrink-0" />
              <span>Entertainment Park, Industrial Avenue, Mumbai 400001</span>
            </li>
            <li className="flex items-center gap-2.5 text-cyan/80">
              <Phone className="h-4 w-4 text-green shrink-0" /> +91 98 0000 0000
            </li>
            <li className="flex items-center gap-2.5 text-cyan/80">
              <Mail className="h-4 w-4 text-green shrink-0" /> projects@bowlingplanet.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <span className="text-[10px] uppercase tracking-[0.22em] text-cyan/40">Partners &amp; Certifications</span>
          {PARTNERS.map((p) => (
            <span key={p} className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan/60 hover:text-white transition">
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col md:flex-row gap-2 items-start md:items-center justify-between text-xs text-cyan/55">
          <p>© {new Date().getFullYear()} Bowling Planet. All rights reserved.</p>
          <p>Built for operators, investors and developers worldwide.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <p className="eyebrow text-green">{title}</p>
      <div className="rule-accent mt-2 mb-4" />
      <ul className="space-y-2.5 text-sm">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="text-cyan/85 hover:text-green transition-colors">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
