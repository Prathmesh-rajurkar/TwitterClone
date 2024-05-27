import React from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
// import Feed from './Feed'
import { Outlet } from 'react-router-dom'


function Home() {
 
  return (
    <div className='flex justify-between w-[83.5%] mx-auto'>
        <LeftSideBar/>
        <Outlet/>
        <RightSideBar />
    </div>
  )
}

export default Home