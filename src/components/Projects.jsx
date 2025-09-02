// src/components/Projects.jsx
import React from "react";
import { ExternalLink, Github, Globe, Code, Check } from "lucide-react";

const projects = [
  {
    title: "Pet tracking system",
    image: "location].png",
    description:
      "Тэжээвэр амьтны эрүүл мэнд, real-time байршлыг хянах cross-platform шийдэл.",
    tags: [
      "Flutter",
      "Neo-6M GPS",
      "ESP32",
      "Express",
      "MongoDB",
      "GetX Redux",
    ],
    highlights: [
      "Хүрээ тогтоох (geofence) ба push мэдэгдэл",
      "Тэжээвэр амьтнаа бүртгэх, эрүүл мэндийн тэмдэглэлийг шууд утаснаасаа хөтлөх",
      "Байнга давтагддаг эмчилгээнүүдийн хугацаа дуусах дөхөх үед push notification илгээх",
      "Монголд үйл ажиллагаа явуулж байгаа эмнэлгүүдийг харах, хамгийн ойр байгаа эмнэлгийг харах",
    ],
    role: "Full-stack",
    outcomes: [],
    code: "https://github.com/Khangoll",
  },
  {
    title: "E-commerce системийн Authentication and Authorization",
    image: "image.png",
    description: "",
    tags: ["Redux", "Reactjs", "MongoDB", "Express", "Node.js"],
    highlights: [
      "Систем нь бүхэлдээ нэг төлөвийн менежменттэй",
      "Business , customer , admin 3 эрхээр нэвтрэхээр зохион байгуулсан",
    ],
    role: "Full-stack",
    code: "https://github.com/Khangoll",
  },
];

function Chip({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-200">
      {children}
    </span>
  );
}

function Bullet({ text }) {
  return (
    <li className="flex items-start gap-2 text-sm text-zinc-300">
      <Check size={16} className="mt-0.5 shrink-0 text-violet-300" />
      <span>{text}</span>
    </li>
  );
}

function ProjectRow({ p, reverse }) {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-zinc-900/60 ring-1 ring-white/10 shadow-xl">
      <div className={`relative grid grid-cols-1 md:grid-cols-2`}>
        {/* IMAGE */}
        <div className={`relative ${reverse ? "md:order-2" : ""}`}>
          <div className="relative aspect-[16/10] md:h-full md:aspect-auto overflow-hidden">
            <img
              src={p.image}
              alt={p.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent md:bg-gradient-to-r md:from-black/60 md:via-transparent" />
            <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
              <Globe size={14} /> Preview
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className={`relative p-6 md:p-8 ${reverse ? "md:order-1" : ""}`}>
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            {p.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            {p.description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>

          {/* Highlights */}
          {p.highlights?.length ? (
            <div className="mt-5">
              <p className="text-xs uppercase tracking-wider text-violet-300/80">
                Highlights
              </p>
              <ul className="mt-2 grid gap-2">
                {p.highlights.map((h) => (
                  <Bullet key={h} text={h} />
                ))}
              </ul>
            </div>
          ) : null}

          {/* Role & Outcomes */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {p.role ? (
              <div className="relative rounded-lg border border-white/10 bg-white/5 p-3">
                <p className="text-xs uppercase tracking-wider text-zinc-400">
                  Үүрэг
                </p>
                <p className="mt-1 text-sm text-zinc-200">{p.role}</p>
              </div>
            ) : null}
            {p.outcomes?.length ? (
              <div className="relative rounded-lg border border-white/10 bg-white/5 p-3">
                <p className="text-xs uppercase tracking-wider text-zinc-400">
                  Үр дүн / Метрик
                </p>
                <ul className="mt-1 space-y-1">
                  {p.outcomes.map((o) => (
                    <li key={o} className="text-sm text-zinc-200">
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {/* <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-zinc-900 px-3.5 py-2 text-sm font-semibold transition hover:bg-zinc-200"
                >
                <ExternalLink size={16} />
                Live Site
                </a> */}
            <a
              href={p.code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-transparent px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Github size={16} />
              Code
            </a>
          </div>
        </div>
      </div>

      {/* subtle hover ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition hover:ring-violet-400/40" />
    </article>
  );
}

const Projects = () => {
  return (
    <section id="projects" className="pt-7 relative w-full bg-black">
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-violet-300/70">
              Projects
            </p>
            <h2 className="mt-1 text-2xl md:text-3xl font-bold text-white">
              Ажлууд
            </h2>
          </div>
          {/* <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 rounded-lg border border-white/15 px-3.5 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            <Code size={16} />
            View all
          </a> */}
        </div>

        {/* LIST: each row is a 2-column grid */}
        <div className="relative space-y-8">
          {projects.map((p, idx) => (
            <ProjectRow key={p.title} p={p} reverse={idx % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
