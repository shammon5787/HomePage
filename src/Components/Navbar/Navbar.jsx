import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <span className='logo'>PAK</span>
                <ul className='menus'>
                    <li>Home</li>
                    <li>Explorer</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
        </nav>
    </div>
  )
}

export default Navbar