import React, { useState } from 'react'
import OrganizationsTable from '../components/specific/organizations/OrganizationsTable'
import Layout from '../layouts/Layout'
import AddOrgPopup from '../components/specific/organizations/AddOrgPopup'


export default function SuperAdmin() {
    const [showOrgTable, setShowOrgTable] = useState(false)

    return (
        <div>
            <Layout
                // openAddOrgPopup={openAddOrgPopup}
                showOrgTable={showOrgTable}
                setShowOrgTable={setShowOrgTable}
            >
                <div>
                    {/* Organizations Table */}
                    {showOrgTable &&
                        <OrganizationsTable
                            showOrgTable={showOrgTable}
                            setShowOrgTable={setShowOrgTable}
                        />
                    }
                </div>
            </Layout>
        </div>
    )
}

