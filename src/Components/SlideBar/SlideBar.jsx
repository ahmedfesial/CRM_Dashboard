import React from 'react'
import { NavLink } from 'react-router-dom'
import Profile from'../../assets/Photos/Profile.jpg'

export default function SlideBar() {
  return (
    <>
      <div className='z-30 container bg-[#FFFFFF] h-[100%] md:h-lvh pt-6 flex flex-col justify-between w-[80px] md:w-[306px] transition-all duration-300'>
        <div>
          {/* Header */}
          <div className='flex items-center ps-8'>
            <i className="fa-solid text-3xl fa-square-share-nodes"></i>
            <h1 className='ms-5 hidden text-3xl font-bold md:block'>Dashboard</h1>
          </div>

          {/* Dashboard (Static, not NavLink) */}
          <NavLink to={'/'}>
          <div className='text flex items-center mt-17 ps-8'>
            <div className='text-sm border-1 border-black py-1 px-1.5 rounded-md'>
              <i className="p-1.5 fa-solid fa-key"></i>
            </div>
            <h1 className='ms-5 text-lg hidden md:block'>Dashboard</h1>
          </div>
          </NavLink>

          {/* === NavLinks === */}

          {[
            { to: '/Product', label: 'Product', icon: 'fa-shapes' },
            { to: '/Customers', label: 'Customers', icon: 'fa-user' },
            { to: '/Income', label: 'Income', icon: 'fa-coins' },
            { to: '/Promote', label: 'Promote', icon: 'fa-bullhorn', iconType: 'fas' },
            { to: '/Help', label: 'Help', icon: 'fa-question' },
          ].map(({ to, label, icon, iconType = 'fa-solid' }) => (
            <NavLink to={to} title={label} key={label}>
              {({ isActive }) => (
                <div
                  className={`mx-3 mt-6  flex hover:scale-105 justify-between items-center
                    ${isActive ? 'md:bg-[#5932EA] md:py-2 md:rounded-md md:text-white' : ''}
                  `}
                >
                  <div className='flex items-center ps-5'>
                    <div
                      className={`text-sm border-1 py-1.5 px-2 rounded-md   transition-all duration-300
                        ${isActive ? 'bg-[#5932EA] text-white flex justify-center items-center  px-2 py-1.5' : ''}
                      `}
                    >
                          <i className={`p-1 text ${iconType} ${icon} block`}></i>
                    </div>
                    <h1 className='text ms-5 text-lg hidden md:block'>{label}</h1>
                  </div>
                  <div className='hidden md:block'>
                    <i className="text fa-solid fa-chevron-right pe-2"></i>
                  </div>
                </div>
              )}
            </NavLink>
          ))}
          
        </div>

        {/* Account */}
        <div className='flex items-center justify-between mb-10 ps-5'>
          <div className='flex items-center'>
            <div className='rounded-full w-[53px] h-[53px] overflow-hidden '>
                <img src={Profile} alt="" className='rounded-full w-full h-full object-cover' />
            </div>
            <div className='ms-4 hidden md:block'>
              <h1 className='font-bold'>Ahmed Faisal</h1>
              <p className='text'>Project Manager</p>
            </div>
          </div>
          <div className='hidden md:block'>
            <i className="fa-solid fa-chevron-down pe-5"></i>
          </div>
        </div>
      </div>
    </>
  )
}


