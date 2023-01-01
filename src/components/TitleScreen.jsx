import React from "react";
import './TitleScreen.css'
import Logo from '../assets/Logo.png'
import { Link } from "react-router-dom";

export default function TitleScreen()
{
    setTimeout(() => {
        document.getElementById('ts-login-options').style.display = 'flex'
    }, 2000);
    return (
        <div className="TitleScreen" id="TitleScreen">
            <img src={Logo} className="ts-logo" id="ts-logo"/>
            <div className="ts-login-options" id="ts-login-options">
                <Link to="/signup">
                <button className="ts-signup"> Sign Up With Email </button>
                </Link>
                <Link to='/login'>
                <div className="ts-login" id="ts-login"> Already have an account?<br />Login Here </div>
                </Link>
            </div>
        </div>
    )
}