import { useState } from 'react';
import useAxios from '../utils/useAxios';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const instanceAxios = useAxios()


    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await instanceAxios.post('/signUp', { email, password });
            const { data } = response;

            if (data) {
                navigate('/login');
            } else {
                setError('sign up failed');
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSignUp}>
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
                <button type="submit">Sign Up</button>
                <br />
            </form>
        </>
    );
};
