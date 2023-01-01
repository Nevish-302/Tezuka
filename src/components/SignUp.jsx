import React from "react";
import { Link } from "react-router-dom";
import './SignUp.css'

export default function SignUp()
{
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [date, setDate] = React.useState('')
    const [name, setName] = React.useState('')
    const [fname, setFname] = React.useState('')
    const [lname, setLname] = React.useState('') 
    const [country, setCountry] = React.useState('')
    
    function handleChange(event)
    {
        const {name, value} = event.target
        name == 'email' ? setEmail(value) : name == 'password' ? setPassword(value) : name == 'date' ? setDate(value) : name == 'fname' ? setFname(value) : name == 'country' ? setCountry(value) : setLname(value) 
    }

    return (
        <div className="SignUp">
            <a href=""><i className="fa">&#xf060;</i></a>
            <div id="parent"> <div id="main">
                <h2 className="signup-head">Become a Tezucka Member</h2>
                <p>Create your Tezucka Member profile and store your health story and access it anytime, anywhere</p>
                <input value = {email} onChange={handleChange} type="email" name="email" id="email" placeholder="name@email.com" />
                <input value = {password} onChange={handleChange} type="password" name="password" id="pass" placeholder="Password" />
                <input value = {fname} onChange={handleChange} type="text" name="fname" id="Fname" placeholder="First Name" />
                <input value = {lname} onChange={handleChange} type="text" name="lname" id="Lname" placeholder="Last Name" />
                <input value = {date} onChange={handleChange} type="date" name="date" id="" placeholder="Date of Birth" />
                <p className="data-safe">Your data stays encrypted on our servers</p>
                <input value = {country} onChange={handleChange} type="text" name="country" id="country" placeholder="India" />

                <div id="check"><input type="checkbox" name="sign-up" id="sign-up" />
                <label for="sign-up">Sign up for emails to get updates from TEZUCKA on products, offers and Member benefits</label></div>
                <p>By creating an account, you agree to Tezucka's <a href="#">Privacy Policy</a> and <a href="#">Terms of Use.</a></p>
                <Link to='/login' >
                <button type="button">JOIN US</button><br />
                </ Link>
                <a href="" className="signup-signin">Already a Member? Sign In.</a>
            </div></div>
                    </div>
    )
}