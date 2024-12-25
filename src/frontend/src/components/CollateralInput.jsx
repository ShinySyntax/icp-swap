import React from "react";

const CollateralInput = ({ selectedCollateral, amount, onAmountChange }) => {
  return (
    <div className="bg-blue-900 my-14 p-6 rounded-xl text-white flex flex-col">
      <div>
        <span className="block text-2xl text-white">Deposit Collateral</span>
      </div>
      <div className="flex justify-between">
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          placeholder="0"
          className="mt-6 text-3xl w-4 font-bold bg-transparent outline-none text-gray-400"
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
