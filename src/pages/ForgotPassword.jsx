import { useState } from 'react';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleForgotPwd = (e) => {

    }

    return (
        <>
            <h1>Forgot Password</h1>
            <form onSubmit={handleForgotPwd}>
                <div>
                    <label>a new password will be sent to your email</label>
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
