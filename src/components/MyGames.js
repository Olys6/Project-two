import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const MyGames = () => {

  let uniqueIDs = null
  
  // Check local storage length if it < 0 populate the table with the games stored in LS
  const checkLocalStorage = () => {
    // console.log('Local storage Length ->',localStorage.length)
    // console.log(localStorage)

    const IDs = []
    for (const key in localStorage) {
      //console.log(Number(key.slice(0,3)))
      //console.log(Number(key.slice(0,3)))
      IDs.push(Number(key.slice(0,3)))
    }

    const onlyUnique = (value, index, self) => {
      return self.indexOf(value) === index
    }

    const filteredIDs = IDs.filter(item => !isNaN(item)) 
    filteredIDs.sort()

    //console.log(filteredIDs)

    uniqueIDs = filteredIDs.filter(onlyUnique)

  
  }

  checkLocalStorage()


  const handleClick = (event) => {
    console.log('Event', event.target.id)
    localStorage.removeItem(`${event.target.id} Game ID`)
    localStorage.removeItem(`${event.target.id} Game Description`)
    localStorage.removeItem(`${event.target.id} Game Image`)
    localStorage.removeItem(`${event.target.id} Game Platform`)
    localStorage.removeItem(`${event.target.id} Game Release`)
    localStorage.removeItem(`${event.target.id} Game title`)
    window.location.reload()
  }


  console.log(localStorage.getItem('306 Game Image'))

  return (
    <section className="section container table-section">
      {localStorage.length > 0 ? 
        <table className="table is-hoverable">
          <thead>
            <tr className="table-row-head">
              <th className="custom-table-head"><abbr title="Game ID">Game ID</abbr></th>
              <th><abbr title="Title">Thumbnail</abbr></th>
              <th><abbr title="Title">Title</abbr></th>
              <th><abbr title="Description">Description</abbr></th>
              <th><abbr title="Platform">Platform</abbr></th>
              <th><abbr title="Release Date">Release Date</abbr></th>
              <th><abbr title="Remove Game">Remove Game</abbr></th>
            </tr>
          </thead>
          <tbody>
            {uniqueIDs.map(id => {
            //console.log(id)
            // console.log('Description', localStorage.getItem(`${id} Game Description`))
            // console.log('Image',localStorage.getItem(`${id} Game Image`))
            // console.log('Game Platform',localStorage.getItem(`${id} Game Platform`))
            // console.log('Game Release',localStorage.getItem(`${id} Game Release`))
            // console.log('Game Title',localStorage.getItem(`${id} Game title`))
              return (
                <tr key={id}>
                  <td className="center">{localStorage.getItem(`${id} Game ID`)}</td>
                  <td className="center"><img src={localStorage.getItem(`${id} Game Image`)} alt={localStorage.getItem(`${id} Game ID`)} /></td>
                  <td className="center"><Link to={`/games/${id}`}>{localStorage.getItem(`${id} Game title`)}</Link></td>
                  <td className="center">{localStorage.getItem(`${id} Game Description`)}</td>
                  <td className="center">{localStorage.getItem(`${id} Game Platform`)}</td>
                  <td className="center">{localStorage.getItem(`${id} Game Release`)}</td>
                  <td className="center" onClick={handleClick}>
                    <i className="fas fa-window-close custom-close" id={id}></i>
                    <span className="hide-game-id">{`${id}`}</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        : <article className="message is-info">
          <div className="message-header">
            <p>Create a Collection of your favourite games</p>
          </div>
          <div className="message-body">
            <p><strong>No Games in your Collection yet</strong> - You can add games to your collection from the cards or in the card descriptions.</p>
          </div>
        </article>
      }
    </section>
  )
}

export default MyGames