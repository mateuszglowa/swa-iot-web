import { Button } from "@/components/ui/button";
import {
  Mail,
  Linkedin,
  Calendar,
  Check,
  ArrowRight,
  User,
  Phone,
  LayoutDashboard,
  TrendingUp,
  Zap,
  ShieldCheck,
  AlertTriangle,
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
  const blocks = [
    { label: "Sensor", num: "1" },
    { label: "Edge", num: "2" },
    { label: "Cloud", num: "3" },
    { label: "Visibility", num: "4" },
  ];
  return (
    <div
      className="mx-auto w-full max-w-3xl rounded-xl border-2 border-border bg-card p-5 dark:bg-card sm:p-6 lg:p-8"
      aria-hidden
    >
      {/* Mobile: stacked */}
      <div className="flex flex-col gap-4 sm:hidden">
        {blocks.map((block) => (
          <div
            key={block.label}
            className="flex min-h-12 items-center justify-center rounded-lg border border-border bg-muted/50 px-4 py-4 text-center dark:bg-muted"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {block.label}
            </span>
          </div>
        ))}
      </div>
      {/* Desktop: row with arrows between */}
      <div className="hidden sm:flex sm:items-center sm:justify-between sm:gap-2 lg:gap-4">
        {blocks.map((block, i) => (
          <div key={block.label} className="flex flex-1 items-center gap-2 lg:gap-4">
            <div className="flex min-h-18 flex-1 items-center justify-center rounded-lg border border-border bg-muted/50 px-3 py-4 text-center dark:bg-muted lg:min-h-20 lg:px-4 lg:py-5">
              <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground lg:text-base">
                {block.label}
              </span>
            </div>
            {i < blocks.length - 1 && (
              <ArrowRight
                className="size-5 shrink-0 text-muted-foreground lg:size-6"
                aria-hidden
              />
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-muted-foreground sm:mt-5">
        We own the entire system architecture — not just a single layer.
      </p>
    </div>
  );
}

const ROI_SCENARIOS = [
  {
    id: "downtime",
    icon: AlertTriangle,
    amount: "50 000+ zł",
    unit: "per avoided hour of downtime",
    scenario: "Manufacturing: early bearing fault detected → planned maintenance instead of line stop.",
  },
  {
    id: "energy",
    icon: Zap,
    amount: "15%",
    unit: "energy waste reduction",
    scenario: "Energy: per-machine visibility revealed idle waste. Clients cut bills by 12–18%.",
  },
  {
    id: "spoilage",
    icon: ShieldCheck,
    amount: "Compliance + spoilage",
    unit: "risk reduced",
    scenario: "Cold storage: temperature drift alerts prevent product loss and audit gaps.",
  },
  {
    id: "remote",
    icon: TrendingUp,
    amount: "24/7 visibility",
    unit: "replaces manual logs",
    scenario: "Pump stations: remote alerts instead of site visits. Faster response, lower cost.",
  },
] as const;

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

const DEMO_DASHBOARDS = [
  {
    id: "vibration",
    title: "Vibration & condition monitoring",
    description: "Real-time asset health, trend analysis, alert thresholds.",
    image: null, // Replace with "/demo-vibration.jpg" when ready
  },
  {
    id: "energy",
    title: "Energy consumption",
    description: "Per-machine usage, load patterns, peak identification.",
    image: null, // Replace with "/demo-energy.jpg" when ready
  },
  {
    id: "environment",
    title: "Temperature & environment",
    description: "Zone monitoring, compliance tracking, event logs.",
    image: null, // Replace with "/demo-environment.jpg" when ready
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
    outcome: "Prevent failures that cost your company an average of 50,000+ zł per hour of downtime",
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
    outcome: "Clients reduce energy waste by an average of 15%. Data-driven optimization.",
  },
  {
    vertical: "Pump Stations & Water Treatment",
    asset: "Tanks, pumps, alarms",
    risk: "Remote blind spots, manual logs",
    variables: "Tank levels, pump runtime, temperature, alarms",
    outcome: "Remote visibility, faster incident response",
  },
] as const;

const RECENT_PROJECTS = [
  {
    industry: "Manufacturing",
    title: "Production line vibration monitoring",
    scope: "3 critical motors, 30-day pilot",
    outcome: "Early bearing fault detected; planned maintenance vs. unplanned downtime.",
  },
  {
    industry: "Cold storage",
    title: "Compressor & temperature zone monitoring",
    scope: "2 zones, 4 compressors",
    outcome: "Compliance visibility, reduced spoilage risk.",
  },
  {
    industry: "Pump station",
    title: "Remote tank level & pump runtime visibility",
    scope: "1 site, 2 pumps",
    outcome: "Replaced manual logs with real-time alerts.",
  },
  {
    industry: "Energy",
    title: "Machine-level consumption tracking",
    scope: "5 machines, load pattern analysis",
    outcome: "Identified 12% waste; optimization roadmap delivered.",
  },
] as const;

const FOUNDERS = [
  {
    name: "Founder Name",
    role: "Co-founder & Technical Lead",
    bio: "Background in embedded systems and industrial IoT. Previously led engineering teams building monitoring solutions for manufacturing and utilities.",
    image: null, // Replace with "/founder-1.jpg" when ready
  },
  {
    name: "Founder Name",
    role: "Co-founder & Operations",
    bio: "Experience in operations and client delivery. Focus on turning technical capability into measurable outcomes for asset-heavy industries.",
    image: null, // Replace with "/founder-2.jpg" when ready
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
            30-day pilot · Low risk
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-tight">
            Industrial monitoring that pays for itself
          </h1>
          <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
            Prevent downtime. Cut energy waste. Get visibility. Real ROI from
            day one.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full min-w-[200px] shadow-lg shadow-navy/20 transition-all hover:shadow-xl hover:shadow-navy/25 sm:w-auto"
            >
              <a href="#roi">See savings examples</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full min-w-[200px] border-2 border-foreground/20 hover:border-accent-industrial hover:bg-accent-industrial/5 hover:text-foreground sm:w-auto"
            >
              <a href="#contact">Schedule intro call</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. ROI Scenarios — main focus */}
      <section
        id="roi"
        className="border-b border-border bg-muted/40 px-6 py-16 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            What clients save
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
            Real scenarios. Measurable ROI.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {ROI_SCENARIOS.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.id}
                  className="flex gap-5 rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-navy/10 text-navy dark:bg-white/15">
                    <Icon className="size-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xl font-bold text-foreground sm:text-2xl">
                      {item.amount}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-muted-foreground">
                      {item.unit}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {item.scenario}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Get your ROI estimate</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 3. What End-to-End Means */}
      <section
        id="what-e2e"
        className="border-b border-border px-6 py-12 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-xl font-bold text-foreground sm:text-2xl">
            How it works
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Sensors → Edge → Cloud → Dashboards & alerts. We own the full stack.
          </p>
          <div className="mt-8 flex justify-center">
            <EndToEndDiagram />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {E2E_LAYERS.map((layer) => (
              <div
                key={layer.id}
                className="rounded-lg border border-border bg-card px-4 py-3"
              >
                <h3 className="font-semibold text-foreground text-sm">
                  {layer.title}
                </h3>
                <ul className="mt-2 space-y-1">
                  {layer.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <Check className="mt-0.5 size-3 shrink-0 text-navy" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Dashboard demo preview */}
          <div className="mt-10">
            <h3 className="text-center text-base font-semibold text-foreground">
              Dashboards & demos
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DEMO_DASHBOARDS.map((demo) => (
                <article
                  key={demo.id}
                  className="overflow-hidden rounded-xl border border-border bg-card"
                >
                  <div className="aspect-video bg-muted/50">
                    {demo.image ? (
                      <img
                        src={demo.image}
                        alt={demo.title}
                        className="size-full object-cover"
                      />
                    ) : (
                      <div
                        className="flex size-full items-center justify-center border-b border-border"
                        aria-label="Dashboard preview placeholder"
                      >
                        <LayoutDashboard className="size-16 text-muted-foreground/40" />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-foreground">
                      {demo.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {demo.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Problems We Solve */}
      <section className="border-b border-border bg-muted/40 px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-lg font-bold text-foreground">
            We fix
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {PROBLEMS.map((problem) => (
              <span
                key={problem}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
              >
                {problem}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How We Deliver */}
      <section
        id="how-it-works"
        className="border-b border-border px-6 py-10 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-lg font-bold text-foreground">
            How we deliver
          </h2>
          <ol className="mt-6 flex flex-wrap justify-center gap-3">
            {DELIVERY_STEPS.map((step, i) => (
              <li
                key={step}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded bg-navy text-xs font-bold text-navy-foreground">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-foreground">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5b. 30-day pilot */}
      <section
        id="pilot"
        className="border-b border-border bg-muted/40 px-6 py-10 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-lg font-bold text-foreground">
            30-day pilot — no commitment
          </h2>
          <div className="mt-6 rounded-xl border-2 border-border bg-card p-6">
            <ol className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {PILOT_STEPS.map((item) => (
                <li
                  key={item.step}
                  className="flex flex-col items-center gap-1 text-center"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-navy text-xs font-bold text-navy-foreground">
                    {item.step}
                  </span>
                  <span className="max-w-[120px] text-xs font-medium text-foreground">
                    {item.title}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 6. Use Cases — ROI focus */}
      <section className="border-b border-border px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-lg font-bold text-foreground">
            ROI by industry
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((uc) => (
              <article
                key={uc.vertical}
                className="rounded-xl border border-border bg-card p-4"
              >
                <h3 className="font-semibold text-foreground">{uc.vertical}</h3>
                <p className="mt-2 text-sm font-medium text-navy">
                  {uc.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6b. Recent Projects */}
      <section className="border-b border-border bg-muted/40 px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-lg font-bold text-foreground">
            Recent projects
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {RECENT_PROJECTS.map((project) => (
              <article
                key={project.title}
                className="rounded-xl border border-border bg-card p-4"
              >
                <span className="text-xs font-medium text-muted-foreground">
                  {project.industry}
                </span>
                <h3 className="mt-1 font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-navy">
                  {project.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Us */}
      <section className="border-b border-border px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-lg font-bold text-foreground">
            Why us
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {WHY_APPROACH.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-navy" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7b. About Us */}
      <section className="border-b border-border bg-muted/40 px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-lg font-bold text-foreground">
            About us
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {FOUNDERS.map((founder) => (
              <article
                key={founder.name + founder.role}
                className="flex gap-4 rounded-xl border border-border bg-card p-4"
              >
                <div className="flex shrink-0">
                  {founder.image ? (
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="size-16 rounded-lg object-cover sm:size-20"
                    />
                  ) : (
                    <div
                      className="flex size-16 items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/50 sm:size-20"
                      aria-label="Photo placeholder"
                    >
                      <User className="size-8 text-muted-foreground/50" />
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-foreground">{founder.name}</h3>
                  <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                    {founder.role}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {founder.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Contact */}
      <section
        id="contact"
        className="border-b border-border bg-muted/40 px-6 py-16 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-xl font-bold text-foreground sm:text-2xl">
            Contact us
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Phone, email, or form. We reply quickly.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 xl:gap-16">
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">Get in touch</h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href="tel:+48123456789"
                      className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Phone className="size-4 shrink-0" />
                      <span>+48 123 456 789</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:contact@example.com"
                      className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Mail className="size-4 shrink-0" />
                      <span>contact@example.com</span>
                    </a>
                  </li>
                </ul>
                <Button asChild size="lg" className="mt-6 w-full sm:w-auto">
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

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">
                Technical question?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Ask about sensors, integration, or deployment. We&apos;ll get back
                to you shortly.
              </p>
              {/* Replace YOUR_FORM_ID with your Formspree form ID from formspree.io */}
              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                className="mt-4 space-y-4"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Technical question from website"
                />
                <div>
                  <label className="block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Your technical question..."
                    className="mt-1.5 w-full resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="cta-gradient relative overflow-hidden px-6 py-16 text-white sm:px-8 lg:px-12">
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
            Get your ROI estimate
          </h2>
          <p className="mt-6 text-lg text-white/90">
            30-day pilot. No commitment. Real numbers.
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
              href="tel:+48123456789"
              className="inline-flex items-center gap-2 text-foreground underline decoration-muted-foreground/40 underline-offset-2 transition-colors hover:text-navy hover:decoration-navy"
            >
              <Phone className="size-4 shrink-0" />
              <span>+48 123 456 789</span>
            </a>
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
