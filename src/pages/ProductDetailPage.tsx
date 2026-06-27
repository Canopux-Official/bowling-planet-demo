import { useParams } from "react-router-dom";
import { SOLUTIONS } from "@/lib/solutions-data";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap, Wrench, Users } from "lucide-react";

const PRODUCT_DETAILS: Record<string, { overview: string; keyBenefits: string; implementation: string }> = {
  bowling: {
    overview:
      "Bowling Solutions represent the cornerstone of modern family entertainment centers. Our premium tenpin and string-pin systems are engineered for commercial throughput — from boutique 4-lane installations to flagship 32-lane centers. We source equipment from leading global manufacturers including Brunswick, QubicaAMF, and specialized suppliers, ensuring your venue has access to the latest technology and highest reliability standards. Our systems are designed to handle high-volume traffic while maintaining consistent lane conditioning and scoring accuracy.",
    keyBenefits:
      "Premium tenpin and string-pin systems deliver unmatched customer experience with latest scoring displays and pin-spotters. Our integrated approach includes complete lane design, supply chain management, professional installation, and ongoing maintenance support. Whether you're targeting casual family bowlers or serious league play, we customize configurations to maximize both throughput and dwell time per visitor.",
    implementation:
      "From initial facility assessment to final opening day support, our bowling solutions team manages every detail. We conduct detailed space audits, provide 3D lane layout visualizations, coordinate equipment delivery and installation, calibrate all systems to manufacturer specifications, train your staff on operations and maintenance, and provide ongoing technical support including parts availability and preventive maintenance scheduling.",
  },
  arcade: {
    overview:
      "Modern arcade portfolios drive significant per-capital revenue while creating memorable experiences. Our curated selection spans video game cabinets, prize games, sports simulators, and specialist attractions — all sourced from world-leading manufacturers including Bandai Namco, Sega Amusements, and LAI Games. We combine cutting-edge gaming content with revenue-tracking technology to ensure your arcade zone delivers both player satisfaction and operational insight. Every cabinet selection is made with revenue optimization in mind, balancing novelty, replay value, and maintenance cost.",
    keyBenefits:
      "Arcade attractions deliver the highest revenue-per-square-foot of any entertainment category. Our selection expertise ensures your mix attracts diverse player demographics — from casual families to competitive gamers. Integrated card systems provide seamless cashless payments and detailed analytics on which games drive revenue. Lifecycle refresh programs keep your mix competitive and engaging without requiring full replacement.",
    implementation:
      "We manage full arcade program lifecycle: initial market analysis and game selection, equipment procurement and logistics, professional installation and networking, payment system integration with your venue infrastructure, staff training on operation and troubleshooting, and continuous optimization through performance monitoring and recommended game rotations to maintain player interest.",
  },
  vr: {
    overview:
      "Immersive VR experiences represent the fastest-growing attraction category in family entertainment. Our portfolio includes free-roam arenas, motion simulator platforms, and multiplayer pods that drive both footfall and per-cap spend. VR attractions create unforgettable moments while generating premium pricing — facilities report VR zones achieve 2-3x revenue per square foot compared to traditional gaming. We partner with leading content providers to ensure fresh, engaging experiences that appeal to diverse age groups and skill levels.",
    keyBenefits:
      "VR attractions create powerful emotional connections and word-of-mouth marketing. Free-roam systems accommodate multiple simultaneous players in immersive environments, while motion simulators deliver intense individual experiences. Regular content updates maintain freshness and repeat visit potential. VR's premium pricing model generates significantly higher per-person revenue while creating Instagram-worthy moments that drive social media buzz.",
    implementation:
      "VR implementation requires specialized expertise in hardware setup, content management, safety protocols, and staff training. Our team handles site assessment for electrical/network requirements, equipment installation and calibration, content library setup and updates, player safety protocols and staff certification, technical support for hardware and software, and revenue optimization through dynamic pricing and rotation strategies.",
  },
  redemption: {
    overview:
      "Redemption attractions are the scientifically proven drivers of extended venue dwell time and repeat visits. Our ticket-based and e-ticket systems combine proven game mechanics with sophisticated redemption economics. From classic ticket games to modern digital redemption counters, we engineer experiences that encourage incremental spending while maximizing perceived value. Families visit redemption zones with the explicit goal of earning prizes, creating consistent foot traffic and secondary spend opportunities.",
    keyBenefits:
      "Redemption systems create measurable increases in average visit duration and repeat visitation. E-ticket integration eliminates lost tickets and provides complete transaction tracking. Modern prize merchandising displays encourage continued play and prize selection. Facilities report 35-40% increases in per-visit spend among players using redemption zones, with strong retention across all age groups.",
    implementation:
      "Successful redemption programs require careful game selection, prize inventory management, and system integration. We provide venue assessment and game mix optimization, hardware installation including ticket printers and redemption displays, e-ticket software integration with your venue systems, prize procurement and inventory management consultation, staff training on game mechanics and prize fulfillment, and ongoing optimization based on player feedback and transaction data.",
  },
  kiddie: {
    overview:
      "Kiddie rides and attractions are proven anchors for family dwell time in shopping centers, resorts, and entertainment venues. Our curated selection of certified, safe attractions for the 2-9 age demographic includes carousels, soft-play modules, mini trains, and themed rides. These attractions create powerful multi-generational appeal — parents and grandparents enjoy watching while children experience safe, supervised thrills. Kiddie zones demonstrate exceptional ROI due to low operational complexity and high margin per play.",
    keyBenefits:
      "Kiddie attractions are entry-level experiences that build confidence and create repeat visitors. Younger players often graduate to more sophisticated attractions, extending customer lifetime value. Compliance-certified rides require minimal specialized maintenance compared to more complex systems. Strong seasonal performance during family shopping periods and holidays with predictable revenue streams.",
    implementation:
      "Kiddie attraction deployment includes venue space assessment and traffic flow analysis, equipment selection based on demographic and space constraints, professional installation with safety certification, electrical and mechanical system integration, comprehensive staff training on operation and safety protocols, regular compliance audits and maintenance schedules, and guidance on age-appropriate marketing to family segments.",
  },
  carnival: {
    overview:
      "Interactive midway-style games create high-throughput, social entertainment experiences that maximize venue engagement. Our carnival attractions include skee-ball, basketball, ring toss, crane games, and custom-themed experiences. These attractions are designed for rapid gameplay (3-5 minutes per player), minimal training requirements, and exceptional durability under high-volume use. Carnival zones drive foot traffic, create opportunities for group play, and deliver strong per-capita revenue with minimal operational overhead.",
    keyBenefits:
      "Carnival games attract players seeking competitive, quick-hit entertainment. High-throughput potential means peak-hour revenue generation per available floor space. Minimal technical complexity reduces maintenance costs and staff training requirements. Games appeal across broad demographics and create natural social gathering points within venues.",
    implementation:
      "Carnival game programs require space optimization, equipment selection, and player flow design. We provide detailed space assessment with traffic pattern analysis, game mix recommendation based on your venue demographics, equipment procurement and delivery, professional installation including electrical and structural requirements, initial staff training on operation and basic troubleshooting, and performance monitoring to identify game adjustments or rotations that maximize revenue.",
  },
};

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const solution = SOLUTIONS.find((s) => s.id === id);
  const details = PRODUCT_DETAILS[id as keyof typeof PRODUCT_DETAILS];

  if (!solution || !details) {
    return (
      <SiteLayout>
        <div className="container-page py-20 text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHero
        image={solution.image}
        eyebrow={solution.category}
        title={solution.name}
        intro={solution.description}
      />

      <section className="section">
        <div className="container-page max-w-3xl">
          <Reveal>
            <div className="space-y-8">
              <div>
                <h2 className="text-[32px] md:text-[44px] font-bold leading-tight">Deep Dive Overview</h2>
                <p className="mt-6 text-[16px] md:text-[18px] leading-[1.8] text-muted-foreground">{details.overview}</p>
              </div>
              <div>
                <h3 className="text-[24px] md:text-[28px] font-bold leading-tight">Why This Category Matters</h3>
                <p className="mt-4 text-[16px] md:text-[18px] leading-[1.8] text-muted-foreground">{details.keyBenefits}</p>
              </div>
              <div>
                <h3 className="text-[24px] md:text-[28px] font-bold leading-tight">Our Implementation Approach</h3>
                <p className="mt-4 text-[16px] md:text-[18px] leading-[1.8] text-muted-foreground">{details.implementation}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-cyan-soft">
        <div className="container-page max-w-3xl">
          <Reveal>
            <h3 className="text-[18px] font-semibold text-navy uppercase tracking-[0.1em] mb-4">Suitable For</h3>
            <div className="flex flex-wrap gap-2">
              {["Family Centers", "Shopping Malls", "Leagues", "Corporate Events", "Entertainment Venues"].map((tag) => (
                <Badge key={tag} variant="outline" className="px-4 py-2 text-sm bg-white border-border text-navy hover:bg-cyan">
                  {tag}
                </Badge>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <Reveal>
            <h2 className="text-[32px] md:text-[44px] font-bold leading-tight mb-12">Key Features</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle2, title: "Quality Assurance", description: "Rigorous testing and certification across all equipment and installations." },
              { icon: Zap, title: "Performance Optimized", description: "Engineered for maximum throughput and minimal downtime." },
              { icon: Users, title: "Customer Support", description: "24/7 technical support and comprehensive maintenance packages." },
              { icon: Wrench, title: "Easy Installation", description: "Streamlined setup process with minimal operational disruption." },
              { icon: CheckCircle2, title: "Revenue Analytics", description: "Built-in tracking and reporting for data-driven decision making." },
              { icon: Zap, title: "Future Proof", description: "Regular updates and compatibility with evolving technology standards." },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="group card-surface p-6 flex flex-col h-full hover:border-green-deep/50 transition-colors">
                    <Icon className="h-8 w-8 text-green mb-4" />
                    <h3 className="text-[18px] font-semibold text-navy mb-2">{feature.title}</h3>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-cyan-soft">
        <div className="container-page">
          <Reveal>
            <h2 className="text-[32px] md:text-[44px] font-bold leading-tight mb-12">Technical Specifications</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {[
                    { label: "Dimensions", value: "Variable based on configuration" },
                    { label: "Material", value: "Commercial-grade aluminum and composite materials" },
                    { label: "Weight Capacity", value: "Up to 500 lbs per unit" },
                    { label: "Operating Temperature", value: "-10°C to 50°C" },
                    { label: "Power Consumption", value: "500-2000W depending on configuration" },
                    { label: "Compliance", value: "CE, FCC, and regional safety certifications" },
                    { label: "Warranty", value: "2 years parts and labor" },
                    { label: "Support", value: "24/7 technical support and spare parts availability" },
                  ].map((spec, idx) => (
                    <tr key={idx} className={`border-t border-border ${idx % 2 === 0 ? "bg-white/40" : "bg-white/20"}`}>
                      <td className="px-6 py-4 text-[14px] font-semibold text-navy w-1/3">{spec.label}</td>
                      <td className="px-6 py-4 text-[14px] text-navy/70">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <Reveal>
            <h2 className="text-[32px] md:text-[44px] font-bold leading-tight mb-12">Frequently Asked Questions</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  question: "What is the typical installation timeline?",
                  answer: "Installation timelines vary based on the complexity and scale of the project. Most standard installations are completed within 2-4 weeks, including site preparation, equipment delivery, installation, testing, and staff training. We'll provide a detailed timeline during the consultation phase.",
                },
                {
                  question: "What kind of maintenance is required?",
                  answer: "We recommend regular preventive maintenance to ensure optimal performance. This includes weekly operational checks, monthly detailed inspections, and quarterly professional servicing. Our maintenance packages are fully customizable and can be tailored to your venue's specific needs and usage patterns.",
                },
                {
                  question: "Can the system be scaled as my venue grows?",
                  answer: "Yes, absolutely. Our modular design allows for easy expansion and upgrades. Whether you need to add additional units, integrate new features, or upgrade to advanced analytics, we can support your growth with minimal disruption to your operations.",
                },
              ].map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
                  <AccordionTrigger className="text-[16px] md:text-[18px] font-semibold hover:text-green-deep transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
