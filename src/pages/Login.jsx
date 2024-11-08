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

            //fetch real data:
            // const response = await axiosInstance.post('/login', { email, password });
            // TODO: check the structure
            // const {success,data} = response.data;
            //dispatch real data to userReducer:
            // if (success) {
            // console.log('Login success');
            // const { token, user } = data;
            // dispatch({type: "IS_LOGGED",payload: token});
            // dispatch({type: "SET_CURRENT_USER",payload: user});

            //fetch mock data:
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
        <div className="flex flex-col lg:flex-row min-h-screen">
            <div className="lg:w-7/12 xl:w-7/12 flex justify-center items-center bg-slate-900">
                <LeftSideLoginPage />
            </div>

            {/* Right side with form */}
            <div className="flex-1 flex justify-center items-center px-10 sm:px-10 md:px-40 lg:px-40 xl:px-48 py-8">
                <div className="w-full max-w-lg md:max-w-xl"
                    style={{ maxWidth: '100vw', minWidth: '300px' }}
                >
                    <div className="flex justify-left mb-6">
                        <p className="text-2xl font-semibold"
                        >Welcome back!
                        </p>
                    </div>
                    <form
                        onSubmit={handleLogin}
                        className="space-y-6">
                        <div>
                            <EmailInput
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <PasswordInput
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-end pr-1">
                            <Link
                                to="/forgot-password"
                                className="text-amber-400 font-normal hover:underline"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <div>
                            <SubmitButton text="Login" />
                        </div>
                    </form>
                    <div className="flex justify-center">
                        <p className="text-neutral-400 my-6">
                            - or -
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="flex items-center text-black font-bold border hover:bg-neutral-100 p-3 space-x-2">
                            <img
                                src="https://img.icons8.com/color/48/000000/google-logo.png"
                                alt="Google logo"
                                className="h-5 w-5"
                            />
                            <span>
                                Login with Google
                            </span>
                        </button>
                    </div>
                    <div className="flex justify-center mt-8">
                        <p className="text-m">
                            Don’t have an account?
                            <Link
                                to={'/register'}
                                className="text-amber-400 hover:underline font-semibold pl-2"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
