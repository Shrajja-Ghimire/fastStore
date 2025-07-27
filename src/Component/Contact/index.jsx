import React from "react";
import Footer from "./Footer";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="mt-18 px-4 md:px-8 flex justify-center bg-slate-100 py-16">
        <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl p-5 md:p-10 border border-slate-200">
          <p className="text-4xl text-center font-extrabold text-slate-700 pb-6">
            Contact Us
          </p>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="w-full h-12 border border-slate-300 bg-slate-50 p-4 rounded-lg focus:outline-none transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="w-full h-12 border border-slate-300 bg-slate-50 p-4 rounded-lg focus:outline-none transition"
            />

            <textarea
              placeholder="Write your message..."
              name="message"
              className="w-full h-32 border border-slate-300 bg-slate-50 p-4 rounded-lg focus:outline-nonetransition resize-none"
            />

            <button
              type="submit"
              className="bg-gradient-to-tl from-blue-800 to-indigo-900 text-white p-3 rounded-lg w-full md:w-auto font-semibold shadow-md hover:shadow-lg transform hover:scale-95 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
