import React, { useEffect, useState } from "react";
import { Github, Mail } from "lucide-react"; // Icons

const linksDefault = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#Skills" },
  { label: "Projects", href: "#projects" },
  { label: "About me", href: "#about" },
  { label: "Contact", href: "#contacts" },
];

export default function Header({
  brand = { name: "Ganbaatar Khangol", logoText: true },
  links = linksDefault,
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled
          ? "shadow-sm shadow-black/5 dark:shadow-black/20 backdrop-blur supports-[backdrop-filter]:bg-white/70 supports-[backdrop-filter]:dark:bg-zinc-900/60 bg-white dark:bg-zinc-900"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand */}
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black font-bold">
              GH
            </span>
            {brand.logoText && (
              <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                {brand.name}
              </span>
            )}
          </a>

          {/* Center: Nav (desktop) */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-3 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white rounded-lg transition-colors relative group"
              >
                <span>{l.label}</span>
                <span className="absolute left-3 right-3 -bottom-0.5 h-px scale-x-0 bg-zinc-900 dark:bg-zinc-100 transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Right: GitHub + Mail */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Khangoll"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              <Github className="h-5 w-5 text-zinc-700 dark:text-zinc-200" />
            </a>
            <a
              href="mailto:hanguri78@gmail.com"
              className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              <Mail className="h-5 w-5 text-zinc-700 dark:text-zinc-200" />
            </a>

            <button
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-200 bg-white hover:bg-zinc-50 md:hidden dark:bg-zinc-900 dark:border-zinc-700 dark:hover:bg-zinc-800"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5 text-zinc-700 dark:text-zinc-200"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition ${
          open ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/30 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-80 bg-white dark:bg-zinc-900 shadow-xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black font-bold">
                Y
              </span>
              <span className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {brand.name}
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5 text-zinc-700 dark:text-zinc-200"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="p-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Mobile GitHub + Mail */}
          <div className="flex items-center gap-4 p-4 border-t border-zinc-200 dark:border-zinc-800">
            <a
              href="https://github.com/Khangoll"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              <Github className="h-5 w-5 text-zinc-700 dark:text-zinc-200" />
            </a>
            <a
              href="mailto:yourmail@example.com"
              className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              <Mail className="h-5 w-5 text-zinc-700 dark:text-zinc-200" />
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
