"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

export default function Portfolio() {
  // Sections for nav + scroll spy
  const sections = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const [active, setActive] = useState("home");
  const visibleSetRef = useRef(new Set());

  // Smooth scroll handler
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // IntersectionObserver for active link + reveal animations
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          // Reveal animation
          if (entry.isIntersecting) {
            visibleSetRef.current.add(id);
            entry.target.classList.add("reveal-in");
          }
          // Active link
          if (entry.isIntersecting) {
            setActive(id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [sections]);

  // Data
  const skills = [
    { label: "React.js", abbr: "RE", color: "text-cyan-300", bg: "bg-cyan-900/30" },
    { label: "Next.js", abbr: "NX", color: "text-gray-200", bg: "bg-gray-700/40" },
    { label: "TypeScript", abbr: "TS", color: "text-blue-300", bg: "bg-blue-900/30" },
    { label: "React Native", abbr: "RN", color: "text-sky-300", bg: "bg-sky-900/30" },
    { label: "Flutter", abbr: "FL", color: "text-teal-300", bg: "bg-teal-900/30" },
    { label: "Supabase", abbr: "SB", color: "text-emerald-300", bg: "bg-emerald-900/30" },
    { label: "Firebase", abbr: "FB", color: "text-amber-300", bg: "bg-amber-900/30" },
    { label: "GraphQL", abbr: "GQ", color: "text-pink-300", bg: "bg-pink-900/30" },
    { label: "TailwindCSS", abbr: "TW", color: "text-cyan-200", bg: "bg-cyan-900/20" },
    { label: "MySQL", abbr: "MY", color: "text-sky-200", bg: "bg-sky-900/20" },
    { label: "PostgreSQL", abbr: "PG", color: "text-indigo-200", bg: "bg-indigo-900/20" },
    { label: "GitHub", abbr: "GH", color: "text-gray-200", bg: "bg-zinc-800" },
  ];

  const experience = [
    { role: "Full Stack Developer", company: "Buzz Solutions", range: "Sep 2025 – Present" },
    { role: "Full Stack Developer Intern", company: "New Web Order", range: "Jun – Aug 2025" },
    { role: "Next.js & React Native Developer", company: "AlimcoSoft", range: "Feb – Apr 2025" },
    { role: "React Developer", company: "Grace Technologies", range: "Aug – Sep 2024" },
    { role: "Frontend Developer", company: "Digital Empowerment Network", range: "Jul 2024" },
    { role: "Frontend Developer Intern", company: "Naviquis", range: "Jun – Sep 2023" },
    { role: "Web Developer Intern", company: "Eziline Software House", range: "Jun – Aug 2022" },
  ];

  const projects = [
    {
      title: "Device Registration Portal",
      stack: "Next.js + GraphQL",
      desc: "Multi-step form with save-state & JWT auth.",
    },
    {
      title: "E-Commerce Store",
      stack: "React Native + Firebase + Intercom",
      desc: "CRUD products, user management, live chat.",
    },
    {
      title: "School Website & Management System",
      stack: "Next.js + Supabase",
      desc: "Role-based SaaS for students, teachers, admins.",
    },
    {
      title: "BuzzSol Company Website",
      stack: "MERN + Tailwind",
      desc: "Appointment booking + automated emails.",
    },
    {
      title: "GTL Car Tracking Web App",
      stack: "React",
      desc: "Real-time tracking UI.",
    },
    {
      title: "Mobile Tracking Project",
      stack: "React + MUI + Java backend",
      desc: "Redesigned UI with MUI.",
    },
    {
      title: "Book Brary",
      stack: "React + Node",
      desc: "Book marketplace & tutor services.",
    },
    {
      title: "DEN Official Landing Page",
      stack: "React",
      desc: "Published landing page.",
    },
  ];

  // Small inline "icon" as a rounded badge
  type SkillBadgeProps = {
    label: string;
    abbr: string;
    color: string;
    bg: string;
  };

  const SkillBadge: React.FC<SkillBadgeProps> = ({ label, abbr, color, bg }) => (
    <div className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 backdrop-blur transition hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-white/[0.04]">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-lg ${bg} ${color} ring-1 ring-white/10 group-hover:ring-indigo-500/50 transition`}
      >
        <span className="text-sm font-bold">{abbr}</span>
      </div>
      <span className="text-sm font-medium text-gray-200">{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b12] via-[#0a0a10] to-[#0b0b12] text-gray-100 selection:bg-indigo-500/30">
      {/* Global styles for reveal animation */}
      <style>{`
        html { scroll-behavior: smooth; }
        .reveal { opacity: 0; transform: translateY(12px); }
        .reveal-in { opacity: 1 !important; transform: translateY(0) !important; transition: opacity .7s ease, transform .7s ease; }
      `}</style>

      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/60 px-4 py-3 backdrop-blur-xl">
            <div
              onClick={() => handleScroll("home")}
              className="cursor-pointer text-sm font-semibold tracking-wide text-white/90 hover:text-white"
            >
              <span className="rounded bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                MH
              </span>{" "}
              / Portfolio
            </div>
            <ul className="hidden gap-2 md:flex">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleScroll(s.id)}
                    className={`relative rounded-xl px-3 py-2 text-sm font-medium transition ${
                      active === s.id
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {s.label}
                    {active === s.id && (
                      <span className="absolute inset-x-2 -bottom-1 block h-0.5 rounded bg-gradient-to-r from-indigo-400 to-fuchsia-400" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleScroll("contact")}
              className="rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:from-indigo-500 hover:to-fuchsia-500"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="reveal relative flex min-h-screen items-center overflow-hidden pt-28"
      >
        {/* Ambient gradient orbs */}
        <div className="pointer-events-none absolute -top-32 -left-16 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-16 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300/80">
                Frontend / Full-Stack Developer
              </p>
              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Muhammad Hassan{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Mughal
                </span>
              </h1>
              <p className="max-w-xl text-base text-gray-300">
                “Passionate about building sleek, modern, and responsive web & mobile applications.”
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleScroll("projects")}
                  className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15 hover:ring-indigo-400/60"
                >
                  View Projects
                </button>
                <button
                  onClick={() => handleScroll("contact")}
                  className="rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:-translate-y-0.5 hover:from-indigo-500 hover:to-fuchsia-500"
                >
                  Contact Me
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-gray-400">
                <span className="inline-flex items-center gap-2">
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Available for work
                </span>
                <span className="hidden h-4 w-px bg-white/10 md:block" />
                <span className="hidden md:block">Rawalpindi, Pakistan</span>
              </div>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-tr from-indigo-500/10 via-fuchsia-500/10 to-transparent blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-zinc-900/50 p-6 shadow-xl backdrop-blur">
                <div className="grid grid-cols-3 gap-4">
                  {["React", "Next.js", "React Native", "GraphQL", "Supabase", "Firebase"].map(
                    (k, i) => (
                      <div
                        key={k}
                        className="flex items-center justify-center rounded-xl bg-white/[0.03] p-6 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/[0.06] hover:ring-indigo-500/50"
                      >
                        <span className="text-sm font-semibold text-gray-200">{k}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-gray-400">
                Building delightful UIs with modern frameworks and robust backends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="reveal border-t border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white">About me</h2>
              <p className="mt-4 text-gray-300">
                I am a frontend / full-stack developer from Rawalpindi, Pakistan with strong expertise in
                React.js, Next.js, React Native, GraphQL, Supabase, Firebase, TypeScript, TailwindCSS, and REST APIs.
                I love creating intuitive user experiences, scalable web/mobile apps, and exploring new technologies.
                Currently learning Node.js, Express, and MongoDB for full-stack development.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-gray-400">
                <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                  Clean code
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                  Performance-first
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                  Accessibility
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                  DX obsessed
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Skills</h3>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {skills.map((s) => (
                  <SkillBadge key={s.label} {...s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="reveal border-t border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-white">Experience</h2>

          <div className="relative mt-8">
            <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-gradient-to-b from-white/10 via-white/10 to-transparent md:block" />
            <ul className="space-y-6">
              {experience.map((item, idx) => (
                <li
                  key={item.company}
                  className="group relative grid gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-white/[0.04]"
                >
                  <div className="absolute -left-[7px] top-6 hidden h-3 w-3 rounded-full bg-gradient-to-br from-indigo-400 to-fuchsia-400 ring-4 ring-zinc-900 md:block" />
                  <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                    <div className="text-base font-semibold text-white">
                      {item.role}{" "}
                      <span className="text-indigo-300/80">@ {item.company}</span>
                    </div>
                    <div className="text-xs text-gray-400">{item.range}</div>
                  </div>
                  <p className="text-sm text-gray-300">
                    Crafted modern UIs, optimized performance, collaborated across teams, and shipped features with care.
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="reveal border-t border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold text-white">Projects</h2>
            <span className="text-xs text-gray-400">Hover cards for details</span>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-5 shadow-lg transition hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-indigo-900/20"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-fuchsia-500/0 to-indigo-500/0 opacity-0 transition group-hover:opacity-10" />
                <div className="flex items-center justify-between">
                  <div className="rounded-lg bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-indigo-300 ring-1 ring-white/10">
                    {p.stack}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-gray-400">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                    Active
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-300">{p.desc}</p>

                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() => handleScroll("contact")}
                    className="rounded-lg bg-white/5 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-indigo-400/60"
                  >
                    Request demo
                  </button>
                  <button
                    onClick={() => handleScroll("contact")}
                    className="rounded-lg px-3 py-2 text-xs font-semibold text-indigo-300 hover:text-indigo-200"
                  >
                    Learn more →
                  </button>
                </div>

                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-fuchsia-500/10 blur-2xl transition group-hover:scale-150" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="reveal border-t border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-white">Contact</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-sm text-gray-400">Email</div>
              <a
                href="mailto:muhammadhassanmughal47@gmail.com"
                className="mt-1 block text-lg font-semibold text-white hover:text-indigo-300"
              >
                muhammadhassanmughal47@gmail.com
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-sm text-gray-400">LinkedIn</div>
              <a
                href="https://linkedin.com/in/hassan814"
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-lg font-semibold text-white hover:text-indigo-300"
              >
                linkedin.com/in/hassan814
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-sm text-gray-400">GitHub</div>
              <a
                href="https://github.com/oye-hunter"
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-lg font-semibold text-white hover:text-indigo-300"
              >
                github.com/oye-hunter
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
            <p className="text-sm text-gray-300">
              Have a project in mind or want to collaborate? I’m open to freelance and full-time roles. Let’s build
              something exceptional together.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="mailto:muhammadhassanmughal47@gmail.com"
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:from-indigo-500 hover:to-fuchsia-500"
              >
                Say hello
              </a>
              <a
                href="https://github.com/oye-hunter"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 hover:ring-indigo-400/60"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Muhammad Hassan Mughal. All rights reserved.</span>
          <span className="hidden sm:block">
            Built with React & TailwindCSS • Dark theme • Smooth scroll • Animations
          </span>
        </div>
      </footer>
    </div>
  );
}
