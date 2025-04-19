import React from "react";
import SearchBar from "../reusable/Search";
import Button from "../reusable/Button";
import SliderPage from "../reusable/Carousel";
import { Link } from "react-router";
import Services from "../Services";
import Contact from "../Contact";
const Homepage = () => {
  return (
    <div className="mt-25 ">
      {/* <SearchBar /> */}
      <span className="md:flex justify-center">
        <div className="text-center">
          <h1 className="text-slate-900 mt-6 px-5 text-3xl sm:text-4xl md:text-5xl font-bold">
            "Bringing the Store to Your Door."
          </h1>
          <h2 className="mb-10 text-gray-600 text-lg sm:text-xl md:text-2xl p-4">
            CHECKOUT THE NEW ARRIVALS...
          </h2>
          <Link to="/services">
            <Button name="Checkout" />
          </Link>
        </div>
      </span>
      <SliderPage />
      <Services />
      <Contact />
    </div>
  );
};

export default Homepage;
