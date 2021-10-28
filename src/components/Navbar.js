import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../Assets/logo/imagecrop.png'

const Navbar = () => {

  const location = useLocation()

  useEffect(() => {
    console.log('useEffect Ran')
  }, [location.pathname])

  return (
    <nav className="navbar is-link custom-nav-position">
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
            <Link className="has-text-white poppins" to="/allgames">See all games</Link>
          </div>
          <div className="navbar-item">
            <Link className="has-text-white poppins" to="/mygames">My Games</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar