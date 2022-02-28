import React from 'react'
import "./Navbar.css"
import {NavLink} from 'react-router-dom'
export default function Navbar() {
  return (
    <div className="Navbar">
                <NavLink  to="/" className="Button_Home_Nav" >Home</NavLink>
                <NavLink  to="/Astro" className="Button_Home_Nav" >Astronomy Picture of the Day</NavLink>
                <NavLink  to="/About" className="Button_Home_Nav" >Contact</NavLink>
        </div>
  )
}