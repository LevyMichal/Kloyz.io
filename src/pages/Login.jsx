import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import { useDispatch } from 'react-redux';

import users from "../mockData/usersData"
import LeftSideLoginPage from '../components/specific/LeftSideLoginPage';
import EmailInput from '../components/common/EmailInput';
import PasswordInput from '../components/common/PasswordInput';
import SubmitButton from '../components/common/SubmitButton';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const axiosInstance = useAxios();


    const handleLogin = async (e) => {
        e.preventDefault();
        try {

            //fetch real data from DB:
            // const response = await axiosInstance.post('/login', { email, password });
            // TODO: check the structure
            // const {success,data} = response.data;
            //dispatch real data to userReducer:
            // if (success) {
            // console.log('Login success');
            // const { token, user } = data;
            // dispatch({type: "IS_LOGGED",payload: token});
            // dispatch({type: "SET_CURRENT_USER",payload: user});

            //fetch mock data from users file:
            const user = users.find(user => user.data.json.email === email && user.data.json.password === password)
            const { success } = user;
            //dispatch mock data to userReducer:
            if (success) {
                console.log('Login success');
                const { json } = user.data
                dispatch({ type: "IS_LOGGED", payload: json.token });
                dispatch({ type: "SET_CURRENT_USER", payload: json });

                /////

                navigate('/');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="flex flex-col lg:flex-row min-h-screen bg-white ">

                <LeftSideLoginPage />
                <div className="lg:w-1/2 xl:w-5/12 p-60 sm:p-40 content-center">
                    <div className="flex justify-left mb-6 max-w-xl m-auto" >
                        <p className='text-2xl font-semibold' > Welcome back!</p>
                    </div>
                    <form onSubmit={handleLogin} className="max-w-xl m-auto">

                        <div className="mb-4 relative">
                            <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="mb-2 relative">
                            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className="flex justify-end pr-1 mb-2">
                            <Link to="/forgot-password" className="text-blue-600 font-semibold hover:underline">
                                Forgot password?
                            </Link>
                        </div>
                        <div className="mb-6">
                            <SubmitButton text="Login" />
                        </div>
                    </form>

                    <div className="flex justify-center pr-1 mb-6">
                        <p className='text-gray-400'> - or -</p>
                    </div>

                    <div className="flex justify-center items-center">
                        <button className="flex justify-center items-center text-black font-bold border rounded-lg border-inherit hover:bg-gray-100 p-3 space-x-2">
                            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google logo" className="h-6 w-6" />
                            <span>Login with Google</span>
                        </button>
                    </div>

                    <div className='flex justify-center m-8 '  >
                        <p className="text-m">
                            Don’t you have an account?  <Link to={'/register'} className="text-blue-600 hover:underline font-semibold">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

