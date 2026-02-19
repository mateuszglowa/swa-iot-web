import { Button } from "@/components/ui/button";
import {
  Mail,
  Linkedin,
  Calendar,
  Check,
  ArrowRight,
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

function EndToEndDiagram() {
  return (
    <div
      className="mx-auto max-w-3xl rounded-xl border-2 border-border bg-card p-4 dark:bg-card sm:p-6"
      aria-hidden
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-2">
        {[
          { label: "Sensor", short: "1" },
          { label: "Edge", short: "2" },
          { label: "Cloud", short: "3" },
          { label: "Visibility", short: "4" },
        ].map((block, i) => (
          <div key={block.label} className="flex flex-1 items-center gap-2 sm:flex-col sm:gap-1">
            <div className="flex flex-1 items-center justify-center rounded-lg border border-border bg-muted/50 py-3 text-center dark:bg-muted">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-[10px]">
                {block.label}
              </span>
            </div>
            {i < 3 && (
              <ArrowRight className="hidden shrink-0 text-muted-foreground sm:block" aria-hidden />
            )}
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        We own the entire system architecture — not just a single layer.
      </p>
    </div>
  );
}

const E2E_LAYERS = [
  {
    id: "sensor",
    title: "Layer 1: Physical & Sensor Integration",
    bullets: [
      "Selection of industrial-grade sensors",
      "Custom integration with existing equipment",
      "Environmental suitability",
    ],
  },
  {
    id: "edge",
    title: "Layer 2: Embedded & Edge Systems",
    bullets: [
      "Custom data acquisition devices",
      "On-site preprocessing",
      "Secure connectivity",
    ],
  },
  {
    id: "cloud",
    title: "Layer 3: Cloud Infrastructure",
    bullets: [
      "Secure ingestion pipelines",
      "Scalable backend architecture",
      "Data storage and modeling",
    ],
  },
  {
    id: "visibility",
    title: "Layer 4: Operational Visibility",
    bullets: [
      "Dashboards tailored to operations teams",
      "Threshold-based alerts",
      "Structured reporting",
    ],
  },
] as const;

const PROBLEMS = [
  "Unplanned equipment downtime",
  "Lack of runtime visibility",
  "Manual logbooks and reactive maintenance",
  "Energy inefficiency without root-cause data",
  "Remote asset blind spots",
] as const;

const DELIVERY_STEPS = [
  "Operational Assessment",
  "System Architecture Design",
  "Hardware Configuration",
  "Deployment & Data Collection",
  "Analysis & Recommendations",
  "Optional Scale-Up",
] as const;

const PILOT_STEPS = [
  { step: 1, title: "20-minute discovery call" },
  { step: 2, title: "Define monitoring scope (1–2 assets)" },
  { step: 3, title: "Device configuration & shipment" },
  { step: 4, title: "30 days of data collection" },
  { step: 5, title: "Report & next-step recommendations" },
] as const;

const USE_CASES = [
  {
    vertical: "Manufacturing",
    asset: "Motors, bearings, compressors",
    risk: "Unplanned downtime, recurring failures",
    variables: "Vibration, temperature, pressure, runtime",
    outcome: "Early fault detection, reduced unplanned downtime",
  },
  {
    vertical: "Irrigation & Agriculture",
    asset: "Pumps, flow, soil",
    risk: "Pump failure, water waste, pressure instability",
    variables: "Flow rate, pressure, pump cycles, soil moisture",
    outcome: "Leak detection, pump protection, optimized cycles",
  },
  {
    vertical: "Cold Storage & Food",
    asset: "Temperature zones, compressors",
    risk: "Temperature drift, spoilage, compliance gaps",
    variables: "Temperature, compressor cycles, door activity",
    outcome: "Compliance support, reduced spoilage risk",
  },
  {
    vertical: "Energy",
    asset: "Machine-level consumption",
    risk: "Rising costs, no visibility into peaks or waste",
    variables: "Per-machine consumption, load patterns, peak usage",
    outcome: "Data-driven optimization",
  },
  {
    vertical: "Pump Stations & Water Treatment",
    asset: "Tanks, pumps, alarms",
    risk: "Remote blind spots, manual logs",
    variables: "Tank levels, pump runtime, temperature, alarms",
    outcome: "Remote visibility, faster incident response",
  },
] as const;

const WHY_APPROACH = [
  "Full-stack ownership reduces integration gaps.",
  "No dependency on multiple vendors.",
  "Systems designed specifically for each operational environment.",
  "Focus on measurable impact, not dashboards for their own sake.",
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
            End-to-End Industrial Monitoring Systems
          </h1>
          <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
            From physical sensors to actionable cloud insights — we design and
            deploy complete monitoring solutions for real-world operations.
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            We build reliable monitoring systems for equipment, utilities, and
            infrastructure where downtime and blind spots create operational
            risk.
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
              <a href="#what-e2e">See How It Works</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. What End-to-End Means */}
      <section
        id="what-e2e"
        className="border-b border-border bg-muted/40 px-6 py-16 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            What end-to-end means
          </h2>
          <p className="mt-3 text-muted-foreground">
            We own the entire system architecture — from sensors to dashboards —
            not just a single layer.
          </p>
          <div className="mt-8">
            <EndToEndDiagram />
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {E2E_LAYERS.map((layer) => (
              <div
                key={layer.id}
                className="rounded-xl border border-border bg-card p-5"
              >
                <h3 className="font-semibold text-foreground">
                  {layer.title}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {layer.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-navy" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Problems We Solve */}
      <section className="border-b border-border px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Problems we solve
          </h2>
          <p className="mt-2 text-muted-foreground">
            We reduce operational risk where it matters.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROBLEMS.map((problem) => (
              <div
                key={problem}
                className="rounded-lg border border-border bg-card px-4 py-3"
              >
                <p className="text-sm font-medium text-foreground">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How We Deliver */}
      <section
        id="how-it-works"
        className="border-b border-border bg-muted/40 px-6 py-16 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            How we deliver
          </h2>
          <p className="mt-2 text-muted-foreground">
            Clear scope. Defined pilot. Measurable outcome. Low-risk entry.
          </p>
          <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DELIVERY_STEPS.map((step, i) => (
              <li
                key={step}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-navy text-sm font-bold text-navy-foreground">
                  {i + 1}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4b. 30-day pilot – How our pilot works */}
      <section
        id="pilot"
        className="border-b border-border px-6 py-16 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            30-day pilot
          </h2>
          <p className="mt-2 text-muted-foreground">
            Low-risk way to start. We handle configuration and analysis; you get
            a clear report with findings and next-step options.
          </p>
          <div className="mt-8 rounded-2xl border-2 border-border bg-muted/30 p-6 sm:p-8">
            <h3 className="text-base font-semibold text-foreground">
              How our pilot works
            </h3>
            <ol className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-5 sm:gap-2">
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

      {/* 5. Use Case Examples */}
      <section className="border-b border-border px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Use case examples
          </h2>
          <p className="mt-2 text-muted-foreground">
            Concise by vertical. Scope is tailored to your assets and risks.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((uc) => (
              <article
                key={uc.vertical}
                className="rounded-xl border border-border bg-card p-5"
              >
                <h3 className="font-semibold text-foreground">{uc.vertical}</h3>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Asset
                </p>
                <p className="mt-0.5 text-sm text-foreground">{uc.asset}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Risk
                </p>
                <p className="mt-0.5 text-sm text-foreground">{uc.risk}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Monitored variables
                </p>
                <p className="mt-0.5 text-sm text-foreground">{uc.variables}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Operational outcome
                </p>
                <p className="mt-0.5 text-sm text-foreground">{uc.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Our Approach */}
      <section className="border-b border-border bg-muted/40 px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Why our approach
          </h2>
          <ul className="mt-6 space-y-3">
            {WHY_APPROACH.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <Check className="mt-0.5 size-5 shrink-0 text-navy" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Final CTA */}
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
            Let’s design a monitoring system that fits your operations.
          </h2>
          <p className="mt-6 text-lg text-white/90">
            Defined scope. Full-stack responsibility. Measurable results.
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

      {/* Footer */}
      <footer
        className="border-t border-border bg-white px-6 py-10 dark:bg-card sm:px-8 lg:px-12"
        aria-label="Contact"
      >
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
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-navy/30 text-navy hover:bg-navy/5"
            >
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
