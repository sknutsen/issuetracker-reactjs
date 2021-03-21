import React from 'react'
import { refreshToken } from '../handlers/refreshToken';
import "../style/Page-style.css";

interface RefreshTokenProps {

}

export const RefreshToken: React.FC<RefreshTokenProps> = () => {
    return (
        <form className="content" onSubmit={async (e) => {
            e.preventDefault();
            await refreshToken();
        }}>
            <button type="submit">Refresh</button>
        </form>
    );
}