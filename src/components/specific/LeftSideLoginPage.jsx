import React from 'react'

export default function LeftSideLoginPage() {
    return (

        <div className="hidden lg:flex justify-center items-center bg-neutral-100 flex-1">
            <div className='relative w-full max-w-sm'>
                <div className='absolute bg-white h-20 w-48 rounded-2xl top-0 left-1/4'>
                    Current Balance
                </div>
                <div className='absolute bg-white h-60 w-80 rounded-2xl bottom-0'>
                    New Proposal
                </div>
                <div className='absolute bg-violet-100 h-24 w-60 rounded-2xl right-0 top-1/3'>
                    Signed
                </div>
            </div>
        </div>
    )
}
