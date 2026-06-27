import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import heroImg from "@/assets/hero-roi.jpg";

export default function ROICalculatorPage() {
  const [investment, setInvestment] = useState(1500000);
  const [size, setSize] = useState(12000);
  const [footfall, setFootfall] = useState(450);
  const [spend, setSpend] = useState(18);
  const [opcost, setOpcost] = useState(95000);

  const result = useMemo(() => {
    const monthlyRevenue = footfall * spend * 30;
    const monthlyProfit = monthlyRevenue - opcost;
    const paybackMonths = monthlyProfit > 0 ? investment / monthlyProfit : 0;
    const annualROI = investment > 0 ? ((monthlyProfit * 12) / investment) * 100 : 0;
    return { monthlyRevenue, monthlyProfit, paybackMonths, annualROI };
  }, [investment, size, footfall, spend, opcost]);

  const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 0 });

  return (
    <SiteLayout>
      <PageHero
        image={heroImg}
        eyebrow="ROI Calculator"
        title="Model the economics of your entertainment center."
        intro="Adjust the inputs to see indicative monthly revenue, profit, payback period and annual ROI."
      />
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="card-surface p-7 space-y-5">
            <h3 className="text-[20px]">Project Inputs</h3>
            <SliderInput label="Total Investment" value={investment} setValue={setInvestment} min={250000} max={5000000} step={50000} unit="USD" />
            <SliderInput label="Facility Size" value={size} setValue={setSize} min={3000} max={30000} step={500} unit="sq ft" />
            <SliderInput label="Expected Daily Footfall" value={footfall} setValue={setFootfall} min={50} max={2000} step={10} unit="visitors / day" />
            <SliderInput label="Average Customer Spend" value={spend} setValue={setSpend} min={5} max={60} step={1} unit="USD / visitor" />
            <SliderInput label="Monthly Operating Cost" value={opcost} setValue={setOpcost} min={20000} max={400000} step={5000} unit="USD" />
          </div>

          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-5">
              <Metric label="Estimated Monthly Revenue" value={`$${fmt(result.monthlyRevenue)}`} tone="navy" />
              <Metric label="Estimated Monthly Profit" value={`$${fmt(result.monthlyProfit)}`} tone="green" />
              <Metric label="Payback Period" value={result.paybackMonths > 0 ? `${fmt(result.paybackMonths)} months` : "—"} />
              <Metric label="Annual ROI" value={`${result.annualROI.toFixed(1)}%`} />
            </div>

            <div className="card-surface p-6">
              <h4 className="text-[16px]">Revenue per square foot</h4>
              <p className="mt-2 text-[28px] font-display font-bold text-navy">
                ${size > 0 ? fmt(result.monthlyRevenue / size) : 0}{" "}
                <span className="text-sm font-medium text-muted-foreground">/ sq ft / month</span>
              </p>
              <div className="mt-4 h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-deep transition-all"
                  style={{ width: `${Math.min(100, (result.monthlyRevenue / size) / 0.6)}%` }}
                />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Benchmark range for delivered FEC projects: $25 – $60 / sq ft / month.
              </p>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Figures are indicative estimates and may vary based on location, operations and market conditions. Bowling Planet's feasibility study refines these inputs against site-specific data.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function SliderInput({ label, value, setValue, min, max, step, unit }: { label: string; value: number; setValue: (n: number) => void; min: number; max: number; step: number; unit: string }) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium text-navy">{label}</label>
        <span className="font-display font-semibold text-navy text-[15px]">
          {value.toLocaleString()} <span className="text-xs text-muted-foreground font-normal">{unit}</span>
        </span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full mt-2 accent-navy"
      />
    </div>
  );
}

function Metric({ label, value, tone }: { label: string; value: string; tone?: "navy" | "green" }) {
  const bg = tone === "navy" ? "bg-navy text-white border-navy" : tone === "green" ? "bg-green/15 border-green/40" : "bg-white border-border";
  const labelClr = tone === "navy" ? "text-cyan/80" : "text-muted-foreground";
  const valClr = tone === "navy" ? "text-white" : "text-navy";
  return (
    <div className={`border rounded-[12px] p-6 ${bg}`}>
      <p className={`text-xs uppercase tracking-[0.16em] ${labelClr}`}>{label}</p>
      <p className={`mt-2 text-[28px] font-display font-bold ${valClr}`}>{value}</p>
    </div>
  );
}
