
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import { Link } from 'react-router-dom'

const DisplayGame = () => {


  const [gameInfo, setGameInfo] = useState([])
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    
    const getData = async () => {
      try {
        const { data } = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/game',
          {
            params: { id: { id } },
            headers: {
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
              'x-rapidapi-key': process.env.REACT_APP_API_KEY.toString(),
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

  const minimumSystemRequirements = []
  for (const property in gameInfo.minimum_system_requirements) {
    console.log(`${property}: ${gameInfo.minimum_system_requirements[property]}`)
    minimumSystemRequirements.push(`${property}: ${gameInfo.minimum_system_requirements[property]}`)
  }
  
  
  console.log('Array', minimumSystemRequirements)

  // const handleClick = () => {
  //   console.log('clicked')
  //   // localStorage.setItem(`${gameInfo.id} Game ID`, gameInfo.id)
  //   // localStorage.setItem(`${gameInfo.id} Game Image`, gameInfo.thumbnail)
  //   // localStorage.setItem(`${gameInfo.id} Game title`, gameInfo.title)
  //   // localStorage.setItem(`${gameInfo.id} Game Description`, gameInfo.short_description)
  //   // localStorage.setItem(`${gameInfo.id} Game Platform`, gameInfo.platform)
  //   // localStorage.setItem(`${gameInfo.id} Game Release`, gameInfo.release_date)
  // }

  const handleClick = () => {
    console.log('clicked')
    localStorage.setItem(`${gameInfo.id} Game ID`, gameInfo.id)
    localStorage.setItem(`${gameInfo.id} Game Image`, gameInfo.thumbnail)
    localStorage.setItem(`${gameInfo.id} Game title`, gameInfo.title)
    localStorage.setItem(`${gameInfo.id} Game Description`, gameInfo.short_description)
    localStorage.setItem(`${gameInfo.id} Game Platform`, gameInfo.platform)
    localStorage.setItem(`${gameInfo.id} Game Release`, gameInfo.release_date)
  }

  return (
    <section className="displayGameContainer">
      <div className="container">
        <h2 className="title has-text-centered">{gameInfo.title}</h2> 
        <hr />
        <div className="columns">
          <div className="column is-half">
            <figure className="image">
              <a href={gameInfo.freetogame_profile_url} target="_blank" rel="noreferrer"><img className="displayThumbnail " src={gameInfo.thumbnail} alt={gameInfo.title}/></a>
            </figure>
            <div className="columns" onClick={handleClick}>
              <a className="column button is-one-fifth is-large is-link addGamesButton" onClick={handleClick}><i className="fas fa-plus"></i></a>
              <a href={gameInfo.freetogame_profile_url} target="_blank" rel="noreferrer" className="column  button is-success is-fullwidth is-large tryNowButton">Try Now!</a>
            </div>
            <hr />
            <div className="columns">

              {/* <p className="column is-one-fifth shareText">Share:</p> */}
              <a className="button column is-info shareButton" href={`https://twitter.com/share?url=${gameInfo.freetogame_profile_url}&text=Check out ${gameInfo.title}!`} target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"> </i> Twitter
              </a>
              <a className="button column is-link shareButton" href={`https://www.facebook.com/sharer/sharer.php?u=Check out for free${gameInfo.freetogame_profile_url}`} target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-square"> </i> Facebook 
              </a>
              <a className="button column is-danger shareButton" href={`mailto:?subject=Check out ${gameInfo.title}!&body=${gameInfo.freetogame_profile_url}`} target="_blank" rel="noreferrer">
                <i className="fas fa-envelope"></i> Email
              </a>
              <a className="button column is-warning shareButton" href="https://reddit.com/submit?url=<URL>&title=<TITLE>" target="_blank" rel="noreferrer">
                <i className="fab fa-reddit-square"></i> Reddit
              </a>
            </div>
            <hr />
            {/* <p className="is-4">{gameInfo.minimum_system_requirements.os}</p> */}
            {/* <p>{gameInfo.minimum_system_requirements}</p> */}
            <div className="tile is-ancestor">
              <div className="tile is-parent ">
                <ul className="  leftTile is-two-fifths is-child tile notification is-dark is-6">
                  <p className="  minimumSpecs title">Minimum System Requirements</p>
                  {minimumSystemRequirements.map(( minimumSystemRequirement, index ) => {
                    return (
                      <li className="listItemSpecs" key={minimumSystemRequirement}>{ minimumSystemRequirements[index] }</li>
                    )
                  })}
                </ul>
                <ul className="tile notification is-dark is-5 rightTile column is-two-fifths">
                  <p className=" ">Publisher: <span className="title develPublishH4">{gameInfo.publisher}</span> | Developer: <span className="title develPublishH4">{gameInfo.developer}</span></p>
                </ul>

                {/* <button className="button tile is-link" onClick="copyToClipboard('{gameInfo.freetogame_profile_url}')"><i className="far fa-copy"></i></button> */}
              </div>
            </div>
          </div>
          <div className="column is-half">
            <h4 className="title is-4">Game Description</h4>
            <p className="gameDescription animate__backInRight">{gameInfo.description}</p>
            {/* <hr /> */}
  
            {/* <h4 className="title is-5 develPublishH4">Developer by: <span className="develPublish">{gameInfo.developer}</span> and Published by <span className="develPublish">{gameInfo.publisher}</span></h4> */}
            <hr />
            <h4 className="title is-5">Platform: {gameInfo.platform}</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DisplayGame