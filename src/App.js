import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Hero from './components/Hero'
// import AllGames from './components/AllGames'
import DisplayGame from './components/DisplayGame'
import Home from './components/Home'
import MyGames from './components/MyGames'
import AllGames from './components/AllGames'


const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Hero />
      <AllGames /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/allgames" component={AllGames} />
        <Route exact path="/games/:id" component={DisplayGame}/>
        <Route exact path="/mygames" component={MyGames}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
