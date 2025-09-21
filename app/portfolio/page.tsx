"use client";
import React, { useState, useEffect, useRef } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Refs for section scrolling
  const heroRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const aboutRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const experienceRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const projectsRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const contactRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  // Skills data
  const skills = [
    { name: 'React.js', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'React Native', icon: '📱' },
    { name: 'Flutter', icon: '🦋' },
    { name: 'Supabase', icon: '⚡' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'GraphQL', icon: 'QL' },
    { name: 'TailwindCSS', icon: '🎨' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'GitHub', icon: '🐙' },
  ];

  // Experience data
  const experiences = [
    {
      company: 'Buzz Solutions',
      role: 'Full Stack Developer',
      period: 'Sep 2025 – Present',
      description: 'Building scalable web applications with modern tech stack.'
    },
    {
      company: 'New Web Order',
      role: 'Full Stack Developer Intern',
      period: 'Jun – Aug 2025',
      description: 'Developed and maintained client web applications.'
    },
    {
      company: 'AlimcoSoft',
      role: 'Next.js & React Native Developer',
      period: 'Feb – Apr 2025',
      description: 'Created cross-platform applications with Next.js and React Native.'
    },
    {
      company: 'Grace Technologies',
      role: 'React Developer',
      period: 'Aug – Sep 2024',
      description: 'Built responsive UI components and implemented state management.'
    },
    {
      company: 'Digital Empowerment Network',
      role: 'Frontend Developer',
      period: 'Jul 2024',
      description: 'Developed landing pages and interactive web components.'
    },
    {
      company: 'Naviquis',
      role: 'Frontend Developer Intern',
      period: 'Jun – Sep 2023',
      description: 'Assisted in building UI components and implementing design systems.'
    },
    {
      company: 'Eziline Software House',
      role: 'Web Developer Intern',
      period: 'Jun – Aug 2022',
      description: 'Gained foundational experience in web development and responsive design.'
    }
  ];

  // Projects data
  const projects = [
    {
      title: 'Device Registration Portal',
      tech: 'Next.js + GraphQL',
      description: 'Multi-step form with save-state & JWT auth.',
      delay: '0'
    },
    {
      title: 'E-Commerce Store',
      tech: 'React Native + Firebase + Intercom',
      description: 'CRUD products, user management, live chat.',
      delay: '100'
    },
    {
      title: 'School Website & Management System',
      tech: 'Next.js + Supabase',
      description: 'Role-based SaaS for students, teachers, admins.',
      delay: '200'
    },
    {
      title: 'BuzzSol Company Website',
      tech: 'MERN + Tailwind',
      description: 'Appointment booking + automated emails.',
      delay: '300'
    },
    {
      title: 'GTL Car Tracking Web App',
      tech: 'React',
      description: 'Real-time tracking UI.',
      delay: '400'
    },
    {
      title: 'Mobile Tracking Project',
      tech: 'React + MUI + Java backend',
      description: 'Redesigned UI with MUI.',
      delay: '500'
    },
    {
      title: 'Book Brary',
      tech: 'React + Node',
      description: 'Book marketplace & tutor services.',
      delay: '600'
    },
    {
      title: 'DEN Official Landing Page',
      tech: 'React',
      description: 'Published landing page.',
      delay: '700'
    }
  ];

  // Handle scroll to section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement> | undefined, sectionId: React.SetStateAction<string>) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hero', ref: heroRef },
        { id: 'about', ref: aboutRef },
        { id: 'experience', ref: experienceRef },
        { id: 'projects', ref: projectsRef },
        { id: 'contact', ref: contactRef },
      ];

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current && scrollPosition >= section.ref.current.offsetTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Hassan Mughal
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    const ref = {
                      hero: heroRef,
                      about: aboutRef,
                      experience: experienceRef,
                      projects: projectsRef,
                      contact: contactRef
                    }[item.id];
                    scrollToSection(ref, item.id);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    const ref = {
                      hero: heroRef,
                      about: aboutRef,
                      experience: experienceRef,
                      projects: projectsRef,
                      contact: contactRef
                    }[item.id];
                    scrollToSection(ref, item.id);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-gray-800'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id="hero" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Muhammad Hassan Mughal
                  </span>
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-semibold">
                  Frontend / Full-Stack Developer
                </h2>
                <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl">
                  Passionate about building sleek, modern, and responsive web & mobile applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection(projectsRef, 'projects')}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    View Projects
                  </button>
                  <button
                    onClick={() => scrollToSection(contactRef, 'contact')}
                    className="px-6 py-3 bg-transparent border border-gray-600 rounded-lg font-medium text-gray-300 hover:bg-gray-800 hover:border-gray-500 transform hover:scale-105 transition-all duration-300"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 animate-pulse">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <div className="text-6xl md:text-8xl">👨‍💻</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-70 animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-70 animate-bounce" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-850">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="animate-fade-in-up max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I am a frontend / full-stack developer from Rawalpindi, Pakistan with strong expertise in React.js, Next.js, React Native, GraphQL, Supabase, Firebase, TypeScript, TailwindCSS, and REST APIs. I love creating intuitive user experiences, scalable web/mobile apps, and exploring new technologies. Currently learning Node.js, Express, and MongoDB for full-stack development.
            </p>
            
            <h3 className="text-2xl font-bold mb-6 text-center">Skills & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="group bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-750 transform hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-blue-500"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="text-3xl mb-2 group-hover:animate-bounce">{skill.icon}</div>
                  <div className="text-sm font-medium text-gray-300">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} animate-slide-up`}
                  style={{animationDelay: `${index * 200}ms`}}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <div className="bg-gray-850 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                      <div className="text-sm text-blue-400 font-semibold mb-1">{exp.period}</div>
                      <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
                      <div className="text-purple-400 font-medium mb-3">{exp.role}</div>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-1/12 flex justify-center">
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 transform hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  
                  <div className="w-full md:w-5/12 md:hidden mt-4">
                    <div className="bg-gray-850 p-6 rounded-lg shadow-lg border border-gray-700">
                      <div className="text-sm text-blue-400 font-semibold mb-1">{exp.period}</div>
                      <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
                      <div className="text-purple-400 font-medium mb-3">{exp.role}</div>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-850">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-700"
                style={{animationDelay: `${project.delay}ms`}}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="text-sm text-purple-400 mb-3 font-medium">
                    {project.tech}
                  </div>
                  <p className="text-gray-300">
                    {project.description}
                  </p>
                  <div className="mt-4 w-10 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-gray-850 rounded-lg p-8 md:p-12 shadow-xl border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transform hover:scale-105 transition-all duration-300 border border-gray-700">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:muhammadhassanmughal47@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 break-all"
                >
                  muhammadhassanmughal47@gmail.com
                </a>
              </div>
              
              <div className="text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transform hover:scale-105 transition-all duration-300 border border-gray-700">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/hassan814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  linkedin.com/in/hassan814
                </a>
              </div>
              
              <div className="text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transform hover:scale-105 transition-all duration-300 border border-gray-700">
                <div className="text-4xl mb-4">🐙</div>
                <h3 className="text-lg font-semibold mb-2">GitHub</h3>
                <a 
                  href="https://github.com/oye-hunter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  github.com/oye-hunter
                </a>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-6">
                Feel free to reach out for collaborations, job opportunities, or just to say hello!
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                <span>Let's Connect</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Muhammad Hassan Mughal. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Global CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .bg-gray-850 {
          background-color: #1f2937;
        }
        
        .bg-gray-750 {
          background-color: #374151;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;