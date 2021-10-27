import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const DisplayGame = () => {

  const [gameInfo, setGameInfo] = useState(null)
  const [hasError, setHasError] = useState(false)
  const { id } = useParams

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://ga-winebored.herokuapp.com/wines/${id}`)
        setGameInfo(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [id])

  return (
    <section>
      <div className="container">
        <h2 className="title has-text-centered">{gameInfo.name}</h2> 
        <hr />
        <div className="columns">
          <div className="column is-half">
            <figure className="image">
              <img src={gameInfo.thumbnail} alt={gameInfo.name}></img>
            </figure>
          </div>
          <div className="column is-half">
            <h4 className=""></h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DisplayGame