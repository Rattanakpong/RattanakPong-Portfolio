"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link" // Make sure Link is imported
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
// Removed Dialog components as we are now linking to a separate page
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Search, Calendar, User, Github, Twitter, Linkedin, Menu, X } from "lucide-react"

export default function BlogPage() {
  const [activeSection, setActiveSection] = useState("blog")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const allBlogPosts = [
    {
      title: "My Web Dev Journey: From Scratch to Full-Stack",
      excerpt:
        "My first real breakthrough came when I connected a Laravel backend to a React frontend. It wasn’t perfect, but it worked—and that was a big deal.",
      date: "2024-12-15",
      image:
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210222183454/How-to-Become-a-Full-Stack-Web-Developer-in-2021.png",
      slug: "my-web-dev-journey-from-scratch-to-full-stack", // Changed slug to be more descriptive for URL
      category: "Web Development",
      author: "RattanakPong",
      tags: ["Next.js", "React", "Web Development", "JavaScript", "TypeScript"],
      featured: false,
      content: `
        <h2>My Journey Begins</h2>
        <p>This is the full, detailed content about my web development journey...</p>
        <p>I started with basic HTML and CSS, then moved on to JavaScript.</p>
        <h3>Connecting Laravel and React</h3>
        <p>The real challenge was integrating a powerful backend with a dynamic frontend. Laravel provided the robust API capabilities, while React allowed for a highly interactive user interface. It was a steep learning curve but incredibly rewarding.</p>
        <p>This section would contain all the rich text and images for the full blog post.</p>
      `,
    },
    {
      title: "Building My Job Fair Web App with Laravel and React",
      excerpt:
        "I used Laravel to manage the backend and user roles. React made the UI fast and dynamic. I built APIs for user registration, job listing, and meeting scheduling.",
      date: "2024-12-10",
      image: "https://studio.uxpincdn.com/studio/wp-content/uploads/2024/03/Laravel-with-React-1024x512.png.webp",
      slug: "building-job-fair-web-app-with-laravel-react", // Changed slug to be more descriptive for URL
      category: "Web Development",
      author: "RattanakPong",
      tags: ["Laravel", "PHP", "Figma", "SQL"],
      featured: false,
      content: `
        <h2>Project Overview</h2>
        <p>This article details the process of building a job fair web application using Laravel for the backend and React for the frontend.</p>
        <p>The application included features such as user authentication, job posting management, and a scheduling system for interviews.</p>
        <h3>Key Technologies Used</h3>
        <ul>
          <li><strong>Backend:</strong> Laravel (PHP) for robust API development and database management.</li>
          <li><strong>Frontend:</strong> React.js for a dynamic and responsive user interface.</li>
          <li><strong>Database:</strong> SQL database for storing user, job, and schedule information.</li>
          <li><strong>Design:</strong> Figma for initial UI/UX wireframing and prototyping.</li>
        </ul>
        <p>Building this application provided valuable experience in full-stack development and API integration.</p>
      `,
    },
    {
      title: "Why I Got Interested in Cybersecurity",
      excerpt:
        "I explored TryHackMe and learned about topics like SQL injection, XSS, and network sniffing with Wireshark.",
      date: "2024-12-05",
      image: "https://polarbackup.com/wp-content/uploads/2024/07/Cyber-Security.jpg",
      slug: "why-i-got-interested-in-cybersecurity", // Changed slug to be more descriptive for URL
      category: "Network",
      author: "RattanakPong",
      tags: ["Machine Learning", "Web Development", "Cybersecurity"],
      featured: false,
      content: `
        <h2>My Cybersecurity Exploration</h2>
        <p>My interest in cybersecurity began with a curiosity about how systems could be exploited and, more importantly, how to defend against such attacks.</p>
        <p>Platforms like TryHackMe were instrumental in providing hands-on experience with various cybersecurity concepts.</p>
        <h3>Topics Explored</h3>
        <ul>
          <li><strong>SQL Injection:</strong> Understanding how malicious SQL queries can be injected into input fields to manipulate database queries.</li>
          <li><strong>Cross-Site Scripting (XSS):</strong> Learning about vulnerabilities that allow attackers to inject client-side scripts into web pages viewed by other users.</li>
          <li><strong>Network Sniffing with Wireshark:</strong> Using tools like Wireshark to capture and analyze network traffic, revealing insights into data transmission and potential vulnerabilities.</li>
          <li><strong>Basic Penetration Testing:</strong> Introduction to methodologies and tools used to test systems for weaknesses.</li>
        </ul>
        <p>This journey has highlighted the importance of robust security practices in all aspects of software development and system administration.</p>
      `,
    },
  ]

  const categories = ["All", "Web Development", "Design", "Network"]

  // Filter blog posts based on search and category
  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.location.href = "/"
      return
    }
    if (sectionId === "contact") {
      window.location.href = "/contact"
      return
    }
    if (sectionId === "projects") {
      window.location.href = "/projects"
      return
    }
    setIsMenuOpen(false)
  }

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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 animate-slide-in-bottom animation-delay-300">
              Thoughts, tutorials, and insights from my development journey
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative animate-zoom-in animation-delay-500">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 animate-wiggle" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                // Added rounded-lg for consistent styling
                className="rounded-lg pl-10 bg-slate-800/50 border-purple-500/20 text-white placeholder:text-gray-400 focus:border-purple-400 hover-glow"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    : "border-purple-400/30 text-purple-300 hover:bg-purple-400 hover:text-white bg-transparent"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Search Results Info */}
      {searchTerm && (
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center mb-6">
            <p className="text-gray-300">
              Found {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} for "{searchTerm}"
            </p>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                // Use Link to navigate to the slug page
                <Link key={index} href={`/blog/${post.slug}`}>
                  <Card
                    className="card-with-gradient-bg rounded-xl border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:-translate-y-2 h-full hover-glow animate-flip-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={350}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-4 left-4 bg-purple-600/80 text-white animate-slide-in-left">
                        {post.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-center text-sm text-gray-400 mb-2 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <CardTitle className="text-white group-hover:text-purple-400 transition-colors text-xl line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300 line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-400">
                          <User className="w-4 h-4 mr-2" />
                          {post.author}
                        </div>
                        {/* The "Read More" text is now part of the Link wrapper */}
                        <div className="text-purple-400 group-hover:text-purple-300 text-sm font-medium cursor-pointer">
                          Read More →
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
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
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/pha-rattanakpong-7116702a5/"
                target="_blank"
                rel="noopener noreferrer"
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
