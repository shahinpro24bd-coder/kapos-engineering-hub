import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/keg-logo.png";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 surface-ink border-b border-white/10 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Kapos Engineering Group logo"
            width={160}
            height={98}
            className="h-11 w-auto object-contain"
          />
          <span className="leading-none">
            <span className="display block text-lg tracking-wide">Kapos</span>
            <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-brand">
              Engineering Group
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+265995534547"
          className="ml-auto hidden items-center gap-3 border-l border-white/10 pl-6 lg:flex"
        >
          <span className="grid h-10 w-10 place-items-center surface-brand">
            <Phone className="h-4 w-4" />
          </span>
          <span className="leading-tight">
            <span className="block text-[0.6rem] uppercase tracking-[0.24em] text-white/50">
              Call us
            </span>
            <span className="block text-sm font-semibold text-white">+265 995 53 45 47</span>
          </span>
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto grid h-10 w-10 place-items-center surface-brand lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-5 pb-5 lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/75"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+265995534547"
            className="mt-4 inline-flex items-center gap-2 surface-brand px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em]"
          >
            <Phone className="h-4 w-4" /> +265 995 53 45 47
          </a>
        </nav>
      )}
    </header>
  );
}
