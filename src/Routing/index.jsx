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
import Footer from "../Component/Contact/Footer/index.jsx";
const CombineRoute = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hero" element={<Homepage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<DetailPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default CombineRoute;
