import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {

    //function to check if the header of the request contains the token:
    // const checkAxios = async () => {
    //     const response = await axiosInstance.get('/protect');
    //     console.log(response);
    // }

    return (
        <>
            <div className='p-24'>
                <div className="flex justify-center mb-6 max-w-xl m-auto" >
                    <p className='text-2xl font-semibold' >Welcome to Home Page</p>
                </div>

                {/* <button onClick={checkAxios}>check the header of req</button> */}

                <div className="flex flex-col justify-center mb-6 max-w-xl m-auto">
                    <div  >
                        <p className='text-lg font-bold' >check roles:</p>
                    </div>
                    <div>
                        <Link to={'/superadmin'} className="text-blue-600 font-semibold hover:underline">Super Admin</Link>
                    </div>
                    <div>
                        <Link to={'/admin'} className="text-blue-600 font-semibold hover:underline">Admin</Link>
                    </div>
                    <div>
                        <Link to={'/login'} className="text-blue-600 font-semibold hover:underline">login</Link>
                    </div>
                </div>

            </div>

        </>
    )
}
