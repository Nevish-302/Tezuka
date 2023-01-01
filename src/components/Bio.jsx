import React from "react";
import './Bio.css'
import maninder from '../assets/maninder.png'
import Footer from "./Footer";

export default function Bio()
{
    const [dob, setDob] = React.useState('1st January, 2000')
    const [allergies, setAllergies] = React.useState('Asthma')
    const [btype, setBtype] = React.useState('A+')
    const [cardio, setCardio] = React.useState('Normal')
    const [contact, setContacts] = React.useState([{name : 'Maninder Harsha(Wife)', number : '+91 0987654321'}, {name : 'Maninder Harsha(Brother)', number : '+91 0987456321'}])
    const contacts = contact.map(person => {
        return (
            <div className="bio-text" >
            <div>{person.name}</div>
            <div className="number bio-text ">{person.number}</div>
            </div>
        )
    })
    return (
        <div className="Bio">
            <Footer />
    <a href=""><i class="fa">&#xf060;</i></a>
    <div id="main">
        <div id="head">
    <img src={maninder} id="img1"></img>
    <div className="title">Maninder Harsha</div>
    <div id="bus">Business Man</div></div>
    
    <div className="bio-head">Date of Birth</div>
    <div className="bio-text">{dob}</div>
    
    <div className="bio-head">Allergies</div>
    <div className="bio-text">{allergies}</div>
    
    <div className="bio-head">Vaccination History</div>
    <div id="vac">
    <div id="v1">Covid-19</div>
    <div id="v2">TB</div>
    <div id="v3">BCG</div></div>
    
    <div className="bio-head">Blood Type</div>
    <div className="bio-text">{btype}</div>
    
    <div className="bio-head">Emergency Contacts</div>
    {contacts}
    </div>
    <div className="bio-head">Current Cardio Category</div>
    <div className="bio-text">{cardio}</div>
    
</div>
    ) 
}