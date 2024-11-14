import React from 'react';
import logo from '../assets/images/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-6 py-8'>
            <div>
            <img className='w-[300px]' src={logo} alt="" />
            </div>
            <h2 className='text-gray-500'>Journalism Without Fear and Favor</h2>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;