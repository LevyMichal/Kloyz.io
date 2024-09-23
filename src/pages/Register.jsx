import { useState } from 'react';
import useAxios from '../hooks/useAxios';
import LeftSideLoginPage from '../components/specific/LeftSideLoginPage';
import EmailInput from '../components/common/EmailInput';
import PasswordInput from '../components/common/PasswordInput';
import SubmitButton from '../components/common/SubmitButton';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const axiosInstance = useAxios();
    // const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axiosInstance.post('/register', { email, password });

            if (data) {
                // TODO: handle sign up (e.g., navigate to another page, show a success message, etc.)
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        // <>
        //     <div className="flex flex-col lg:flex-row min-h-screen bg-white ">

        //         <LeftSideLoginPage />
        //         <div className="lg:w-1/2 xl:w-5/12 p-60 sm:p-40 content-center">
        //             <div className="flex justify-left mb-6 max-w-xl m-auto" >
        //                 <p className='text-2xl font-semibold' >Sign Up</p>
        //             </div>
        //             <form onSubmit={handleSignUp} className="max-w-xl m-auto">

        //                 <div className="mb-4 relative">
        //                     <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
        //                 </div>

        //                 <div className="mb-4 relative">
        //                     <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
        //                 </div>

        //                 <div className="mb-6">
        //                     <SubmitButton text="Sign Up" />
        //                 </div>
        //             </form>

        //             <div className="flex justify-center pr-1 mb-6">
        //                 <p className='text-gray-400'> - or -</p>
        //             </div>

        //             <div className="flex justify-center items-center">
        //                 <button className="flex justify-center items-center text-black font-bold border rounded-lg border-inherit hover:bg-gray-100 p-3 space-x-2">
        //                     <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google logo" className="h-6 w-6" />
        //                     <span>Sign up with Google</span>
        //                 </button>
        //             </div>

        //         </div>
        //     </div>
        // </>

        <div className="flex flex-col lg:flex-row min-h-screen">
            <div className="lg:w-7/12 xl:w-7/12 flex justify-center items-center bg-neutral-100">
                <LeftSideLoginPage />
            </div>

            {/* Right side with form */}
            <div className="flex-1 flex justify-center items-center px-10 sm:px-10 md:px-40 lg:px-40 xl:px-48 py-8">
                <div className="w-full max-w-lg md:max-w-xl" style={{ maxWidth: '100vw', minWidth: '300px' }}>
                    <div className="flex justify-left mb-6">
                        <p className="text-2xl font-semibold">Sign Up</p>
                    </div>
                    <form onSubmit={handleSignUp} className="space-y-6">
                        <div>
                            <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div>
                            <SubmitButton text="Sign Up" />
                        </div>
                    </form>
                    <div className="flex justify-center ">
                        <p className="text-neutral-400 my-6">- or -</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="flex items-center text-black font-bold border rounded-lg hover:bg-neutral-100 p-3 space-x-2">
                            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google logo" className="h-5 w-5" />
                            <span>Sign up with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
