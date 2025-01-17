import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2> Order Your Food here</h2>
        <p> The process consists of a customer choosing the restaurant of their choice, scanning the menu items, choosing an item, and finally choosing for pick-up or delivery. Payment is then administered by paying with a credit card or debit card through the app or website or in cash at the restaurant when going to pickup.</p>
        <button> View Menu </button>
      </div>
    </div>
  )
}

export default Header
