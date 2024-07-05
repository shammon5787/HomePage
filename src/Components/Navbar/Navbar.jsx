import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <span className='logo'>PAK</span>
                <ul className='menus'>
                    <li className='list'>Home</li>
                    <li className='list'>Explorer</li>
                    <li className='list'>About</li>
                    <li className='list'>Contact</li>
                </ul>
        </nav>
    </div>
  )
}

export default Navbar