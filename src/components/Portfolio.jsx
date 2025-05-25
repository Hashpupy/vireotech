import { motion } from "framer-motion";

const projects = [
  {
    title: "Cafe Website",
    description: "Responsive website for a local coffee shop",
    tags: ["React", "Tailwind CSS"],
    image: "/placeholder-cafe.jpg",
  },
  {
    title: "Portfolio Site",
    description: "Personal portfolio for a freelance photographer",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/placeholder-portfolio.jpg",
  },
  {
    title: "Business Landing Page",
    description: "Marketing page for a startup",
    tags: ["React", "GSAP"],
    image: "/placeholder-business.jpg",
  },
];

export function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="portfolio-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
