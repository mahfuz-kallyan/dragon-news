import React from 'react';
import { NavLink } from 'react-router-dom';
import user from '../assets/images/user.png'

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-between my-8'>
           <div></div>
           <div className='space-x-6'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/career">Career</NavLink>
            <NavLink to="/about">About</NavLink>
           </div>
           <div className='flex justify-center items-center gap-4'>
            <img src={user} alt="" />
            <button className='btn btn-neutral'>Login</button>
           </div>
        </div>
    );
};

export default Navbar;