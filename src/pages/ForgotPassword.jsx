import { useState } from 'react';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');

    return (
        <>
            Forgot Password
            <form onSubmit={handleForgotPwd}>
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
                    <button type="submit">send</button>
                </div>
            </form>
        </>
    )
}
