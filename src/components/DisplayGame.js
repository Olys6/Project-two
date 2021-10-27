
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import { Link } from 'react-router-dom'

const DisplayGame = () => {

  const [gameInfo, setGameInfo] = useState([])
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    // const getData = async () => {
    //   try {
    //     const { data } = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/game', 
    //       {
    //         params: { id: '450' },
    //         headers: {
    //           'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    //           'x-rapidapi-key': '7d06a0e0damshdd8616ef3244152p1f2eadjsn9f732ca3d067',
    //         },
    //       })
    //     setGameInfo(data)
    //   } catch (err) {
    //     setHasError(true)
    //   }
    // }
    // // setGameInfo('181')
    // getData()
    // console.log('DATA ->', gameInfo)
    const getData = async () => {
      try {
        const { data } = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/game',
          {
            params: { id: { id } },
            headers: {
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
              'x-rapidapi-key': '7d06a0e0damshdd8616ef3244152p1f2eadjsn9f732ca3d067',
            },
          })
        // console.log('Data ->', data)
        setGameInfo(data)
      } catch (err) {
        // console.log(err)
        setHasError(err)
      }
    }
    getData()
  }, [])

  // console.log('gameInfo', gameInfo)
  // console.log('id', id)
  // console.log('Game Info SS', gameInfo.screenshots[0].image)
  // console.log(gameInfo.minimum_system_requirements)
  // console.log('Hello')
  
  // const [mini, setMini] = useState([])

  // setMini(Object.values(gameInfo.minimum_system_requirements))
 
  //console.log('Game Info', Object.values(gameInfo.minimum_system_requirements))
  const minimumSystemRequirements = []
  for (const property in gameInfo.minimum_system_requirements) {
    console.log(`${property}: ${gameInfo.minimum_system_requirements[property]}`)
    minimumSystemRequirements.push(`${gameInfo.minimum_system_requirements[property]}`)
  }
  
  console.log('Array', minimumSystemRequirements)

  return (
    <section className="displayGameContainer">
      <div className="container">
        <h2 className="title has-text-centered">{gameInfo.title}</h2> 
        <hr />
        <div className="columns">
          <div className="column is-half">
            <figure className="image">
              <a href={gameInfo.freetogame_profile_url}><img className="displayThumbnail" src={gameInfo.thumbnail} alt={gameInfo.title}/></a>
            </figure>
            <a href={gameInfo.freetogame_profile_url} target="_blank" rel="noreferrer" className="button is-success is-fullwidth is-large tryNowButton">Try Now!</a>
            <hr />
            <p className="is-4">Minimum System Requirements</p>
            {/* <p className="is-4">{gameInfo.minimum_system_requirements.os}</p> */}
            {/* <p>{gameInfo.minimum_system_requirements}</p> */}
            <ul>
              {minimumSystemRequirements.map(( index ) => {
                return (
                  <li key={index}>{ minimumSystemRequirements[index] }</li>
                )
              })}
              {/* <li>{result[0][1]}</li> */}
              {/* <li>{result[1][1]}</li>
              <li>{result[2][1]}</li> */}
              {/* {gameInfo.minimum_system_requirements.map(( item, index ) => {
                return (<li key={index}>{item}</li>)
              })} */}
              <li>{minimumSystemRequirements[0]}</li>
              <li>{minimumSystemRequirements[1]}</li>
            </ul>
          </div>
          <div className="column is-half">
            <h4 className="title is-4">Game Description</h4>
            <p className="">{gameInfo.description}</p>
            <hr />
            <h4 className="title is-5 develPublishH4">Developer by: <span className="develPublish">{gameInfo.developer}</span> and Published by <span className="develPublish">{gameInfo.publisher}</span></h4>
            <hr />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DisplayGame