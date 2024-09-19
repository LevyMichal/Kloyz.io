import React from 'react'
import { useParams } from 'react-router-dom'

export default function OrgDetails() {
    const params = useParams()
    return (
        <>
            <div className='p-24'>
                <div className="flex justify-center mb-6 max-w-xl m-auto" >
                    <p className='text-2xl font-semibold' >Welcome to Org {params.id} page!</p>
                </div>
            </div>

        </>
    )
}
