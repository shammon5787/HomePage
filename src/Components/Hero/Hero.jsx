import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'
import play from '../../assets/play.png'
import puse from '../../assets/puse.png'

const Hero = ({HeroData, heroCount, playStatus, setheroCount, setplayStatus}) => {
  return (
    <div className='hero'>
        <div className='hero-text'>
            <p>{HeroData.text1}</p>
            <p>{HeroData.text2}</p>
        </div>
        <div className='hero-explorer'>
            <h1>Explor your day</h1>
            <img style={{width:'20px'}} src= {arrow} alt="" />
        </div>
        
    </div>
  )
}

export default Hero