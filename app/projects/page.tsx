"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Star, Code, Palette, Globe, Menu, X, Filter, Search, Eye, Heart, Figma } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function ProjectsPage() {
  const [activeSection, setActiveSection] = useState("projects")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.location.href = "/"
      return
    }
    if (sectionId === "about") {
      window.location.href = "/about"
      return
    }
    if (sectionId === "blog") {
      window.location.href = "/blog"
      return
    }
    if (sectionId === "contact") {
      window.location.href = "/contact"
      return
    }
    setIsMenuOpen(false)
  }

  const allProjects = [
    // Development Projects
    {
      title: "Finger Detection System",
      description:
        "Advanced computer vision project using Python to detect and track finger movements through camera input with real-time processing capabilities.",
      longDescription:
        "This project implements advanced computer vision algorithms to detect and track finger movements in real-time. Built with Python and OpenCV, it features gesture recognition, hand tracking, and can be used for touchless interfaces and interactive applications.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQEqDr2WmIDKrg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1690389776221?e=2147483647&v=beta&t=rmcw04M_gjDusRH6StfZZiLNDSnl1Wg0mNoTfg04DlE",
      category: "Development",
      type: "Computer Vision",
      tags: ["Python", "OpenCV", "Computer Vision", "Machine Learning", "Real-time Processing"],
      github: "https://github.com/Rattanakpong/Finger-Detected",
      demo: "#",
      featured: true,
      status: "Completed",
      year: "2024",
      duration: "2 months",
      technologies: ["Python", "OpenCV", "NumPy", "MediaPipe"],
    },
    {
      title: "Educational Platform Website",
      description:
        "Comprehensive educational website showcasing courses, pricing, and institutional information with modern responsive design.",
      longDescription:
        "A full-featured educational platform built with modern web technologies. Features include course catalogs, pricing tables, student dashboards, and responsive design optimized for all devices.",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/792243188254707.Y3JvcCwxOTIwLDE1MDEsMCwxNA.jpg",
      category: "Development",
      type: "Web Application",
      tags: ["HTML5", "JavaScript", "CSS3", "Responsive Design", "Education"],
      github: "#",
      demo: "#",
      featured: false,
      status: "Completed",
      year: "2024",
      duration: "3 months",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    },
    {
      title: "Immigration Management System",
      description:
        "Full-stack web application providing comprehensive immigration services and document management for Cambodia.",
      longDescription:
        "A comprehensive immigration management system designed for Cambodia's immigration services. Features include document processing, application tracking, user management, and administrative dashboards.",
      image:
        "https://cdn.cfr.org/sites/default/files/styles/immersive_image_3_2_desktop_2x/public/image/2024/08/ImmigrationDebate_HP.webp",
      category: "Development",
      type: "Full-Stack Application",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Government"],
      github: "https://github.com/Rattanakpong/CRMS-Web",
      demo: "#",
      featured: true,
      status: "Completed",
      year: "2024",
      duration: "4 months",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Apache"],
    },
    {
      title: "Rattanakpong_Pha_MindMapping",
      description: "Planning the whole process of studying HCI.",
      longDescription:
        "A visual planning tool that outlines the entire Human-Computer Interaction (HCI) study process. Includes topics like user research, prototyping, usability testing, and interface design. Helps organize ideas, tasks, and learning milestones.",
      image: "https://learningfundamentals.com.au/wp-content/uploads/How-to-mind-map-1.jpg",
      category: "Education",
      type: "Study Plan",
      tags: ["HCI", "Mind Mapping", "UX Design", "UI Design", "User Research"],
      github: "",
      demo: "https://www.figma.com/board/XD7vMBLPjts6w3qvxUHdkn/Rattanakpong_Pha_MindMapping?t=oKK8Ds7AV9GYf1qC-6",
      featured: true,
      status: "Completed",
      year: "2024",
      duration: "2 weeks",
      technologies: ["Figma", "Notion"],
    },
    {
      title: "Rattanakpong_Pha_Persona",
      description: "Creating user personas to understand user goals, behaviors, and pain points.",
      longDescription:
        "A detailed breakdown of target users through fictional personas based on research data. Includes demographics, motivations, frustrations, and scenarios. Helps guide user-centered design decisions in Human-Computer Interaction (HCI) projects.",
      image: "https://www.persona-ai.ai/og_persona_ai.png",
      category: "Education",
      type: "User Research",
      tags: ["Persona", "User Research", "UX Design", "HCI", "Empathy Mapping"],
      github: "",
      demo: "https://www.figma.com/board/X0GwteGK1FG9W57rWU1p2U/Rattanakpong_Pha_Persona?t=oKK8Ds7AV9GYf1qC-6",
      featured: false,
      status: "Completed",
      year: "2024",
      duration: "1 week",
      technologies: ["Figma", "Notion", "Canva"],
    },

    // Design Projects
    {
      title: "Rattanakpong_Pha_POV",
      description: "Crafting a clear Point of View (POV) to frame user needs and insights in HCI projects.",
      longDescription:
        "A focused statement that combines user needs with insights gained during the research phase. This POV guides ideation by narrowing the problem and highlighting what matters most to the user. Built as part of a Human-Computer Interaction (HCI) learning process.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
      category: "Education",
      type: "Design Thinking",
      tags: ["POV Statement", "Design Thinking", "UX Research", "User Needs", "HCI"],
      figma: "https://www.figma.com/files/team/1484060294399276134/project/357955369",
      demo: "#",
      featured: true,
      status: "Completed",
      year: "2024",
      duration: "3 days",
      technologies: ["Notion", "Figma", "Google Docs"],
    },
    {
      title: "Rattanakpong_Pha_HMW",
      description: "Defining How Might We questions to explore user problems and opportunities.",
      longDescription:
        "Organizing user challenges into actionable How Might We questions to guide ideation in HCI design.",
      image: "https://cdn-images-1.medium.com/max/1200/1*Zqr3SqluGngiHOjxol6aIA.jpeg",
      category: "Education",
      type: "Design Thinking",
      tags: ["HMW", "Design Thinking", "UX Research", "User Needs", "HCI"],
      figma: "",
      demo: "https://www.figma.com/board/DMLoYdps3wf7yhOC6Mojp9/Rattanakpong_Pha_HMW?t=oKK8Ds7AV9GYf1qC-6",
      featured: true,
      status: "Completed",
      year: "2024",
      duration: "3 days",
      technologies: ["Notion", "Figma", "Google Docs"],
    },
    {
      title: "Rattanakpong_Pha_Brainstorming",
      description: "Brainstorming ideas to solve user problems identified in research.",
      longDescription:
        "Generating diverse solutions through team collaboration and creative thinking as part of the HCI design process.",
      image: "https://leader-development.org/wp-content/uploads/2022/06/145.brainstorming.jpg",
      category: "Education",
      type: "Design Thinking",
      tags: ["Brainstorming", "Ideation", "UX Design", "HCI"],
      figma: "",
      demo: "https://www.figma.com/board/XAApraw2nF5RO54MfrB0yd/Rattanakpong_Pha_Brainstorming?t=oKK8Ds7AV9GYf1qC-6",
      featured: true,
      status: "Completed",
      year: "2024",
      duration: "4 days",
      technologies: ["Notion", "Figma", "Miro"],
    },
    {
      title: "Rattanakpong_Pha_SELECTING",
      description: "Selecting the best ideas from brainstorming to move forward.",
      longDescription:
        "Evaluating and prioritizing ideas to identify feasible solutions for prototyping in the HCI workflow.",
      image: "https://itsm.tools/wp-content/uploads/2018/12/selection.gif",
      category: "Education",
      type: "Design Thinking",
      tags: ["Idea Selection", "Decision Making", "UX Design", "HCI"],
      figma: "https://www.figma.com/board/hsNVoLmVfZmFg0m7t2Xfqh/Rattanakpong_Pha_SELECTING?t=oKK8Ds7AV9GYf1qC-6",
      demo: "",
      featured: true,
      status: "Completed",
      year: "2024",
      duration: "2 days",
      technologies: ["Notion", "Figma", "Google Sheets"],
    },
    {
      title: "Rattanakpong_Pha_PROTOTYPING",
      description: "Creating interactive prototypes to test design ideas.",
      longDescription: "Building wireframes and clickable prototypes to validate concepts and gather user feedback.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
      category: "Education",
      type: "Prototyping",
      tags: ["Prototyping", "Wireframes", "User Testing", "HCI"],
      figma: "https://revpart.com/wp-content/uploads/2016/05/Prototyping-copy-e1464356645610.jpg",
      demo: "#",
      featured: true,
      status: "Completed",
      year: "2024",
      duration: "3 weeks",
      technologies: ["Figma", "InVision", "Adobe XD"],
    },
    {
      title: "Rattanakpong_Pha_UserJourney",
      description: "Mapping the user journey to understand user experience.",
      longDescription:
        "Creating detailed user journey maps to visualize user interactions and pain points across touchpoints.",
      image: "https://www.gamified.uk/wp-content/uploads/2017/03/User-Journey-Island.png",
      category: "Education",
      type: "User Research",
      tags: ["User Journey", "UX Research", "HCI", "Customer Experience"],
      figma: "https://www.figma.com/board/pW1ELCJMlcz9zB4aoFelZc/Rattanakpong_Pha_UserJourney?t=oKK8Ds7AV9GYf1qC-6",
      demo: "#",
      featured: true,
      status: "Completed",
      year: "2024",
      duration: "1 week",
      technologies: ["Figma", "Notion", "Miro"],
    },
    {
      title: "Rattanakpong_Pha_HIGH-FI",
      description: "High-fidelity designs showcasing final UI for the project.",
      longDescription:
        "Polished user interface designs demonstrating the visual and interactive elements of the project.",
      image:
        "https://cdn.prod.website-files.com/61826e16a7bbc9deb3c691c2/63f423507b5b9e23bb15abee_blog-design-system-img.jpeg",
      category: "Design",
      type: "UI Design",
      tags: ["High-Fidelity", "UI Design", "Prototyping", "HCI"],
      figma: "https://www.figma.com/design/J3SUlJM6Vm8Vz3QgqeL74A/Rattanakpong_Pha_HIGH-FI?m=auto&t=oKK8Ds7AV9GYf1qC-6",
      demo: "#",
      featured: true,
      status: "Completed",
      year: "2024",
      duration: "2 weeks",
      technologies: ["Figma", "Adobe Illustrator"],
    },
    {
      title: "Rattanakpong_Pha_PORTFOLIO-Wireframe",
      description: "Wireframe designs for the portfolio showcasing structure and layout.",
      longDescription:
        "Early stage wireframes outlining content placement and navigation flow for the portfolio project.",
      image: "https://miro.medium.com/v2/resize:fit:2000/0*R3ZVImdVx3Xq5E9f.png",
      category: "Design",
      type: "Wireframe",
      tags: ["Wireframe", "UX Design", "Portfolio", "HCI"],
      figma:
        "https://www.figma.com/board/2P5h2MlsIdeadn1JUivppE/Rattanakpong_Pha_PORTFOLIO-Wireframe?t=oKK8Ds7AV9GYf1qC-6",
      demo: "#",
      featured: true,
      status: "Completed",
      year: "2024",
      duration: "1 week",
      technologies: ["Figma", "Notion"],
    },
    {
      title: "Rattanakpong_Pha_PORTFOLIO-HiFi",
      description: "High-fidelity portfolio designs with refined visuals and interactions.",
      longDescription:
        "Final polished designs for the portfolio project, highlighting design system and visual hierarchy.",
      image: "https://as2.ftcdn.net/jpg/02/08/93/87/1000_F_208938793_TM5eq8XpFc0xI78s0bxHj2fLyrmzMmlf.jpg",
      category: "Design",
      type: "UI Design",
      tags: ["Portfolio", "High-Fidelity", "UI Design", "HCI"],
      figma:
        "https://www.figma.com/design/jQ0FuRs0LOt4dAF6cEHMQg/Rattanakpong_Pha_PORTFOLIO-HiFi?m=auto&t=oKK8Ds7AV9GYf1qC-6",
      demo: "#",
      featured: true,
      status: "Completed",
      year: "2024",
      duration: "2 weeks",
      technologies: ["Figma", "Adobe Illustrator"],
    },
    {
      title: "Rattanakpong_Pha_PORTFOLIO-StyleGuide",
      description: "Style guide for the portfolio project to ensure design consistency.",
      longDescription: "Comprehensive style guide detailing colors, typography, components, and usage guidelines.",
      image: "https://payload.cargocollective.com/1/5/191167/5685143/Double-Page-Spread-2_905.png",
      category: "Design",
      type: "Style Guide",
      tags: ["Style Guide", "Design System", "Portfolio", "HCI"],
      figma:
        "https://www.figma.com/design/4LzK7qEBMEZW7SvFqtP5po/Rattanakpong_Pha_PORTFOLIO-StyleGuide?m=auto&t=oKK8Ds7AV9GYf1qC-6",
      demo: "#",
      featured: true,
      status: "Completed",
      year: "2024",
      duration: "1 week",
      technologies: ["Figma", "Notion"],
    },
  ]

  const categories = ["All", "Development", "Design", "Education"]

  // Filter projects based on search and category
  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
                { name: "Projects", id: "projects" },
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
                { name: "Projects", id: "projects" },
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-in-top">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 animate-slide-in-bottom animation-delay-300">
              A showcase of my development work and creative designs
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-4 animate-zoom-in animation-delay-500">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 animate-wiggle" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-800/50 border-purple-500/20 text-white placeholder:text-gray-400 focus:border-purple-400 hover-glow"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category, index) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={`animate-bounce-in hover-lift ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        : "border-purple-400/30 text-purple-300 hover:bg-purple-400 hover:text-white bg-transparent"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {category === "Development" && <Code className="w-4 h-4 mr-2 animate-wiggle" />}
                    {category === "Design" && <Palette className="w-4 h-4 mr-2 animate-wiggle" />}
                    {category === "All" && <Filter className="w-4 h-4 mr-2 animate-wiggle" />}
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* All Projects Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">All Projects</h2>
            <div className="text-gray-400">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover-glow animate-slide-in-bottom"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 rounded-t-xl"
                    />
                    <div className="absolute top-4 left-4 animate-slide-in-left">
                      <Badge className="bg-purple-600/80 text-white">{project.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4 animate-slide-in-right">
                      <Badge variant="outline" className="border-white/30 text-white bg-black/50 text-xs">
                        {project.status}
                      </Badge>
                    </div>
                    {project.featured && (
                      <div className="absolute bottom-4 right-4 animate-heartbeat">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300 text-sm line-clamp-3">
                      {project.description}
                    </CardDescription>
                    <div className="flex items-center text-xs text-gray-400 space-x-3">
                      <span>{project.year}</span>
                      <span>•</span>
                      <span>{project.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-purple-600/20 text-purple-300 text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="secondary" className="bg-gray-600/20 text-gray-300 text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent flex-1"
                          >
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Button>
                        </Link>
                      )}
                      {project.figma && (
                        <Link href={project.figma} target="_blank" rel="noopener noreferrer">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent flex-1"
                          >
                            <Figma className="w-3 h-3 mr-1" />
                            Design
                          </Button>
                        </Link>
                      )}
                      {project.demo && project.demo !== "#" && (
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex-1"
                          >
                            <Eye className="w-3 h-3 mr-1" />
                            Demo
                          </Button>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                <p>Try adjusting your search terms or category filter</p>
              </div>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Heart className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Like What You See?</h2>
              <p className="text-gray-300 mb-6">
                I'm always excited to work on new projects and collaborate with amazing people. Let's create something
                incredible together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Start a Project
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent transform hover:scale-105 transition-all duration-300"
                  >
                    <Code className="w-4 h-4 mr-2" />
                    Read My Blog
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
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
                href="https://www.figma.com/files/team/1484060294399276134/project/357955369"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
              >
                <Figma className="w-5 h-5" />
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
