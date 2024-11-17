import { Box, Container, Typography, Link, Grid2 } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./footer.css";

export function Footer() {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg" className="footer-container">
        <Grid2 container spacing={4} className="footer-grid">
          <Grid2 xs={12} md={4}>
            <Box className="footer-logo-container">
              <a href="/">
                <img
                  src="https://res.cloudinary.com/dl73hi4ir/image/upload/v1728238526/logo_zu4yrw.webp"
                  alt="Logo"
                  className="footer-logo"
                />
              </a>
              <Typography variant="h6">Tecno-Store</Typography>
            </Box>
            <Typography variant="body2" className="footer-description">
              Online store where you can find all the products you need.
            </Typography>
          </Grid2>

          <Grid2 xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" className="footer-contact">
              Email: contacto@tecnostore.com
            </Typography>
            <Typography variant="body2" className="footer-contact">
              Phone: +54 123 456 789
            </Typography>
            <Typography variant="body2" className="footer-contact">
              Address: Av. Siempreviva 123, Springfield
            </Typography>
          </Grid2>

          <Grid2 xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>
            <Typography variant="body2" className="footer-links">
              <Link href="#" color="inherit" underline="hover">
                About Us
              </Link>
              <br />
              <Link href="#" color="inherit" underline="hover">
                FAQ
              </Link>
              <br />
              <Link href="#" color="inherit" underline="hover">
                Support
              </Link>
            </Typography>
          </Grid2>
        </Grid2>
      </Container>

      <Box className="footer-developer">
        <Container maxWidth="lg">
          <Box
            className={`footer-developer-container ${
              window.innerWidth >= 960 ? "footer-developer-container-md" : ""
            }`}
          >
            <Typography variant="body1">
              © 2024 | Developed by Nicolas Boscasso
            </Typography>
            <Box
              className={`footer-icons ${
                window.innerWidth >= 960 ? "footer-icons-md" : ""
              }`}
            >
              <Link
                href="https://github.com/nicob201"
                target="_blank"
                color="inherit"
                underline="hover"
              >
                <GitHubIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/nicolas-boscasso/"
                target="_blank"
                color="inherit"
                underline="hover"
              >
                <LinkedInIcon />
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
