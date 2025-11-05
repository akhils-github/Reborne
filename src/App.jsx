import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./home/Landingpage";
import AllProductsPage from "./pages/AllProductsPage";
import Layout from "./layouts/Layout";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landingpage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
