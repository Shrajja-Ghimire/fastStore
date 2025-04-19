import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../../redux/actions/auth";
import { NavLink, useNavigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isAuthenticated } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("mor_2314"); // default from API
  const [password, setPassword] = useState("83r5^_"); // default from API

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest({ username, password }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/"); // Redirect after login
    }
  }, [isAuthenticated, navigate]);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-20 bg-gradient-to-r from-white to-slate-100 shadow-md rounded-lg p-8 space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center text-slate-700">
        Login
      </h2>

      <div>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none"
        />
      </div>

      <div>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none "
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
      >
        Login
      </button>

      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="flex gap-5 text-sm">
        <p className="text-gray-600 text-sm">Do you have an Account?</p>
        <NavLink to="/register">
          <p className="text-indigo-700 hover:underline">Register</p>
        </NavLink>
      </div>
    </form>
  );
};

export default Login;
