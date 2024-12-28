import React from "react";

const CollateralInput = ({ selectedCollateral, title, amount, onAmountChange }) => {
  return (
    <div className="bg-blue-900 my-5 p-6 rounded-xl text-white flex flex-col">
      <div>
        <span className="block text-2xl text-white">{title}</span>
      </div>
      <div className="flex justify-between items-center mt-6">
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          placeholder="0"
          className=" flex items-center text-2xl w-[150px] md:w-[250px] font-bold bg-transparent outline-none text-gray-400"
        />
        <div className="flex items-center gap-2">
          <div className="bg-gray-300 w-8 h-8 rounded-full"></div>
          <span className="font-medium">{selectedCollateral}</span>
        </div>
      </div>
    </div>
  );
};

export default CollateralInput;
