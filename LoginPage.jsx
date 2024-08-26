import { useState } from 'react';
import useAxios from '../utils/useAxios';
import { useNavigate } from 'react-router-dom';

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

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const instanceAxios = useAxios()

    const handleLogin = async (e) => {
        e.preventDefault();
        try {

            //real data from DB
            // const response = await instanceAxios.post('/login', { email, password });
            // const { token, success } = response.data;

            //data from mockData
            const { success } = successMockData;

            if (success) {
                //real jwt from DB
                // localStorage.setItem('jwt', token);

                //jwt from mockData
                localStorage.setItem('jwt', successMockData.data.token);

                navigate('/');
            } else {
                setError('Login failed');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const signUp = () => {
        navigate('/signUp');
    };

    return (
        <>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <br />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <br />
                <button type="submit">Login</button>

            </form>
            <button>forgot password</button>

            <h3>Register</h3>
            <button onClick={signUp}>Sign Up</button>
        </>
    );
};
