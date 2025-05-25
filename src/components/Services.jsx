export function Services() {
  const services = [
    {
      title: "Custom Websites",
      description:
        "Built with React, HTML, and JavaScript for optimal performance.",
      icon: "💻",
    },
    {
      title: "Responsive Design",
      description: "Flawless display on mobile, tablet, and desktop devices.",
      icon: "📱",
    },
    {
      title: "SEO & Hosting",
      description: "Basic SEO setup and hosting support included.",
      icon: "🔍",
    },
  ];

  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
