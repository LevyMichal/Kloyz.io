import React from 'react'
import useAxios from '../utils/useAxios';


export default function HomePage() {
    const axios = useAxios()


    const checkAxios = async () => {
        const response = await axios.get('/protect');
        console.log(response);


    }

    return (
        <>
            <h1>Welcome to Home Page</h1>
            <button onClick={checkAxios}>check the header of req</button>
        </>
    )
}
