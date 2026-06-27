import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import heroImg from "@/assets/hero-about.jpg";

const PILLARS = [
  ["Industry Expertise", "A team built from operators, project managers and engineers — not catalogue resellers."],
  ["Project Execution", "Single accountable partner from feasibility through commissioning and staff training."],
  ["Long-Term Partnership", "Service contracts, parts, content refreshes and quarterly business reviews."],
  ["End-to-End Support", "Design, supply, install, train, operate, refresh — under one roof."],
];

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        image={heroImg}
        eyebrow="About Bowling Planet"
        title="Entertainment infrastructure, engineered for operators."
        intro="We plan, supply and support family entertainment destinations across malls, resorts, hospitality groups, theme parks and mixed-use developments. Our work is judged on revenue per square metre, payback period and guest satisfaction — not glossy renders."
      />

      <section className="section">
        <div className="container-page grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <div>
            <p className="eyebrow">Our Position</p>
            <h2 className="mt-3 text-[32px] md:text-[40px] leading-[1.1]">A consultancy with operating muscle.</h2>
          </div>
          <div className="space-y-5 text-[16px] leading-[1.75] text-muted-foreground">
            <p>
              Bowling Planet sits at the intersection of entertainment consultancy and turnkey
              infrastructure delivery. We help investors, developers and hospitality groups translate
              site potential into commercially performing entertainment destinations.
            </p>
            <p>
              Our work spans the full project lifecycle — feasibility study, attraction mix,
              layout design, equipment supply, installation, staff training, launch marketing and
              ongoing operational support.
            </p>
            <p>
              We bring the discipline of global FEC operators to projects of every scale, from
              boutique 3,000 sq ft arcades to flagship 30,000 sq ft destinations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-page py-20">
          <p className="eyebrow text-green">What we stand for</p>
          <h2 className="mt-3 text-[32px] md:text-[42px] text-white max-w-2xl leading-[1.1]">
            Four operating principles that show up in every project.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map(([t, d], i) => (
              <div key={t} className="bg-white/[0.04] border border-white/10 rounded-[10px] p-6">
                <span className="font-display text-xs tracking-[0.18em] text-green">0{i + 1}</span>
                <h3 className="mt-3 text-white text-[18px]">{t}</h3>
                <p className="mt-2 text-sm text-cyan/80 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page rounded-[12px] bg-cyan-soft p-10 md:p-14 grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
          <div>
            <p className="eyebrow">Start the conversation</p>
            <h2 className="mt-3 text-[28px] md:text-[34px] leading-[1.1]">
              Discuss your project with our team.
            </h2>
          </div>
          <div className="md:justify-self-end">
            <Link to="/contact" className="btn-primary">
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
