import React from "react";
import { FiArrowRight } from "react-icons/fi";
const Button = (props) => {
  return (
    <div className="flex justify-center">
      <button className="text-cyan-950 flex items-center gap-2 px-5 py-2 shadow-lg rounded-3xl text-lg font-semibold hover:bg-fuchsia-500 hover:text-white transition">
        {props.name}
        <FiArrowRight />
      </button>
    </div>
  );
};

export default Button;
