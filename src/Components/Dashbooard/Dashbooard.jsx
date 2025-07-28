import React from 'react'

export default function Dashboard() {
  return (
    <>
      {/* Header & Search */}
      <div className="flex flex-col ms-20 md:ms-10 sm:flex-row justify-between items-start sm:items-center mt-4 px-4 sm:px-12 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Hello Ahmed 👋,</h1>

        {/* Search */}
        <div className="relative w-full sm:w-[300px]">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            className="block w-full p-2 ps-10 text-sm text-gray-900 rounded-lg bg-gray-100 outline-none"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Dashboard Cards  */}
      <div className="grid grid-cols-1 ms-20 md:ms-0 md:grid-cols-1 xl:grid-cols-3 gap-4 mt-6 px-4 sm:px-20">
        {/* Card 1 */}
        <div className="bg-white w-[360px] sm:w-full rounded-2xl p-4 flex items-center gap-4 hover:shadow-lg transition shadow-md">
          <div className="w-[64px] h-[64px] bg-[#d3ffe7] text-[#00AC4F] flex justify-center items-center rounded-full">
            <i className="fa-solid fa-users text-xl"></i>
          </div>
          <div>
            <h2 className="text-gray-500 text-sm">Total Customers</h2>
            <h1 className="text-xl font-bold">5,423</h1>
            <p className="text-sm">
              <span className="text-[#00AC4F]">
                <i className="fa-solid fa-arrow-up"></i> 16%
              </span>{' '}
              this month
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white w-[360px] sm:w-full rounded-2xl p-4 flex items-center gap-4 hover:shadow-lg transition shadow-md">
          <div className="w-[64px] h-[64px] bg-[#d3ffe7] text-[#00AC4F] flex justify-center items-center rounded-full">
            <i className="fa-solid fa-user text-xl"></i>
          </div>
          <div>
            <h2 className="text-gray-500 text-sm">Members</h2>
            <h1 className="text-xl font-bold">1,893</h1>
            <p className="text-sm">
              <span className="text-[#D0004B]">
                <i className="fa-solid fa-arrow-down"></i> 1%
              </span>{' '}
              this month
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-4 w-[360px] sm:w-full flex items-center gap-4 hover:shadow-lg transition shadow-md">
          <div className="w-[64px] h-[64px] bg-[#d3ffe7] text-[#00AC4F] flex justify-center items-center rounded-full">
            <i className="fa-solid fa-desktop text-xl"></i>
          </div>
          <div>
            <h2 className="text-gray-500 text-sm">Active Now</h2>
            <h1 className="text-xl font-bold">189</h1>
            <p className="text-sm text-[#00AC4F]">
              <i className="fa-solid fa-users me-1"></i>
              <i className="fa-solid fa-users"></i>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
