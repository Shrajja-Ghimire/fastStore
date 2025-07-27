import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-300 ">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact */}
        <div>
          <h4 className="text-2xl font-bold mb-3 text-indigo-950">
            Contact Us
          </h4>
          <p className="text-sm cursor-pointer">📧 faststore@gmail.com</p>
          <p className="text-sm cursor-pointer">📞 123-456-7890</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-2xl font-bold mb-3 text-indigo-950">Follow Us</h4>
          <div className="flex gap-6 text-2xl">
            <a href="#" className="text-blue-700 transition">
              <FaFacebook />
            </a>
            <a href="#" className="text-pink-600 transition">
              <FaInstagramSquare />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-slate-200 border-t border-slate-400 text-center text-sm py-4">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">FAST STORES</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
