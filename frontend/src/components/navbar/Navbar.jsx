import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/frontend_assets/assets'

const Navbar = () => {
  return (
    <div className='navbar' >
        <img src={assets.logo} alt="logo" className='logo' />
        <ul className="navbar-menu">
            <li className="navbar-item">Home</li>
            <li className="navbar-item">Menu</li>
            <li className="navbar-item">Mobile-app</li>
            <li className="navbar-item">Contact-us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button>sign in</button>
        </div>
    </div>
  )
}

export default Navbar ;