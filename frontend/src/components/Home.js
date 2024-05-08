import React from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import Feed from './Feed'

function Home() {
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
        <LeftSideBar/>
        <Feed/>
        <RightSideBar/>
    </div>
  )
}

export default Home