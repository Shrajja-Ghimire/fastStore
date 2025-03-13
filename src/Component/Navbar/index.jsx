import React, { useState } from "react";
import logo from "../../assets/GoodShop.jpg";
import { GiShoppingCart } from "react-icons/gi";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-fuchsia-100 px-7 fixed top-0 left-0 w-full shadow-lg z-50 lg:flex justify-around items-center">
      <div className="flex justify-between p-4">
        <NavLink to="/" className="flex gap-3 items-center ">
          <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
          <p className="text-bold text-2xl cursor-pointer font-bold">
            FAST STORES
          </p>
        </NavLink>

        <span className="p-2 lg:hidden" onClick={() => setOpen(!open)}>
          <MdMenu className="text-2xl cursor-pointer" />
        </span>
      </div>

      {/* Desktop list */}
      <ul className="hidden lg:flex gap-20 items-center">
        <NavLink
          to="/hero"
          className={({ isActive }) =>
            isActive ? "text-fuchsia-500 font-bold" : "hover:text-fuchsia-900"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-fuchsia-500 font-bold" : "hover:text-fuchsia-900"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-fuchsia-600 font-bold" : "hover:text-fuchsia-900"
          }
        >
          Contact
        </NavLink>
      </ul>
      <div className="hidden">
        <CiSearch />
      </div>
      <div className="hidden lg:flex  justify-center gap-5 items-center  ">
        <NavLink to="/cart" className="flex">
          <GiShoppingCart size={30} />
          <div className="bg-red-600 w-5 h-5 rounded-full">
            <p className="text-center text-white ">0</p>
          </div>
        </NavLink>
        <NavLink
          to="/login"
          className="p-1 font-bold border-1 border-slate-200 rounded-2xl"
        >
          Login
        </NavLink>
      </div>

      {/* mobile screen */}
      {open && (
        <>
          <ul className="block text-center lg:hidden ">
            <NavLink
              to="/hero"
              className="block p-3 border-b border-gray-200 shadow-lg rounded-2xl"
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className="block p-3 border-b border-gray-200 shadow-lg rounded-2xl"
              onClick={() => setOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className="block p-3 border-b border-gray-200 shadow-lg rounded-2xl"
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>
          </ul>
          <span className="mt-3 flex justify-center gap-5 items-center p-1 lg:hidden">
            <NavLink to="/cart" className="flex">
              <GiShoppingCart size={30} />
              <div className="bg-red-600 w-5 h-5 rounded-full">
                <p className="text-center text-white ">0</p>
              </div>
            </NavLink>
            <NavLink
              to="/login"
              className="p-2 font-bold border-1 border-slate-200 shadow-lg rounded-2xl "
            >
              Login
            </NavLink>
            <NavLink to="/services">
              <div className="flex lg:hidden">
                <CiSearch />
              </div>
            </NavLink>
            <NavLink
              className="flex bg-gray-600 text-white lg:hidden"
              onClick={() => setOpen(false)}
            >
              <RxCross2 />
            </NavLink>
          </span>
        </>
      )}
    </nav>
  );
};

export default Navbar;
