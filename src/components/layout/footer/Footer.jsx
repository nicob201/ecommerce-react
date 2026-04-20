import { Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              src="https://res.cloudinary.com/dl73hi4ir/image/upload/v1728238526/logo_zu4yrw.webp"
              alt="Logo"
              className="footer-logo"
            />
            <p className="footer-description">
              Online store where you can find all the products you need.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Contact</h4>
            <p className="footer-contact-item">Email: contacto@tecnostore.com</p>
            <p className="footer-contact-item">Phone: +54 123 456 789</p>
            <p className="footer-contact-item">Address: Av. Siempreviva 123, Springfield</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Links</h4>
            <div className="footer-links">
              <Link href="#" className="footer-link">About Us</Link>
              <Link href="#" className="footer-link">FAQ</Link>
              <Link href="#" className="footer-link">Support</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2024 | Developed by Nicolas Boscasso</p>
          <div className="footer-social-links">
            <Link
              href="https://github.com/nicob201"
              target="_blank"
              className="footer-social-link"
            >
              <GitHubIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nicolas-boscasso/"
              target="_blank"
              className="footer-social-link"
            >
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}