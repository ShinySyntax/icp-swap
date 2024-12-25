import React from "react";

const SwapButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gradient-to-r from-blue-500 to-blue-300 text-white font-medium py-4 rounded-xl mt-14 mb-20 text-1xl shadow-lg hover:opacity-90 transition"
    >
      {label}
    </button>
  );
};

export default SwapButton;
