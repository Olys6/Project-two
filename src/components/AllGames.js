import axios from 'axios'
import React, { useState, useEffect } from 'react'
import GameCard from './GameCard'

const AllGames = () => {

  const [games, setGames] = useState([])
  const [option, setOption] = useState('all')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', 
          {
            headers: {
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
              'x-rapidapi-key': '7d06a0e0damshdd8616ef3244152p1f2eadjsn9f732ca3d067',
            },
          })
        // console.log('Response Data ->', data)
        setGames(data)
      } catch (err) {
        console.log('ERR ->', err)
      }
    }
    getData()
  }, [])

  const handleOption = (event) => {
    setOption(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const filterGames = () => {
    const regexSearch = new RegExp(search, 'ig')
    // games.map(game => {
    //   console.log(game.title)
    // })
    return games.filter(game => {
      return regexSearch.exec(game.title) && (game.genre === option || option === 'all')
    })
  }

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="custom-row">
            <input type="text" className="input is-rounded custom-input" placeholder="Search Games" onChange={handleSearch}/>
            <select name="option" className="select" onChange={handleOption}>
              <option value="all">All</option>
              <option value="MMORPG">MMORPG</option>
              <option value="Battle Royale">Battle Royale</option>
              <option value="Shooter">Shooter</option>
              <option value="Action RPG">Action RPG</option>
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
          
          <div className="columns is-multiline">
            {filterGames().map((game) => {
              // console.log('Game ->', game)
              // console.log('Game Thumbnail ->', game.thumbnail)
              // console.log('Game Title ->', game.title)
              // console.log('Game Genre ->', game.genre)
              // console.log('Game Platform ->', game.platform)
              // console.log('Game Publisher ->', game.publisher)
              // console.log('Game Developer ->', game.developer)
              // console.log('Game Release ->', game.release_date)
              // console.log('Game Short Description ->', game.short_description.slice(0, 40))
              // console.log('Game image', game)
              return (
                <GameCard key={game.id} game={game}/>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )

}

export default AllGames