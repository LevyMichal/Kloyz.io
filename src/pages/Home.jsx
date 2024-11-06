import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Layout from "../layouts/Layout.jsx";

export default function Home() {

    return (
        <div>
            <Layout>
                <div className='p-24'>
                    <div className="flex justify-center mb-6 max-w-xl m-auto" >
                        <p className='text-2xl font-semibold' >
                            Welcome to Home Page
                        </p>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
