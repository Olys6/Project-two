import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Hero = () => {

  const [featuredGames, setFeaturedGames] = useState([])
  const [gameId, setGameId] = useState([])

  // useEffect(() => {
  //   const randomId = Math.floor(Math.random() * 514).toString()
  //   // console.log(randomId)
  //   setGameId(randomId.toString())
  // }, [])

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
        console.log('Data ->',data)
        setFeaturedGames(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  console.log('Featured Data ->', featuredGames)

  console.log(featuredGames)

  return (
    <>
      <section className="hero is-link is-halfheight">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-full">
              <h1 className="title">Games</h1>
              <h2 className="subtitle">description</h2>
            </div>
            <img className="column is-full" src={ featuredGames.thumbnail }></img>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero