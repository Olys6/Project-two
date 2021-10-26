import axios from 'axios'
import React, { useState, useEffect } from 'react'

const AllGames = () => {

  // const [games, setGame] = useState([])
  const [option, setOption] = useState('all')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', 
          {
            headers: {
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
              'x-rapidapi-key': '7d06a0e0damshdd8616ef3244152p1f2eadjsn9f732ca3d067',
            },
          })
        console.log('Response ->', response.data)
      } catch (err) {
        console.log('ERR ->', err)
      }
    }
    getData()
  }, [])


  const handleChange = (event) => {
    setOption(event.target.value)
  }

  const handleOption = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="custom-row">
            <input type="text" className="input is-rounded" placeholder="Search Games" onChange={handleChange}/>
            <select name="option" className="select" onChange={handleOption}>
              <option value="all">All</option>
              <option value="MMORPG">MMORPG</option>
              <option value="Shooter">Shooter</option>
              <option value="MMO">MMO</option>
              <option value="MMORPG">MMORPG</option>
              <option value="Social">Social</option>
              <option value="Card Game">Card Game</option>
              <option value="MOBA">MOBA</option>
              <option value="Fighting">Fighting</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Strategy">Strategy</option>
              <option value="Racing">Racing</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
        </div>
      </section>
    </>
  )

}

export default AllGames