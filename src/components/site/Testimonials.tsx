import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type T = { name: string; role: string; company: string; project: string; review: string; initials: string };

const TESTIMONIALS: T[] = [
  {
    name: "Rajeev Menon",
    role: "Managing Director",
    company: "Skyline Mall Group",
    project: "Flagship FEC · Mumbai",
    review:
      "Bowling Planet ran our flagship destination end-to-end — from feasibility to launch. The lane economics matched their projections within the first quarter of operations.",
    initials: "RM",
  },
  {
    name: "Layla Al-Hashimi",
    role: "Head of Leisure",
    company: "Crescent Hospitality",
    project: "Resort Arcade · Dubai",
    review:
      "They understood our resort guest profile immediately. The attraction mix and dwell-time planning lifted our F&B attach rate by 22% in the first season.",
    initials: "LA",
  },
  {
    name: "Daniel Okafor",
    role: "Project Director",
    company: "Riverside Developments",
    project: "Mixed-Use FEC · Lagos",
    review:
      "A genuine operating partner, not a vendor. The site review caught three layout issues that would have cost us serious revenue per square metre.",
    initials: "DO",
  },
  {
    name: "Priya Subramanian",
    role: "Investor & Operator",
    company: "PlayHive Franchise",
    project: "Boutique Arcade · Bengaluru",
    review:
      "From the first feasibility call to the launch playbook, the rigour was outstanding. We hit payback projections six weeks earlier than modelled.",
    initials: "PS",
  },
];

export function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSel = () => setSelected(embla.selectedScrollSnap());
    setCount(embla.scrollSnapList().length);
    embla.on("select", onSel);
    onSel();
    return () => {
      embla.off("select", onSel);
    };
  }, [embla]);

  return (
    <section className="section bg-cyan-soft border-y border-border">
      <div className="container-page">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <p className="eyebrow">Operator Testimonials</p>
            <h2 className="mt-3 text-[32px] md:text-[42px] leading-[1.1]">
              Trusted by malls, resorts and developers worldwide.
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => embla?.scrollPrev()}
              aria-label="Previous testimonial"
              className="h-11 w-11 rounded-full border border-border bg-white hover:border-navy hover:bg-navy hover:text-white transition flex items-center justify-center"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => embla?.scrollNext()}
              aria-label="Next testimonial"
              className="h-11 w-11 rounded-full border border-border bg-white hover:border-navy hover:bg-navy hover:text-white transition flex items-center justify-center"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex -ml-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="pl-6 min-w-0 shrink-0 grow-0 basis-full md:basis-1/2">
                <article className="card-surface p-8 h-full flex flex-col">
                  <Quote className="h-8 w-8 text-green-deep/70" />
                  <p className="mt-5 text-[17px] leading-[1.65] text-navy">{t.review}</p>
                  <div className="mt-7 pt-6 border-t border-border flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-navy text-white font-display font-semibold flex items-center justify-center">
                      {t.initials}
                    </div>
                    <div className="min-w-0">
                      <p className="font-display font-semibold text-navy">{t.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {t.role} · {t.company}
                      </p>
                      <p className="text-xs text-green-deep font-semibold mt-0.5 tracking-wide uppercase">
                        {t.project}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => embla?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === selected ? "w-8 bg-navy" : "w-3 bg-navy/25 hover:bg-navy/45"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
