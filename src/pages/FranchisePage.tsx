import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import heroImg from "@/assets/hero-franchise.jpg";

const TIERS = [
  { name: "Boutique Arcade", investment: "$250K – $600K", space: "3,000 – 6,000 sq ft", revenue: "$60K – $150K / mo", timeline: "4 – 6 months" },
  { name: "Mid-Scale FEC", investment: "$650K – $1.6M", space: "8,000 – 16,000 sq ft", revenue: "$160K – $380K / mo", timeline: "6 – 8 months" },
  { name: "Flagship Destination", investment: "$1.8M – $3.5M+", space: "18,000 – 30,000 sq ft", revenue: "$420K – $900K / mo", timeline: "7 – 9 months" },
];

const SUPPORT = [
  "Site selection & feasibility study",
  "Attraction mix & layout design",
  "Equipment supply & financing options",
  "Installation & commissioning",
  "Operational training & SOPs",
  "Marketing launch playbook",
  "Service contracts & spare parts",
  "Quarterly business reviews",
];

export default function FranchisePage() {
  return (
    <SiteLayout>
      <PageHero
        image={heroImg}
        eyebrow="Franchise Opportunities"
        title="Launch your own family entertainment center."
        intro="A structured pathway with three investment tiers — chosen to match site size, catchment area and operating ambition."
      />

      <section className="section">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <article key={t.name} className={`rounded-[12px] p-7 border ${i === 1 ? "bg-navy text-white border-navy" : "bg-white border-border"}`}>
              <p className={`eyebrow ${i === 1 ? "text-green" : ""}`}>Tier {i + 1}</p>
              <h3 className={`mt-2 text-[24px] ${i === 1 ? "text-white" : ""}`}>{t.name}</h3>
              <dl className="mt-6 space-y-3 text-sm">
                {[["Investment", t.investment], ["Space", t.space], ["Revenue Potential", t.revenue], ["Setup Timeline", t.timeline]].map(([k, v]) => (
                  <div key={k} className={`flex justify-between gap-4 pb-3 border-b ${i === 1 ? "border-white/15" : "border-border"}`}>
                    <dt className={i === 1 ? "text-cyan/80" : "text-muted-foreground"}>{k}</dt>
                    <dd className={`font-display font-semibold text-right ${i === 1 ? "text-white" : "text-navy"}`}>{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cyan-soft border-y border-border">
        <div className="container-page py-20 grid lg:grid-cols-[1fr_1.1fr] gap-12">
          <div>
            <p className="eyebrow">Support Provided</p>
            <h2 className="mt-3 text-[32px] md:text-[40px] leading-[1.1]">
              You get the full operating playbook — not just equipment.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              Every franchise launches with the same eight-pillar support programme refined across delivered projects.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {SUPPORT.map((s) => (
              <li key={s} className="bg-white border border-border rounded-[10px] p-4 flex items-start gap-3">
                <Check className="h-4 w-4 text-green-deep mt-1 shrink-0" />
                <span className="text-sm text-navy">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FranchiseInquiry />
    </SiteLayout>
  );
}

function FranchiseInquiry() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="section">
      <div className="container-page grid lg:grid-cols-[1fr_1.2fr] gap-12">
        <div>
          <p className="eyebrow">Franchise Inquiry</p>
          <h2 className="mt-3 text-[32px] md:text-[40px] leading-[1.1]">Tell us about your market.</h2>
          <p className="mt-5 text-muted-foreground max-w-md">
            Share a few details about your site, budget and timeline. A franchise development lead will be in touch within two business days.
          </p>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="card-surface p-7 grid gap-4"
        >
          {submitted ? (
            <div className="text-center py-10">
              <div className="mx-auto h-12 w-12 rounded-full bg-green/20 flex items-center justify-center">
                <Check className="h-6 w-6 text-green-deep" />
              </div>
              <h3 className="mt-4 text-[20px]">Inquiry received</h3>
              <p className="mt-2 text-sm text-muted-foreground">Our franchise team will reach out shortly.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Email" type="email" name="email" required />
                <Field label="Phone" name="phone" />
                <Field label="City / Country" name="location" required />
                <Field label="Indicative Budget (USD)" name="budget" />
              </div>
              <label className="text-sm">
                <span className="text-navy font-medium">Project Brief</span>
                <textarea name="brief" rows={4} className="mt-1.5 w-full border border-input rounded-[10px] px-3.5 py-2.5 text-sm bg-white outline-none focus:border-navy" />
              </label>
              <button className="btn-accent mt-2 w-full justify-center" type="submit">
                Submit Franchise Inquiry <ArrowRight className="h-4 w-4" />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="text-sm">
      <span className="text-navy font-medium">{label}{required && <span className="text-destructive"> *</span>}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full border border-input rounded-[10px] px-3.5 py-2.5 text-sm bg-white outline-none focus:border-navy"
      />
    </label>
  );
}
