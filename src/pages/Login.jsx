import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

//mockData
const successMockData = {
    success: true,
    message: "user logged successfully",
    data: {
        token: 'hjkdvkjdvj678987654321'
    },

}
const failedMockData = {
    success: false,
    message: " blablabla",
    error: {
        errorMessage: "ERROR"
    }
}

export default function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {

            //real data from DB
            // const response = await axiosInstance.post('/login', { email, password });
            // const { token, success } = response.data;

            //data from mockData
            const { success } = successMockData;

            if (success) {
                console.log('Login success');
                //real jwt from DB
                // localStorage.setItem('jwt', token);

                //jwt from mockData
                localStorage.setItem('jwt', successMockData.data.token);

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
                <button>forgot password</button>
                {/* TODO: wait for ui design */}
            </div>

            <div>
                <h3>Already have an account?</h3>
                <Link to={'/signUp'}>Sign Up</Link>
            </div>

        </>
    );
};
