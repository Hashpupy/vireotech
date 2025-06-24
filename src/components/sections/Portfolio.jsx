import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Modern Cafe Experience",
    description: "Full-stack responsive website for a premium coffee shop with online ordering, menu management, and customer reviews. Features modern animations and mobile-first design.",
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1554118812-1e0d58224f24?w=500&h=300&fit=crop",
    github: "https://github.com/yourusername/cafe-website",
    live: "https://cafe-website.vercel.app",
  },
  {
    title: "Creative Portfolio Studio",
    description: "Stunning portfolio website for a freelance photographer with dynamic galleries, client testimonials, and booking system. Optimized for visual storytelling.",
    tags: ["React", "Framer Motion", "Sanity CMS", "Vercel"],
    image: "https://images.unsplash.com/photo-1606857521016-7f9fcf423740?w=500&h=300&fit=crop",
    github: "https://github.com/yourusername/photographer-portfolio",
    live: "https://photographer-portfolio.vercel.app",
  },
  {
    title: "SaaS Landing Page",
    description: "High-converting landing page for a B1B startup with interactive demos, pricing calculators, and lead generation forms. Built for performance and conversion.",
    tags: ["Next.js", "TypeScript", "GSAP", "Stripe"],
    image: "https://images.unsplash.com/photo-1460925895918-afdab827c52f?w=500&h=300&fit=crop",
    github: "https://github.com/yourusername/saas-landing",
    live: "https://saas-landing.vercel.app",
  },
  {
    title: "E-commerce Dashboard",
    description: "Comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and order processing capabilities.",
    tags: ["React", "Chart.js", "Firebase", "Material-UI"],
    image: "https://images.unsplash.com/photo-1551288050-bebda4e38f71?w=500&h=300&fit=crop",
    github: "https://github.com/yourusername/ecommerce-dashboard",
    live: "https://ecommerce-dashboard.vercel.app",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with team workflows, time tracking, and progress visualization. Built for remote teams and agencies.",
    tags: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
    image: "https://images.unsplash.com/photo-1611224923854-80b023f02d71?w=500&h=300&fit=crop",
    github: "https://github.com/yourusername/task-manager",
    live: "https://task-manager.vercel.app",
  },
  {
    title: "Fitness Tracking Platform",
    description: "Personal fitness companion with workout planning, progress tracking, and social features. Integrates with popular fitness APIs and wearables.",
    tags: ["React Native", "Redux", "Node.js", "MySQL"],
    image: "https://images.unsplash.com/photo-1571019613455-1cb2f99b2d8b?w=500&h=300&fit=crop",
    github: "https://github.com/yourusername/fitness-tracker",
    live: "https://fitness-tracker.vercel.app",
  },
];

export function Portfolio() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work in web development, featuring modern technologies 
            and best practices. Each project is hosted on Vercel with source code on GitHub.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
                  >
                    <Github className="w-4 h-4 text-gray-700" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full hover:bg-blue-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-gray-600 mb-6">
            Interested in working together? Let's build something amazing.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}