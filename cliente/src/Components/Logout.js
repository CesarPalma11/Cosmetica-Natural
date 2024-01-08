import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Profile.css'
export const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
    <button className="btn-log" onClick={() => logout( {returnTo: window.location.origin})}>
        <h1 className="logout">Logout</h1>
        </button>
    );
};