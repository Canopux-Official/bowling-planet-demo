import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Check, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { useQuote } from "@/components/site/QuoteCart";
import heroImg from "@/assets/hero-contact.jpg";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { items } = useQuote();

  return (
    <SiteLayout>
      <PageHero
        image={heroImg}
        eyebrow="Contact"
        title="Discuss your project."
        intro="A project lead will respond within one business day with a structured next-step proposal."
      />

      <section className="section">
        <div className="container-page grid lg:grid-cols-[1fr_1.3fr] gap-12">
          <div className="space-y-8">
            <ContactRow Icon={Phone} title="Phone" lines={["+91 98 0000 0000", "Mon – Sat · 09:00 – 19:00 IST"]} />
            <ContactRow Icon={Mail} title="Email" lines={["projects@bowlingplanet.com", "franchise@bowlingplanet.com"]} />
            <ContactRow Icon={MapPin} title="Business Address" lines={["Bowling Planet HQ", "Entertainment Park, Industrial Avenue", "Mumbai 400001, India"]} />
            <ContactRow Icon={Clock} title="Business Hours" lines={["Monday – Saturday · 09:00 – 19:00 IST", "Sunday · Closed"]} />

            <div className="overflow-hidden rounded-[12px] border border-border">
              <iframe
                title="Bowling Planet HQ"
                src="https://www.google.com/maps?q=Mumbai&output=embed"
                className="w-full h-[260px]"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="card-surface p-7 grid gap-4 h-fit"
          >
            {submitted ? (
              <div className="text-center py-10">
                <div className="mx-auto h-12 w-12 rounded-full bg-green/20 flex items-center justify-center">
                  <Check className="h-6 w-6 text-green-deep" />
                </div>
                <h3 className="mt-4 text-[22px]">Thank you</h3>
                <p className="mt-2 text-sm text-muted-foreground">Your inquiry has been received. A project lead will be in touch shortly.</p>
              </div>
            ) : (
              <>
                <div>
                  <p className="eyebrow">Inquiry Form</p>
                  <h3 className="mt-2 text-[22px]">Tell us about your project</h3>
                </div>
                {items.length > 0 && (
                  <div className="rounded-[10px] bg-cyan-soft border border-border p-4 text-xs">
                    <p className="font-semibold text-navy">{items.length} item{items.length > 1 ? "s" : ""} from your quote cart will be attached to this inquiry.</p>
                    <p className="text-muted-foreground mt-1">{items.map((i) => i.name).join(" · ")}</p>
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name" name="name" required />
                  <Field label="Company" name="company" />
                  <Field label="Email" type="email" name="email" required />
                  <Field label="Phone" name="phone" />
                </div>
                <Field label="Project Location" name="location" />
                <label className="text-sm">
                  <span className="text-navy font-medium">Project Type</span>
                  <select name="type" className="mt-1.5 w-full border border-input rounded-[10px] px-3.5 py-2.5 text-sm bg-white outline-none focus:border-navy">
                    <option>New Family Entertainment Center</option>
                    <option>Bowling Installation</option>
                    <option>Arcade Zone</option>
                    <option>VR Attraction</option>
                    <option>Refresh / Expansion</option>
                    <option>Franchise Inquiry</option>
                  </select>
                </label>
                <label className="text-sm">
                  <span className="text-navy font-medium">Message</span>
                  <textarea name="message" rows={4} className="mt-1.5 w-full border border-input rounded-[10px] px-3.5 py-2.5 text-sm bg-white outline-none focus:border-navy" />
                </label>
                <button className="btn-accent w-full justify-center" type="submit">
                  {items.length > 0 ? "Request Proposal" : "Discuss Your Project"} <ArrowRight className="h-4 w-4" />
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactRow({ Icon, title, lines }: { Icon: typeof Phone; title: string; lines: string[] }) {
  return (
    <div className="flex gap-4">
      <div className="h-11 w-11 rounded-[10px] bg-cyan-soft border border-border flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-green-deep" />
      </div>
      <div>
        <p className="font-display font-semibold text-navy">{title}</p>
        {lines.map((l, i) => (
          <p key={i} className={`text-sm ${i === 0 ? "text-navy" : "text-muted-foreground"} leading-relaxed`}>{l}</p>
        ))}
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="text-sm">
      <span className="text-navy font-medium">{label}{required && <span className="text-destructive"> *</span>}</span>
      <input name={name} type={type} required={required} className="mt-1.5 w-full border border-input rounded-[10px] px-3.5 py-2.5 text-sm bg-white outline-none focus:border-navy" />
    </label>
  );
}
