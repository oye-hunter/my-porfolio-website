"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Github, Linkedin, ExternalLink, Code, Database, Smartphone, Globe, Server, Palette, Users, Calendar, ShoppingCart, BookOpen, MapPin, FileText } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollY = window.scrollY;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
          }
        }
      });
    };

    const observeElements = () => {
      const elements = document.querySelectorAll('[data-animate]');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const key = (entry.target as HTMLElement).dataset?.animate;
              if (key) {
                setIsVisible(prev => ({
                  ...prev,
                  [key]: true
                }));
              }
            }
          });
        },
        { threshold: 0.1 }
      );

      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    };

    window.addEventListener('scroll', handleScroll);
    const cleanup = observeElements();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cleanup();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: 'React.js', icon: Code, color: 'text-blue-400' },
    { name: 'Next.js', icon: Globe, color: 'text-white' },
    { name: 'TypeScript', icon: Code, color: 'text-blue-500' },
    { name: 'React Native', icon: Smartphone, color: 'text-cyan-400' },
    { name: 'Flutter', icon: Smartphone, color: 'text-sky-400' },
    { name: 'Supabase', icon: Database, color: 'text-green-400' },
    { name: 'Firebase', icon: Database, color: 'text-yellow-400' },
    { name: 'GraphQL', icon: Server, color: 'text-pink-400' },
    { name: 'TailwindCSS', icon: Palette, color: 'text-teal-400' },
    { name: 'MySQL', icon: Database, color: 'text-orange-400' },
    { name: 'PostgreSQL', icon: Database, color: 'text-blue-300' },
    { name: 'GitHub', icon: Github, color: 'text-gray-300' }
  ];

  const experiences = [
    {
      company: 'Buzz Solutions',
      role: 'Full Stack Developer',
      period: 'Sep 2025 – Present',
      color: 'bg-purple-500'
    },
    {
      company: 'New Web Order',
      role: 'Full Stack Developer Intern',
      period: 'Jun – Aug 2025',
      color: 'bg-blue-500'
    },
    {
      company: 'AlimcoSoft',
      role: 'Next.js & React Native Developer',
      period: 'Feb – Apr 2025',
      color: 'bg-green-500'
    },
    {
      company: 'Grace Technologies',
      role: 'React Developer',
      period: 'Aug – Sep 2024',
      color: 'bg-yellow-500'
    },
    {
      company: 'Digital Empowerment Network',
      role: 'Frontend Developer',
      period: 'Jul 2024',
      color: 'bg-red-500'
    },
    {
      company: 'Naviquis',
      role: 'Frontend Developer Intern',
      period: 'Jun – Sep 2023',
      color: 'bg-indigo-500'
    },
    {
      company: 'Eziline Software House',
      role: 'Web Developer Intern',
      period: 'Jun – Aug 2022',
      color: 'bg-pink-500'
    }
  ];

  const projects = [
    {
      title: 'Device Registration Portal',
      tech: 'Next.js + GraphQL',
      description: 'Multi-step form with save-state & JWT auth.',
      icon: FileText
    },
    {
      title: 'E-Commerce Store',
      tech: 'React Native + Firebase + Intercom',
      description: 'CRUD products, user management, live chat.',
      icon: ShoppingCart
    },
    {
      title: 'School Website & Management System',
      tech: 'Next.js + Supabase',
      description: 'Role-based SaaS for students, teachers, admins.',
      icon: Users
    },
    {
      title: 'BuzzSol Company Website',
      tech: 'MERN + Tailwind',
      description: 'Appointment booking + automated emails.',
      icon: Calendar
    },
    {
      title: 'GTL Car Tracking Web App',
      tech: 'React',
      description: 'Real-time tracking UI.',
      icon: MapPin
    },
    {
      title: 'Mobile Tracking Project',
      tech: 'React + MUI + Java backend',
      description: 'Redesigned UI with MUI.',
      icon: Smartphone
    },
    {
      title: 'Book Brary',
      tech: 'React + Node',
      description: 'Book marketplace & tutor services.',
      icon: BookOpen
    },
    {
      title: 'DEN Official Landing Page',
      tech: 'React',
      description: 'Published landing page.',
      icon: Globe
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              MHM
            </div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate="hero-title"
            className={`transform transition-all duration-1000 ${
              isVisible['hero-title'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
              Muhammad Hassan Mughal
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-400 mb-6">
              Frontend / Full-Stack Developer
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate about building sleek, modern, and responsive web & mobile applications.
            </p>
          </div>
          <div 
            data-animate="hero-buttons"
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible['hero-buttons'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-500 hover:bg-blue-500/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate="about-title"
            className={`transform transition-all duration-1000 ${
              isVisible['about-title'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              data-animate="about-content"
              className={`transform transition-all duration-1000 delay-200 ${
                isVisible['about-content'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                I am a frontend / full-stack developer from <span className="text-blue-400 font-semibold">Rawalpindi, Pakistan</span> with strong expertise in React.js, Next.js, React Native, GraphQL, Supabase, Firebase, TypeScript, TailwindCSS, and REST APIs.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                I love creating <span className="text-purple-400 font-semibold">intuitive user experiences</span>, scalable web/mobile apps, and exploring new technologies. Currently learning Node.js, Express, and MongoDB for full-stack development.
              </p>
            </div>
            
            <div 
              data-animate="skills-grid"
              className={`transform transition-all duration-1000 delay-400 ${
                isVisible['skills-grid'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">Skills & Technologies</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group bg-gray-700/50 rounded-lg p-4 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Icon className={`w-8 h-8 mx-auto mb-2 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                      <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate="experience-title"
            className={`transform transition-all duration-1000 ${
              isVisible['experience-title'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-animate={`experience-${index}`}
                className={`relative flex items-center mb-12 transform transition-all duration-1000 ${
                  isVisible[`experience-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full ${exp.color} border-4 border-gray-900 z-10`}></div>
                
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:text-right md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-2">{exp.company}</h3>
                    <p className="text-blue-400 font-semibold mb-2">{exp.role}</p>
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate="projects-title"
            className={`transform transition-all duration-1000 ${
              isVisible['projects-title'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  data-animate={`project-${index}`}
                  className={`group bg-gray-700/30 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-700/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl cursor-pointer border border-gray-600/30 hover:border-blue-500/50 ${
                    isVisible[`project-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <Icon className="w-8 h-8 text-blue-400 group-hover:text-purple-400 transition-colors duration-300 mr-3" />
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300 ml-auto opacity-0 group-hover:opacity-100" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-blue-400 text-sm font-semibold mb-3">{project.tech}</p>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    {project.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            data-animate="contact-title"
            className={`transform transition-all duration-1000 ${
              isVisible['contact-title'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Ready to work together? Let's connect and build something amazing!
            </p>
          </div>
          
          <div 
            data-animate="contact-links"
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1000 delay-300 ${
              isVisible['contact-links'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <a
              href="mailto:muhammadhassanmughal47@gmail.com"
              className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/hassan814"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border-2 border-blue-500 hover:bg-blue-500/10 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/oye-hunter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border-2 border-gray-500 hover:bg-gray-500/10 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Muhammad Hassan Mughal. Built with React & TailwindCSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;