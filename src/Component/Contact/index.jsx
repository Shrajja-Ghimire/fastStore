import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" mt-25 px-8  md:flex justify-center">
      <div className="w-full max-w-lg shadow-lg rounded-lg p-6 md:p-10">
        <p className="text-3xl text-center font-bold pb-6">Contact with us</p>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="w-full h-12 border border-gray-300 bg-white p-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 transition"
          />

          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="w-full h-12 border border-gray-300 bg-white p-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 transition"
          />

          <textarea
            placeholder="Your message"
            className="w-full h-32 border border-gray-300 bg-white p-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 transition"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-fuchsia-500 to-fuchsia-800 text-white p-3 rounded-lg w-full md:w-auto font-semibold hover:shadow-md transform hover:scale-105 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
