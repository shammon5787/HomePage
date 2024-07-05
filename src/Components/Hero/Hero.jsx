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
            <p>Explore your day</p>
            <img style={{width:'30px'}} src= {arrow} alt="" />
        </div>
        <div className="hero-class">
          <ul className="hero-dots">
            <li onClick={()=>setheroCount(0)} className= {heroCount === 0 ? "hero-dot orange" : "hero-dot"} >⨀</li>
            <li onClick={()=>setheroCount(1)} className= {heroCount === 1 ? "hero-dot orange" : "hero-dot"} >⨀</li>
            <li onClick={()=>setheroCount(2)} className= {heroCount === 2 ? "hero-dot orange" : "hero-dot"} >⨀</li>
          </ul>

          <div className='hero-play'>
            <img onClick={()=>setplayStatus(!playStatus)} src={playStatus ? puse : play} alt="" />
            <p>See Video</p>
          </div>
        </div>
        
    </div>
  )
}

export default Hero