import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Cog,
  HardHat,
  Mail,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroEngineer from "@/assets/hero-engineer.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import serviceFabrication from "@/assets/service-fabrication.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";
import serviceCivil from "@/assets/service-civil.jpg";
import projectPlant from "@/assets/project-plant.jpg";
import projectCrane from "@/assets/project-crane.jpg";
import projectWarehouse from "@/assets/project-warehouse.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kapos Engineering Group — Engineering Works, Lilongwe Malawi" },
      {
        name: "description",
        content:
          "Kapos Engineering Group in Lilongwe delivers civil, mechanical, electrical and steel fabrication engineering works across Malawi. Call +265 995 53 45 47.",
      },
      {
        property: "og:title",
        content: "Kapos Engineering Group — Engineering Works, Lilongwe Malawi",
      },
      {
        property: "og:description",
        content:
          "Civil, mechanical, electrical and fabrication engineering works delivered across Malawi from Area 3 Market, Lilongwe.",
      },
    ],
  }),
  component: Home,
});

const SERVICES = [
  {
    title: "Civil & Structural Works",
    image: serviceCivil,
    icon: Building2,
    text: "Foundations, concrete structures, warehouses and commercial buildings built to specification and delivered on schedule.",
  },
  {
    title: "Mechanical Fabrication",
    image: serviceFabrication,
    icon: Wrench,
    text: "Steel fabrication, welding, tanks, pipework and machinery installation from our workshop to your site.",
  },
  {
    title: "Electrical Installation",
    image: serviceElectrical,
    icon: Zap,
    text: "Power distribution, panel building, industrial wiring and preventive maintenance for plants and facilities.",
  },
];

const STATS = [
  { value: "25+", label: "Years combined experience" },
  { value: "180+", label: "Projects delivered" },
  { value: "100%", label: "Client satisfaction" },
  { value: "681", label: "Community followers" },
];

const PROCESS = [
  { step: "01", title: "Survey", icon: Ruler, text: "Site assessment, measurement and honest feasibility advice." },
  { step: "02", title: "Design", icon: ClipboardCheck, text: "Drawings, material schedules and a transparent quotation." },
  { step: "03", title: "Build", icon: HardHat, text: "Skilled crews, certified materials, daily supervision on site." },
  { step: "04", title: "Handover", icon: ShieldCheck, text: "Testing, commissioning and after-service maintenance." },
];

const PROJECTS = [
  { title: "Industrial Plant Piping", tag: "Mechanical", image: projectPlant },
  { title: "High-Rise Structural Frame", tag: "Civil", image: projectCrane },
  { title: "Steel Warehouse Erection", tag: "Fabrication", image: projectWarehouse },
];

function Home() {
  return (
    <div id="home" className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden surface-ink">
        <div className="grid-lines absolute inset-0" aria-hidden />
        <div className="absolute -right-24 top-0 hidden h-full w-1/2 surface-brand opacity-90 lg:block clip-slab" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <p className="eyebrow">Kapos Engineering Group · Malawi</p>
            <h1 className="mt-6 text-[2.75rem] leading-[0.92] sm:text-6xl xl:text-7xl">
              Engineering that
              <span className="mt-2 block">
                <span className="bg-brand px-3 text-brand-foreground">holds</span> the load
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/65">
              From Area 3 Market in Lilongwe we deliver civil, mechanical and electrical engineering
              works for industry, commerce and government across Malawi — designed properly, built
              once, maintained for life.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 surface-brand px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em]"
                style={{ boxShadow: "var(--shadow-brand)" }}
              >
                Request a quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-brand hover:text-brand"
              >
                Our services
              </a>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-7">
              {STATS.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <dt className="display text-3xl text-brand">{s.value}</dt>
                  <dd className="mt-1 text-[0.7rem] uppercase tracking-[0.14em] text-white/45">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <img
              src={heroEngineer}
              alt="Kapos Engineering Group site engineer at a construction site in Malawi"
              width={1200}
              height={1408}
              className="relative z-10 w-full object-cover clip-slab"
            />
            <div className="absolute -bottom-6 left-0 z-20 hidden bg-ink px-6 py-5 sm:block" style={{ boxShadow: "var(--shadow-lift)" }}>
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/45">Based in</p>
              <p className="mt-1 text-sm font-semibold text-white">Lilongwe, Malawi</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src={aboutTeam}
              alt="Kapos engineers reviewing project drawings on site"
              width={1000}
              height={1200}
              loading="lazy"
              className="w-full object-cover"
            />
            <div className="absolute -bottom-8 -right-4 hidden bg-brand px-8 py-7 text-brand-foreground sm:block">
              <span className="display block text-4xl">25+</span>
              <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.2em]">
                Years of engineering
              </span>
            </div>
          </div>
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-5 text-3xl sm:text-4xl xl:text-5xl">
              An engineering works team Malawi&apos;s industry trusts
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Kapos Engineering Group is a Lilongwe-based engineering works company. We combine
              qualified engineers, experienced fabricators and disciplined site management to handle
              projects from a single machine installation to a full structure — with the same
              standard of workmanship on every job.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Qualified site engineers",
                "In-house fabrication workshop",
                "Certified materials only",
                "Nationwide site coverage",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-brand"
            >
              Talk to an engineer
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="surface-ink">
        <div className="grid-lines">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="eyebrow">What we do</p>
                <h2 className="mt-5 text-3xl text-white sm:text-4xl xl:text-5xl">
                  Engineering services under one roof
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-white/55">
                One accountable team for design, fabrication, installation and maintenance — no
                subcontractor guesswork.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {SERVICES.map((s) => (
                <article
                  key={s.title}
                  className="group relative bg-ink-soft/60 transition-transform duration-300 hover:-translate-y-2"
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    width={900}
                    height={700}
                    loading="lazy"
                    className="h-56 w-full object-cover"
                  />
                  <span className="absolute left-0 top-48 grid h-14 w-14 place-items-center surface-brand">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <div className="px-7 pb-8 pt-12">
                    <h3 className="text-xl text-white">{s.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/55">{s.text}</p>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand"
                    >
                      Enquire
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="surface-brand">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 lg:grid-cols-4 lg:px-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-brand-foreground">
              <p className="display text-4xl xl:text-5xl">{s.value}</p>
              <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] opacity-80">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-5 text-3xl sm:text-4xl xl:text-5xl">Four steps, zero surprises</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p) => (
            <div
              key={p.step}
              className="group border border-border bg-card p-7 transition-colors hover:border-brand"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center bg-ink text-white transition-colors group-hover:bg-brand">
                  <p.icon className="h-5 w-5" />
                </span>
                <span className="display text-3xl text-muted">{p.step}</span>
              </div>
              <h3 className="mt-6 text-lg">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-5 text-3xl sm:text-4xl xl:text-5xl">Projects on the ground</h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-ink hover:text-white"
            >
              Start yours
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PROJECTS.map((p) => (
              <article key={p.title} className="group relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="h-[26rem] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-ink/85 p-6 backdrop-blur-sm">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand">
                    {p.tag}
                  </span>
                  <h3 className="mt-2 text-lg text-white">{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="surface-ink">
        <div className="grid-lines">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2 className="mt-5 text-3xl text-white sm:text-4xl xl:text-5xl">
                Tell us what needs building
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60">
                Send us your drawings, scope or a simple description. We respond with practical
                advice and a clear quotation.
              </p>

              <ul className="mt-10 space-y-6">
                <li className="flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center surface-brand">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
                      Office
                    </span>
                    <span className="mt-1 block text-sm font-medium text-white">
                      Area 3 Market, Box 96, Lilongwe, Malawi
                    </span>
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center surface-brand">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
                      Phone
                    </span>
                    <a
                      href="tel:+265995534547"
                      className="mt-1 block text-sm font-medium text-white hover:text-brand"
                    >
                      +265 995 53 45 47
                    </a>
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center surface-brand">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
                      Email
                    </span>
                    <a
                      href="mailto:pearsonkaponda.pk@gmail.com"
                      className="mt-1 block break-all text-sm font-medium text-white hover:text-brand"
                    >
                      pearsonkaponda.pk@gmail.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            <form
              className="bg-ink-soft/70 p-8 lg:p-10"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const body = `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\n\n${data.get("message")}`;
                window.location.href = `mailto:pearsonkaponda.pk@gmail.com?subject=${encodeURIComponent(
                  `Project enquiry — ${data.get("name")}`,
                )}&body=${encodeURIComponent(body)}`;
              }}
            >
              <h3 className="text-xl text-white">Request a quote</h3>
              <div className="mt-7 grid gap-4">
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full border border-white/15 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-white/35 focus:border-brand focus:outline-none"
                />
                <input
                  name="phone"
                  required
                  placeholder="Phone or email"
                  className="w-full border border-white/15 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-white/35 focus:border-brand focus:outline-none"
                />
                <input
                  name="service"
                  placeholder="Service needed (e.g. fabrication)"
                  className="w-full border border-white/15 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-white/35 focus:border-brand focus:outline-none"
                />
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Describe your project"
                  className="w-full border border-white/15 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-white/35 focus:border-brand focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 surface-brand px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em]"
                >
                  Send enquiry
                  <Cog className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
