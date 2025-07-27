import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "../App.jsx";
import Homepage from "../Component/Home";
import Services from "../Component/Services";
import Contact from "../Component/Contact";
import Navbar from "../Component/Navbar/index.jsx";
import CartPage from "../Component/reusable/Cart/index.jsx";
import LoginPage from "../Component/reusable/Login/index.jsx";
import DetailPage from "../Component/Services/Details/index.jsx";
import Register from "../Component/reusable/Register/index.jsx";
import ProtectedRoute from "../ProtectedRoute/index.jsx";
import Footer from "../Component/Contact/Footer/index.jsx";

const CombineRoute = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<DetailPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default CombineRoute;
