import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/keg-logo.png";

export function Footer() {
  return (
    <footer className="surface-ink">
      <div className="grid-lines border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="inline-flex flex-col gap-4 border border-white/10 bg-white/[0.03] p-6">
              <img
                src={logo}
                alt="Kapos Engineering Group logo"
                width={472}
                height={289}
                loading="lazy"
                className="h-24 w-auto object-contain"
              />
              <span className="text-[0.62rem] uppercase tracking-[0.3em] text-white/45">
                Kapos Engineering Group
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/55">
              Engineering works company based in Lilongwe, Malawi — building, installing and
              maintaining the infrastructure that keeps industry running.
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/35">
              681 followers · 53 following
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.2em] text-brand">Quick links</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {["About", "Services", "Projects", "Process", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-brand">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.2em] text-brand">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>Civil &amp; Structural Works</li>
              <li>Mechanical Fabrication</li>
              <li>Electrical Installation</li>
              <li>Plant Maintenance</li>
              <li>Project Management</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.2em] text-brand">Get in touch</h4>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                Area 3 Market, Box 96, Lilongwe, Malawi
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <a href="tel:+265995534547" className="hover:text-brand">
                  +265 995 53 45 47
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <a href="mailto:pearsonkaponda.pk@gmail.com" className="break-all hover:text-brand">
                  pearsonkaponda.pk@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs uppercase tracking-[0.2em] text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <span>© {new Date().getFullYear()} Kapos Engineering Group</span>
            <span>Lilongwe · Malawi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
