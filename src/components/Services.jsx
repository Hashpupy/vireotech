import { Check, Code, Smartphone, ShoppingCart, Palette, Wrench, TrendingUp } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Code className="service-icon" />,
      title: "Website Development",
      description: "Custom HTML/CSS/JavaScript websites and WordPress solutions tailored to your business needs.",
    },
    {
      icon: <ShoppingCart className="service-icon" />,
      title: "E-commerce Development",
      description: "Complete online stores with Shopify, WooCommerce, and custom solutions.",
    },
    {
      icon: <Smartphone className="service-icon" />,
      title: "Web App Development",
      description: "Modern web applications using React, Angular, Node.js and cutting-edge technologies.",
    },
    {
      icon: <Palette className="service-icon" />,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly designs that convert visitors into customers.",
    },
    {
      icon: <Wrench className="service-icon" />,
      title: "Maintenance & Support",
      description: "Ongoing website maintenance, updates, and technical support for peace of mind.",
    },
    {
      icon: <TrendingUp className="service-icon" />,
      title: "SEO & Performance",
      description: "Optimize your website for search engines and lightning-fast performance.",
    }
  ];

  const packages = [
    {
      name: "Starter Website",
      price: "R5,500",
      description: "Perfect for small businesses getting online",
      popular: false
    },
    {
      name: "Business Website",
      price: "R12,000",
      description: "Comprehensive solution for growing businesses",
      popular: true
    },
    {
      name: "E-commerce Website",
      price: "R22,500",
      description: "Complete online store solution",
      popular: false
    },
    {
      name: "Custom Web App",
      price: "From R30,000",
      description: "Bespoke applications for unique requirements",
      popular: false
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        {/* Services Header */}
        <h2>Web Development Services</h2>
        <p className="services-subtitle">
          From simple websites to complex web applications, we deliver high-quality digital solutions 
          tailored to your business needs.
        </p>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-container">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="pricing-section">
          <h2>Transparent Pricing Packages</h2>
          <p className="pricing-subtitle">Choose the perfect package for your business needs</p>
          
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div key={index} className={`package-card ${pkg.popular ? 'popular' : ''}`}>
                {pkg.popular && <div className="popular-badge">Most Popular</div>}
                <h3>{pkg.name}</h3>
                <p className="package-price">{pkg.price}</p>
                <p className="package-description">{pkg.description}</p>
                <a href = "/contact" className={`package-button ${pkg.popular ? 'primary' : 'secondary'}`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}