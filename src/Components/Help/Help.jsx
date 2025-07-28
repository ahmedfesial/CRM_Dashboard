import React from "react";

export default function Help() {
  return (
    <>
     <div className="text-center my-10 ms-26 md:mx-auto py-10 px-4 sm:px-8 bg-white rounded-2xl shadow-md sm:mt-20 w-[70%] sm:w-[80%] md:w-[70%] max-w-3xl hover:shadow-2xl transition-shadow duration-300">
  <h2 className="text-xl sm:text-2xl font-bold mb-2 text-[#5932EA]">Need Help?</h2>
  
  <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto">
    If you have any questions or need assistance using the dashboard,
    we're here to help. Browse our FAQs or contact support.
  </p>

  <div className="mt-6 flex justify-center gap-3 sm:gap-4 flex-wrap">
    <button className="bg-[#5932EA] hover:bg-[#4425c1] text-white font-semibold cursor-pointer py-2 px-5 sm:px-6 rounded-lg transition-all duration-300">
      Visit Help Center
    </button>
    <button className="border border-[#5932EA] cursor-pointer text-[#5932EA] hover:bg-[#5932EA] hover:text-white font-semibold py-2 px-5 sm:px-6 rounded-lg transition-all duration-300">
      Contact Support
    </button>
  </div>
</div>
    </>
  );
}
