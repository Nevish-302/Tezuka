import React from "react";
import logo from '../assets/Logo.png'
import bio from '../assets/bio.png'
import medic from '../assets/medic.png'
import surgical_hist from '../assets/surgical_hist.png'
import vaccine from '../assets/vaccine.png'
import care from '../assets/care.png'
import medications from '../assets/medications.png'
import care_hist from '../assets/care_hist.png'
import provide from '../assets/provide.png'
import diagonastics from '../assets/diagonastics.png'
import emergency from '../assets/emergency.png'
import allergies from '../assets/allergies.png'
import blood from '../assets/blood.png'
import referrals from '../assets/referrals.png'
import consent from '../assets/consent.png'
import doctors_visited from '../assets/doctors_visited.png'
import hospitals from '../assets/hospitals.png'
import medicine from '../assets/medicine.png'
import fitbit from '../assets/fitbit.png'
import './Main.css'
import Footer from "./Footer";
import { Link } from "react-router-dom";
export default function Main()
{
    return(
        <div className="Main">
            <Footer />
            <div className="main-head">
                What would you like to do today?
            </div>
            <Link to='/upload'>
            <button className="main-share"> Share Health Data </button>
            </Link>
            <div id="Main-main">
        <button className="box">
            <img className='main-image' src={bio} alt="" width="34px" height="34px" />
            <div>Bio</div>
        </button>
        <div className="box">
            <img className='main-image' src={medic} alt="" width="34px" height="34px" />
            <div>Medical history</div>
        </div>
        <div className="box">
            <img className='main-image' src={surgical_hist} alt="" width="34px" height="34px" />
            <div>Surgical History</div>
        </div>
        <div className="box">
            <img className='main-image' src={vaccine} alt="" width="34px" height="34px" />
            <div>Vaccine History</div>
        </div>
        <div className="box">
            <img className='main-image' src={care} alt="" width="34px" height="34px" />
            <div>Care Needs</div>
        </div>
        <div className="box">
            <img className='main-image' src={medications} alt="" width="34px" height="34px" />
            <div>Medications</div>
        </div>
        <div className="box">
            <img className='main-image' src={care_hist} alt="" width="34px" height="34px" />
            <div>Care Visit History</div>
        </div>
        <div className="box">
            <img className='main-image' src={provide} alt="" width="34px" height="34px" />
            <div>Provider Information</div>
        </div>
        <div className="box">
            <img className='main-image' src={diagonastics} alt="" width="34px" height="34px" />
            <div>Diagonastics</div>
        </div>
        <div className="box">
            <img className='main-image' src={emergency} alt="" width="34px" height="34px" />
            <div>Emergency Contacts</div>
        </div>
        <div className="box">
            <img className='main-image' src={allergies} alt="" width="34px" height="34px" />
            <div>Allergies</div>
        </div>
        <div className="box">
            <img className='main-image' src={blood} alt="" width="34px" height="34px" />
            <div>Blood Work</div>
        </div>
        <div className="box">
            <img className='main-image' src={referrals} alt="" width="34px" height="34px" />
            <div>Referrals</div>
        </div>
        <div className="box">
            <img className='main-image' src={consent} alt="" width="34px" height="34px" />
            <div>Consent</div>
        </div>
        <div className="box">
            <img className='main-image' src={doctors_visited} alt="" width="34px" height="34px" />
            <div>Doctors Visited</div>
        </div>
        <div className="box">
            <img className='main-image' src={hospitals} alt="" width="34px" height="34px" />
            <div>Hospitals Visited</div>
        </div>
        <div className="box">
            <img className='main-image' src={medicine} alt="" width="34px" height="34px" />
            <div>Medicines Purchased</div>
        </div>
        <div className="box">
            <img className='main-image' src={fitbit} alt="" width="34px" height="34px" />
            <div>Fitbit Records</div>
        </div>
    </div>
        </div>
    )
}