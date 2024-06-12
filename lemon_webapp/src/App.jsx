import "./App.css";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import "preline/preline";
import Dashboard from "./pages/Dashboard/Dashboard";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import Users from "./pages/Users/Users";
import Products from "./pages/Products/Products";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/product/:slug" element={<DetailProduct />} />
      <Route path="/users" element={<Users />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;
