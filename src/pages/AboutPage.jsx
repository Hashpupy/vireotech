import { Award, Clock, Users, Target, Shield, Lightbulb } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: <Shield className="value-icon" />,
      title: "Professional Integrity",
      description: "I conduct all client interactions with honesty, transparency, and respect, delivering work that exceeds expectations."
    },
    {
      icon: <Clock className="value-icon" />,
      title: "Commitment to Deadlines",
      description: "I honor all timelines and keep you informed throughout the process, ensuring your project launches on time."
    },
    {
      icon: <Lightbulb className="value-icon" />,
      title: "Fresh Perspective",
      description: "I bring modern web development practices and the latest technologies to create innovative solutions."
    },
    {
      icon: <Users className="value-icon" />,
      title: "Client-Focused Approach",
      description: "Your success is my priority. I work closely with you to understand and deliver exactly what you need."
    }
  ];

  const stats = [
    { number: "15+", label: "Projects Completed" },
    { number: "12hr", label: "Response Time" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "2024", label: "Graduate" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "I start by understanding your business goals, target audience, and project requirements through detailed consultation."
    },
    {
      step: "02",
      title: "Design & Development",
      description: "I create wireframes, designs, and develop your solution using modern technologies and industry best practices."
    },
    {
      step: "03",
      title: "Testing & Quality Assurance",
      description: "Thorough testing ensures your website or application works perfectly across all devices and browsers."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "I handle the launch process and provide ongoing support to ensure your digital presence continues to perform optimally."
    }
  ];

  return (
    <div className="about-page" id="about">
      <div className="container">
        {/* Hero Section */}
        <h1>About Vireotech</h1>
        <div className="about-content">
          <div className="about-text">
            <p >
              Vireotech is a digital development service specializing in creating modern, 
              responsive websites for individuals, small businesses, and startups. As a 
              recent graduate, I'm passionate about helping clients establish a strong online presence.
            </p>
            <p>
              My mission is to deliver high-quality web solutions that combine fresh perspectives 
              with proven techniques. I bring the latest knowledge from my studies along with 
              hands-on project experience to every client engagement.
            </p>
            <p >
              Using cutting-edge technologies like React, Next.js, and modern CSS frameworks, 
              I build websites that are fast, accessible, and visually appealing. My goal is 
              to provide exceptional value while building lasting relationships with clients.
            </p>
          </div>
          <div className="about-image">
            <div className="why-choose-card">
              <h3>Why Choose Vireotech?</h3>
              <ul>
                <li>
                  <Award className="icon" />
                  Fresh graduate with modern skills
                </li>
                <li>
                  <Target className="icon" />
                  Focused on your business goals
                </li>
                <li>
                  <Shield className="icon" />
                  Transparent & honest communication
                </li>
                <li>
                  <Clock className="icon" />
                  Quick turnaround times
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="section">
          <h2>My Core Values</h2>
          <p className="section-subtitle">The principles that guide everything I do</p>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon-container">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="section">
          <h2>My Development Process</h2>
          <p className="section-subtitle">How I turn your ideas into reality</p>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card">
                <div className="process-step">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Clients */}
        <div className="section clients-section">
          <h2>Who I Serve</h2>
          <p className="section-subtitle">Specialized solutions for diverse business needs</p>
          <div className="clients-grid">
            <div className="client-card">
              <div className="client-emoji">🏢</div>
              <h3>Small Businesses</h3>
              <p>Professional websites that establish credibility and attract customers</p>
            </div>
            <div className="client-card">
              <div className="client-emoji">🚀</div>
              <h3>Startups</h3>
              <p>Scalable web applications and MVP development for growing companies</p>
            </div>
            <div className="client-card">
              <div className="client-emoji">🛒</div>
              <h3>E-commerce Brands</h3>
              <p>Complete online stores with payment processing and inventory management</p>
            </div>
            <div className="client-card">
              <div className="client-emoji">🏪</div>
              <h3>Local Services</h3>
              <p>Custom solutions for restaurants, salons, and service-based businesses</p>
            </div>
          </div>
        </div>

        {/* Graduate Advantage */}
        <div className="section advantage-section">
          <h2>The Fresh Graduate Advantage</h2>
          <div className="advantage-grid">
            <div className="advantage-card">
              <div className="advantage-emoji">🎓</div>
              <h3>Latest Knowledge</h3>
              <p>Fresh from academia with up-to-date knowledge of modern web technologies</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-emoji">💡</div>
              <h3>Innovation Focus</h3>
              <p>Bringing creative solutions and fresh perspectives to your projects</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-emoji">💰</div>
              <h3>Competitive Rates</h3>
              <p>Quality work at affordable prices as I build my professional reputation</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-section">
          <h2>Ready to Work Together?</h2>
          <p>Let's discuss how I can help bring your digital vision to life</p>
          <button className="cta-button">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
}