import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Hero from './components/Hero'
import AllGames from './components/AllGames'


const App = () => {


  
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <AllGames />
      {/* <Route exact path="/" component={AllGames}/> */}
    </BrowserRouter>
  )
}

export default App
