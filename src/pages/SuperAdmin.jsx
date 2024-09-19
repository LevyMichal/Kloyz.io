import React from 'react'
import OrganizationsTable from '../components/specific/organizations/OrganizationsTable'

export default function SuperAdmin() {

    return (
        <>
            <div className='p-24'>
                <div className="flex justify-center mb-6 max-w-xl m-auto" >
                    <p className='text-2xl font-semibold' > Super Admin Page</p>
                </div>

                <div>
                    <OrganizationsTable />
                </div>
            </div>
        </>
    )
}
