"use client";
import React, { useRef } from 'react';

const skills = [
  { name: "React.js", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "React Native", icon: "/icons/react_native.svg" },
  { name: "Flutter", icon: "/icons/flutter.svg" },
  { name: "Supabase", icon: "/icons/supabase.svg" },
  { name: "Firebase", icon: "/icons/firebase.svg" },
  { name: "GraphQL", icon: "/icons/graphql.svg" },
  { name: "TailwindCSS", icon: "/icons/tailwind.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
];

const experiences = [
  { role: "Full Stack Developer", company: "Buzz Solutions", duration: "Sep 2025 – Present" },
  { role: "Full Stack Dev Intern", company: "New Web Order", duration: "Jun – Aug 2025" },
  { role: "Next.js & React Native Dev", company: "AlimcoSoft", duration: "Feb – Apr 2025" },
  { role: "React Developer", company: "Grace Technologies", duration: "Aug – Sep 2024" },
  { role: "Frontend Developer", company: "Digital Empowerment Network", duration: "Jul 2024" },
  { role: "Frontend Dev Intern", company: "Naviquis", duration: "Jun – Sep 2023" },
  { role: "Web Dev Intern", company: "Eziline Software House", duration: "Jun – Aug 2022" },
];

const projects = [
  { name: "Device Registration Portal", stack: "Next.js + GraphQL", desc: "Multi-step form with save-state & JWT auth." },
  { name: "E-Commerce Store", stack: "React Native + Firebase + Intercom", desc: "CRUD products, user management, live chat." },
  { name: "School Website & Management", stack: "Next.js + Supabase", desc: "Role-based SaaS for students, teachers, admins." },
  { name: "BuzzSol Company Website", stack: "MERN + Tailwind", desc: "Appointment booking + automated emails." },
  { name: "GTL Car Tracking Web App", stack: "React", desc: "Real-time tracking UI." },
  { name: "Mobile Tracking Project", stack: "React + MUI + Java backend", desc: "Redesigned UI with MUI." },
  { name: "Book Brary", stack: "React + Node", desc: "Book marketplace & tutor services." },
  { name: "DEN Official Landing Page", stack: "React", desc: "Published landing page." },
];

const Portfolio = () => {
  // Refs for scrolling
  const aboutRef = useRef<HTMLElement | null>(null);
  const expRef = useRef<HTMLElement | null>(null);
  const projRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => ref.current?.scrollIntoView({ behavior: "smooth" });

  // Determine current active nav (basic implementation)
  const sections = [aboutRef, expRef, projRef, contactRef];
  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      let act = 0;
      sections.forEach((ref, i) => {
        if (ref.current && ref.current.offsetTop < scrollPos) act = i;
      });
      setActive(act);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-gray-950 min-h-screen text-gray-100 font-sans">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 bg-gray-900/90 backdrop-blur z-20 shadow border-b border-gray-800">
        <div className="max-w-4xl mx-auto flex justify-between items-center py-2 px-4">
          <span className="text-xl font-bold tracking-wide">Muhammad Hassan Mughal</span>
          <ul className="flex space-x-6 text-sm">
            <li><button className={`py-2 px-2 focus:outline-none ${active === 0 ? "text-teal-400" : ""}`} onClick={() => scrollTo(aboutRef)}>About</button></li>
            <li><button className={`py-2 px-2 focus:outline-none ${active === 1 ? "text-teal-400" : ""}`} onClick={() => scrollTo(expRef)}>Experience</button></li>
            <li><button className={`py-2 px-2 focus:outline-none ${active === 2 ? "text-teal-400" : ""}`} onClick={() => scrollTo(projRef)}>Projects</button></li>
            <li><button className={`py-2 px-2 focus:outline-none ${active === 3 ? "text-teal-400" : ""}`} onClick={() => scrollTo(contactRef)}>Contact</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center py-16 px-4 fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">Muhammad Hassan Mughal</h1>
        <div className="text-lg md:text-xl font-medium text-teal-400 mb-3">Frontend / Full-Stack Developer</div>
        <div className="text-base md:text-lg text-gray-400 mb-6">"Passionate about building sleek, modern, and responsive web & mobile applications."</div>
        <div className="flex gap-4 mb-10">
          <button className="bg-teal-400/80 hover:bg-teal-500 text-gray-950 font-bold py-2 px-6 rounded shadow transition" onClick={() => scrollTo(projRef)}>View Projects</button>
          <button className="bg-gray-800/80 hover:bg-gray-700 text-teal-400 font-bold py-2 px-6 rounded shadow transition" onClick={() => scrollTo(contactRef)}>Contact Me</button>
        </div>
      </section>

      {/* About Me */}
      <section ref={aboutRef} className="max-w-3xl mx-auto py-16 px-4 fade-in" id="about">
        <h2 className="text-2xl font-bold mb-4 text-teal-400">About Me</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          I am a frontend / full-stack developer from Rawalpindi, Pakistan with strong expertise in React.js, Next.js, React Native, GraphQL, Supabase, Firebase, TypeScript, TailwindCSS, and REST APIs. I love creating intuitive user experiences, scalable web/mobile apps, and exploring new technologies. Currently learning Node.js, Express, and MongoDB for full-stack development.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 bg-gray-900/70 rounded-lg p-6 shadow mt-4">
          {skills.map(skill => (
            <div key={skill.name} className="flex flex-col items-center group transition duration-300 hover:scale-110">
              <img src={skill.icon} alt={skill.name} className="h-8 w-8 mb-2 grayscale group-hover:grayscale-0 transition" />
              <span className="text-xs font-medium text-gray-300 group-hover:text-teal-400">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section ref={expRef} className="max-w-3xl mx-auto py-16 px-4 fade-in" id="experience">
        <h2 className="text-2xl font-bold mb-8 text-teal-400">Experience</h2>
        <div className="border-l border-teal-700 pl-6">
          {experiences.map((exp, idx) => (
            <div key={exp.company} className="mb-8 relative animate-slideup">
              <div className="absolute -left-3 top-2 w-3 h-3 bg-teal-400 rounded-full shadow"></div>
              <div className="text-lg font-semibold">{exp.role}</div>
              <div className="text-teal-300">{exp.company}</div>
              <div className="text-xs text-gray-500">{exp.duration}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section ref={projRef} className="max-w-4xl mx-auto py-16 px-4 fade-in" id="projects">
        <h2 className="text-2xl font-bold mb-8 text-teal-400">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div key={proj.name} className={`relative p-6 rounded-xl group bg-gray-900 shadow transform transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:bg-gray-800 animate-fadein`}>
              <div className="text-lg font-semibold mb-1 text-gray-100 group-hover:text-teal-400">{proj.name}</div>
              <div className="text-sm text-teal-300 mb-2">{proj.stack}</div>
              <div className="text-gray-400 text-sm group-hover:text-gray-200">{proj.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section ref={contactRef} className="max-w-2xl mx-auto py-16 px-4 fade-in" id="contact">
        <h2 className="text-2xl font-bold mb-6 text-teal-400">Contact</h2>
        <div className="flex flex-col gap-6">
          <a href="mailto:muhammadhassanmughal47@gmail.com" className="flex items-center gap-4 text-gray-100 hover:text-teal-400 transition">
            <span className="material-icons">email</span>
            muhammadhassanmughal47@gmail.com
          </a>
          <a href="https://linkedin.com/in/hassan814" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-100 hover:text-teal-400 transition">
            <span className="material-icons">linkedin</span>
            linkedin.com/in/hassan814
          </a>
          <a href="https://github.com/oye-hunter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-100 hover:text-teal-400 transition">
            <span className="material-icons">code</span>
            github.com/oye-hunter
          </a>
        </div>
      </section>

      {/* Animations and Styles */}
      <style>
      {`
      .fade-in { 
        opacity: 0; transform: translateY(20px); animation: fadeInUp 1.2s forwards;
      }
      @keyframes fadeInUp { 
        to { opacity: 1; transform: none; }
      }
      .animate-fadein { animation: fadeInUp 1s ease-in-out both; }
      .animate-slideup { animation: slideUp 1s ease-in-out both; }
      @keyframes slideUp { from { opacity:0; transform:translateY(30px);} to { opacity:1; transform:none;} }
      .animate-gradient { 
        background-size: 300% 300%;
        animation: gradientMove 6s linear infinite;
      }
      @keyframes gradientMove {
        0% {background-position: 0% 50%;}
        100% {background-position: 100% 50%;}
      }
      `}
      </style>
    </main>
  );
};

export default Portfolio;
