"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Menu,
  X,
  Code,
  Star,
  Award,
  Users,
  Calendar,
  MapPin,
  GraduationCap,
  Heart,
  Coffee,
  Music,
  Camera,
  Gamepad2,
  Book,
  Briefcase,
  Globe,
} from "lucide-react"

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("about")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    // Handle external links first
    if (sectionId === "home") {
      window.location.href = "/" // Navigate to the home page
      return
    }
    if (sectionId === "blog") {
      window.location.href = "/blog" // Navigate to the blog page
      return
    }
    if (sectionId === "contact") {
      window.location.href = "/contact" // Navigate to the contact page
      return
    }
    if (sectionId === "projects") {
        window.location.href = "/projects"; // Assuming 'projects' is a separate page
        return;
    }

    // Handle internal links (scroll to section on the current page)
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scroll to the element
      setActiveSection(sectionId); // Set the active section for highlighting
    } else {
      // Optional: Log a warning if an internal ID is not found
      console.warn(`Attempted to scroll to section with ID '${sectionId}', but element not found.`);
    }
    setIsMenuOpen(false); // Close mobile menu after selection
  }

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
    {
      title: "Active Member",
      company: "JCI Phnom Penh",
      location: "Phnom Penh, Cambodia",
      duration: "2025 - 2026",
      description:
        "Contributing to a global network of young active citizens across 124 countries. Participating in development opportunities that empower young people to create positive change in communities.",
      technologies: ["Community Development", "Leadership", "Networking"],
      socialLinks: {
        website: "https://web.facebook.com/JCIPhnomPenh",
      },
    },
    {
      title: "Creative Designer",
      company: "CJTT Trading Co., Ltd",
      location: "Remote, Freelance",
      duration: "2024 (DEC) - Present",
      description:
        "Developing creative marketing materials including posters, videos, and digital content. Focusing on brand development and customer acquisition through strategic visual communication.",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Canva", "CapCut"],
      socialLinks: {
        website: "https://web.facebook.com/profile.php?id=100063701644264",
      },
    },
  ]

  const skills = [
    { category: "Frontend", skills: ["React", "Next.Js", "Tailwind CSS", "Vue.js"], level: 60 },
    { category: "Backend", skills: ["Node.js", "Python", "PHP", "Laravel"], level: 50 },
    { category: "Database", skills: ["PostgreSQL", "MySQL", "MongoDB"], level: 85 },
    { category: "Design", skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva"], level: 75 },
  ]

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Paragon International University",
      period: "2024 - 2028",
      description: "Specialized in Software and Web Development",
      achievements: ["Final Project"],
    },
    {
      degree: "Diploma in English",
      institution: "Australian Centre for Education",
      period: "2023 - 2027",
      description: "Intensive program on soft skill and academic skill.",
      achievements: ["Speaking and Debate", "Listening and Note taking", "Creative and Critical thinking"],
    },
  ]

  const certifications = [
    { name: "Master Laravel 12 & PHP: From Beginner to Advanced", issuer: "Udemy", year: "2024" },
    { name: "Master modern React from beginner to advanced! Next.js, Context API, React Query, Redux, Tailwind, advanced patterns", issuer: "Udemy", year: "2024" },
    { name: "CS50's Introduction to Computer Science", issuer: "Edx, HarvardX", year: "2024" },
    { name: "Javascript-algorithms-and-data-structures", issuer: "FreeCodeCamp", year: "2025" },
    { name: "Listening & Note Taling Skills  1 & 2", issuer: "ACE", year: "2024" },
    { name: "Debate Course", issuer: "ACE", year: "2024" },
    { name: "Public Speaking Course", issuer: "ACE", year: "2025" },
    { name: "Creative Thinking & Problem Solving Skills", issuer: "2025", issuer: "ACE", year: "2025" },
  ]

  const interests = [
    { icon: Code, name: "Open Source", description: "Contributing to open source projects" },
    { icon: Music, name: "Music Production", description: "Creating electronic music in my spare time" },
    { icon: Camera, name: "Photography", description: "Capturing moments and landscapes" },
    { icon: Gamepad2, name: "Gaming", description: "Strategy games and indie titles" },
    { icon: Book, name: "Reading", description: "Tech blogs, sci-fi, and philosophy" },
    { icon: Coffee, name: "Mactcha", description: "Exploring different making methods" },
  ]

  const values = [
    {
      title: "Innovation",
      description: "Always seeking new ways to solve problems and improve user experiences",
      icon: Star,
    },
    {
      title: "Quality",
      description: "Committed to writing clean, maintainable code and delivering polished products",
      icon: Award,
    },
    {
      title: "Collaboration",
      description: "Believing in the power of teamwork and open communication",
      icon: Users,
    },
    {
      title: "Learning",
      description: "Continuously expanding knowledge and staying current with technology trends",
      icon: GraduationCap,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              RattanakPong
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Experience", id: "experience" },
                { name: "Projects", id: "projects" }, // Assuming projects is a separate page
                { name: "Blog", id: "blog" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
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
              ))}
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
                { name: "About", id: "about" },
                { name: "Experience", id: "experience" },
                { name: "Projects", id: "projects" }, // Assuming projects is a separate page
                { name: "Blog", id: "blog" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left text-sm font-medium transition-colors duration-300 hover:text-purple-400 ${
                    activeSection === item.id ? "text-purple-400" : "text-gray-300"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <div className="flex justify-center mb-6">
              <div className="relative w-32 h-32">
                <Image
                  src="/profile-photo.jpg"
                  alt="Rattanak Pong"
                  fill
                  className="object-cover rounded-full border-4 border-purple-500/30 shadow-xl"
                />
              </div>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get to know more about my journey, skills, and passion for technology
            </p>
          </div>
        </div>
      </header>

      {/* Detailed About Section */}
      <section id="about" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Personal Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  My name is RattanakPong, a passionate full-stack developer and UI/UX designer based in the vibrant
                  city of Phnom Penh, Cambodia. My journey into the world of technology began during my university
                  years, where I discovered the perfect blend of creativity and logic that programming offers.
                </p>
                <p>
                  What started as curiosity about how websites work has evolved into a deep passion for creating digital
                  experiences that make a difference. I believe that great software is not just about clean code, but
                  about understanding users' needs and crafting solutions that are both functional and delightful to
                  use.
                </p>
                <p>
                  Over the years, I've had the privilege of working with diverse teams and clients, from local startups
                  to established businesses. Each project has taught me something new and reinforced my belief that
                  technology should serve people, not the other way around.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects,
                  or experimenting with the latest web technologies. I'm always eager to learn and share knowledge with
                  the developer community.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">Quick Facts</h2>
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
                <div className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20">
                  <Calendar className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">1</div>
                  <div className="text-gray-300 text-sm">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20">
                  <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">KH</div>
                  <div className="text-gray-300 text-sm">Based in Cambodia</div>
                </div>
              </div>

              {/* Contact Information Card - Now uses default Card style */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-3 text-purple-400" />
                      <span>prattanakpong@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-3 text-purple-400" />
                      <span>Phnom Penh, Cambodia</span>
                    </div>
                    <div className="flex items-center">
                      <Github className="w-4 h-4 mr-3 text-purple-400" />
                      <span>github.com/Rattanakpong</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Professional Experience Section */}
          <div id="experience" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Personal Experience</h2>
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
                    <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-slate-900 z-10"></div>

                    {/* Content */}
                    <div className={`w-full sm:w-5/12 ml-12 sm:ml-0 ${index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"}`}>
                      {/* Card now uses default style, only adding transform for hover */}
                      <Card className="transform hover:scale-105">
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

          {/* Technical Skills Section */}
          <div id="skills" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{skillGroup.category}</CardTitle>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Proficiency</span>
                      <span className="text-purple-400 font-semibold">{skillGroup.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skillGroup.level}%` }}
                      ></div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="border-purple-400/30 text-purple-300 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div id="education" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Education</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-white text-lg mb-2">{edu.degree}</CardTitle>
                        <CardDescription className="text-purple-400 font-semibold">{edu.institution}</CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                        {edu.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{edu.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Achievements:</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 text-sm flex items-center">
                            <Star className="w-3 h-3 text-purple-400 mr-2" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div id="certifications" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Certifications</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <Award className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold text-sm mb-2">{cert.name}</h3>
                    <p className="text-gray-400 text-xs mb-2">{cert.issuer}</p>
                    <Badge variant="outline" className="border-purple-400/30 text-purple-300 text-xs">
                      {cert.year}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Values & Philosophy */}
          <div id="values" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center group">
                  <CardContent className="p-6">
                    <value.icon className="w-8 h-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-white font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-300 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Interests & Hobbies */}
          <div id="interests" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Interests & Hobbies</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {interests.map((interest, index) => (
                <Card key={index} className="group">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <interest.icon className="w-6 h-6 text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-white font-semibold">{interest.name}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{interest.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div id="contact-cta" className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-4">Let's Work Together</h2>
                <p className="text-gray-300 mb-6">
                  I'm always excited to collaborate on interesting projects and meet fellow developers and designers.
                  Whether you have a project in mind or just want to chat about technology, feel free to reach out!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Get In Touch
                    </Button>
                  </Link>
                  <Link href="/blog">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent transform hover:scale-105 transition-all duration-300"
                    >
                      <Book className="w-4 h-4 mr-2" />
                      Read My Blog
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black/40 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              RattanakPong
            </Link>
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
