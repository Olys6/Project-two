import React from 'react'
import { Link } from 'react-router-dom'


const GameCard = ({ game, id }) => {

  const handleClick = (event) => {
    console.log(event.target.innerText)
    event.target.innerText = 'Added!'
    console.log('clicked')
    localStorage.setItem(`${game.id} Game ID`, game.id)
    localStorage.setItem(`${game.id} Game Image`, game.thumbnail)
    localStorage.setItem(`${game.id} Game title`, game.title)
    localStorage.setItem(`${game.id} Game Description`, game.short_description)
    localStorage.setItem(`${game.id} Game Platform`, game.platform)
    localStorage.setItem(`${game.id} Game Release`, game.release_date)
  }

  return (
    <div key={game.id} className="column is-one-quarter-desktop is-one-third-tablet">
      <div className="card custom-card">
        <Link to={`/games/${id}`}>
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={game.thumbnail} alt={game.title} />
            </figure>
          </div>
          <div className="card-header">
            <h2 className="card-header-title">{game.title}</h2>
          </div>
          <div className="card-content custom-content">
            {/* Place this tag on the right next to the game.title */}
            <span className="tag is-warning align-right">{game.genre}</span>
            <h6 className="subtitle is-6 align-left"><h6 className="bold">Platform:</h6>{`${game.platform}`}</h6>
            {/* <h6 className="subtitle is-6">Publisher: {game.publisher}</h6>
            <h6 className="subtitle is-6">Developer: {game.developer}</h6> */}
            <h6 className="subtitle is-6 align-left"><h6 className="bold">Release Date:</h6> {game.release_date}</h6>
            <h6 className="subtitle is-6 align-left">{`${game.short_description.slice(0, 40)}...`}</h6>
          </div>
        </Link>
        <div className="add-games-button custom-div" onClick={handleClick}>
          <i className="fas fa-plus"></i><p className="my-games">My Games</p>
        </div>
      </div>
    </div>
  )
}

export default GameCard