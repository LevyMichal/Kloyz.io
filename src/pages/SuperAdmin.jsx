import React, { useState } from 'react'
import OrganizationsTable from '../components/specific/organizations/OrganizationsTable'
import SideBar from '../layouts/SideBar'


export default function SuperAdmin() {
    const [isOrgs, setIsOrgs] = useState(false)

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className=' w-1/6'>
                <SideBar isOrgs={isOrgs} setIsOrgs={setIsOrgs} />
            </div>


            {/* Main content */}
            <div className="flex-1 p-10 w-5/6">

                {isOrgs && (
                    <div >
                        <OrganizationsTable />
                    </div>
                )}
            </div>
        </div>
    )
}
