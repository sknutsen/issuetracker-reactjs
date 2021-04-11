import React, { useState } from 'react'
import { login } from '../handlers/login';
import "../style/Page-style.css";

interface LoginProps {
    logIn: (bool: boolean) => void;
}

export const Login: React.FC<LoginProps> = ({logIn}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form onSubmit={async (e) => {
            e.preventDefault();
            await login(email, password);
            logIn(true);
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