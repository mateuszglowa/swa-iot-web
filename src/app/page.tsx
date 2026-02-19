import { Button } from "@/components/ui/button";
import {
  Mail,
  Linkedin,
  Calendar,
  Radio,
  Cpu,
  Cloud,
  Bell,
  CalendarCheck,
  Factory,
  Droplets,
  Snowflake,
  Zap,
  Gauge,
  Check,
} from "lucide-react";

function HeroVisual() {
  return (
    <div
      className="mx-auto w-full max-w-[200px] px-4 text-navy/30 dark:text-white/50"
      aria-hidden
    >
      <svg
        viewBox="0 0 200 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        <path
          d="M0 24 L40 24 L50 12 L70 32 L90 8 L110 24 L130 16 L150 28 L170 20 L200 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0 36 L35 36 L55 28 L75 40 L95 30 L115 36 L135 32 L155 38 L185 34 L200 36"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.7}
        />
        <g className="text-accent-industrial dark:text-accent-industrial">
          <circle cx="50" cy="12" r="4" fill="currentColor" />
          <circle cx="90" cy="8" r="4" fill="currentColor" />
          <circle cx="130" cy="16" r="4" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

const USE_CASES = [
  {
    id: "manufacturing",
    title: "Manufacturing Equipment Monitoring",
    icon: Factory,
    iconBg: "bg-navy/10 text-navy",
    problem:
      "Recurring motor, bearing, or compressor failures.",
    monitor:
      "Vibration, temperature, pressure, runtime.",
    outcome:
      "Early detection of abnormal patterns and reduced unplanned downtime.",
  },
  {
    id: "agricultural",
    title: "Agricultural Water & Irrigation Systems",
    icon: Droplets,
    iconBg: "bg-accent-industrial/15 text-accent-industrial",
    problem:
      "Pump failures, pressure instability, water waste.",
    monitor:
      "Flow rate, pressure, pump cycles, soil moisture.",
    outcome:
      "Leak detection, pump protection, optimized irrigation cycles.",
  },
  {
    id: "cold-storage",
    title: "Cold Storage & Food Facilities",
    icon: Snowflake,
    iconBg: "bg-navy/10 text-navy",
    problem:
      "Temperature drift and compressor overload.",
    monitor:
      "Temperature, compressor cycles, door activity.",
    outcome:
      "Regulatory compliance support and reduced spoilage risk.",
  },
  {
    id: "energy",
    title: "Energy Monitoring for SMEs",
    icon: Zap,
    iconBg: "bg-accent-industrial/15 text-accent-industrial",
    problem:
      "Rising electricity costs without machine-level insight.",
    monitor:
      "Per-machine energy consumption, load patterns, peak usage.",
    outcome:
      "Data-driven energy optimization.",
  },
  {
    id: "water-treatment",
    title: "Small Water Treatment & Pump Stations",
    icon: Gauge,
    iconBg: "bg-navy/10 text-navy",
    problem:
      "Limited remote visibility and manual log tracking.",
    monitor:
      "Tank levels, pump runtime, temperature, alarms.",
    outcome:
      "Remote operational visibility and faster incident response.",
  },
] as const;

const WHAT_WE_DO = [
  { icon: Radio, label: "Sensor integration" },
  { icon: Cpu, label: "Edge data acquisition" },
  { icon: Cloud, label: "Secure cloud ingestion" },
  { icon: Bell, label: "Alerting & reporting" },
  { icon: CalendarCheck, label: "30-day pilot deployment model" },
] as const;

const PILOT_STEPS = [
  { step: 1, title: "20-minute discovery call" },
  { step: 2, title: "Define monitoring scope (1–2 assets)" },
  { step: 3, title: "Device configuration & shipment" },
  { step: 4, title: "30 days of data collection" },
  { step: 5, title: "Report & next-step recommendations" },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 1. Hero */}
      <section className="hero-gradient border-b border-border px-6 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <HeroVisual />
          <span className="mt-6 inline-block rounded-full border border-navy/20 bg-navy/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-navy dark:border-white/30 dark:bg-white/15 dark:text-white">
            30-day pilot
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-tight">
            Remote Monitoring Systems for Industrial &amp; Infrastructure Assets
          </h1>
          <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
            We design and deploy practical sensor-based systems that help detect
            failures early, reduce downtime, and improve operational visibility.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full min-w-[200px] shadow-lg shadow-navy/20 transition-all hover:shadow-xl hover:shadow-navy/25 sm:w-auto"
            >
              <a href="#contact">Schedule Intro Call</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full min-w-[200px] border-2 border-foreground/20 hover:border-accent-industrial hover:bg-accent-industrial/5 hover:text-foreground sm:w-auto"
            >
              <a href="#use-cases">Explore Use Cases</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. What We Do */}
      <section className="border-b border-border bg-muted/40 px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            What we do
          </h2>
          <p className="mt-3 text-muted-foreground">
            We build custom monitoring systems combining embedded devices, edge
            data processing, and cloud dashboards for asset-heavy environments.
          </p>
          <ul className="mt-8 space-y-3">
            {WHAT_WE_DO.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.label}
                  className="flex items-center gap-3 text-foreground"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-navy/10 text-navy">
                    <Icon className="size-4" />
                  </div>
                  <span>{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 3. Industries & Use Cases */}
      <section
        id="use-cases"
        className="border-b border-border px-6 py-16 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Industries &amp; use cases
          </h2>
          <p className="mt-2 text-muted-foreground">
            Scannable by vertical. Scope is tailored to your assets and goals.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((uc) => {
              const Icon = uc.icon;
              return (
                <article
                  key={uc.id}
                  className="group flex flex-col rounded-xl border-2 border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${uc.iconBg}`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-bold text-foreground">{uc.title}</h3>
                  </div>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Problem
                  </p>
                  <p className="mt-0.5 text-sm text-foreground">{uc.problem}</p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    What we monitor
                  </p>
                  <p className="mt-0.5 text-sm text-foreground">{uc.monitor}</p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Expected outcome
                  </p>
                  <p className="mt-0.5 text-sm text-foreground">{uc.outcome}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. How Our Pilot Model Works */}
      <section
        id="how-it-works"
        className="border-b border-border bg-muted/40 px-6 py-16 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            How our pilot model works
          </h2>
          <p className="mt-2 text-muted-foreground">
            Low-risk engagement. We handle configuration and analysis.
          </p>
          <div className="mt-10 rounded-2xl border-2 border-border bg-card p-6 sm:p-8">
            <ol className="grid grid-cols-1 gap-6 sm:grid-cols-5 sm:gap-4">
              {PILOT_STEPS.map((item) => (
                <li
                  key={item.step}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-navy text-sm font-bold text-navy-foreground shadow shadow-navy/20">
                    {item.step}
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {item.title}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="mt-0.5 size-4 shrink-0 text-navy" />
            <span>No long-term commitment required for pilot phase.</span>
          </p>
        </div>
      </section>

      {/* 5. Our Approach */}
      <section className="border-b border-border px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Our approach
          </h2>
          <ul className="mt-6 space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <Check className="mt-0.5 size-5 shrink-0 text-navy" />
              <span>
                We focus on practical diagnostics—what’s actually failing and
                why.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-0.5 size-5 shrink-0 text-navy" />
              <span>
                We design systems for environments where reliability matters.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-0.5 size-5 shrink-0 text-navy" />
              <span>
                We prefer measurable operational impact over marketing claims.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section
        id="contact"
        className="cta-gradient relative overflow-hidden px-6 py-20 text-white sm:px-8 lg:px-12"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Let’s evaluate whether remote monitoring can reduce risk in your
            operations.
          </h2>
          <p className="mt-6 text-lg text-white/90">
            Focused pilot. Clear scope. Measurable results.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="w-full bg-white px-8 text-navy shadow-xl shadow-black/20 transition-all hover:scale-[1.02] hover:bg-white hover:shadow-2xl sm:w-auto"
            >
              <a
                href="https://calendly.com/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="size-4" />
                Schedule Intro Call
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="border-t border-border bg-white px-6 py-10 dark:bg-card sm:px-8 lg:px-12" aria-label="Contact">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 sm:flex-row sm:flex-wrap">
          <h3 className="text-base font-semibold text-foreground sm:text-lg">
            Contact
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center gap-2 text-foreground underline decoration-muted-foreground/40 underline-offset-2 transition-colors hover:text-navy hover:decoration-navy"
            >
              <Mail className="size-4 shrink-0" />
              <span>contact@example.com</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground underline decoration-muted-foreground/40 underline-offset-2 transition-colors hover:text-navy hover:decoration-navy"
            >
              <Linkedin className="size-4 shrink-0" />
              <span>LinkedIn</span>
            </a>
            <Button asChild size="sm" variant="outline" className="border-navy/30 text-navy hover:bg-navy/5">
              <a
                href="https://calendly.com/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="size-4" />
                Schedule a Call
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
