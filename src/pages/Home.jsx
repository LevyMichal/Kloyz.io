import React from 'react'
import useAxios from '../hooks/useAxios'
import SuperAdmin from './SuperAdmin';
import { Link } from 'react-router-dom';


export default function Home() {
    const axios = useAxios()


    const checkAxios = async () => {
        const response = await axios.get('/protect');
        console.log(response);


    }

    return (
        <>
            <h1>Welcome to Home Page</h1>
            <button onClick={checkAxios}>check the header of req</button>

            <div>
                <h4>check roles:</h4>
                <div>
                    <Link to={'/super-admin'}>Super Admin</Link>
                </div>
                <div>
                    <Link to={'/admin'}>Admin</Link>
                </div>
            </div>
            <div>
                <Link to={'/login'}>login</Link>
            </div>

        </>
    )
}
