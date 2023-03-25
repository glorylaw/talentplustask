import React from 'react'
import Hero from "../assets/Hero.svg"
import Zoom from "../assets/zoom.svg"
function Home() {
  return (
    
    <div className='pt-[100px] w-screen bg-[#004DB3]'>
        <img className='' src ={Hero} alt =""/>
        <div>
        <img className='' src ={Zoom} alt =""/>
        </div>
    </div>
    
  )
}

export default Home