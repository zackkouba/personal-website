import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert("Message sent!");
  };

  return (
      <div className="page-wrapper page-animate">
        <Navbar />
        <PageTransition>
          <div className="contact-container">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <div className="social-links">
                <a href="mailto:zackkouba5@gmail.com"><FaEnvelope /> Gmail</a>
                <a href="https://linkedin.com/in/zack-kouba" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
                <a href="https://github.com/zackkouba" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="reason">Reason (Optional)</label>
                <input type="text" id="reason" placeholder="Why are you reaching out?" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" required placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </PageTransition>
      </div>
  );
}