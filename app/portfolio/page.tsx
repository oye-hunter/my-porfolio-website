"use client";
import React, { useEffect, useRef, useState } from "react";

/**
 * Single-file portfolio component for Muhammad Hassan Mughal
 * Requirements: React + TailwindCSS only.
 *
 * Usage: import and render <Portfolio /> in your app.
 */

export default function Portfolio() {
  // section refs
  const sections: {
    hero: React.MutableRefObject<HTMLElement | null>;
    about: React.MutableRefObject<HTMLElement | null>;
    experience: React.MutableRefObject<HTMLElement | null>;
    projects: React.MutableRefObject<HTMLElement | null>;
    contact: React.MutableRefObject<HTMLElement | null>;
  } = {
    hero: useRef<HTMLElement | null>(null),
    about: useRef<HTMLElement | null>(null),
    experience: useRef<HTMLElement | null>(null),
    projects: useRef<HTMLElement | null>(null),
    contact: useRef<HTMLElement | null>(null),
  };

  const [active, setActive] = useState("hero");
  const [visibleSections, setVisibleSections] = useState<Partial<Record<'hero' | 'about' | 'experience' | 'projects' | 'contact', boolean>>>({}); // track reveals

  // Make native smooth scrolling
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  // Intersection observer to highlight active nav and animate reveals
  useEffect(() => {
    const obsOptions = { root: null, rootMargin: "0px", threshold: 0.35 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("data-section");
        if (entry.isIntersecting && id) {
          setActive(id);
          setVisibleSections((s) => ({ ...s, [id]: true }));
        }
      });
    }, obsOptions);

    Object.values(sections).forEach((ref) => {
      if (ref && ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Smooth scroll handler (also used by buttons)
  const scrollTo = (key: keyof typeof sections | string) => {
    const ref = (sections as any)[key as keyof typeof sections] as React.MutableRefObject<HTMLElement | null> | undefined;
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Simple reusable skill icon set (inline SVGs / minimal)
  const SkillIcon = ({ name }: { name: string }) => {
    const base = "w-10 h-10 mr-3 flex-none";
    switch (name) {
      case "React.js":
        return (
          <svg className={base} viewBox="0 0 128 128" aria-hidden>
            <g fill="none" stroke="currentColor" strokeWidth="6">
              <ellipse cx="64" cy="64" rx="48" ry="18" />
              <ellipse cx="64" cy="64" rx="48" ry="18" transform="rotate(60 64 64)" />
              <ellipse cx="64" cy="64" rx="48" ry="18" transform="rotate(120 64 64)" />
              <circle cx="64" cy="64" r="8" fill="currentColor" stroke="none" />
            </g>
          </svg>
        );
      case "Next.js":
        return (
          <svg className={base} viewBox="0 0 24 24" aria-hidden>
            <rect width="24" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 17V7l7 10V7" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        );
      case "TypeScript":
        return (
          <svg className={base} viewBox="0 0 24 24" aria-hidden>
            <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <text x="6" y="16" fill="currentColor" fontSize="7" fontWeight="700">TS</text>
          </svg>
        );
      case "React Native":
        return (
          <svg className={base} viewBox="0 0 24 24" aria-hidden>
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <path d="M2 12c4-4 8-4 10-4s6 0 10 4" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <path d="M2 12c4 4 8 4 10 4s6 0 10-4" stroke="currentColor" strokeWidth="1.2" fill="none" />
          </svg>
        );
      case "Flutter":
        return (
          <svg className={base} viewBox="0 0 24 24" aria-hidden>
            <path d="M3 12l8-8h6l-8 8" stroke="currentColor" strokeWidth="1.4" fill="none" />
            <path d="M13 12l8-8" stroke="currentColor" strokeWidth="1.4" fill="none" />
          </svg>
        );
      case "Supabase":
        return (
          <svg className={base} viewBox="0 0 24 24" aria-hidden>
            <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <path d="M7 9h10M7 15h10" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        );
      case "Firebase":
        return (
          <svg className={base} viewBox="0 0 24 24" aria-hidden>
            <path d="M12 2l3 8 4 1-7 6-6-5 6-10z" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        );
      case "GraphQL":
        return (
          <svg className={base} viewBox="0 0 24 24" aria-hidden>
            <polygon points="12,2 20,7 16,20 8,20 4,7" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <circle cx="12" cy="7" r="1.6" fill="currentColor" />
          </svg>
        );
      case "TailwindCSS":
        return (
          <svg className={base} viewBox="0 0 24 24" aria-hidden>
            <path d="M2 14s4-4 10-2 10 2 10 2v6H2z" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <path d="M2 8s4-4 10-2 10 2 10 2" stroke="currentColor" strokeWidth="1.2" fill="none" />
          </svg>
        );
      case "MySQL":
        return (
          <svg className={base} viewBox="0 0 24 24" aria-hidden>
            <ellipse cx="12" cy="12" rx="9" ry="6" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <path d="M8 9c1 2 3 3 4 3s3-1 4-3" stroke="currentColor" strokeWidth="1.2" fill="none" />
          </svg>
        );
      case "PostgreSQL":
        return (
          <svg className={base} viewBox="0 0 24 24" aria-hidden>
            <path d="M3 12c4-6 14-6 18 0-4 6-14 6-18 0z" stroke="currentColor" strokeWidth="1.1" fill="none" />
            <circle cx="9" cy="10" r="1.4" fill="currentColor" />
          </svg>
        );
      case "GitHub":
        return (
          <svg className={base} viewBox="0 0 24 24" aria-hidden>
            <path d="M12 2C9 2 6 3.5 5 6c-2 5 2 8 2 8s-1 1-1 2v2h13v-2c0-1-1-2-1-2s4-3 2-8c-1-2.5-4-4-7-4z" stroke="currentColor" strokeWidth="0.8" fill="none" />
          </svg>
        );
      default:
        return <span className="w-10 h-10 mr-3 inline-block" />;
    }
  };

  // Data
  const skillList = [
    "React.js",
    "Next.js",
    "TypeScript",
    "React Native",
    "Flutter",
    "Supabase",
    "Firebase",
    "GraphQL",
    "TailwindCSS",
    "MySQL",
    "PostgreSQL",
    "GitHub",
  ];

  const experience = [
    { title: "Buzz Solutions", when: "Sep 2025 – Present", role: "Full Stack Developer" },
    { title: "New Web Order", when: "Jun – Aug 2025", role: "Full Stack Developer Intern" },
    { title: "AlimcoSoft", when: "Feb – Apr 2025", role: "Next.js & React Native Developer" },
    { title: "Grace Technologies", when: "Aug – Sep 2024", role: "React Developer" },
    { title: "Digital Empowerment Network", when: "Jul 2024", role: "Frontend Developer" },
    { title: "Naviquis", when: "Jun – Sep 2023", role: "Frontend Developer Intern" },
    { title: "Eziline Software House", when: "Jun – Aug 2022", role: "Web Developer Intern" },
  ];

  const projects = [
    {
      title: "Device Registration Portal",
      tech: "Next.js + GraphQL",
      blurb: "Multi-step form with save-state & JWT auth.",
    },
    {
      title: "E-Commerce Store",
      tech: "React Native + Firebase + Intercom",
      blurb: "CRUD products, user management, live chat.",
    },
    {
      title: "School Website & Management System",
      tech: "Next.js + Supabase",
      blurb: "Role-based SaaS for students, teachers, admins.",
    },
    {
      title: "BuzzSol Company Website",
      tech: "MERN + Tailwind",
      blurb: "Appointment booking + automated emails.",
    },
    {
      title: "GTL Car Tracking Web App",
      tech: "React",
      blurb: "Real-time tracking UI.",
    },
    {
      title: "Mobile Tracking Project",
      tech: "React + MUI + Java backend",
      blurb: "Redesigned UI with MUI.",
    },
    {
      title: "Book Brary",
      tech: "React + Node",
      blurb: "Book marketplace & tutor services.",
    },
    {
      title: "DEN Official Landing Page",
      tech: "React",
      blurb: "Published landing page.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f14] text-gray-200 antialiased">
      {/* Sticky navbar */}
      <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md bg-black/40 border-b border-white/5">
        <nav className="max-w-6xl mx-auto px-6 md:px-10 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div
              className="w-10 h-10 rounded-md flex items-center justify-center text-white font-bold bg-gradient-to-br from-[#c73148] to-[#6b2130]"
              aria-hidden
            >
              HM
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold">Muhammad Hassan Mughal</div>
              <div className="text-xs text-gray-400">Frontend / Full-Stack Developer</div>
            </div>
          </div>

          <ul className="hidden md:flex items-center space-x-6 text-sm">
            {["hero", "about", "experience", "projects", "contact"].map((key) => (
              <li key={key}>
                <button
                  onClick={() => scrollTo(key)}
                  className={`py-2 px-3 rounded-md transition-colors duration-200 ${
                    active === key ? "text-white bg-white/7 ring-1 ring-white/10" : "text-gray-300 hover:text-white hover:bg-white/3"
                  }`}
                >
                  {key === "hero" ? "Home" : key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            {/* small-screen quick nav */}
            <select
              className="bg-black/30 text-sm text-gray-200 p-2 rounded"
              value={active}
              onChange={(e) => scrollTo(e.target.value)}
            >
              <option value="hero">Home</option>
              <option value="about">About</option>
              <option value="experience">Experience</option>
              <option value="projects">Projects</option>
              <option value="contact">Contact</option>
            </select>
          </div>
        </nav>
      </header>

      <main className="pt-24">
        {/* HERO */}
        <section
          ref={sections.hero}
          data-section="hero"
          className={`max-w-6xl mx-auto px-6 md:px-10 py-20 min-h-[60vh] flex items-center`}
        >
          <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center`}>
            <div
              className={`space-y-6 transform transition-all duration-700 ${
                visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-sm text-gray-400">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Muhammad Hassan Mughal
              </h1>
              <h2 className="text-xl text-gray-300">Frontend / Full-Stack Developer</h2>
              <p className="text-gray-400 max-w-xl">
                Passionate about building sleek, modern, and responsive web & mobile applications.
              </p>

              <div className="flex space-x-4">
                <button
                  onClick={() => scrollTo("projects")}
                  className="px-5 py-2 rounded-md font-medium bg-gradient-to-r from-[#c73148] to-[#6b2130] shadow hover:scale-[1.02] transition-transform"
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="px-5 py-2 rounded-md font-medium border border-white/10 hover:bg-white/3 transition"
                >
                  Contact Me
                </button>
              </div>

              <div className="pt-4 text-sm text-gray-500">
                Based in Rawalpindi, Pakistan • Open to new opportunities
              </div>
            </div>

            {/* right card */}
            <div
              className={`rounded-2xl p-6 border border-white/6 bg-gradient-to-b from-white/2 to-transparent backdrop-blur-md transform transition-all duration-700 ${
                visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="text-sm text-gray-400">Key Tech</div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {skillList.slice(0, 6).map((s) => (
                  <div key={s} className="flex items-center p-2 rounded-md bg-white/2">
                    <SkillIcon name={s} />
                    <div className="text-sm">{s}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-sm text-gray-500">Currently learning: Node.js, Express, MongoDB</div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          ref={sections.about}
          data-section="about"
          className={`max-w-6xl mx-auto px-6 md:px-10 py-16`}
        >
          <div
            className={`rounded-xl p-6 md:p-10 border border-white/6 bg-gradient-to-b from-white/2 to-transparent backdrop-blur-md transform transition-all duration-700 ${
              visibleSections.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-2xl font-semibold">About Me</h3>
            <p className="mt-3 text-gray-300 max-w-3xl">
              I am a frontend / full-stack developer from Rawalpindi, Pakistan with strong expertise in
              React.js, Next.js, React Native, GraphQL, Supabase, Firebase, TypeScript, TailwindCSS, and REST APIs.
              I love creating intuitive user experiences, scalable web/mobile apps, and exploring new technologies.
              Currently learning Node.js, Express, and MongoDB for full-stack development.
            </p>

            <h4 className="mt-6 text-lg font-medium">Skills</h4>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {skillList.map((s) => (
                <div
                  key={s}
                  className="flex items-center p-3 rounded-lg bg-white/3 hover:bg-white/5 transition"
                >
                  <SkillIcon name={s} />
                  <div className="text-sm">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          ref={sections.experience}
          data-section="experience"
          className="max-w-6xl mx-auto px-6 md:px-10 py-16"
        >
          <div
            className={`transform transition-all duration-700 ${
              visibleSections.experience ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6">Experience</h3>

            <div className="relative border-l border-white/6 pl-6">
              {experience.map((exp, idx) => (
                <div key={exp.title} className="mb-8 relative">
                  <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#c73148] to-[#6b2130] flex items-center justify-center text-white font-semibold shadow">
                    {idx + 1}
                  </div>
                  <div className="pl-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold">{exp.title}</h4>
                      <div className="text-sm text-gray-400">{exp.when}</div>
                    </div>
                    <div className="mt-1 text-sm text-gray-300">{exp.role}</div>
                    <div className="mt-3 text-sm text-gray-400">
                      {/* small animated description placeholder — keep short */}
                      Contributed to frontend features, UI redesigns, and integrations using modern JS frameworks and APIs.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          ref={sections.projects}
          data-section="projects"
          className="max-w-6xl mx-auto px-6 md:px-10 py-16"
        >
          <div
            className={`transform transition-all duration-700 ${
              visibleSections.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6">Projects</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="rounded-xl p-5 bg-white/3 border border-white/6 hover:scale-[1.02] transition-transform duration-300"
                  aria-labelledby={`proj-${p.title}`}
                >
                  <div className="flex items-center justify-between">
                    <h4 id={`proj-${p.title}`} className="font-semibold text-lg">
                      {p.title}
                    </h4>
                    <div className="text-xs text-gray-400">{p.tech}</div>
                  </div>
                  <p className="mt-3 text-sm text-gray-300">{p.blurb}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-gray-400">Demo / Repo</div>
                    <div className="text-xs text-gray-400">•</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          ref={sections.contact}
          data-section="contact"
          className="max-w-6xl mx-auto px-6 md:px-10 py-16"
        >
          <div
            className={`rounded-xl p-6 md:p-10 border border-white/6 bg-gradient-to-b from-white/2 to-transparent backdrop-blur-md transform transition-all duration-700 ${
              visibleSections.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-2xl font-semibold">Contact</h3>
            <p className="mt-3 text-gray-300 max-w-3xl">
              I'm open to collaboration and job opportunities. Feel free to reach out — I typically respond within a few business days.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="mailto:muhammadhassanmughal47@gmail.com"
                className="rounded-lg p-4 bg-white/3 border border-white/6 hover:bg-white/5 transition"
              >
                <div className="text-sm font-medium">Email</div>
                <div className="text-xs text-gray-400 mt-1">muhammadhassanmughal47@gmail.com</div>
              </a>

              <a
                href="https://linkedin.com/in/hassan814"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-4 bg-white/3 border border-white/6 hover:bg-white/5 transition"
              >
                <div className="text-sm font-medium">LinkedIn</div>
                <div className="text-xs text-gray-400 mt-1">linkedin.com/in/hassan814</div>
              </a>

              <a
                href="https://github.com/oye-hunter"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-4 bg-white/3 border border-white/6 hover:bg-white/5 transition"
              >
                <div className="text-sm font-medium">GitHub</div>
                <div className="text-xs text-gray-400 mt-1">github.com/oye-hunter</div>
              </a>
            </div>

            <div className="mt-8 text-sm text-gray-500">Or send a message at the email above — looking forward to connecting!</div>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-6 md:px-10 py-8 text-center text-gray-500">
          © {new Date().getFullYear()} Muhammad Hassan Mughal • Built with React & TailwindCSS
        </footer>
      </main>

      {/* Floating quick nav (mobile) */}
      <div className="fixed right-4 bottom-6 z-40 hidden md:flex flex-col space-y-2">
        <button
          onClick={() => scrollTo("hero")}
          className="p-3 rounded-full bg-white/6 hover:bg-white/8 transition"
          aria-label="Go to top"
        >
          ↑
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className="p-3 rounded-full bg-gradient-to-br from-[#c73148] to-[#6b2130] hover:brightness-105 transition"
          aria-label="Contact"
        >
          ✉
        </button>
      </div>

      {/* Small accessibility: indicate active section for screen readers */}
      <div className="sr-only" aria-live="polite">
        Active section: {active}
      </div>
    </div>
  );
}
