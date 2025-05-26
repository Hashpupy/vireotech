import { ContactForm } from "../components";

export function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have a project in mind or want to discuss your website needs?</p>
            <p>Fill out the form or reach out directly:</p>
            <ul>
              <li>Email: info@vireotech.com</li>
              <li>Phone: (266) 5950 7232</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
