import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import { Footer } from "./components/layout/footer/Footer";
import { CartContextProvider } from "./context/CartContext";
import { ProductContextProvider } from "./context/ProductContext";
import { Toaster } from "sonner";
import { appRoutes } from "./routes/routes";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toaster richColors />
      <ProductContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              {appRoutes.map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />
              ))}
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartContextProvider>
      </ProductContextProvider>
    </ThemeProvider>
  );
}

export default App;
