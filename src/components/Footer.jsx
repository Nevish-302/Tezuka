import React from "react";
import home from '../assets/home.png'
import user from '../assets/user.png'
import documents from '../assets/documents.png'
import shop from '../assets/Shop.png'
import qr from '../assets/qr-code.png'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="Footer">
            <Link to='/welcome'><img height='40rem' src ={home} left='0' className='footer-image' /></Link>
            <Link to='/upload'><img height='40rem' src ={documents} className='footer-image' /> </Link>            
            <Link to='/main'><img height='40rem' src ={qr} className='footer-image' /> </Link>
            <Link to='/Bio'><img height='40rem' src ={user} className='footer-image' /> </Link>
        </div>
    )
}