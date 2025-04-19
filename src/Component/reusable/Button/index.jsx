import React from "react";
import { FiArrowRight } from "react-icons/fi";
const Button = (props) => {
  return (
    <div className="flex justify-center">
      <button className="text-indigo-900 hover:bg-gradient-to-r from-slate-400 to-slate-600 hover:text-white flex items-center gap-2 px-4 py-1 shadow-lg rounded-3xl text-lg font-semibold transition">
        {props.name}
        <FiArrowRight />
      </button>
    </div>
  );
};

export default Button;
