import React, { useState } from 'react'
import { Redirect } from 'react-router';
import { login } from '../handlers/login';
import "../style/Page-style.css";

interface LoginProps {
    loggedIn: boolean;
    setLoggedIn: (bool: boolean) => void;
}

export const Login: React.FC<LoginProps> = ({loggedIn, setLoggedIn}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (loggedIn) {
        return (
            <Redirect to={"/logout"} />
        );
    }

    return (
        <form onSubmit={async (e) => {
            e.preventDefault();
            await login(email, password);
            setLoggedIn(true);
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