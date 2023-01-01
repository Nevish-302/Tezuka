import React from "react";
import { Link } from "react-router-dom";
import './Login.css'

export default function Login()
{
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [mobile, setMobile] = React.useState('')
    const [otp, setOtp] = React.useState('') 
    
    function handleChange(event)
    {
        const {name, value} = event.target
        name == 'email'? setEmail(value) : name == 'password' ? setPassword(value) : name == 'mobile' ? setMobile(value) : setOtp(value)
    }
    return (
        <div className="Login">
        <a href=""><i  className="fa">&#xf060;</i></a>
        <div id="parent">
            <div id="main">
                <h2 className="Login-head">LOGIN TO YOUR TEZUCKA MEMBER PROFILE</h2>
                <input className='login-input' onChange = {handleChange} value = {email} type="email" name="email" id="email" placeholder="name@email.com" />
                <input className='login-input' onChange = {handleChange} value = {password} type="password" name="password" id="pass" placeholder="Password" />
                <input className='login-input' onChange = {handleChange} value = {mobile} type="number" name="mobile" id="number" placeholder="Enter your mobile number to receive otp" />
                <button type="button" className="login-button">RECEIVE OTP</button>
                <input className='login-input' onChange = {handleChange} value = {otp} type="number" name="otp" id="otp" placeholder="ENTER YOUR OTP" />
                <Link to='/welcome'>
                <button type="submit" className="login-button">SIGN IN</button><br />
                </Link>
                <Link to='/login'>
                <a href='' id="sign-up">Don't have an account? Sign up</a>
                </Link>
        </div></div>
</div>

    )
}