"use client";
"use client";
import { useState, useEffect, useRef, type RefObject } from "react";
import { 
  ArrowDown, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  Menu,
  X,
  ChevronRight,
  Calendar,
  Code,
  Smartphone,
  Database,
  Cloud
} from "lucide-react";

const Portfolio = () => {
  type Section = "hero" | "about" | "experience" | "projects" | "contact";
  const [activeSection, setActiveSection] = useState<Section>("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionRefs: Record<Section, RefObject<HTMLElement | null>> = {
    hero: useRef<HTMLElement | null>(null),
    about: useRef<HTMLElement | null>(null),
    experience: useRef<HTMLElement | null>(null),
    projects: useRef<HTMLElement | null>(null),
    contact: useRef<HTMLElement | null>(null)
  };
  // Smooth scroll to section
  const scrollToSection = (sectionId: Section) => {
    setIsMenuOpen(false);
    sectionRefs[sectionId].current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      (Object.entries(sectionRefs) as [Section, RefObject<HTMLElement | null>][]).forEach(([section, ref]) => {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop;
          const sectionHeight = ref.current.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Skills data
  const skills = [
    { icon: <Code className="h-6 w-6" />, name: "React.js" },
    { icon: <Code className="h-6 w-6" />, name: "Next.js" },
    { icon: <Code className="h-6 w-6" />, name: "TypeScript" },
    { icon: <Smartphone className="h-6 w-6" />, name: "React Native" },
    { icon: <Smartphone className="h-6 w-6" />, name: "Flutter" },
    { icon: <Database className="h-6 w-6" />, name: "Supabase" },
    { icon: <Cloud className="h-6 w-6" />, name: "Firebase" },
    { icon: <Database className="h-6 w-6" />, name: "GraphQL" },
    { icon: <Code className="h-6 w-6" />, name: "TailwindCSS" },
    { icon: <Database className="h-6 w-6" />, name: "MySQL" },
    { icon: <Database className="h-6 w-6" />, name: "PostgreSQL" },
    { icon: <Code className="h-6 w-6" />, name: "GitHub" },
  ];

  // Experience data
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Buzz Solutions",
      period: "Sep 2025 – Present",
      description: "Developing full-stack applications with modern technologies"
    },
    {
      title: "Full Stack Developer Intern",
      company: "New Web Order",
      period: "Jun – Aug 2025",
      description: "Built responsive web applications and implemented backend APIs"
    },
    {
      title: "Next.js & React Native Developer",
      company: "AlimcoSoft",
      period: "Feb – Apr 2025",
      description: "Developed cross-platform mobile apps and server-rendered web applications"
    },
    {
      title: "React Developer",
      company: "Grace Technologies",
      period: "Aug – Sep 2024",
      description: "Created interactive user interfaces with React and state management"
    },
    {
      title: "Frontend Developer",
      company: "Digital Empowerment Network",
      period: "Jul 2024",
      description: "Developed and deployed responsive landing pages and web applications"
    },
    {
      title: "Frontend Developer Intern",
      company: "Naviquis",
      period: "Jun – Sep 2023",
      description: "Learned modern frontend development practices and contributed to production code"
    },
    {
      title: "Web Developer Intern",
      company: "Eziline Software House",
      period: "Jun – Aug 2022",
      description: "Built and maintained websites using HTML, CSS, and JavaScript"
    }
  ];

  // Projects data
  const projects = [
    {
      title: "Device Registration Portal",
      description: "Multi-step form with save-state & JWT authentication",
      technologies: "Next.js + GraphQL",
    },
    {
      title: "E-Commerce Store",
      description: "CRUD products, user management, and live chat functionality",
      technologies: "React Native + Firebase + Intercom",
    },
    {
      title: "School Website & Management System",
      description: "Role-based SaaS for students, teachers, and admins",
      technologies: "Next.js + Supabase",
    },
    {
      title: "BuzzSol Company Website",
      description: "Appointment booking system with automated emails",
      technologies: "MERN + Tailwind",
    },
    {
      title: "GTL Car Tracking Web App",
      description: "Real-time tracking UI with interactive maps",
      technologies: "React",
    },
    {
      title: "Mobile Tracking Project",
      description: "Redesigned UI with Material-UI components",
      technologies: "React + MUI + Java backend",
    },
    {
      title: "Book Brary",
      description: "Book marketplace and tutor services platform",
      technologies: "React + Node",
    },
    {
      title: "DEN Official Landing Page",
      description: "Published landing page for Digital Empowerment Network",
      technologies: "React",
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-primary">
              Muhammad Hassan
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {(Object.keys(sectionRefs) as Section[]).map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === section
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {(Object.keys(sectionRefs) as Section[]).map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                    activeSection === section
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={sectionRefs.hero} className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Muhammad Hassan Mughal
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary mb-6">
              Frontend / Full-Stack Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Passionate about building sleek, modern, and responsive web & mobile applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                View Projects
                <ArrowDown className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I am a frontend / full-stack developer from Rawalpindi, Pakistan with strong expertise in React.js, Next.js, React Native, GraphQL, Supabase, Firebase, TypeScript, TailwindCSS, and REST APIs. I love creating intuitive user experiences, scalable web/mobile apps, and exploring new technologies. Currently learning Node.js, Express, and MongoDB for full-stack development.
              </p>
              <div className="flex gap-4">
                <a
                  href="mailto:muhammadhassanmughal47@gmail.com"
                  className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/hassan814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/oye-hunter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Skills & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-background p-4 rounded-lg border border-border hover:border-primary transition-colors flex flex-col items-center gap-2"
                  >
                    {skill.icon}
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={sectionRefs.experience} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-primary transform -translate-x-1/2"></div>
              
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`mb-8 ml-12 relative ${index % 2 === 0 ? "animate-fade-in-left" : "animate-fade-in-right"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-9 top-4 h-4 w-4 rounded-full bg-primary border-4 border-background"></div>
                  
                  <div className="bg-muted p-6 rounded-lg border border-border hover:border-primary transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-primary mb-3">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={sectionRefs.projects} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300 group"
              >
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <Code className="h-16 w-16 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-primary font-medium">{project.technologies}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          
          <div className="max-w-2xl mx-auto bg-muted/30 p-8 rounded-lg border border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href="mailto:muhammadhassanmughal47@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      muhammadhassanmughal47@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a
                      href="https://linkedin.com/in/hassan814"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/in/hassan814
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a
                      href="https://github.com/oye-hunter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      github.com/oye-hunter
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Muhammad Hassan Mughal. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="mailto:muhammadhassanmughal47@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/hassan814"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/oye-hunter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes fade-in-left {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;