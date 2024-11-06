import React from 'react'
import Layout from '../layouts/Layout'
import OrganizationsTable from '../components/specific/organizations/OrganizationsTable'

export default function Organizations() {
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
