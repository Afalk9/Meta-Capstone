import logo from './Assets/Logo .svg';
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Order from "./Pages/Order";
import Reservations from "./Pages/Reservations";
import Login from "./Pages/Login"
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import React, { useState } from 'react';

export const Context = React.createContext();

export function Nav(){
    const[formData, setFormData]= useState({
            username:'',
        })
    return(
        <Context.Provider value={[formData, setFormData]}>
        <div >
       
            <BrowserRouter>
                <nav className="navigation">
                    <img src={logo} alt="Logo" className='nav-item'/>
                    
                    <Link to="/" className="nav-item"> Home </Link>
                    <Link to="/About" className="nav-item">About</Link>
                    <Link to="/Menu" className="nav-item">Menu</Link>
                    <Link to="/Order" className="nav-item">Order</Link>
                    <Link to="/Reservations" className="nav-item">Reservations</Link>
                    <Link to="/Login" className="nav-item">Login</Link>
                    {formData.username && <span  className='welcomeUsername nav-item'>Hello {formData.username}</span>}
                    
                </nav>
            
            <Routes> 
                <Route path="/" element={<Homepage/>}></Route>
                <Route path="/About" element={<About/>}></Route>
                <Route path="/Menu" element={<Menu/>}></Route>
                <Route path="/Order" element={<Order/>}></Route>
                <Route path="/Reservations" element={<Reservations/>}></Route>
                <Route path="/Login" element={<Login/>}></Route>
           
            </Routes>
            </BrowserRouter>
        </div>
        </Context.Provider>
    )
}
