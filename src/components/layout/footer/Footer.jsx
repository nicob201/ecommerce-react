import { Box, Container, Typography, Link, Grid2 } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "var(--color3)",
        color: "#fff",
        mt: "auto",
        pt: 6,
      }}
    >
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Grid2
          sx={{ display: "flex", alignItems: "center" }}
          container
          spacing={4}
        >
          <Grid2 xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <a href="/">
                <img
                  src="https://res.cloudinary.com/dl73hi4ir/image/upload/v1728238526/logo_zu4yrw.webp"
                  alt="Logo"
                  style={{ height: "50px", marginRight: "8px" }}
                  href="#"
                />
              </a>
              <Typography variant="h6">Tecno-Store</Typography>
            </Box>
            <Typography variant="body2">
              Online store where you can find all the products you need.
            </Typography>
          </Grid2>
          {/* Informacion de contacto de la tienda */}
          <Grid2 xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              Email: contacto@tecnostore.com
            </Typography>
            <Typography variant="body2">Phone: +54 123 456 789</Typography>
            <Typography variant="body2">
              Adress: Av. Siempreviva 123, Springfield
            </Typography>
          </Grid2>
          <Grid2 xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>
            <Typography variant="body2">
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

      {/* Seccion del desarrollador en el footer */}
      <Box sx={{ backgroundColor: "#222", py: 3, px: 2 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Typography variant="body1">
              © 2024 | Developed by Nicolas Boscasso
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: { xs: 2, md: 0 },
              }}
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
