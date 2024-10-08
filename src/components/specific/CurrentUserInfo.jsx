import React from 'react'
import { useSelector } from 'react-redux'

export default function CurrentUserInfo() {
    const currentUser = useSelector((store) => store.user.currentUser?.name);
    return (
        <div className='flex' >
            <div className='flex flex-col pr-3'>
                <span className='font-bold text-right'>{currentUser}</span>
                <button
                    className="font-light text-sm text-neutral-500 text-right hover:text-violet-600 hover:font-normal ">
                    View Profile
                </button>
            </div>

            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-500 ">
                <span className='font-medium text-white text-2xl'>{currentUser[0]}</span>
            </div>
        </div>
    )
}
