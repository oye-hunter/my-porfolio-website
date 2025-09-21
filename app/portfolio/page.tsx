"use client";
import React, { useRef, useEffect, useState } from 'react';

const Portfolio = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const sections = [
    { id: 'hero', ref: heroRef, label: 'Home' },
    { id: 'about', ref: aboutRef, label: 'About' },
    { id: 'experience', ref: experienceRef, label: 'Experience' },
    { id: 'projects', ref: projectsRef, label: 'Projects' },
    { id: 'contact', ref: contactRef, label: 'Contact' },
  ];

  const [activeSection, setActiveSection] = useState('hero');
  const [visibleSections, setVisibleSections] = useState(new Set<string>());

  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Cast target to HTMLElement so TypeScript knows it has an id
            const target = entry.target as HTMLElement;
            setActiveSection(target.id);
            setVisibleSections((prev) => new Set([...prev, target.id]));
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
      document.documentElement.classList.remove('scroll-smooth');
    };
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Buzz Solutions',
      period: 'Sep 2025 – Present',
      description: '',
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'New Web Order',
      period: 'Jun – Aug 2025',
      description: '',
    },
    {
      title: 'Next.js & React Native Developer',
      company: 'AlimcoSoft',
      period: 'Feb – Apr 2025',
      description: '',
    },
    {
      title: 'React Developer',
      company: 'Grace Technologies',
      period: 'Aug – Sep 2024',
      description: '',
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Empowerment Network',
      period: 'Jul 2024',
      description: '',
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Naviquis',
      period: 'Jun – Sep 2023',
      description: '',
    },
    {
      title: 'Web Developer Intern',
      company: 'Eziline Software House',
      period: 'Jun – Aug 2022',
      description: '',
    },
  ];

  const skills = [
    { icon: '⚛️', name: 'React.js' },
    { icon: '🚀', name: 'Next.js' },
    { icon: '🔵', name: 'TypeScript' },
    { icon: '📱', name: 'React Native' },
    { icon: '🦋', name: 'Flutter' },
    { icon: '🛡️', name: 'Supabase' },
    { icon: '🔥', name: 'Firebase' },
    { icon: '📊', name: 'GraphQL' },
    { icon: '💨', name: 'TailwindCSS' },
    { icon: '🗄️', name: 'MySQL' },
    { icon: '🐘', name: 'PostgreSQL' },
    { icon: '🐙', name: 'GitHub' },
  ];

  const projects = [
    {
      title: 'Device Registration Portal',
      tech: 'Next.js + GraphQL',
      description: 'Multi-step form with save-state & JWT auth.',
    },
    {
      title: 'E-Commerce Store',
      tech: 'React Native + Firebase + Intercom',
      description: 'CRUD products, user management, live chat.',
    },
    {
      title: 'School Website & Management System',
      tech: 'Next.js + Supabase',
      description: 'Role-based SaaS for students, teachers, admins.',
    },
    {
      title: 'BuzzSol Company Website',
      tech: 'MERN + Tailwind',
      description: 'Appointment booking + automated emails.',
    },
    {
      title: 'GTL Car Tracking Web App',
      tech: 'React',
      description: 'Real-time tracking UI.',
    },
    {
      title: 'Mobile Tracking Project',
      tech: 'React + MUI + Java backend',
      description: 'Redesigned UI with MUI.',
    },
    {
      title: 'Book Brary',
      tech: 'React + Node',
      description: 'Book marketplace & tutor services.',
    },
    {
      title: 'DEN Official Landing Page',
      tech: 'React',
      description: 'Published landing page.',
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">MHM</div>
          <ul className="flex space-x-6">
            {sections.map(({ id, ref, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(ref)}
                  className={`hover:text-indigo-400 transition ${
                    activeSection === id ? 'text-indigo-500 font-semibold' : ''
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="hero"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900"
      >
        <div
          className={`text-center px-4 transition-all duration-1000 ${
            visibleSections.has('hero')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl font-bold mb-2">Muhammad Hassan Mughal</h1>
          <h2 className="text-2xl text-indigo-400 mb-4">Frontend / Full-Stack Developer</h2>
          <p className="text-lg mb-8">
            "Passionate about building sleek, modern, and responsive web & mobile applications."
          </p>
          <div className="space-x-4">
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded transition"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded transition"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        id="about"
        className="py-20 bg-gray-900"
      >
        <div
          className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${
            visibleSections.has('about')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg mb-12 max-w-3xl mx-auto">
            I am a frontend / full-stack developer from Rawalpindi, Pakistan with strong expertise in React.js, Next.js, React Native, GraphQL, Supabase, Firebase, TypeScript, TailwindCSS, and REST APIs. I love creating intuitive user experiences, scalable web/mobile apps, and exploring new technologies. Currently learning Node.js, Express, and MongoDB for full-stack development.
          </p>
          <h3 className="text-2xl font-semibold mb-6 text-center">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 text-center"
              >
                <span className="text-4xl mb-2 block">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        ref={experienceRef}
        id="experience"
        className="py-20 bg-gray-800"
      >
        <div
          className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${
            visibleSections.has('experience')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-500"></div>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`mb-8 flex justify-${index % 2 === 0 ? 'end' : 'start'} relative`}
              >
                <div
                  className={`bg-gray-900 p-6 rounded-lg shadow-md w-1/2 ${
                    index % 2 === 0 ? 'ml-auto text-right' : 'mr-auto text-left'
                  } transition-all duration-500 hover:scale-105`}
                >
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-indigo-400">{exp.company}</p>
                  <p className="text-sm text-gray-400">{exp.period}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 border-2 border-indigo-500 rounded-full w-4 h-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        id="projects"
        className="py-20 bg-gray-900"
      >
        <div
          className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${
            visibleSections.has('projects')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-indigo-400 mb-4">{project.tech}</p>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className="py-20 bg-gray-800"
      >
        <div
          className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${
            visibleSections.has('contact')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
          <div className="text-center space-y-4">
            <p>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:muhammadhassanmughal47@gmail.com"
                className="text-indigo-400 hover:underline"
              >
                muhammadhassanmughal47@gmail.com
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://linkedin.com/in/hassan814"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                linkedin.com/in/hassan814
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/oye-hunter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                github.com/oye-hunter
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;