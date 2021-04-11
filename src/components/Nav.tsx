import React from 'react'
import { Link } from 'react-router-dom';
import "../style/Nav.css";
import "../style/Global-style.css";

interface NavProps {
    loggedIn: boolean;
}

export const Nav: React.FC<NavProps> = ({loggedIn}) => {
    return (
        <header className="nav-header">
            <Link to="/">Home</Link>
            {loggedIn ? (
                <>
                    <Link to="/groups">Groups</Link>
                    <Link to="/issues">Issues</Link>
                    <Link to="/logout">Logout</Link>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
            <Link to="/refresh">Refresh</Link>
        </header>
    );
};