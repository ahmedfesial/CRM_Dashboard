import React from "react";

export default function Promote() {
  return (
    <>
      <div className="text-center my-10 ms-26 py-10 mb-10  md:mx-auto px-4 sm:px-8 bg-white rounded-2xl shadow-md sm:mt-20 w-[70%] sm:w-[80%] md:w-[70%] max-w-3xl hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-[#5932EA]">
          Promote Your Business
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto">
          Reach more customers and grow your business by launching effective
          marketing campaigns. Analyze engagement and optimize your strategy
          all from your dashboard.
        </p>

        <button className="cursor-pointer mt-6 bg-[#5932EA] hover:bg-[#4425c1] text-white font-semibold py-2 px-5 sm:px-6 rounded-lg transition-all duration-300">
          Start Promotion
        </button>
      </div>
    </>
  );
}
