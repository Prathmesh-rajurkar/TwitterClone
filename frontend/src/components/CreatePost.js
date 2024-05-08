import React from 'react'
import Avatar from 'react-avatar';
import { CiImageOn } from 'react-icons/ci';

function CreatePost() {
    return (
        <div className='w-[100%]'>
            <div className=''>
                <div className='flex items-center justify-between border border-gray-200'>
                    <div className='hover:bg-gray-200 w-full text-center p-2'>
                        <h1 className='font-semibold text-gray-600 text-lg hover:cursor-pointer' >For you</h1>
                    </div>
                    <div className='hover:bg-gray-200 w-full text-center p-2'>
                        <h1 className='font-semibold text-gray-600 text-lg hover:cursor-pointer '>Following</h1>
                    </div>
                </div>
                <div className=''>
                    <div className='flex items-center p-4'>
                        <div>
                            <Avatar githubHandle="sitebase" size={40} round={true} />
                        </div>
                        <input className='w-full outline-none border-none text-lg ml-2' type="text" placeholder='What is Happening?!' />
                    </div>
                    <div className='flex items-center justify-between px-4 py-3 border-b border-gray-300'>
                        <div>
                            <CiImageOn size={'24px'}/>
                        </div>
                        <button className='bg-[#1D9BF0]  text-white rounded-full px-4 py-1 text-lg border-none '>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost