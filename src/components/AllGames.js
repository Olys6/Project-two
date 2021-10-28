import axios from 'axios'
import React, { useState, useEffect } from 'react'
import GameCard from './GameCard'

const AllGames = () => {

  const [games, setGames] = useState([])
  const [genreOption, setGenreOption] = useState('all')
  const [platformOption, setPlatformOption] = useState('all')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', 
          {
            params: { 'sort-by': 'alphabetical' },
            headers: {
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
              'x-rapidapi-key': process.env.REACT_APP_API_KEY.toString(),
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

  const handleGenreOption = (event) => {
    setGenreOption(event.target.value)
  }

  const handePlatformOption = (event) => {
    setPlatformOption(event.target.value)
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
      return regexSearch.exec(game.title) && (game.genre === genreOption || genreOption === 'all')  && (game.platform === platformOption || platformOption === 'all')
    })
  }

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="custom-row">
            <div>
              <input type="text" className="input is-rounded custom-input" placeholder="Search Games" onChange={handleSearch}/>
            </div>
            <div>
              <select name="option" className="select" onChange={handleGenreOption}>
                <option value="all">All Genres</option>
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
              <select name="platformOption" className="select" onChange={handePlatformOption}>
                <option value="all">All Platforms</option>
                <option value="PC (Windows)">Windows</option>
                <option value="Web Browser">Web Browser</option>
              </select>
            </div>
          </div>
          
          <div className="columns is-multiline custom-center">
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
                <GameCard key={game.id} game={game} id={game.id}/>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )

}

export default AllGames