import React,{useState} from 'react'
import{MenuIcon,XIcon} from "@heroicons/react/outline"
import Techtime from "../assets/techtime.svg"

function Navbar() {
  const[nav, setNav] = useState(false)
  const handleClick = ()=> setNav(!nav)
  return (
    <div className='w-screen h-[80px] z-10 bg-[#004DB3] fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between item-center w-full h-full'>
    <div className='flex item-center'>
      <img className=' h-[7vh] pt-[15px] ' src={Techtime} alt=''/>
    <ul className='pl-[200px] hidden md:flex text-white  '>
    <li>Home</li>
    <li>About Us</li>
    <li>Courses</li>
    <li>Testimonials</li>
    <li>Community</li>
    
    </ul>
    </div>
    <div className='hidden md:flex pr-4'>
    <button className='px-8 py-3 mt-2 mb-4'>Enroll Now</button>
    </div>
    <div className='md:hidden' onClick={handleClick}>
      {!nav ? <MenuIcon className='w-5 pt-5 text-white'/>:<XIcon className='w-5 pt-5 text-white'/>}
    </div>
      </div>
      <ul className={!nav ? 'hidden':'absolute bg-[#004DB3] w-full px-8 text-white'}>
      <li className='border-b-2 border-white w-full'>Home</li>
      <li className='border-b-2 border-white w-full'>About Us</li>
      <li className='border-b-2 border-white w-full'>Courses</li>
      <li className='border-b-2 border-white w-full'>Testimonials</li>
      <li className='border-b-2 border-white w-full'>Community</li>
      <div>
        <button className='px-8 py-3 mt-2 mb-4'>Enroll Now</button>
      </div>
      </ul>
        
    </div>
  )
}

export default Navbar