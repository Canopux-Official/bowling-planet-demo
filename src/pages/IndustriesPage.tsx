import { Building2, Hotel, Trees, Landmark, Gamepad2, Sparkles, Layers, Building } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { RevealGroup, RevealItem } from "@/components/site/Reveal";
import heroImg from "@/assets/hero-industries.jpg";

const ITEMS = [
  { Icon: Building2, label: "Shopping Malls", text: "Footfall anchors that lift dwell-time and lease values across mall portfolios." },
  { Icon: Hotel, label: "Resorts", text: "All-weather, all-age attractions integrated into the resort experience and F&B flow." },
  { Icon: Sparkles, label: "Hospitality Groups", text: "Branded family entertainment offerings across multi-property portfolios." },
  { Icon: Landmark, label: "Real Estate Developers", text: "Destination tenants that drive footfall to community and lifestyle developments." },
  { Icon: Gamepad2, label: "Gaming Centers", text: "Refresh and expansion programmes for established arcade and bowling operators." },
  { Icon: Trees, label: "Theme Parks", text: "Indoor attractions that extend the operating day and shoulder-season revenue." },
  { Icon: Layers, label: "Mixed-Use Developments", text: "Entertainment anchors woven into retail, residential and hospitality precincts." },
  { Icon: Building, label: "Corporate Operators", text: "Employee experience facilities and brand activation venues delivered turnkey." },
];

export default function IndustriesPage() {
  return (
    <SiteLayout>
      <PageHero
        image={heroImg}
        eyebrow="Industries We Serve"
        title="Trusted across the entertainment infrastructure sector."
        intro="From single-site operators to global hospitality groups, Bowling Planet plans and delivers attractions that perform as commercial assets."
      />
      <section className="section">
        <RevealGroup className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ Icon, label, text }) => (
            <RevealItem key={label} className="card-surface p-7 group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-22px_rgba(18,43,76,0.35)] hover:border-navy/30">
              <Icon className="h-8 w-8 text-green-deep transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
              <h3 className="mt-5 text-[18px]">{label}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
    </SiteLayout>
  );
}
