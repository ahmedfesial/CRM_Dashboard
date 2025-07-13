import React from "react";

export default function Hero() {
  return (
    <section className="bg-[#F5F6FA] min-h-fit flex justify-center ms-20 mt-28 w-[80%] mx-auto px-6 hover:shadow-2xl rounded-2xl p-8 ">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Powerful CRM Dashboard
        </h1>
        <p className="text text-lg md:text-xl mb-4">
          Track sales, manage clients, analyze performance — all in one place.
          Get insights and take control of your business with real-time data.
        </p>
        <button className="bg-[#5932EA] text-white text-lg px-6 py-3 rounded-xl shadow-lg hover:bg-[#4320c8] transition duration-300">
          Go to Dashboard
        </button>
      </div>
    </section>
  );
}
