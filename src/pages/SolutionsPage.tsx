import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SolutionCard } from "@/components/site/SolutionCard";
import { RevealGroup, RevealItem } from "@/components/site/Reveal";
import { SOLUTIONS } from "@/lib/solutions-data";
import heroImg from "@/assets/hero-solutions.jpg";

export default function SolutionsPage() {
  return (
    <SiteLayout>
      <PageHero
        image={heroImg}
        eyebrow="Solutions Catalogue"
        title="Attractions engineered for revenue per square metre."
        intro="Six core categories, sourced from leading global manufacturers and selected to balance throughput, dwell-time and operating margin."
      />
      <section className="section">
        <RevealGroup className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s) => (
            <RevealItem key={s.id}>
              <SolutionCard s={s} />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
    </SiteLayout>
  );
}
