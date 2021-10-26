import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <span className="title">
            <Link to="/">Brand Name</Link>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar