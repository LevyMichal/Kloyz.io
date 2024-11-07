import React, { useState } from 'react'
import Layout from '../layouts/Layout'
import NewOrgForm from '../components/specific/organizations/NewOrgForm';


export default function NewOrg() {
    return (
        <>
            <Layout>
                <NewOrgForm />
            </Layout>
        </>
    );

}
