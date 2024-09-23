import { useState } from 'react';

import LeftSideLoginPage from '../components/specific/LeftSideLoginPage';
import EmailInput from '../components/common/EmailInput';
import SubmitButton from '../components/common/SubmitButton';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleForgotPwd = (e) => {

    }

    return (
        <div className="flex flex-col lg:flex-row min-h-screen ">
            <div className="lg:w-7/12 xl:w-7/12 flex justify-center items-center bg-neutral-100">
                <LeftSideLoginPage />
            </div>

            {/* Right side with form */}
            <div className="flex-1 flex justify-center items-center px-10 sm:px-10 md:px-40 lg:px-40 xl:px-48 py-8">
                <div className="w-full max-w-lg md:max-w-xl" style={{ maxWidth: '100vw', minWidth: '300px' }}>
                    <div className="flex justify-left">
                        <p className="text-2xl font-semibold">Forgot Password</p>
                    </div>
                    <div className="flex justify-left" >
                        <p className='text-sm font-light ' >A new password will be send to your email</p>
                    </div>
                    <form onSubmit={handleForgotPwd} className="space-y-6">

                        <div>
                            <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div>
                            <SubmitButton text="Send" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
