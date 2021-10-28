import React from 'react'
import AllGames from './AllGames'
import Hero from './Hero'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


const Home = () => {

  const location = useLocation()

  useEffect(() => {
  
  }, [location.pathname])

  return (
    <>
      <Hero />
      <AllGames />
    </>
  )
}

export default Home