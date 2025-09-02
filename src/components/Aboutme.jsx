// src/components/Aboutme.jsx
import React from "react";
import {
  BadgeCheck,
  MapPin,
  Mail,
  Phone,
  Calendar,
  GraduationCap,
  User,
  BookOpen,
  Download,
  Github,
  Linkedin,
} from "lucide-react";

const profile = {
  name: "Ганбаатар Хангол",
  clan: "Угийн овог: Боржигон",
  role: "Backend Developer",
  summary:
    "Программ хангамжийн инженерийн бакалаврын зэрэгтэй. Backend хөгжүүлэлтийн чиглэлээр мэргэшин ажиллах зорилготой бөгөөд ReactJS, Exress, Java, Node.js, Tailwind CSS, NoSQL , SQL зэрэг орчин үеийн технологийг ашиглан үр ашигтай ажиллах чадвартай. Багийн орчинд бүтээлч, хариуцлагатайгаар ажиллахын зэрэгцээ шинэ мэдлэг, технологийг эзэмшиж, тасралтгүй хөгжих эрмэлзэлтэй.",
  location: "Улаанбаатар, Монгол",
  birthDate: "2002-03-14",
  email: "hanguri78@gmail.com",
  phone: "+976 86570815",
  links: {
    github: "https://github.com/Khangoll",

    cv: "/cv.pdf",
  },
  education: {
    university: "Шинжлэх Ухаан Технологийн Их Сургууль",
    degree: "Программ хангамж",
    year: "2025",
    gpa: 3.18,
    gpaScale: 4.0,
  },
  languages: ["Япон хэл N4", "English"],
  interests: ["Web", "Mobile"],
  stats: [
    { label: "Жилийн туршлага", value: "2+" },
    { label: "Бүтээсэн төсөл", value: "10+" },
    { label: "Hackathon / шагнал", value: "2" },
  ],
};

const Aboutme = () => {
  const { gpa, gpaScale } = profile.education;
  const gpaPercent = Math.round((gpa / gpaScale) * 100);

  return (
    <section id="about" className="relative w-full bg-black">
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-violet-300/70">
            About me
          </p>
          <h2 className="mt-1 text-2xl md:text-3xl font-bold text-white">
            Танилцуулга
          </h2>
        </div>

        {/* Main grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: Profile card */}
          <aside className="relative overflow-hidden rounded-2xl bg-zinc-900/60 ring-1 ring-white/10 shadow-xl">
            <div className="relative p-6">
              {/* Avatar */}
              <div className="relative mb-4">
                <div className="h-28 w-28 rounded-2xl overflow-hidden ring-1 ring-white/10">
                  <img
                    src="hangol.jpg"
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white">
                {profile.name}
              </h3>
              <p className="mt-1 text-sm text-violet-300">{profile.role}</p>

              {/* Quick facts */}
              <dl className="mt-5 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-zinc-300">
                  <User size={16} className="shrink-0 text-violet-300" />
                  <dt className="sr-only">Ургийн овог</dt>
                  <dd>{profile.clan}</dd>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <Calendar size={16} className="shrink-0 text-violet-300" />
                  <dt className="sr-only">Төрсөн өдөр</dt>
                  <dd>{profile.birthDate}</dd>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <MapPin size={16} className="shrink-0 text-violet-300" />
                  <dt className="sr-only">Байршил</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <Mail size={16} className="shrink-0 text-violet-300" />
                  <dt className="sr-only">И-мэйл</dt>
                  <dd>
                    <a
                      href={`mailto:${profile.email}`}
                      className="underline/30 hover:underline"
                    >
                      {profile.email}
                    </a>
                  </dd>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <Phone size={16} className="shrink-0 text-violet-300" />
                  <dt className="sr-only">Утас</dt>
                  <dd>{profile.phone}</dd>
                </div>
              </dl>

              {/* Social / CV */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
                >
                  <Github size={16} />
                  GitHub
                </a>

                <a
                  href={profile.links.cv}
                  className="inline-flex items-center gap-2 rounded-lg bg-white text-zinc-900 px-3 py-2 text-sm font-semibold hover:bg-zinc-200"
                >
                  <Download size={16} />
                  CV татах
                </a>
              </div>

              {/* Stats */}
            </div>
          </aside>

          {/* RIGHT: Content */}
          <div className="relative lg:col-span-2 space-y-6">
            {/* Summary */}
            <article className="relative overflow-hidden rounded-2xl bg-zinc-900/60 ring-1 ring-white/10 shadow-xl p-6 md:p-8">
              <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-transparent transition hover:ring-violet-400/30" />
              <p className="text-zinc-300 leading-relaxed">{profile.summary}</p>

              {/* Chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.interests.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-5">
                <p className="text-xs uppercase tracking-wider text-violet-300/80">
                  Хэлний түвшин
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {profile.languages.map((l) => (
                    <span
                      key={l}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-200"
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Education & GPA */}
            <article className="relative overflow-hidden rounded-2xl bg-zinc-900/60 ring-1 ring-white/10 shadow-xl p-6 md:p-8">
              <header className="flex items-center gap-2">
                <GraduationCap className="text-violet-300" size={18} />
                <h3 className="text-lg font-semibold text-white">Боловсрол</h3>
                <BadgeCheck size={16} className="text-violet-300/80" />
              </header>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wider text-zinc-400">
                    Их сургууль
                  </p>
                  <p className="mt-1 text-sm text-zinc-200">
                    {profile.education.university}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    {profile.education.degree} • {profile.education.year}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wider text-zinc-400">
                    Голч дүн (GPA)
                  </p>
                  <div className="mt-2">
                    <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400"
                        style={{ width: `${gpaPercent}%` }}
                        aria-valuenow={gpa}
                        aria-valuemin={0}
                        aria-valuemax={gpaScale}
                        role="progressbar"
                      />
                    </div>
                    <p className="mt-1 text-sm text-zinc-300">
                      {gpa} / {gpaScale} ({gpaPercent}%)
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick facts grid */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-[11px] uppercase tracking-wider text-zinc-400">
                    Ургийн овог
                  </p>
                  <p className="mt-1 text-sm text-zinc-200">{profile.clan}</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-[11px] uppercase tracking-wider text-zinc-400">
                    Төрсөн огноо
                  </p>
                  <p className="mt-1 text-sm text-zinc-200">
                    {profile.birthDate}
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-[11px] uppercase tracking-wider text-zinc-400">
                    Байршил
                  </p>
                  <p className="mt-1 text-sm text-zinc-200">
                    {profile.location}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
