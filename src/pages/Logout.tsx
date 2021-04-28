import React from 'react'
import { Redirect } from 'react-router-dom';

interface LogoutProps {
    loggedIn: boolean;
    setLoggedIn: (bool: boolean) => void;
}

export const Logout: React.FC<LogoutProps> = ({loggedIn, setLoggedIn}) => {
    if (!loggedIn) {
        return (
            <Redirect to={"/login"} />
        );
    }

    return (
        <div>
            <button onClick={() => {
                setLoggedIn(false);
            }}>
                Log out
            </button>
        </div>
    );
}