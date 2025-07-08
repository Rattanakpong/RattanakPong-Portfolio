import { ArrowLeft, Calendar, Clock, User, Heart, Share2, MessageCircle } from "lucide-react" // Added imports
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button" // Assuming you have Button component

// Define the type for a blog post (matches your allBlogPosts structure)
interface BlogPost {
  title: string
  excerpt: string
  date: string
  image: string
  slug: string
  category: string
  author: string
  tags: string[]
  featured: boolean
  content: string // Crucial for displaying full article
}

// Your allBlogPosts data (it would be better to fetch this from a real source in a larger app)
const allBlogPosts: BlogPost[] = [
  {
    title: "My Web Dev Journey: From Scratch to Full-Stack",
    excerpt:
      "My first real breakthrough came when I connected a Laravel backend to a React frontend. It wasn’t perfect, but it worked—and that was a big deal.",
    date: "2024-12-15",
    image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210222183454/How-to-Become-a-Full-Stack-Web-Developer-in-2021.png",
    slug: "my-web-dev-journey-from-scratch-to-full-stack",
    category: "Web Development",
    author: "RattanakPong",
    tags: ["Next.js", "React", "Web Development", "JavaScript"],
    featured: false,
    content: `
      <h2>My Journey Begins</h2>
      <p>This is the full, detailed content about my web development journey...</p>
      <p>I started with basic HTML and CSS, then moved on to JavaScript.</p>
      <h3>Connecting Laravel and React</h3>
      <p>That simple question led me to HTML and CSS. I built my first basic page—a header, some text, a few images. It didn’t look great, but I made it, and that felt good. From there, I picked up JavaScript and started learning how websites become interactive.After that, I wanted to go deeper. I discovered Laravel and React. Laravel taught me how backends work: routing, databases, authentication. React helped me understand frontend logic and building reusable components.The first time I connected a Laravel backend with a React frontend, I hit a wall. There were bugs, broken routes, mismatched data types. But I stuck with it. I learned how to use Axios, how to protect routes, how to send data securely. Once it all worked, I knew I had something real. Now I’m comfortable building full-stack apps—from login pages to admin panels to live chat. Every project teaches me something new. I'm still learning, but I’ve come a long way from that first static page. This journey taught me something more important than coding: you don’t need to be perfect to start. You just need to keep going.</p>    `,
  },
  {
    title: "Building My Job Fair Web App with Laravel and React",
    excerpt:
      "I used Laravel to manage the backend and user roles. React made the UI fast and dynamic. I built APIs for user registration, job listing, and meeting scheduling.",
    date: "2024-12-10",
    image: "https://studio.uxpincdn.com/studio/wp-content/uploads/2024/03/Laravel-with-React-1024x512.png.webp",
    slug: "building-job-fair-web-app-with-laravel-react",
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
      <p>For the backend, I used Laravel to handle routing, roles, database models, and authentication. I created RESTful APIs that my React frontend could consume. For the UI, React made it easy to update data and navigate smoothly across pages.

One challenge I faced was managing Google Meet integration. I had to figure out how to store and update meeting links dynamically. I used Laravel’s scheduler to clean up expired links and keep the system running smoothly.

I also focused on UX—clear forms, error handling, and mobile responsiveness. I tested the app with friends, collected feedback, and made changes.

This project helped me learn how to connect the frontend and backend properly, build secure systems, and think like a user. It’s one of the best things I’ve made so far.</p>
    `,
  },
  {
    title: "Why I Got Interested in Cybersecurity",
    excerpt:
      "I explored TryHackMe and learned about topics like SQL injection, XSS, and network sniffing with Wireshark.",
    date: "2024-12-05",
    image: "https://polarbackup.com/wp-content/uploads/2024/07/Cyber-Security.jpg",
    slug: "why-i-got-interested-in-cybersecurity",
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
      <p>Cybersecurity has changed the way I write code. It’s not just about building something that works. It’s about building something safe. At first, I joined platforms like TryHackMe and Hack The Box. I started solving beginner challenges: decoding text, bypassing login forms, finding hidden flags. Each challenge taught me how attackers think. It felt like solving puzzles—but the kind that matter.</p>
    `,
  },
]

// Function to generate static params for Next.js Static Site Generation (SSG)
export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Page component for a single blog post
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Find the blog post matching the slug
  const post = allBlogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-lg mb-6">The blog post you're looking for does not exist.</p>
          <Link href="/blog">
            <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent">
              Go Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog">
          <Button
            variant="ghost"
            className="text-purple-400"
          >
            <ArrowLeft className="w-4 h-4 mr-2"/>
            Back to Blog
          </Button>
        </Link>

        <Badge className="bg-purple-600/80 text-white w-fit mb-4">{post.category}</Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          {post.title}
        </h1>
        <p className="text-gray-300 text-lg mb-6">{post.excerpt}</p>

        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-8">
          <div className="flex items-center">
            <Image
              src="/profile-photo.jpg" // Make sure this path is correct or dynamically provided
              alt={post.author}
              width={40}
              height={40}
              className="rounded-full mr-3 border-2 border-purple-400/30"
            />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {post.date}
          </div>
          {/* If you add readTime back to your data, uncomment this */}
          {/* <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            {post.readTime}
          </div> */}
        </div>

        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={900}
          height={450}
          className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg mb-8 shadow-lg"
        />

        <div
          className="prose prose-invert prose-purple max-w-none text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{ lineHeight: "1.7" }}
        />

        <div className="mt-12 pt-8 border-t border-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-4">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, tagIndex) => (
              <Badge
                key={tagIndex}
                variant="outline"
                className="border-purple-400/30 text-purple-300 hover:bg-purple-400/20"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
