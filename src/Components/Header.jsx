import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {logo, user_icon} from "../utils/constants"

const Header = () => {
    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <GiHamburgerMenu className='h-9 w-6 cursor-pointer'/>
                <img  className='h-8 mx-2 '
                src= {logo}  alt="Logo" />
            </div>
            <div className='col-span-10 text-center'>
                <input className='w-1/2 border border-gray-400 rounded-l-full p-2' type="text"/>
                <button className='border border-gray-400 rounded-r-full p-2'>Search</button>
            </div>
            <div className='col-span-1'>
                <img className='h-8'
                src={user_icon} alt="User" />
            </div>
        </div>
      )
    }


export default Header