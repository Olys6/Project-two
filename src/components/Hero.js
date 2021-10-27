import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Hero = () => {

  const [featuredGames, setFeaturedGames] = useState([])

  useEffect(() => {
  
    const getData = async () => {
      try {
        const { data } = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/game',
          {
            params: { id: Math.floor(Math.random() * 514).toString() },
            headers: {
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
              'x-rapidapi-key': '7d06a0e0damshdd8616ef3244152p1f2eadjsn9f732ca3d067',
            },
          })
        // console.log('Data ->',data)
        setFeaturedGames(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  console.log('Game Data ->', featuredGames)

  return (
    <section className="hero is-link is-halfheight">
      <div className="hero-body">
        <div className="columns container is-full">
          <div className="column is-half">
            {/* <h1 className="title">Featured Game</h1> */}
            <h2 className="title hero-title">{featuredGames.title}</h2>
            {/* <h2 className="subtitle hero-subtitle">{featuredGames.short_description}</h2> */}
            <h2 className="subtitle hero-subtitle">{featuredGames.short_description}</h2>
            <h3 className="subtitle hero-subtitle">{featuredGames.platform}</h3>
            <h3 className="hero-tag">
              <span className="tag is-warning">{featuredGames.genre}</span>
            </h3>
          </div>
          <div className="column is-half show-size">
            <img className="featured-image"src={ featuredGames.thumbnail }></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero