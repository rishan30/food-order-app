import React from 'react'
import "./NavBar.css"
import { assets } from '../../assets/assets'

const NavBar = () => {
    return (
        <div className='navbar'>
            <img className='logo' src={assets.logo} alt="" />
            <h3> Welcome Admin</h3>
            <img className='profile' src={assets.profile_image} alt="" />

        </div>
    )
}

export default NavBar
