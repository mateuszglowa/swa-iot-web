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
} from "lucide-react";

function SectionTitle({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="max-w-2xl">
      <p className="section-label">{label}</p>
      <h2 className="font-heading mt-3 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </header>
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
      className="mx-auto w-full max-w-3xl border border-border bg-card/80 p-5 backdrop-blur-[2px] sm:p-6 lg:p-8"
      aria-hidden
    >
      {/* Mobile: stacked */}
      <div className="flex flex-col gap-4 sm:hidden">
        {blocks.map((block) => (
          <div
            key={block.label}
            className="flex min-h-12 items-center justify-center border border-border bg-muted/40 px-4 py-4 text-center dark:bg-muted/60"
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
            <div className="flex min-h-18 flex-1 items-center justify-center border border-border bg-muted/40 px-3 py-4 text-center dark:bg-muted/60 lg:min-h-20 lg:px-4 lg:py-5">
              <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground lg:text-sm">
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
      <p className="mt-4 text-center text-sm leading-relaxed text-muted-foreground sm:mt-5">
        Full stack in one team: hardware through to the screens your operators
        actually use.
      </p>
    </div>
  );
}

const ROI_SCENARIOS = [
  {
    id: "downtime",
    context: "Manufacturing line",
    amount: "50 000+ USD",
    unit: "typical cost per hour of unplanned downtime",
    scenario:
      "A bearing fault showed up in vibration data weeks before it would have seized. Maintenance was scheduled during a planned stop instead of mid-run.",
  },
  {
    id: "energy",
    context: "Shop floor power",
    amount: "12–18%",
    unit: "lower energy bills after idle-time visibility",
    scenario:
      "Per-machine metering made it obvious which assets were left running overnight. No new hardware philosophy—just data the finance team could act on.",
  },
  {
    id: "spoilage",
    context: "Cold chain",
    amount: "Audit-ready",
    unit: "temperature logs without the clipboard",
    scenario:
      "Drift alerts and retained history reduced spoilage risk and gave QA a straight line from sensor to report.",
  },
  {
    id: "remote",
    context: "Remote sites",
    amount: "Fewer truck rolls",
    unit: "alerts before the phone tree starts",
    scenario:
      "Tank level and pump runtime pushed to one dashboard. Operators stopped driving out for readings that could have been a notification.",
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
    outcome: "Prevent failures that cost your company an average of 50,000+ USD per hour of downtime",
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
      <section className="hero-surface px-6 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_minmax(0,280px)] lg:items-end lg:gap-16">
          <div>
            <p className="section-label text-navy/70 dark:text-white/60">
              Industrial IoT · EU-based
            </p>
            <h1 className="font-heading mt-5 text-[2rem] font-medium leading-[1.12] tracking-tight text-foreground sm:text-5xl sm:leading-[1.08]">
              Monitoring built around how plants actually fail—not around
              dashboard demos.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We spec sensors, build edge hardware where needed, run the cloud
              side, and hand you alerts your maintenance team will trust. Start
              with a{" "}
              <span className="text-foreground">30-day pilot</span> on one or
              two assets; no long contract required.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="#roi">Read how savings show up</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-foreground/25 bg-background/60 sm:w-auto"
              >
                <a href="#contact">Book a short intro</a>
              </Button>
            </div>
          </div>
          <aside
            className="border-l-2 border-accent-industrial pl-6 text-sm leading-relaxed text-muted-foreground lg:pb-2"
            aria-label="Summary"
          >
            <p>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foreground">
                Scope
              </span>
              <br />
              Vibration, temperature, energy, tank level—wired where it matters,
              wireless where it doesn&apos;t.
            </p>
            <p className="mt-5">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foreground">
                Output
              </span>
              <br />
              Threshold alerts, trend views, and exportable history for
              maintenance and compliance conversations.
            </p>
          </aside>
        </div>
      </section>

      {/* 2. ROI Scenarios — main focus */}
      <section
        id="roi"
        className="border-b border-border px-6 py-16 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            label="Outcomes"
            title="Where the money shows up"
            description="These are the same conversations we have on site: specific assets, specific failure modes, and a before/after you can point to in a spreadsheet."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {ROI_SCENARIOS.map((item) => (
              <article
                key={item.id}
                className="border-l-4 border-l-accent-industrial border border-border bg-card p-6 sm:p-8"
              >
                <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.2em] text-accent-industrial">
                  {item.context}
                </p>
                <p className="font-heading mt-4 text-2xl font-medium text-foreground sm:text-3xl">
                  {item.amount}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{item.unit}</p>
                <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.scenario}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted-foreground">
            Want numbers for your plant?{" "}
            <a
              href="#contact"
              className="font-medium text-foreground underline decoration-accent-industrial/50 underline-offset-4 hover:decoration-accent-industrial"
            >
              Send asset types and rough downtime cost
            </a>
            —we&apos;ll reply with a straight answer, not a funnel sequence.
          </p>
        </div>
      </section>

      {/* 3. What End-to-End Means */}
      <section
        id="what-e2e"
        className="border-b border-border bg-muted/30 px-6 py-14 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            label="Architecture"
            title="End-to-end, on purpose"
            description="Most pain in IoT projects comes from handoffs. We keep sensor choice, firmware, cloud, and UI under one roof so nothing gets lost between vendors."
          />
          <div className="mt-10 max-w-3xl">
            <EndToEndDiagram />
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {E2E_LAYERS.map((layer, i) => (
              <div key={layer.id} className="relative pl-4">
                <span
                  className="absolute left-0 top-1 font-mono text-xs tabular-nums text-muted-foreground"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold leading-snug text-foreground">
                  {layer.title.replace(/^Layer \d+: /, "")}
                </h3>
                <ul className="mt-3 space-y-2">
                  {layer.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm leading-snug text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent-industrial" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-border pt-12">
            <h3 className="font-heading text-xl font-medium text-foreground">
              What operators see
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Screens are tuned to the role: maintenance sees faults and
              trends; management sees summaries. Below are the three bundles we
              deploy most often—swap in your screenshots when you have them.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {DEMO_DASHBOARDS.map((demo) => (
                <article
                  key={demo.id}
                  className="overflow-hidden border border-border bg-card"
                >
                  <div className="aspect-video bg-muted/60">
                    {demo.image ? (
                      <img
                        src={demo.image}
                        alt={demo.title}
                        className="size-full object-cover"
                      />
                    ) : (
                      <div
                        className="flex size-full items-center justify-center"
                        aria-label="Dashboard preview placeholder"
                      >
                        <LayoutDashboard
                          className="size-14 text-muted-foreground/35"
                          strokeWidth={1.25}
                        />
                      </div>
                    )}
                  </div>
                  <div className="border-t border-border p-4">
                    <h4 className="text-sm font-semibold text-foreground">
                      {demo.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
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
      <section className="border-b border-border px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            label="Problems"
            title="The messy middle we&apos;re usually called for"
          />
          <ul className="mt-8 max-w-3xl space-y-3 text-base leading-relaxed text-muted-foreground">
            {PROBLEMS.map((problem) => (
              <li key={problem} className="flex gap-3">
                <span className="font-mono text-accent-industrial">—</span>
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. How We Deliver */}
      <section
        id="how-it-works"
        className="border-b border-border bg-muted/30 px-6 py-14 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16">
          <SectionTitle label="Delivery" title="How an engagement runs" />
          <ol className="mt-8 space-y-0 lg:mt-0">
            {DELIVERY_STEPS.map((step, i) => (
              <li
                key={step}
                className="flex gap-5 border-b border-border py-4 last:border-b-0"
              >
                <span className="w-8 shrink-0 font-mono text-sm font-semibold tabular-nums text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-relaxed text-foreground">
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
        className="border-b border-border px-6 py-14 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            label="Pilot"
            title="Thirty days, one or two assets, no lock-in"
            description="Enough time to see signal quality and whether your team will actually use the data. If it&apos;s not useful, we part ways cleanly."
          />
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {PILOT_STEPS.map((item) => (
              <li key={item.step} className="flex flex-col gap-2">
                <span className="font-mono text-xs tabular-nums text-muted-foreground">
                  Step {item.step}
                </span>
                <span className="text-sm font-medium leading-snug text-foreground">
                  {item.title}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. Use Cases — ROI focus */}
      <section className="border-b border-border bg-muted/30 px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            label="Industries"
            title="Where this tends to land"
          />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 pr-4 font-mono text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Sector
                  </th>
                  <th className="pb-3 pr-4 font-mono text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Typical assets
                  </th>
                  <th className="pb-3 font-mono text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    What changes
                  </th>
                </tr>
              </thead>
              <tbody>
                {USE_CASES.map((uc) => (
                  <tr
                    key={uc.vertical}
                    className="border-b border-border last:border-0"
                  >
                    <td className="py-4 pr-4 align-top font-medium text-foreground">
                      {uc.vertical}
                    </td>
                    <td className="py-4 pr-4 align-top text-muted-foreground">
                      {uc.asset}
                      <span className="mt-1 block text-xs text-muted-foreground/80">
                        Signals: {uc.variables}
                      </span>
                    </td>
                    <td className="py-4 align-top text-foreground/90">
                      {uc.outcome}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6b. Recent Projects */}
      <section className="border-b border-border px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            label="Work"
            title="Recent deployments (anonymised where needed)"
          />
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {RECENT_PROJECTS.map((project) => (
              <li
                key={project.title}
                className="grid gap-2 py-5 sm:grid-cols-[140px_1fr_1fr] sm:items-start sm:gap-8"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {project.industry}
                </span>
                <div>
                  <h3 className="font-medium text-foreground">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{project.scope}</p>
                </div>
                <p className="text-sm leading-relaxed text-foreground/90 sm:text-right">
                  {project.outcome}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Why Us */}
      <section className="border-b border-border bg-muted/30 px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-2 lg:gap-16">
          <SectionTitle
            label="Principles"
            title="Why teams hire us instead of bolting three vendors together"
          />
          <ul className="mt-8 space-y-4 lg:mt-0">
            {WHY_APPROACH.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-base leading-relaxed text-muted-foreground"
              >
                <Check
                  className="mt-1 size-4 shrink-0 text-accent-industrial"
                  strokeWidth={2.5}
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7b. About Us */}
      <section className="border-b border-border px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            label="People"
            title="Who you&apos;ll be working with"
            description="Replace placeholder names and photos when you&apos;re ready—the structure is meant for two founders or leads, not a faceless &ldquo;we.&rdquo;"
          />
          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            {FOUNDERS.map((founder) => (
              <article
                key={founder.name + founder.role}
                className="flex gap-5 border-t border-border pt-8 sm:pt-10"
              >
                <div className="flex shrink-0">
                  {founder.image ? (
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="size-20 object-cover grayscale sm:size-24"
                    />
                  ) : (
                    <div
                      className="flex size-20 items-center justify-center border border-dashed border-muted-foreground/40 bg-muted/40 sm:size-24"
                      aria-label="Photo placeholder"
                    >
                      <User className="size-9 text-muted-foreground/45" />
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-lg font-medium text-foreground">
                    {founder.name}
                  </h3>
                  <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {founder.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
        className="border-b border-border bg-muted/30 px-6 py-16 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            label="Contact"
            title="Say hello"
            description="Call, email, or use the form—whichever fits how your team already works. We aim for same-day replies on business days."
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <div className="border border-border bg-card p-6">
                <h3 className="font-heading text-lg font-medium text-foreground">
                  Direct lines
                </h3>
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

            <div className="border border-border bg-card p-6">
              <h3 className="font-heading text-lg font-medium text-foreground">
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
                    className="mt-1.5 w-full border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy/25"
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
                    className="mt-1.5 w-full border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy/25"
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
                    className="mt-1.5 w-full resize-none border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy/25"
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
      <section className="cta-surface px-6 py-16 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.22em] text-white/55">
              Next step
            </p>
            <h2 className="font-heading mt-4 text-3xl font-medium leading-tight sm:text-4xl">
              Rough ROI in one conversation
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85">
              Bring asset types, rough downtime or energy numbers, and what you
              wish you could see from the plant floor. We&apos;ll tell you if
              we&apos;re the right fit—no nurture emails.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
            <Button
              asChild
              size="lg"
              className="w-full bg-white text-navy hover:bg-white/95 sm:w-auto lg:w-full"
            >
              <a
                href="https://calendly.com/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="size-4" />
                Pick a time
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-white/40 bg-transparent text-white hover:bg-white/10 sm:w-auto lg:w-full"
            >
              <a href="mailto:contact@example.com">
                <Mail className="size-4" />
                Email instead
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t border-border px-6 py-12 sm:px-8 lg:px-12"
        aria-label="Contact"
      >
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              Industrial monitoring
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              End-to-end systems: sensors through to the alerts your maintenance
              team trusts.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm sm:items-end">
            <a
              href="tel:+48123456789"
              className="inline-flex items-center gap-2 text-foreground hover:text-navy"
            >
              <Phone className="size-4 shrink-0 opacity-60" />
              <span>+48 123 456 789</span>
            </a>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center gap-2 text-foreground hover:text-navy"
            >
              <Mail className="size-4 shrink-0 opacity-60" />
              <span>contact@example.com</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground hover:text-navy"
            >
              <Linkedin className="size-4 shrink-0 opacity-60" />
              <span>LinkedIn</span>
            </a>
            <Button asChild size="sm" variant="outline" className="mt-2 w-fit">
              <a
                href="https://calendly.com/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="size-4" />
                Calendar
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
