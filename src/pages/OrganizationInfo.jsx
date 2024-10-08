import React from 'react'
import { useSelector } from 'react-redux'
import UsersTable from '../components/specific/organizations/UsersTable'
import { useParams } from 'react-router-dom'
import Layout from '../layouts/Layout'


export default function OrganizationInfo() {
    const org = useSelector((store) => store.org?.org)
    // const params = useParams()
    return (
        <div>
            <Layout>
                <div>
                    <UsersTable org={org} />
                </div>
            </Layout>
        </div>
    )
}
