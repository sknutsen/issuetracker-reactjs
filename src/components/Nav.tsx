import React from 'react'
import { Link } from 'react-router-dom';
import "../style/Nav.css";
import "../style/Global-style.css";

export const Nav: React.FC = () => {
    return (
        <header className="nav-header">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/refresh">Refresh</Link>
        </header>
    );
}