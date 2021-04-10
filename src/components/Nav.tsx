import React from 'react'
import { Link } from 'react-router-dom';
import "../style/Nav.css";
import "../style/Global-style.css";
import { getAccessToken } from '../accessToken';

export const Nav: React.FC = () => {
    const loggedIn = getAccessToken() !== "";

    return (
        <header className="nav-header">
            <Link to="/">Home</Link>
            <Link to="/groups">Groups</Link>
            <Link to="/issues">Issues</Link>
            {loggedIn ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}
            {loggedIn ? '' : <Link to="/register">Register</Link>}
            <Link to="/refresh">Refresh</Link>
        </header>
    );
};