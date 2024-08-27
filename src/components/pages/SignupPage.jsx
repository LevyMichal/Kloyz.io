import { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

export default function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const navigate = useNavigate();
    const instanceAxios = useAxios()

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axiosInstance.post('/signUp', { email, password });

            if (data) {
                // TODO: handle sign up
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
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
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </>
    );
};
