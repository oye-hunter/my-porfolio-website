"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FaReact, FaGithub, FaLinkedin, FaEnvelope, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaJava, FaDatabase, FaMobileAlt, FaServer } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiReactquery, SiSupabase, SiFirebase, SiGraphql, SiTailwindcss, SiPostgresql, SiMysql, SiFlutter, SiMui } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-gray-900 dark:text-gray-100" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'React Native', icon: <FaReact className="text-blue-400" /> },
  { name: 'Flutter', icon: <SiFlutter className="text-blue-500" /> },
  { name: 'Supabase', icon: <SiSupabase className="text-green-500" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'GraphQL', icon: <SiGraphql className="text-pink-600" /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss className="text-blue-400" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-800" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-700 dark:text-gray-300" /> },
];

const experience = [
  { company: 'Buzz Solutions', role: 'Full Stack Developer', date: 'Sep 2025 – Present' },
  { company: 'New Web Order', role: 'Full Stack Developer Intern', date: 'Jun – Aug 2025' },
  { company: 'AlimcoSoft', role: 'Next.js & React Native Developer', date: 'Feb – Apr 2025' },
  { company: 'Grace Technologies', role: 'React Developer', date: 'Aug – Sep 2024' },
  { company: 'Digital Empowerment Network', role: 'Frontend Developer', date: 'Jul 2024' },
  { company: 'Naviquis', role: 'Frontend Developer Intern', date: 'Jun – Sep 2023' },
  { company: 'Eziline Software House', role: 'Web Developer Intern', date: 'Jun – Aug 2022' },
];

const projects = [
  { name: 'Device Registration Portal', tech: 'Next.js + GraphQL', description: 'Multi-step form with save-state & JWT auth.' },
  { name: 'E-Commerce Store', tech: 'React Native + Firebase + Intercom', description: 'CRUD products, user management, live chat.' },
  { name: 'School Website & Management System', tech: 'Next.js + Supabase', description: 'Role-based SaaS for students, teachers, admins.' },
  { name: 'BuzzSol Company Website', tech: 'MERN + Tailwind', description: 'Appointment booking + automated emails.' },
  { name: 'GTL Car Tracking Web App', tech: 'React', description: 'Real-time tracking UI.' },
  { name: 'Mobile Tracking Project', tech: 'React + MUI + Java backend', description: 'Redesigned UI with MUI.' },
  { name: 'Book Brary', tech: 'React + Node', description: 'Book marketplace & tutor services.' },
  { name: 'DEN Official Landing Page', tech: 'React', description: 'Published landing page.' },
];

const sections = ['hero', 'about', 'experience', 'projects', 'contact'];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen font-sans scroll-smooth">
      {/* Sticky Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-gray-950 bg-opacity-80 backdrop-blur-md shadow-lg transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
          <a href="#hero" className="text-xl font-bold text-teal-400 hover:text-teal-300 transition-colors">
            Hassan Mughal
          </a>
          <ul className="hidden md:flex space-x-8">
            <li className="group">
              <a onClick={() => scrollToSection('about')} className={`cursor-pointer transition-colors ${activeSection === 'about' ? 'text-teal-400' : 'text-gray-300 hover:text-teal-400'}`}>
                About
              </a>
            </li>
            <li className="group">
              <a onClick={() => scrollToSection('experience')} className={`cursor-pointer transition-colors ${activeSection === 'experience' ? 'text-teal-400' : 'text-gray-300 hover:text-teal-400'}`}>
                Experience
              </a>
            </li>
            <li className="group">
              <a onClick={() => scrollToSection('projects')} className={`cursor-pointer transition-colors ${activeSection === 'projects' ? 'text-teal-400' : 'text-gray-300 hover:text-teal-400'}`}>
                Projects
              </a>
            </li>
            <li className="group">
              <a onClick={() => scrollToSection('contact')} className={`cursor-pointer transition-colors ${activeSection === 'contact' ? 'text-teal-400' : 'text-gray-300 hover:text-teal-400'}`}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <section id="hero" ref={el => { sectionRefs.current.hero = el }} className="min-h-screen flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              Muhammad Hassan Mughal
            </h1>
            <h2 className="text-2xl md:text-4xl text-teal-400 font-semibold">
              Frontend / Full-Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              "Passionate about building sleek, modern, and responsive web & mobile applications."
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-teal-600 text-teal-400 font-bold py-3 px-6 rounded-lg transition-colors hover:bg-teal-600 hover:text-white"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* About Me Section */}
        <section id="about" ref={el => { sectionRefs.current.about = el }} className="py-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-center text-white mb-12"
          >
            About Me
          </motion.h2>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400"
            >
              I am a frontend / full-stack developer from Rawalpindi, Pakistan with strong expertise in React.js, Next.js, React Native, GraphQL, Supabase, Firebase, TypeScript, TailwindCSS, and REST APIs. I love creating intuitive user experiences, scalable web/mobile apps, and exploring new technologies. Currently learning Node.js, Express, and MongoDB for full-stack development.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center mt-12"
            >
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 p-4 bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl text-teal-400 transition-transform duration-300 group-hover:rotate-12">
                    {skill.icon}
                  </div>
                  <span className="text-gray-300 text-sm font-semibold">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" ref={el => { sectionRefs.current.experience = el }} className="py-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-center text-white mb-12"
          >
            Experience
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-y-0 before:left-1/2 before:-ml-0.5 before:bg-gray-700 before:hidden md:before:block">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`relative flex items-center w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:left-1/2'}`}
              >
                <div className={`w-8 h-8 rounded-full bg-teal-400 absolute left-1/2 -ml-4 z-10 hidden md:block`} />
                <div className={`flex-grow p-6 bg-gray-900 rounded-lg shadow-xl border-t-4 ${index % 2 === 0 ? 'border-r-4 border-l-0 border-b-4' : 'border-l-4 border-r-0 border-b-4'} border-teal-600 transition-transform duration-300 hover:scale-105`}>
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <p className="text-gray-400">{job.company}</p>
                  <p className="text-sm text-gray-500">{job.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" ref={el => { sectionRefs.current.projects = el }} className="py-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-center text-white mb-12"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-800 hover:border-teal-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-teal-400 font-semibold mb-4">{project.tech}</p>
                <p className="text-gray-400">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={el => { sectionRefs.current.contact = el }} className="py-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-center text-white mb-12"
          >
            Contact
          </motion.h2>
          <div className="max-w-2xl mx-auto space-y-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a href="mailto:muhammadhassanmughal47@gmail.com" className="flex items-center justify-center space-x-4 p-4 bg-gray-900 rounded-lg shadow-lg hover:bg-gray-800 transition-colors">
                <FaEnvelope className="text-3xl text-teal-400" />
                <span className="text-lg md:text-xl text-gray-300 hover:text-white transition-colors">muhammadhassanmughal47@gmail.com</span>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="https://linkedin.com/in/hassan814" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-4 p-4 bg-gray-900 rounded-lg shadow-lg hover:bg-gray-800 transition-colors">
                <FaLinkedin className="text-3xl text-teal-400" />
                <span className="text-lg md:text-xl text-gray-300 hover:text-white transition-colors">linkedin.com/in/hassan814</span>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href="https://github.com/oye-hunter" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-4 p-4 bg-gray-900 rounded-lg shadow-lg hover:bg-gray-800 transition-colors">
                <FaGithub className="text-3xl text-teal-400" />
                <span className="text-lg md:text-xl text-gray-300 hover:text-white transition-colors">github.com/oye-hunter</span>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="text-center py-8 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Muhammad Hassan Mughal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;