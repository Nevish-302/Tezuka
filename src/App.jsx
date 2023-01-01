import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import TitleScreen from "./components/TitleScreen";
import './App.css'
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome";
import Bio from "./components/Bio";
import Main from "./components/Main";
import Upload from "./components/Upload";
import Footer from "./components/Footer";

function App() {

  return (
    <BrowserRouter>
      <div className="App"> 
      <Routes>
          <Route path = "/" exact element={<TitleScreen />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/signup' exact element={<SignUp />} />
          <Route path='/bio' exact element={<Bio />} />
          <Route path='/main' exact element={<Main />} />
          <Route path='/welcome' exact element={<Welcome />} />
          <Route path='/footer' exact element={<Footer />} />
          <Route path='/upload' exact element={<Upload />} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
