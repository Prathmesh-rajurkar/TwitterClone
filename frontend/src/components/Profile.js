import React from 'react'
import Avatar from 'react-avatar'
import { IoArrowBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div className='w-[50%] border border-gray-200'>
            <div className=''>
                <div className=' px-2 py-2 flex items-center'>
                    <Link to="/" className='p-1 mx-1 rounded-full hover:bg-gray-200 cursor-pointer'>
                        <IoArrowBackOutline size='20px'/>
                    </Link>
                    <div>
                        <h1 className='font-bold text-lg'>Prathmesh Rajurkar</h1>
                        <p className='text-sm text-gray-400'>10 posts</p>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1583520381351-5e28a12a1e69?1000x360" alt="banner" srcset="" />
                <div className='border w-max border-white border-4 rounded-full absolute top-56 mx-3'>
                 <Avatar githubHandle="sitebase" size={120} round={true} />
                </div>
                <div>
                    <button className='px-4 py-1 rounded-full text-right border border-gray-400'>Edit Profile</button>
                </div>
            </div>
        </div>
    )
}

export default Profile