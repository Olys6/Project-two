import React from 'react'

const Footer = () => {
  return (
    <footer className="footer is-link footer-background-color">
      <div className="content has-text-centered">
        <p className="has-text-white">
          <strong className="has-text-white">Rapid Games &copy;</strong>
        </p>
      </div>
      <div className="content has-text-centered">
        <p className="has-text-white">
          Thank you to 
          <a href="https://www.freetogame.com" target="_blank" rel="noreferrer">
            <strong className="has-text-white"> FreeToGame.com</strong>
          </a> as the source of our data.
        </p>
      </div>
    </footer>
  )
}

export default Footer