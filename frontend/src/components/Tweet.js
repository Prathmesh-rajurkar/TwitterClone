import React from 'react'
import Avatar from 'react-avatar'
import { CiBookmark, CiChat1, CiHeart } from 'react-icons/ci'
// import { PiChatThin } from 'react-icons/pi'

function Tweet() {
    return (
        <div>
            <div>
                <div className='flex p-4'>
                    <Avatar facebookId="100008343750912"  size="40" round={true} />
                    <div className='mx-2 w-full'>
                        <div className='flex items-center'>
                            <h1 className='font-bold'>Prathmesh</h1>
                            <p className='text-gray-500 text-sm mx-1'>@prathmsh199</p>
                        </div>
                        <div>
                            <p>Hello devs, Lets Connect and grow together Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sequi! Cumque facilis dolore modi nisi laborum, ex, similique temporibus rem optio commodi, eveniet voluptatem recusandae possimus! Sit ea possimus cumque eveniet reprehenderit. </p>
                        </div>
                        <div className='flex justify-between w-[80%] my-3'>
                            <div className='flex items-center hover:text-cyan-600'>
                                <div className='p-1 hover:bg-cyan-200 rounded-full '>
                                    <CiChat1 size={'21px'} />
                                </div>
                                <p className='ml-1'>0</p>
                            </div>
                            <div className='flex items-center hover:text-pink-600'>
                                <div className='p-1 hover:bg-red-200  rounded-full'>
                                <CiHeart size={'21px'} />
                                </div>
                                <p className='ml-1'>5</p>
                            </div>
                            <div className='flex items-center hover:text-green-600'>
                                <div className='p-1 hover:bg-green-200 rounded-full'>

                                    <CiBookmark size={'21px'} />
                                </div>

                                <p className='ml-1 hover:text-[#1D9BF0] '>0</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet