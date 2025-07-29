import { useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import Hero from './Components/Hero/Hero'
import Stats from './Components/Stats/Stats'
import SecondScreen from './Components/SecondScreen/SecondScreen'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Stats />
      <SecondScreen />
    </>
  )
}

export default App
