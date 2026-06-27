import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Hotel,
  Trees,
  Landmark,
  Gamepad2,
  Sparkles,
  Layers,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SolutionCard } from "@/components/site/SolutionCard";
import { SOLUTIONS } from "@/lib/solutions-data";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { Testimonials } from "@/components/site/Testimonials";
import heroImg from "@/assets/hero-home.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <SolutionsSection />
      <WhyBowlingPlanet />
      <ROIPreview />
      <FranchisePreview />
      <IndustriesGrid />
      <FeaturedProjects />
      <Testimonials />
      <ClosingCTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden min-h-[100vh] flex items-end">
      <img
        src={heroImg}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,17,32,0.85) 0%, rgba(8,17,32,0.45) 30%, rgba(8,17,32,0.65) 70%, rgba(8,17,32,0.95) 100%)",
        }}
      />
      <div className="container-page pt-40 pb-20 md:pt-48 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[12px] font-display font-semibold tracking-[0.22em] uppercase text-green"
        >
          Family Entertainment Center Solutions
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-white text-[44px] md:text-[72px] leading-[1.02] font-bold max-w-4xl"
        >
          Entertainment destinations,<br className="hidden md:block" />
          <span className="text-green">engineered for growth.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 text-[17px] md:text-[19px] leading-[1.6] text-white/80 max-w-2xl"
        >
          From bowling alleys and arcade zones to immersive VR attractions and complete family
          entertainment centers — end-to-end consultation, supply, installation and operational support.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-green text-navy-deep font-semibold py-3.5 px-6 rounded-[10px] hover:bg-green-deep hover:text-white transition-all hover:scale-[1.02]"
          >
            Book a Free Project Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = ["IAAPA Aligned", "QUBICA AMF Partner", "Brunswick Compatible", "LAI Games", "Bandai Namco", "Sega Amusements"];
  return (
    <div className="bg-cyan-soft border-y border-border">
      <div className="container-page py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs font-semibold uppercase tracking-[0.18em] text-navy/60">
        {items.map((i) => <span key={i}>{i}</span>)}
      </div>
    </div>
  );
}

function SolutionsSection() {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="eyebrow">Featured Solutions</p>
            <h2 className="mt-3 text-[34px] md:text-[44px] leading-[1.1]">
              A complete catalogue for entertainment operators.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Every attraction we supply is selected, designed and installed with revenue per square
            metre as the operating principle.
          </p>
        </Reveal>
        <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {SOLUTIONS.map((s) => (
            <RevealItem key={s.id}>
              <SolutionCard s={s} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

const PROCESS = [
  "Consultation",
  "Feasibility Study",
  "Attraction Planning",
  "Layout Design",
  "Equipment Supply",
  "Installation",
  "Launch Support",
  "Ongoing Assistance",
];

function WhyBowlingPlanet() {
  return (
    <section className="bg-navy text-white">
      <div className="container-page py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow text-green">Why Bowling Planet</p>
          <h2 className="mt-3 text-[34px] md:text-[46px] leading-[1.1] text-white">
            Beyond equipment. A complete entertainment business partner.
          </h2>
          <p className="mt-5 text-cyan/85 text-[16px] leading-relaxed">
            We bring the operating experience of running entertainment destinations to every project we
            plan — anticipating throughput, dwell-time, energy load and service economics long before the first lane is poured.
          </p>
        </div>

        <ol className="mt-14 grid gap-4 md:grid-cols-4">
          {PROCESS.map((step, i) => (
            <li key={step} className="relative bg-white/[0.04] border border-white/10 rounded-[10px] p-5">
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-semibold tracking-[0.18em] text-green">
                  STEP {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-1 w-8 bg-green/60 rounded-full" />
              </div>
              <p className="mt-3 text-[17px] font-semibold text-white">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ROIPreview() {
  return (
    <section className="section">
      <div className="container-page grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <p className="eyebrow">ROI Calculator</p>
          <h2 className="mt-3 text-[34px] md:text-[42px] leading-[1.1]">
            Model the economics of your entertainment center.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Estimate revenue, profit, payback period and annual ROI based on facility size, footfall and
            spend assumptions. A practical tool for investors and developers preparing a business case.
          </p>
          <Link to="/roi-calculator" className="btn-primary mt-7">
            Open ROI Calculator <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="card-surface p-7 grid grid-cols-2 gap-5">
          {[
            ["Avg. Monthly Revenue", "$220K – $480K"],
            ["Operating Margin", "28% – 36%"],
            ["Payback Period", "24 – 42 mo"],
            ["Annual ROI", "22% – 38%"],
          ].map(([k, v]) => (
            <div key={k} className="border border-border rounded-[10px] p-5 bg-cyan-soft">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{k}</p>
              <p className="mt-2 text-[22px] font-display font-bold text-navy">{v}</p>
            </div>
          ))}
          <p className="col-span-2 text-[11px] text-muted-foreground">
            Indicative ranges from delivered projects. Real results vary by location and operations.
          </p>
        </div>
      </div>
    </section>
  );
}

function FranchisePreview() {
  return (
    <section className="bg-cyan-soft">
      <div className="container-page py-20 md:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <p className="eyebrow">Franchise Opportunities</p>
          <h2 className="mt-3 text-[34px] md:text-[44px] leading-[1.1]">
            Launch your own family entertainment center.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">
            A structured pathway for entrepreneurs and developers — investment tiers from boutique
            arcades to flagship 30,000 sq ft destinations, with full operational handholding.
          </p>
          <Link to="/franchise" className="btn-primary mt-7">
            Explore Franchise Models <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <dl className="grid grid-cols-2 gap-4">
          {[
            ["Investment", "$250K – $3.5M"],
            ["Footprint", "3,000 – 30,000 sq ft"],
            ["Setup", "4 – 9 months"],
            ["Support", "End-to-end"],
          ].map(([k, v]) => (
            <div key={k} className="bg-white border border-border rounded-[10px] p-5">
              <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{k}</dt>
              <dd className="mt-2 text-[20px] font-display font-bold text-navy">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const INDUSTRIES = [
  { label: "Shopping Malls", Icon: Building2 },
  { label: "Resorts", Icon: Hotel },
  { label: "Hospitality Groups", Icon: Sparkles },
  { label: "Real Estate Developers", Icon: Landmark },
  { label: "Gaming Centers", Icon: Gamepad2 },
  { label: "Theme Parks", Icon: Trees },
  { label: "Mixed-Use Developments", Icon: Layers },
];

function IndustriesGrid() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Industries We Serve</p>
          <h2 className="mt-3 text-[34px] md:text-[42px] leading-[1.1]">
            Delivering for developers, operators and hospitality groups.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map(({ label, Icon }) => (
            <div key={label} className="card-surface p-6 hover:border-navy transition-colors">
              <Icon className="h-7 w-7 text-green-deep" strokeWidth={1.6} />
              <p className="mt-5 font-semibold text-navy text-[16px]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  { name: "Galaxy FEC Flagship", location: "Riyadh, Saudi Arabia", scale: "28,000 sq ft", attractions: "24 lanes · 80+ arcade · VR · Redemption", status: "Operational", image: project1 },
  { name: "Coral Bay Resort Bowl", location: "Maldives", scale: "9,500 sq ft", attractions: "8 lanes · 20 arcade · Lounge bar", status: "Operational", image: project2 },
  { name: "Skyline Mall Playground", location: "Mumbai, India", scale: "14,200 sq ft", attractions: "Arcade · Soft play · Redemption", status: "Completed", image: project3 },
];

function FeaturedProjects() {
  return (
    <section className="bg-navy text-white">
      <div className="container-page py-20 md:py-28">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="eyebrow text-green">Featured Projects</p>
            <h2 className="mt-3 text-[34px] md:text-[44px] leading-[1.1] text-white">
              Selected destinations we've designed and delivered.
            </h2>
          </div>
        </Reveal>
        <RevealGroup className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <RevealItem key={p.name}>
              <article className="group bg-white text-navy rounded-[12px] overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="eyebrow">{p.location}</p>
                  <h3 className="mt-2 text-[20px]">{p.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.attractions}</p>
                  <div className="mt-5 pt-5 border-t border-border flex items-center justify-between text-xs text-navy/80">
                    <span>{p.scale}</span>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-green-deep">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-deep" /> {p.status}
                    </span>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="container-page pb-24">
      <div className="rounded-[12px] bg-navy text-white p-10 md:p-14 grid md:grid-cols-[1.5fr_1fr] gap-8 items-center">
        <div>
          <p className="eyebrow text-green">Start your project</p>
          <h2 className="mt-3 text-[28px] md:text-[36px] leading-[1.1] text-white">
            Tell us about your site. We'll put a delivery plan on the table.
          </h2>
        </div>
        <div className="flex md:justify-end">
          <Link to="/contact" className="btn-accent">
            Discuss Your Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
