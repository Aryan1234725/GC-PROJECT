import { useContext } from "react";
import { CartProvider } from "./context/CartContext.jsx";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "20px"
  };

  return (
    <div style={styles}>
      <ThemeToggle />
      <ProductList />
      <Cart />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ThemeProvider>
  );
}
