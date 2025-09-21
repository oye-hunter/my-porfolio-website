"use client";
import React, { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiReact, SiFlutter, SiSupabase, SiFirebase, SiGraphql, SiTailwindcss, SiMysql, SiPostgresql } from 'react-icons/si';
import { Link, animateScroll as scroll } from 'react-scroll';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && 
            scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      company: 'Buzz Solutions',
      role: 'Full Stack Developer',
      period: 'Sep 2025 – Present',
      description: ''
    },
    {
      company: 'New Web Order',
      role: 'Full Stack Developer Intern',
      period: 'Jun – Aug 2025',
      description: ''
    },
    {
      company: 'AlimcoSoft',
      role: 'Next.js & React Native Developer',
      period: 'Feb – Apr 2025',
      description: ''
    },
    {
      company: 'Grace Technologies',
      role: 'React Developer',
      period: 'Aug – Sep 2024',
      description: ''
    },
    {
      company: 'Digital Empowerment Network',
      role: 'Frontend Developer',
      period: 'Jul 2024',
      description: ''
    },
    {
      company: 'Naviquis',
      role: 'Frontend Developer Intern',
      period: 'Jun – Sep 2023',
      description: ''
    },
    {
      company: 'Eziline Software House',
      role: 'Web Developer Intern',
      period: 'Jun – Aug 2022',
      description: ''
    }
  ];

  const projects = [
    {
      title: 'Device Registration Portal',
      tech: 'Next.js + GraphQL',
      description: 'Multi-step form with save-state & JWT auth.'
    },
    {
      title: 'E-Commerce Store',
      tech: 'React Native + Firebase + Intercom',
      description: 'CRUD products, user management, live chat.'
    },
    {
      title: 'School Website & Management System',
      tech: 'Next.js + Supabase',
      description: 'Role-based SaaS for students, teachers, admins.'
    },
    {
      title: 'BuzzSol Company Website',
      tech: 'MERN + Tailwind',
      description: 'Appointment booking + automated emails.'
    },
    {
      title: 'GTL Car Tracking Web App',
      tech: 'React',
      description: 'Real-time tracking UI.'
    },
    {
      title: 'Mobile Tracking Project',
      tech: 'React + MUI + Java backend',
      description: 'Redesigned UI with MUI.'
    },
    {
      title: 'Book Brary',
      tech: 'React + Node',
      description: 'Book marketplace & tutor services.'
    },
    {
      title: 'DEN Official Landing Page',
      tech: 'React',
      description: 'Published landing page.'
    }
  ];

  const skills = [
    { name: 'React.js', icon: <SiReact className="text-3xl text-blue-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-3xl text-white" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-3xl text-blue-600" /> },
    { name: 'React Native', icon: <SiReact className="text-3xl text-blue-400" /> },
    { name: 'Flutter', icon: <SiFlutter className="text-3xl text-blue-400" /> },
    { name: 'Supabase', icon: <SiSupabase className="text-3xl text-green-400" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-3xl text-yellow-400" /> },
    { name: 'GraphQL', icon: <SiGraphql className="text-3xl text-pink-400" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-3xl text-cyan-400" /> },
    { name: 'MySQL', icon: <SiMysql className="text-3xl text-blue-500" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-3xl text-blue-700" /> },
    { name: 'GitHub', icon: <FaGitAlt className="text-3xl text-white" /> }
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-teal-400">MHM</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['hero', 'about', 'experience', 'projects', 'contact'].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className={`cursor-pointer transition-colors duration-300 ${
                  activeSection === item ? 'text-teal-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-400 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
              {['hero', 'about', 'experience', 'projects', 'contact'].map((item) => (
                <Link
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  className={`py-2 cursor-pointer transition-colors duration-300 ${
                    activeSection === item ? 'text-teal-400' : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Muhammad Hassan Mughal</h1>
          <h2 className="text-2xl md:text-3xl text-teal-400 mb-6">Frontend / Full-Stack Developer</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Passionate about building sleek, modern, and responsive web & mobile applications.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="projects" smooth={true} duration={500} className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transition-colors duration-300 cursor-pointer">
              View Projects
            </Link>
            <Link to="contact" smooth={true} duration={500} className="border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white px-6 py-3 rounded-lg transition-colors duration-300 cursor-pointer">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                I am a frontend / full-stack developer from Rawalpindi, Pakistan with strong expertise in React.js, Next.js, React Native, GraphQL, Supabase, Firebase, TypeScript, TailwindCSS, and REST APIs. I love creating intuitive user experiences, scalable web/mobile apps, and exploring new technologies. Currently learning Node.js, Express, and MongoDB for full-stack development.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Skills</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-700 p-4 rounded-lg flex flex-col items-center justify-center hover:bg-gray-600 transition-colors duration-300"
                  >
                    {skill.icon}
                    <span className="mt-2 text-sm text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-teal-500 transform -translate-x-1/2"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`mb-8 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2"></div>
                <div className="md:w-5/12 relative">
                  <div className="absolute top-4 -left-2 md:left-auto md:-right-2 w-4 h-4 rotate-45 bg-teal-500"></div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg ml-6 md:ml-0">
                    <h3 className="text-xl font-bold text-teal-400">{exp.role}</h3>
                    <h4 className="text-lg font-semibold mb-2">{exp.company}</h4>
                    <p className="text-gray-400 mb-2">{exp.period}</p>
                    {exp.description && <p className="text-gray-300">{exp.description}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-teal-400">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{project.tech}</p>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact Me</h2>
          <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-teal-400 mr-4" />
                <a href="mailto:muhammadhassanmughal47@gmail.com" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
                  muhammadhassanmughal47@gmail.com
                </a>
              </div>
              <div className="flex items-center mb-4">
                <FaLinkedin className="text-teal-400 mr-4" />
                <a href="https://linkedin.com/in/hassan814" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
                  linkedin.com/in/hassan814
                </a>
              </div>
              <div className="flex items-center">
                <FaGithub className="text-teal-400 mr-4" />
                <a href="https://github.com/oye-hunter" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
                  github.com/oye-hunter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-6 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Muhammad Hassan Mughal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;


