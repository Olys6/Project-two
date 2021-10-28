import React from 'react'
import { Link } from 'react-router-dom'

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

    // console.log('Sorted IDs ->', IDs.sort())

    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index
    }

    const filteredIDs = IDs.filter(item => !isNaN(item)) 
    filteredIDs.sort()

    //console.log(filteredIDs)

    uniqueIDs = filteredIDs.filter(onlyUnique)

    // console.log('Unique ->',uniqueIDs)


    // filteredIDs.forEach(id => console.log(id))


    // uniqueIDs.map(id => {
    //   //console.log(id)
    //   console.log('Description', localStorage.getItem(`${id} Game Description`))
    //   console.log('Image',localStorage.getItem(`${id} Game Image`))
    //   console.log('Game Platform',localStorage.getItem(`${id} Game Platform`))
    //   console.log('Game Release',localStorage.getItem(`${id} Game Release`))
    //   console.log('Game Title',localStorage.getItem(`${id} Game title`))
    // })

    // let keyName = localStorage.key(index)
  
    // filteredIDs.forEach(id => {
    //   console.log(id)
    //   // console.log('Description', localStorage.getItem(`${id} Game Description`))
    //   // console.log('Image',localStorage.getItem(`${id} Game Image`))
    //   // console.log('Game Platform',localStorage.getItem(`${id} Game Platform`))
    //   // console.log('Game Release',localStorage.getItem(`${id} Game Release`))
    //   // console.log('Game Title',localStorage.getItem(`${id} Game title`))
    // })

    // console.log('Description', localStorage.getItem(`${gameId} Game Description`))
    // console.log('Image',localStorage.getItem(`${gameId} Game Image`))
    // console.log('Game Platform',localStorage.getItem(`${gameId} Game Platform`))
    // console.log('Game Release',localStorage.getItem(`${gameId} Game Release`))
    // console.log('Game Title',localStorage.getItem(`${gameId} Game title`))
  
  }

  // const gameDescription = localStorage.getItem(`${gameId} Game Description`)
  // const gameGameImage = localStorage.getItem(`${gameId} Game Image`)
  // const gameGamePlatform = localStorage.getItem(`${gameId} Game Platform`)
  // const gameGameRelease = localStorage.getItem(`${gameId} Game Release`)
  // const gameTitle = localStorage.getItem(`${gameId} Game title`)

  checkLocalStorage()

  // const localStorageArr = []
  // for (const property in localStorage) {
  //   // console.log(`${property}: ${localStorage}`)
  //   // localStorageArr.push(`${property}: ${localStorage}`)
  //   console.log('property', property)
  // }

  // const myGames = Object.entries(localStorage)
  // // for (const prop in localStorage) {
  // //   console.log('prop ->', prop)
  // //   console.log('localStorage', localStorage)
  // //   myGames.push(`${localStorage[prop]}`)
  // // }
  

  // myGames.forEach(([key, value]) => {
  //   console.log('key ->', key)
  //   console.log('value ->', value)
  // }) 

  // // for (i = 0, i < )

  // console.log('myGames ->', myGames)
  // console.log('values ->', Object.entries(localStorage).sort())



  // const addTable = () => {
  //   console.log('Description', localStorage.getItem(`${gameId} Game Description`))
  //   console.log('Image', localStorage.getItem(`${gameId} Game Image`))
  //   console.log('Game Platform', localStorage.getItem(`${gameId} Game Platform`))
  //   console.log('Game Release', localStorage.getItem(`${gameId} Game Release`))
  //   console.log('Game Title', localStorage.getItem(`${gameId} Game title`))
  // }

  // addTable()

  return (
    <section className="section container table-section">
      <table className="table">
        <thead>
          <tr>
            <th><abbr title="Game ID">Game ID</abbr></th>
            <th><abbr title="Title">Thumbnail</abbr></th>
            <th><abbr title="Title">Title</abbr></th>
            <th><abbr title="Description">Description</abbr></th>
            <th><abbr title="Platform">Platform</abbr></th>
            <th><abbr title="Release Date">Release Date</abbr></th>
          </tr>
        </thead>
        {/* {localStorage.length > 0 &&  */}
        {/* <tfoot>
          <tr>
            <th><abbr title="Game ID">Game ID</abbr></th>
            <th><abbr title="Title">Thumbnail</abbr></th>
            <th><abbr title="Title">Title</abbr></th>
            <th><abbr title="Description">Description</abbr></th>
            <th><abbr title="Platform">Platform</abbr></th>
            <th><abbr title="Release Date">Release Date</abbr></th>
          </tr>
        </tfoot> */}
        {/* } */}
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
                <td>{localStorage.getItem(`${id} Game ID`)}</td>
                <td>image</td>
                <td>{localStorage.getItem(`${id} Game title`)}</td>
                <td>{localStorage.getItem(`${id} Game Description`)}</td>
                <td>{localStorage.getItem(`${id} Game Platform`)}</td>
                <td>{localStorage.getItem(`${id} Game Release`)}</td>
              </tr>
            )
          })}
        
        </tbody>
      </table>
    </section>
  )
}

export default MyGames