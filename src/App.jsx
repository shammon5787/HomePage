import React, { useEffect, useState } from 'react'
import Background from './Components/Background/Background'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

const App = () => {
  let HeroData = [
    {text1: "Car One", text2: "The New Design"},
    {text1: "Car Two", text2: "The Medium Design"},
    {text1: "Car Three", text2: "The Old Design"},
  ]

  const [heroCount, setheroCount] = useState(0)
  const [playStatus, setplayStatus] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setheroCount((count)=> count === 2 ? 0 : count + 1)
    }, 3000);
  }, [])
  

  return (
    <div>
      <Background heroCount = {heroCount} playStatus = {playStatus} />
      <Navbar />
      <Hero 
      HeroData = {HeroData [heroCount]} 
      heroCount = {heroCount}
      playStatus = {playStatus}
      setheroCount = {setheroCount}
      setplayStatus = {setplayStatus} />
    </div>
  )
}

export default App