import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { CiBellOn, CiBookmark, CiCircleMore, CiHome, CiLogout, CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
function LeftSideBar() {
    return (
        <div className='w-[25%] p-2'>
            <div>
                <div>
                    {/* <img width={"30px"} src="https://i.pinimg.com/736x/99/65/5e/99655e9fe24eb0a7ea38de683cedb735.jpg" alt="twitter-logo" /> */}
                    <BsTwitterX className='mx-4' size="24px" />
                </div>
                <div className='my-4 '>
                    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer'>
                        <div>
                            <CiHome size="24px" />
                        </div>
                        <h1 className='font-bold text-lg ml-2'>
                            Home
                        </h1>
                    </div>
                    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer'>
                        <div>
                            <CiSearch size="24px" />
                        </div>
                        <h1 className='font-bold text-lg ml-2'>
                            Explore
                        </h1>
                    </div>
                    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer'>
                        <div>
                            <CiBellOn size="24px" />
                        </div>
                        <h1 className='font-bold text-lg ml-2'>
                            Notification
                        </h1>
                    </div>
                    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer'>
                        <div>
                            <CiUser size="24px" />
                        </div>
                        <h1 className='font-bold text-lg ml-2'>
                            Profile
                        </h1>
                    </div>
                    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer'>
                        <div>
                            <CiBookmark size="24px" />
                        </div>
                        <h1 className='font-bold text-lg ml-2'>
                            Bookmarks
                        </h1>
                    </div>
                    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer'>
                        <div>
                            <CiCircleMore size="24px" />
                        </div>
                        <h1 className='font-bold text-lg ml-2'>
                            More
                        </h1>
                    </div>
                    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer'>
                        <div>
                            <CiLogout size="24px" />
                        </div>
                        <h1 className='font-bold text-lg ml-2'>
                            Logout
                        </h1>
                    </div>
                    <button className='px-4 py-2 my-10 h-12 border-none text-md bg-[#1D9BF0] w-full rounded-full text-white font-bold'>Post</button>
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar