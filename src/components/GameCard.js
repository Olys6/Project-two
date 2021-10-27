import React from 'react'
import { Link } from 'react-router-dom'


const GameCard = ({ game, id }) => {
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
            <span className="tag is-warning">{game.genre}</span>
            <h6 className="subtitle is-6">Platform: {game.platform}</h6>
            {/* <h6 className="subtitle is-6">Publisher: {game.publisher}</h6>
            <h6 className="subtitle is-6">Developer: {game.developer}</h6> */}
            <h6 className="subtitle is-6">Release Date: {game.release_date}</h6>
            <h6 className="subtitle is-6">{`${game.short_description.slice(0, 40)}...`}</h6>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default GameCard