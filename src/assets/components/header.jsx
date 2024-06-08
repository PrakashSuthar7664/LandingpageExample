import React from 'react'
import { FaBars } from "react-icons/fa";
const header = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex justify-center items-center gap-3'>
        <img src="./public/assets/Logo.svg" alt="logo" />
        <button className='bg-gradient-to-r from-orange-400 to-red-500  text-xs text-white p-2 rounded-2xl' > hoster is hiring</button>
      </div>
      <ul className='hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6' > 
        <li><a href="#">Plans</a></li>
        <li><a href="#">Find Domain</a></li>
        <li><a href="#">Why Hoster</a></li>
      </ul>
      <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
        <a  className='text-gray-400 'href="#"> SignIn</a>
        <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
      </div>
      <div className='lg:hidden'>
      <FaBars />
      </div>
      </div>
  )
}

export default header