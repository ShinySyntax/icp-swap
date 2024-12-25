import React from "react";

const SingleStatCard = ({ title, value }) => {
  return (
    <div className="bg-blue-900 w-[30%] p-2 md:p-6 rounded-xl flex flex-col shadow-md">
      <span className="text-sm text-gray-400 font-medium">{title}</span>
      <span className="text-lg text-white font-bold mt-2">{value}</span>
    </div>
  );
};

export default SingleStatCard;
