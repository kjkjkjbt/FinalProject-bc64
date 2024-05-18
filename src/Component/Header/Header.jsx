import React from 'react'
import { useSelector } from 'react-redux';
import {Signin} from './Signin';
import {Signout} from './Signout';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const {infoUser} = useSelector((state) => state.userReducer);
    const renderUserNav = ()=> {
        if (infoUser) {
            return <Signin />;
        } else {
            return <Signout /> 
        }
    }
  return (
    // <header >
    //     <div className='text-white '> { renderUserNav}</div>
    //     import React from 'react';

  
    <header className="bg-white shadow ">{renderUserNav}
        <div classname="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div classname="flex justify-between h-16">
                <div classname="flex">
                    <NavLink to="/" classname="flex-shrink-0 flex items-center">
                        <img classname="block lg:hidden h-8 w-auto" src="https://www.airbnb.com.ar/static_assets/airbnb_logo-34bc4de6b9a55d08728acdd8d4db881c.png" alt="Airbnb" />
                        <img classname="hidden lg:block h-8 w-auto" src="https://www.airbnb.com.ar/static_assets/airbnb_logo-34bc4de6b9a55d08728acdd8d4db881c.png" alt="Airbnb" />
                    </NavLink>
                </div>
                <div classname="flex items-center">
                        <input type="text" placeholder="Where" classname="border border-gray-400 rounded-l py-2 px-4 focus:outline-none" />
                        <input type="date" placeholder="Check-in" classname="border border-gray-400 py-2 px-4 focus:outline-none" />
                        <input type="date" placeholder="Check-out" classname="border border-gray-400 py-2 px-4 focus:outline-none" />
                        <input type="number" min={1} placeholder="Guests" classname="border border-gray-400 rounded-r py-2 px-4 focus:outline-none" />
                        <button classname="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">Search</button>
                </div>
            </div>
        </div>

    </header>

    
  




    // </header>
  )
  
}

export default Header