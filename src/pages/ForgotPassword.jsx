import { useState } from 'react';

import LeftSideLoginPage from '../components/specific/LeftSideLoginPage';
import EmailInput from '../components/common/EmailInput';
import SubmitButton from '../components/common/SubmitButton';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleForgotPwd = (e) => {

    }

    return (
        <>
            <div className="flex flex-col lg:flex-row min-h-screen bg-white ">

                <LeftSideLoginPage />
                <div className="lg:w-1/2 xl:w-5/12 p-60 sm:p-40 content-center">
                    <div className="flex justify-left mb-6 max-w-xl m-auto" >
                        <p className='text-2xl font-semibold' >Forgot Password</p>
                    </div>

                    <div className="flex justify-left mb-6 max-w-xl m-auto" >
                        <p className='text-sm font-light' >A new password will be send to your email</p>
                    </div>

                    <form onSubmit={handleForgotPwd} className="max-w-xl m-auto">

                        <div className="mb-4 relative">
                            <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="mb-6">
                            <SubmitButton text="Send" />
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
