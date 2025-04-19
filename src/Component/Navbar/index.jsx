import React, { useState, useEffect } from "react";
import logo from "../../assets/GoodShop.jpg";
import { GiShoppingCart } from "react-icons/gi";
import { MdMenu } from "react-icons/md";
import { NavLink, useNavigate } from "react-router";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/auth";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cartLength = useSelector((state) => state.cart.cartItems?.length);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  if (!isAuthenticated) return null;

  return (
    <nav className="bg-slate-300 px-7 fixed top-0 left-0 w-full shadow-lg z-50 lg:flex justify-around items-center">
      <div className="flex justify-between p-4">
        <NavLink to="/" className="flex gap-3 items-center ">
          <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
          <p className="text-bold text-indigo-900 text-2xl cursor-pointer font-bold">
            FAST STORES
          </p>
        </NavLink>

        <span className="p-2 lg:hidden" onClick={() => setOpen(!open)}>
          <MdMenu className="text-2xl cursor-pointer" />
        </span>
      </div>

      {/* Desktop list */}
      <ul className="hidden lg:flex gap-20 items-center text-indigo-950">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-indigo-900 font-bold" : "hover:text-indigo-700"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-indigo-900  font-bold" : "hover:text-indigo-700"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-indigo-900  font-bold" : "hover:text-indigo-700"
          }
        >
          Contact
        </NavLink>
      </ul>
      <div className="hidden">
        <CiSearch />
      </div>
      <div className="hidden lg:flex  justify-center gap-5 items-center  ">
        <NavLink to="/services">
          <div className="hidden md:flex">
            <CiSearch />
          </div>
        </NavLink>
        <NavLink to="/cart" className="flex">
          <GiShoppingCart size={30} />
          <div className="bg-red-600 w-5 h-5 rounded-full">
            <p className="text-center text-white ">{cartLength}</p>
          </div>
        </NavLink>

        <div className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm">
          <img
            src={user.image}
            alt="User Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <button
            onClick={handleLogout}
            className="bg-slate-500 hover:bg-slate-700 text-white px-3 py-1.5 text-xs rounded-md transition duration-150"
          >
            Logout
          </button>
        </div>
      </div>

      {/* mobile screen */}
      {open && (
        <>
          <ul className="block text-center lg:hidden ">
            <NavLink
              to="/"
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
                <p className="text-center text-white ">{cartLength}</p>
              </div>
            </NavLink>
            {user ? (
              <button
                onClick={handleLogout}
                className="text-indigo-900 p-2 font-bold rounded-lg shadow-lg"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="p-2 font-bold shadow-lg rounded-lg text-indigo-900 "
              >
                Login
              </NavLink>
            )}
            <NavLink to="/services">
              <div className="flex lg:hidden">
                <CiSearch />
              </div>
            </NavLink>
            <NavLink
              className="flex lg:hidden hover:bg-red-800 hover:text-white"
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
