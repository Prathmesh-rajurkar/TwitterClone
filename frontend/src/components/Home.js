import React from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
// import Feed from './Feed'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useOtherUsers from '../hooks/useOtherUsers'


function Home() {
  const {user,otherUsers} = useSelector(store=>store.user)
  console.log(otherUsers);
  useOtherUsers(user._id)
  return (
    <div className='flex justify-between w-[83.5%] mx-auto'>
        <LeftSideBar/>
        <Outlet/>
        <RightSideBar otherUsers={otherUsers}/>
    </div>
  )
}

export default Home