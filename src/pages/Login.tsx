import React, { useState } from 'react'
import { login } from '../handlers/login';
import "../style/Page-style.css";

interface LoginProps {

}

export const Login: React.FC<LoginProps> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form onSubmit={async (e) => {
            e.preventDefault();
            await login(email, password);
        }}>
            <div>
                <input type="text" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
};