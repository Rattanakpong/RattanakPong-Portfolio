"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Twitter,
  Linkedin,
  Globe,
  MessageSquare,
  Clock,
  CheckCircle,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [activeSection, setActiveSection] = useState("contact")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.location.href = "/"
      return
    }
    if (sectionId === "blog") {
      window.location.href = "/blog"
      return
    }
    setIsMenuOpen(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "prattanakpong@gmail.com",
      description: "Send me an email anytime",
      link: "mailto:prattanakpong@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+855 61 759 269",
      description: "Call me during business hours",
      link: "tel:+85561759269",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Phnom Penh, Cambodia",
      description: "Available for local meetings",
      link: "https://maps.app.goo.gl/UThJihEyTGVvqho77",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/Rattanakpong",
      description: "Check out my code",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pha-rattanakpong-7116702a5/",
      description: "Professional network",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://x.com/PhaRattanakpong",
      description: "Follow my updates",
    },
    {
      icon: Globe,
      name: "Website",
      url: "https://rattanakpong.github.io/Portfolio/",
      description: "Visit my portfolio",
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <div className="flex justify-center mb-6">
              {/* Added profile-photo-container class for glow effect */}
              <div className="relative w-32 h-32 profile-photo-container">
                <Image
                  src="/profile-photo.jpg"
                  alt="Profile photo"
                  fill
                  className="object-cover rounded-full border-4 border-purple-500/30 shadow-xl"
                />
              </div>
            </div>
            {/* Added leading-relaxed for better readability */}
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Let's work together to bring your ideas to life
            </p>
          </div>
        </div>
      </header>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                // Applied new gradient class and added rounded-xl
                className="card-with-gradient-bg rounded-xl border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 text-center group"
              >
                <CardHeader>
                  <info.icon className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-white text-xl">{info.title}</CardTitle>
                  <CardDescription className="text-gray-300">{info.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={info.link}
                    className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300"
                  >
                    {info.value}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card
              // Applied new gradient class and added rounded-xl
              className="card-with-gradient-bg rounded-xl border-purple-500/20"
            >
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center">
                  <MessageSquare className="w-6 h-6 mr-3 text-purple-400" />
                  Send Message
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-white text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-gray-300 mb-6">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-300 mb-2 block">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          // Added rounded-lg
                          className="rounded-lg bg-slate-800/50 border-purple-500/20 text-white placeholder:text-gray-400 focus:border-purple-400 transition-colors duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-300 mb-2 block">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          // Added rounded-lg
                          className="rounded-lg bg-slate-800/50 border-purple-500/20 text-white placeholder:text-gray-400 focus:border-purple-400 transition-colors duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-gray-300 mb-2 block">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        // Added rounded-lg
                        className="rounded-lg bg-slate-800/50 border-purple-500/20 text-white placeholder:text-gray-400 focus:border-purple-400 transition-colors duration-300"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-gray-300 mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        // Added rounded-lg
                        className="rounded-lg bg-slate-800/50 border-purple-500/20 text-white placeholder:text-gray-400 focus:border-purple-400 transition-colors duration-300 resize-none"
                        placeholder="Tell me about your project, ideas, or just say hello..."
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Availability */}
              <Card
                // Applied new gradient class and added rounded-xl
                className="card-with-gradient-bg rounded-xl border-purple-500/20"
              >
                <CardHeader>
                  <CardTitle className="text-white text-xl flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-purple-400" />
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Response Time:</span>
                    <span className="text-purple-400 font-semibold">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Time Zone:</span>
                    <span className="text-purple-400 font-semibold">(GMT+7)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Best Time to Call:</span>
                    <span className="text-purple-400 font-semibold">9 AM - 6 PM</span>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card
                // Applied new gradient class and added rounded-xl
                className="card-with-gradient-bg rounded-xl border-purple-500/20"
              >
                <CardHeader>
                  <CardTitle className="text-white text-xl">Connect With Me</CardTitle>
                  <CardDescription className="text-gray-300">Find me on these platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <Link
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        // Applied new gradient class and added rounded-lg
                        className="flex items-center p-3 rounded-lg card-with-gradient-bg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105 group"
                      >
                        <social.icon className="w-5 h-5 text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <div className="text-white font-medium text-sm">{social.name}</div>
                          <div className="text-gray-400 text-xs">{social.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black/40 border-t border-purple-500/20 mt-20">
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
            <p>© 2024 RattanakPong. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
