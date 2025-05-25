export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Vireotech</h3>
            <p>Modern Websites for Modern People</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: info@vireotech.com</p>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                📸
              </a>
              <a href="#" aria-label="LinkedIn">
                🔗
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>
            &copy; {new Date().getFullYear()} Vireotech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
