import React from 'react'
import { useSelector } from 'react-redux'

export default function OrgDetails() {
    const org = useSelector((store) => store.org.org)
    return (
        <>
            <div className='p-24'>
                <div className="flex justify-center mb-6 max-w-xl m-auto" >
                    <p className='text-2xl font-semibold' >Welcome to Org {org?.name} page!</p>
                </div>
            </div>

        </>
    )
}
