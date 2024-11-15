import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Authlayout = () => {
    return (
        <div className='font-poppins bg-[#F3F3F3]'>
            <div className='w-11/12 mx-auto py-5'>
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Authlayout;