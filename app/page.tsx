"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Mail,
  Twitter,
  Linkedin,
  Calendar,
  Code,
  Briefcase,
  BookOpen,
  Star,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Phone,
  Globe,
  Clock,
  Award,
  Users,
  User,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const experienceSectionRef = useRef<HTMLElement>(null)
  const [experienceCardsVisible, setExperienceCardsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setExperienceCardsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    if (experienceSectionRef.current) {
      observer.observe(experienceSectionRef.current)
    }

    return () => {
      if (experienceSectionRef.current) {
        observer.unobserve(experienceSectionRef.current)
      }
    }
  }, [])

  // Intersection Observer for navbar highlighting
  useEffect(() => {
    const sections = ["home", "about", "experience", "projects", "blog"]
    const observers: IntersectionObserver[] = []

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(sectionId)
              }
            })
          },
          {
            threshold: 0.3,
            rootMargin: "-20% 0px -20% 0px",
          },
        )
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const experiences = [
    {
      title: "Junior Developer",
      company: "ឃ្យូអ៎ . Q - R",
      location: "Remote, Freelance",
      duration: "2025 (JAN) - Present",
      description:
        "We are a Cambodian innovative technology company offering a self-ordering e-menu and POS system tailored for restaurants, cafes, pubs, and bars. Leading development of modern web solutions for hospitality industry.",
      technologies: ["React", "Node.js", "Python", "Laravel", "PostgreSQL"],
      socialLinks: {
        website: "https://web.facebook.com/profile.php?id=61559521294212",
      },
    },
    {
      title: "UI/UX Designer",
      company: "មន្ទីរពិសោធន៍វេជ្ជសាស្ត្រ អេវ័ន - A1 Medical Laboratory",
      location: "Remote, Freelance",
      duration: "2025 (JAN) - Present",
      description:
        "Creating compelling visual content including posters, videos, and marketing materials for medical laboratory services. Ensuring brand consistency and effective customer engagement through strategic design.",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Canva", "CapCut"],
      socialLinks: {
        website: "https://web.facebook.com/a1labo",
      },
    },
    {
      title: "Project Lead",
      company: "SIL Digital Agency",
      location: "Phnom Penh, Cambodia",
      duration: "2025 (MAY) - Present",
      description:
        "Leading digital marketing solutions for businesses. Managing event coordination and providing comprehensive crew services. Overseeing project delivery and client satisfaction.",
      technologies: ["Project Management", "Digital Marketing", "Team Leadership"],
      socialLinks: {
        website: "https://web.facebook.com/sil.asia2",
      },
    },
  ]

  const projects = [
    {
      title: "Finger Detection System",
      description:
        "Advanced computer vision project using Python to detect and track finger movements through camera input with real-time processing.",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQEqDr2WmIDKrg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1690389776221?e=2147483647&v=beta&t=rmcw04M_gjDusRH6StfZZiLNDSnl1Wg0mNoTfg04DlE",
      tags: ["Python", "OpenCV", "Computer Vision", "Machine Learning"],
      github: "https://github.com/Rattanakpong/Finger-Detected",
      featured: false,
    },
    {
      title: "Educational Platform Website",
      description:
        "Comprehensive educational website showcasing courses, pricing, and institutional information with modern responsive design.",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/792243188254707.Y3JvcCwxOTIwLDE1MDEsMCwxNA.jpg",
      tags: ["HTML5", "JavaScript", "CSS3", "Responsive Design"],
      github: "#",
      featured: false,
    },
    {
      title: "Immigration Management System",
      description:
        "Full-stack web application providing comprehensive immigration services and document management for Cambodia.",
      image: "https://cdn.cfr.org/sites/default/files/styles/immersive_image_3_2_desktop_2x/public/image/2024/08/ImmigrationDebate_HP.webp",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      github: "https://github.com/Rattanakpong/CRMS-Web",
      featured: false,
    },
  ]

  const allBlogPosts = [
    {
      title: "My Web Dev Journey: From Scratch to Full-Stack",
      excerpt:
        "My first real breakthrough came when I connected a Laravel backend to a React frontend. It wasn’t perfect, but it worked—and that was a big deal.",
      date: "2024-12-15",
      image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210222183454/How-to-Become-a-Full-Stack-Web-Developer-in-2021.png",
      slug: "page",
      category: "Web Development",
      author: "RattanakPong",
      tags: ["Next.js", "React", "Web Development", "JavaScript", "TypeScript"],
      featured: false,
    },
    {
      title: "Building My Job Fair Web App with Laravel and React",
      excerpt:
        "I used Laravel to manage the backend and user roles. React made the UI fast and dynamic. I built APIs for user registration, job listing, and meeting scheduling.",
      date: "2024-12-10",
      image: "https://studio.uxpincdn.com/studio/wp-content/uploads/2024/03/Laravel-with-React-1024x512.png.webp",
      slug: "",
      category: "Web Development",
      author: "RattanakPong",
      tags: ["Laravel", "PHP", "Figma", "SQL"],
      featured: false,
    },
    {
      title: "Why I Got Interested in Cybersecurity",
      excerpt:
        "I explored TryHackMe and learned about topics like SQL injection, XSS, and network sniffing with Wireshark.",
      date: "2024-12-05",
      image: "https://polarbackup.com/wp-content/uploads/2024/07/Cyber-Security.jpg",
      slug: "",
      category: "Network",
      author: "RattanakPong",
      tags: ["Machine Learning", "Web Development", "Cybersecurity"],
      featured: false,
    },
  ]

  const displayedPosts = allBlogPosts.slice(0, 3)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  // Add this useEffect for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll(".scroll-animate, .scroll-animate-left, .scroll-animate-right")
    animateElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => scrollToSection("home")}
            >
              RattanakPong
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about", link: "/about" },
                { name: "Experience", id: "experience" },
                { name: "Projects", id: "projects" },
                { name: "Blog", id: "blog" },
              ].map((item) =>
                item.link ? (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="text-sm font-medium transition-all duration-300 hover:text-purple-400 hover:scale-105 relative text-gray-300"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-all duration-300 hover:text-purple-400 hover:scale-105 relative ${
                      activeSection === item.id ? "text-purple-400" : "text-gray-300"
                    }`}
                  >
                    {item.name}
                    {activeSection === item.id && (
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    )}
                  </button>
                ),
              )}
              <Link
                href="/contact"
                className="text-sm font-medium transition-all duration-300 hover:text-purple-400 hover:scale-105 relative text-gray-300"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-purple-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="py-4 space-y-4">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about", link: "/about" },
                { name: "Experience", id: "experience" },
                { name: "Projects", id: "projects" },
                { name: "Blog", id: "blog" },
              ].map((item) =>
                item.link ? (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="block w-full text-left text-sm font-medium transition-colors duration-300 hover:text-purple-400 text-gray-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left text-sm font-medium transition-colors duration-300 hover:text-purple-400 ${
                      activeSection === item.id ? "text-purple-400" : "text-gray-300"
                    }`}
                  >
                    {item.name}
                  </button>
                ),
              )}
              <Link
                href="/contact"
                className="block w-full text-left text-sm font-medium transition-colors duration-300 hover:text-purple-400 text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Available for new opportunities
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold animate-fade-in-up">
                  <span className="text-white">Hi, I'm </span>
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                    PONG
                  </span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 animate-fade-in-up animation-delay-200">
                  Full-Stack Developer & Designer
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 animate-fade-in-up animation-delay-400">
                  Passionate about creating innovative digital solutions that bridge technology and user experience.
                  Specializing in modern web development and creative design.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300"
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  View My Work
                </Button>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent transform hover:scale-105 transition-all duration-300"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Let's Connect
                  </Button>
                </Link>
              </div>
              <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in-up animation-delay-800">
                <Link
                  href="https://github.com/Rattanakpong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </Link>
                <Link
                  href="https://x.com/PhaRattanakpong"
                  className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/pha-rattanakpong-7116702a5/"
                  className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="relative w-full h-64 sm:h-96 lg:h-[500px] animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
                <Image
                  src="/profile-photo.jpg"
                  alt="Rattanak Pong - Professional Developer"
                  fill
                  className="object-cover rounded-2xl border-4 border-purple-500/30 shadow-2xl relative z-10"
                  priority
                />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse animation-delay-400"></div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section - Simplified for Home Page */}
      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-fade-in-up">About Me</h2>
            <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Passionate developer and designer with expertise in creating innovative digital solutions
            </p>
          </div>

          {/* Brief Profile Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6 text-center lg:text-left">
              <div className="relative w-48 h-48 mx-auto lg:mx-0">
                <Image
                  src="/profile-photo.jpg"
                  alt="Rattanak Pong"
                  fill
                  className="object-cover rounded-2xl border-4 border-purple-500/30 shadow-xl"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">RattanakPong</h3>
                <p className="text-purple-400 font-semibold mb-4">Full-Stack Developer & Designer</p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Based in Cambodia, I'm a passionate developer with experience in modern web technologies and creative
                  design. I enjoy building innovative solutions that make a positive impact.
                </p>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Learn More About Me
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20">
                  <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-gray-300 text-sm">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20">
                  <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">3+</div>
                  <div className="text-gray-300 text-sm">Work For</div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Code,
                    title: "Full-Stack Development",
                    description: "Modern web technologies including React, Next.js and Node.js.",
                  },
                  {
                    icon: Star,
                    title: "Design",
                    description: "Creating intuitive and visually appealing interfaces with modern design principles.",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                  >
                    <CardContent className="p-4">
                      <item.icon className="w-6 h-6 text-purple-400 mb-2" />
                      <h4 className="text-white font-semibold text-sm mb-2">{item.title}</h4>
                      <p className="text-gray-300 text-xs">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8" ref={experienceSectionRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-fade-in-up">
              Personal Experience
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              My journey through various roles and the experiences that shaped my expertise
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-400 to-pink-400"></div>

            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-slate-900 z-10 scroll-animate"></div>

                  {/* Content */}
                  <div className={`w-full sm:w-5/12 ml-12 sm:ml-0 ${index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"}`}>
                    <Card
                      className={`bg-gradient-to-br from-slate-800/50 to-purple-900/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105 ${
                        experienceCardsVisible ? "animate-slide-in" : "opacity-0"
                      } ${index % 2 === 0 ? "scroll-animate-left" : "scroll-animate-right"}`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <CardTitle className="text-white text-lg sm:text-xl">{exp.title}</CardTitle>
                          <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 w-fit">
                            {exp.duration}
                          </Badge>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400">
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-2" />
                            {exp.company}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {exp.location}
                          </div>
                        </div>
                        {/* Social Links */}
                        <div className="flex space-x-3 mt-2">
                          {exp.socialLinks.website && (
                            <Link
                              href={exp.socialLinks.website}
                              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Globe className="w-4 h-4" />
                            </Link>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 mb-4 text-sm sm:text-base">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="border-purple-400/30 text-purple-300 text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-fade-in-up">Featured Projects</h2>
            <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              A showcase of my recent work and innovative solutions
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-slate-800/50 to-purple-900/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up ${
                  project.featured ? "ring-2 ring-purple-400/30" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {project.featured && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-lg sm:text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-sm sm:text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-purple-600/20 text-purple-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent transform hover:scale-105 transition-all duration-300 w-full"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-fade-in-up">Latest Articles</h2>
            <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Insights, tutorials, and thoughts on technology and development
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedPosts.map((post, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-slate-800/50 to-purple-900/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up ${
                  post.featured ? "ring-2 ring-purple-400/30" : ""
                }`}
              >
                {post.featured && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={350}
                    height={200}
                    className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-purple-600/80 text-white">{post.category}</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center text-xs sm:text-sm text-gray-400 mb-2 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-purple-400 transition-colors text-lg sm:text-xl line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-sm sm:text-base line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                        <Image
                          src="/profile-photo.jpg"
                          alt={post.author}
                          width={24}
                          height={24}
                          className="object-cover"
                        />
                      </div>
                      {post.author}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-purple-400 hover:text-purple-300 hover:bg-purple-400/10 p-0 h-auto font-medium"
                      >
                        Read More →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Posts Button */}
          <div className="text-center mt-8 sm:mt-12">
            <Link href="/blog">
              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent transform hover:scale-105 transition-all duration-300"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-fade-in-up">Let's Work Together</h2>
            <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border-purple-500/20 text-center hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <Link
                  href="mailto:prattanakpong@gmail.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  prattanakpong@gmail.com
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border-purple-500/20 text-center hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <Link href="tel:+85512345678" className="text-purple-400 hover:text-purple-300 transition-colors">
                  +855 61 759 269
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border-purple-500/20 text-center hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <p className="text-purple-400">Phnom Penh, Cambodia</p>
              </CardContent>
            </Card>
          </div>

          {/* Link to Contact Page */}
          <div className="text-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-black/40 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              RattanakPong
            </div>
            <div className="flex space-x-6">
            <Link
                href="https://github.com/Rattanakpong"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://x.com/PhaRattanakpong"
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/pha-rattanakpong-7116702a5/"
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-purple-500/20 text-center text-gray-400">
            <p>&copy; 2024 RattanakPong. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
