import React from 'react'
import { useSelector } from 'react-redux';
import {Signin} from './Signin';
import {Signout} from './Signout';

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
    <div className='text-white '> { renderUserNav}</div>
  )
}

export default Header