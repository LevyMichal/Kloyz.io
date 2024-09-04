import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import { useDispatch } from 'react-redux';

import users from "../utils/usersFile"

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const axiosInstance = useAxios();


    const handleLogin = async (e) => {
        e.preventDefault();
        try {

            //real data from DB:
            // const response = await axiosInstance.post('/login', { email, password });
            // TODO: check the structure
            // const {success,data} = response.data;

            // if (success) {
            // console.log('Login success');
            // const { token, user } = data;
            // dispatch({type: "IS_LOGGED",payload: token});
            // dispatch({type: "SET_CURRENT_USER",payload: user});


            //data from users file
            const user = users.find(user => user.data.json.email === email && user.data.json.password === password)
            const { success } = user;

            if (success) {
                console.log('Login success');
                const { json } = user.data
                dispatch({ type: "IS_LOGGED", payload: json.token });
                dispatch({ type: "SET_CURRENT_USER", payload: json });
                // sessionStorage.setItem('jwt', json.token);

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
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>

            <div>
                <Link to={'/forgot-password'}>forgot password?</Link>
                {/* TODO: wait for ui design */}
            </div>

            <div>
                <h3>Already have an account?</h3>
                <Link to={'/register'}>Sign Up</Link>
            </div>

        </>
    );
};


