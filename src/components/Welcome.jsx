import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import './Welcome.css'

export default function Welcome()
{
    return (
        <div className="Welcome">
            <Footer />
            <div id="parent">
            <div id="main">
            <h2 className="welcome-thanks">Thanks for becoming a Tezucka user!</h2>
            <h4>If you are new to TEZUCKA,<br /> watch to the tutorial to know more or skip ahead</h4>
            <button className="tut">
                <div id="cir">
                    <div id="tri"></div>
                </div>
                <p id="watch">Watch this tutorial</p>
            </button>
            <Link to='/main'>
            <button className="skip-button" >SKIP</button>
            </Link>
            <p className="pri">By using TEZUCKA, you agree to Tezucka's <a href=""> Privacy Policy</a> and <a href=""> Terms of Use</a></p></div>
        </div>
        </div>
    )
}