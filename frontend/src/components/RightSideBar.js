import React from 'react'
import { CiSearch } from 'react-icons/ci'
import Avatar from 'react-avatar'

function RightSideBar() {
  return (
    <div className='w-[25%] p-2 '>
      <div className=' p-2 my-1 flex items-center bg-gray-100 rounded-full outline-none'>
        <CiSearch size={'20px'} />
        <input type="text" name="" id="" className='  outline-none bg-transparent px-2 ' placeholder='Search' />
      </div>
      <div className='p-4 bg-gray-100 rounded-md my-4'>
        <h1 className='font-bold text-lg mb-2'>Who to follow</h1>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div>
              <Avatar src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' size="40" round={true} />
            </div>
            <div className='ml-2'>
              <h1 className='font-bold'>Sasha</h1>
              <p className='text-sm text-gray-500 '>@sasha2004</p>
            </div>
          </div>
          <div>
            <button className='px-4 py-1 bg-black text-white rounded-full'>
              Profile
            </button>
          </div>
          {/* <Avatar src='https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg' size="40" round={true} /> */}
        </div>
      </div>
    </div>
  )
}

export default RightSideBar