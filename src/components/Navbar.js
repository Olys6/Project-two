import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar is-link">
      <div className="container">
        <div className="navbar-brand">
          <span className="title">
            <Link to="/" className="title">Rapid Games</Link>
          </span>
        </div>
        <div className="navbar-start">
          
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link className="has-text-white" to="/">See all games</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar