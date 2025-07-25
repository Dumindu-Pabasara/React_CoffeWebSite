import React from 'react'
import './Navigation.css'

function Navigation() {
  return (
    <header className="header">
      <div className="nav">
        <div className="logo">
          <h1>Caffeine</h1>
        </div>
        <nav className="navigation">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About Us</a>
          <a href="#facilities">Facilities</a>
        </nav>
        <div className="header-actions">
          <button className="sign-in">Sign In</button>
          <button className="search-btn">🔍</button>
        </div>
      </div>
    </header>
  )
}

export default Navigation