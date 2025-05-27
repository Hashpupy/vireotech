export function AboutPage() {
const values = [
    {
      icon: Shield,
      title: "Professional Integrity",
      description: "I conduct all client interactions with honesty, transparency, and respect, delivering work that exceeds expectations."
    },
    {
      icon: Clock,
      title: "Commitment to Deadlines",
      description: "I honor all timelines and keep you informed throughout the process, ensuring your project launches on time."
    },
    {
      icon: Lightbulb,
      title: "Fresh Perspective",
      description: "I bring modern web development practices and the latest technologies to create innovative solutions."
    },
    {
      icon: Users,
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

  const process = [
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
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <h2 className={styles.aboutTitle}>About Vireotech</h2>
            <p className={styles.aboutDescription}>
              Vireotech is a digital development service founded by a passionate recent graduate specializing in creating 
              high-quality websites, web applications, and e-commerce solutions. Fresh from completing my degree, 
              I'm eager to help businesses establish a strong digital presence with modern, innovative approaches.
            </p>
            <p className={styles.aboutDescription}>
              I work with small businesses, startups, e-commerce brands, and local services to transform 
              their ideas into powerful digital solutions. As a new graduate, I bring fresh energy, 
              up-to-date knowledge of the latest technologies, and competitive pricing while building my reputation.
            </p>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className={styles.whyChooseCard}>
              <h3 className={styles.whyChooseTitle}>Why Choose Vireotech?</h3>
              <ul className={styles.whyChooseList}>
                <li className={styles.whyChooseItem}>
                  <Award className="w-5 h-5 mr-3 text-yellow-300" />
                  Fresh graduate with modern skills
                </li>
                <li className={styles.whyChooseItem}>
                  <Target className="w-5 h-5 mr-3 text-yellow-300" />
                  Focused on your business goals
                </li>
                <li className={styles.whyChooseItem}>
                  <Shield className="w-5 h-5 mr-3 text-yellow-300" />
                  Transparent & honest communication
                </li>
                <li className={styles.whyChooseItem}>
                  <Clock className="w-5 h-5 mr-3 text-yellow-300" />
                  Quick turnaround times
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>My Core Values</h3>
            <p className={styles.sectionSubtitle}>The principles that guide everything I do</p>
          </div>
          
          <div className={styles.valuesGrid}>
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className={styles.valueCard}>
                  <div className={styles.valueIconContainer}>
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className={styles.valueTitle}>{value.title}</h4>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>My Development Process</h3>
            <p className={styles.sectionSubtitle}>How I turn your ideas into reality</p>
          </div>

          <div className={styles.processGrid}>
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className={styles.processCard}>
                  <div className={styles.processStep}>{step.step}</div>
                  <h4 className={styles.processTitle}>{step.title}</h4>
                  <p className={styles.processDescription}>{step.description}</p>
                </div>
                
                {index < process.length - 1 && (
                  <div className={styles.processConnector}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Target Clients */}
        <div className={styles.clientsContainer}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Who I Serve</h3>
            <p className={styles.sectionSubtitle}>Specialized solutions for diverse business needs</p>
          </div>

          <div className={styles.clientsGrid}>
            <div className={styles.clientCard}>
              <div className={styles.clientEmoji}>🏢</div>
              <h4 className={styles.clientTitle}>Small Businesses</h4>
              <p className={styles.clientDescription}>Professional websites that establish credibility and attract customers</p>
            </div>
            
            <div className={styles.clientCard}>
              <div className={styles.clientEmoji}>🚀</div>
              <h4 className={styles.clientTitle}>Startups</h4>
              <p className={styles.clientDescription}>Scalable web applications and MVP development for growing companies</p>
            </div>
            
            <div className={styles.clientCard}>
              <div className={styles.clientEmoji}>🛒</div>
              <h4 className={styles.clientTitle}>E-commerce Brands</h4>
              <p className={styles.clientDescription}>Complete online stores with payment processing and inventory management</p>
            </div>
            
            <div className={styles.clientCard}>
              <div className={styles.clientEmoji}>🏪</div>
              <h4 className={styles.clientTitle}>Local Services</h4>
              <p className={styles.clientDescription}>Custom solutions for restaurants, salons, and service-based businesses</p>
            </div>
          </div>
        </div>

        {/* New Graduate Advantage */}
        <div className={styles.graduateAdvantage}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>The Fresh Graduate Advantage</h3>
          </div>
          <div className={styles.advantageGrid}>
            <div className={styles.advantageCard}>
              <div className={styles.advantageEmoji}>🎓</div>
              <h4 className={styles.advantageTitle}>Latest Knowledge</h4>
              <p className={styles.advantageDescription}>Fresh from academia with up-to-date knowledge of modern web technologies and industry standards</p>
            </div>
            <div className={styles.advantageCard}>
              <div className={styles.advantageEmoji}>💡</div>
              <h4 className={styles.advantageTitle}>Innovation Focus</h4>
              <p className={styles.advantageDescription}>Bringing creative solutions and fresh perspectives to your projects</p>
            </div>
            <div className={styles.advantageCard}>
              <div className={styles.advantageEmoji}>💰</div>
              <h4 className={styles.advantageTitle}>Competitive Rates</h4>
              <p className={styles.advantageDescription}>Quality work at affordable prices as I build my professional reputation</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaContainer}>
          <h3 className={styles.ctaTitle}>Ready to Work Together?</h3>
          <p className={styles.ctaDescription}>Let's discuss how I can help bring your digital vision to life</p>
          <button className={styles.ctaButton}>
            Start Your Project
          </button>
        </div>
      </div>
  );
}
