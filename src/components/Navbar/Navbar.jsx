import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <>
     <div className='container'>
        <img src={logo} />
        <div className='nav'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/academic">Academics</Link></li>
            <li><Link to="/admission">Admission</Link></li>
            <li><Link to="/faculty">Faculty</Link></li>
            <li><Link to="/student">Student</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>

            {/* <li>Home</li>
            <li>Academics</li>
            <li>Admission</li>
            <li>Faculty</li>
            <li>Student</li>
            <li>Gallery</li>
            <li>About Us</li>
            <li>Contact Us</li> */}
        </ul>
        </div>
     </div>
    </>
  )
}

export default Navbar