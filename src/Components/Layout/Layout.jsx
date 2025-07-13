import React from 'react'
import { Outlet } from 'react-router-dom'
import SlideBar from '../SlideBar/SlideBar'
import Dashbooard from '../Dashbooard/Dashbooard'

export default function Layout() {


  return <>
  <div className='grid grid-cols-[10px_1fr]  md:grid-cols-[306px_1fr]'>
    <SlideBar/>
    <div>
    <Dashbooard/>
    <Outlet></Outlet>
    </div>
  </div>
  </>
}
