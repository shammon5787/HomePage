import React from 'react'
import './Background.css'
import video from '../../assets/video.mp4'
import img1 from '../../assets/1.jfif'
import img2 from '../../assets/2.jfif'
import img3 from '../../assets/3.jfif'

const Background = ({heroCount, playStatus}) => {
  
    if(playStatus){
        return(
        <video className='background fade-in' autoPlay muted loop >
            <source src= {video} type='video/mp4' />
        </video>
        )
    }else if(heroCount === 0){
        return(
            <img className='background fade-in' src= {img1} alt="" />
        )
    }else if(heroCount === 1){
        return(
            <img className='background fade-in' src= {img2} alt="" />
        )
    }else if(heroCount === 2){
        return(
            <img className='background fade-in' src= {img3} alt="" />
        )
    }
}

export default Background