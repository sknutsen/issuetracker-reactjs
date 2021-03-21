import React, { useState } from 'react'
import { register } from "../handlers/register";
import "../style/Register.css";
import "../style/Page-style.css";

interface RegisterProps {

}

export const Registration: React.FC<RegisterProps> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form onSubmit={async (e) => {
            e.preventDefault();
            await register(email, password);
        }}>
            <div>
                <input type="text" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    );
};