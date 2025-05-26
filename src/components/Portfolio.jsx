import { useState } from "react";
import { ExternalLink, Github, Eye, Calendar, Users, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard. Built with microservices architecture for scalability.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
    category: "Full Stack",
    year: "2024",
    status: "Live",
    github: "#",
    live: "#",
    featured: true,
    stats: { views: "2.1k", stars: 47, contributors: 3 }
  },
  {
    id: 2,
    title: "AI-Powered Dashboard",
    description: "Analytics dashboard with machine learning insights, real-time data visualization, and predictive modeling capabilities.",
    tags: ["React", "Python", "TensorFlow", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    category: "AI/ML",
    year: "2024",
    status: "In Progress",
    github: "#",
    live: "#",
    featured: true,
    stats: { views: "1.8k", stars: 32, contributors: 2 }
  },
  {
    id: 3,
    title: "Social Media Manager",
    description: "Comprehensive social media management platform with content scheduling, analytics, and multi-platform posting capabilities.",
    tags: ["Vue.js", "Laravel", "MySQL", "Redis"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
    category: "Web App",
    year: "2023",
    status: "Live",
    github: "#",
    live: "#",
    featured: false,
    stats: { views: "1.5k", stars: 23, contributors: 1 }
  },
  {
    id: 4,
    title: "Real Estate Platform",
    description: "Modern real estate marketplace with advanced search filters, virtual tours, and integrated mortgage calculator.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Mapbox"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center",
    category: "Full Stack",
    year: "2023",
    status: "Live",
    github: "#",
    live: "#",
    featured: true,
    stats: { views: "2.7k", stars: 56, contributors: 4 }
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    description: "Personal fitness tracker with workout planning, progress monitoring, and social features for fitness enthusiasts.",
    tags: ["Flutter", "Dart", "Firebase", "HealthKit"],
    image: "https://images.unsplash.com/photo-1434596922112-19c563067271?w=600&h=400&fit=crop&crop=center",
    category: "Mobile",
    year: "2024",
    status: "Beta",
    github: "#",
    live: "#",
    featured: false,
    stats: { views: "987", stars: 15, contributors: 2 }
  }
];

const categories = ["All", "Full Stack", "Mobile", "AI/ML", "Web App"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case "Live": return "bg-green-500";
      case "In Progress": return "bg-yellow-500";
      case "Beta": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A collection of innovative projects showcasing modern web development, 
            mobile applications, and cutting-edge technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25 scale-105"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white backdrop-blur-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                project.featured ? "ring-2 ring-purple-500/30" : ""
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards"
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  Featured
                </div>
              )}

              {/* Status Badge */}
              <div className={`absolute top-4 right-4 z-10 ${getStatusColor(project.status)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                {project.status}
              </div>

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Actions */}
                <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
                  hoveredProject === project.id ? "opacity-100 visible" : "opacity-0 invisible"
                }`}>
                  <a
                    href={project.github}
                    className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                    title="View Code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    className="bg-purple-500/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-purple-600 transition-colors duration-200"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {project.stats.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {project.stats.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {project.stats.contributors}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Interested in working together or want to see more projects?
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}
