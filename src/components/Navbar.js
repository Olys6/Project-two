import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/logo/imagecrop.png'

const Navbar = () => {
  return (
    <nav className="navbar is-link">
      <div className="container">
        <div className="navbar-brand">
          <span className="title">
            <Link to="/" className="title">
              <figure>
                <img src={Logo} alt="Rapid Games logo" width="300px"/>
              </figure>
            </Link>
          </span>
        </div>
        <div className="navbar-start">
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link className="has-text-white" to="/allgames">See all games</Link>
          </div>
          <div className="navbar-item">
            <Link className="has-text-white" to="/mygames">My Games</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar