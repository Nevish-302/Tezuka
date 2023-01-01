import React from "react";
import { useState } from "react";
import Footer from "./Footer";
import './Upload.css'

export default function Upload() {
    const [name, setName] = useState('')
    function handleChange(event)
    {
        setName(event.target.value)
    }
    return (
        <div className="Upload">
            <Footer />
            <div className="upload-head">UPLOAD DOCUMENTS</div>
            <input className="upload-name" placeholder="Document Name" name="name" onChange={handleChange} value={name}></input>
            <button className="upload-button">Upload</button>
        </div>
    )
}