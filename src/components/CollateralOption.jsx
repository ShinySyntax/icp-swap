import React from "react";

const CollateralOption = ({ name, value, max, isSelected, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(name)}
      className={`p-2 md:p-6 bg-blue-900 rounded-xl w-[30%] cursor-pointer shadow-md ${
        isSelected ? " border-2 border-blue-500" : "bg-blue-900"
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-gray-300 w-8 h-8 rounded-full"></div>
        <span className="text-white font-medium">{name}</span>
      </div>
      <span className="text-gray-400 text-sm">{value}</span>
      <br />
      <span className="text-gray-400 text-xs">Max LTV: {max}</span>
    </div>
  );
};

export default CollateralOption;
