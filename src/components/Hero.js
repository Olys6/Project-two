import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Hero = () => {

  const [featuredGames, setFeaturedGames] = useState([])
  const [gameId, setGameId] = useSate([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://www.freetogame.com/api/games')
        setFeaturedGames(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    const randomId = Math.float(Math.random() * data.length)
    setGameId(randomId)
  }, [])

  return (
    <>
      <section className="hero is-link is-halfheight">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-full">
              <h1 className="title">Games</h1>
              <h2 className="subtitle">description</h2>
            </div>
            <img className="column is-full" src="{}"></img>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero