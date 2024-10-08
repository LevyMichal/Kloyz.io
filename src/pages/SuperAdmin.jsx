import React, { useState } from 'react'
import OrganizationsTable from '../components/specific/organizations/OrganizationsTable'
import Layout from '../layouts/Layout'


export default function SuperAdmin() {
    const [isOrgs, setIsOrgs] = useState(false)

    return (
        <div>
            <Layout>
                <div>
                    <OrganizationsTable />
                </div>
            </Layout>
        </div>
    )
}

