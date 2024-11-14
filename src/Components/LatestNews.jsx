import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-3 items-center bg-gray-200'>
           <p className='bg-[#D72050] text-white p-2'>Latest</p>
           <Marquee pauseOnHover={true} speed={70} className='space-x-14'>
            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta nam dolore excepturi molestias! Doloribus accusamus libero voluptates aliquid delectus!</Link>
            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta nam dolore excepturi molestias! Doloribus accusamus libero voluptates aliquid delectus!</Link>
            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta nam dolore excepturi molestias! Doloribus accusamus libero voluptates aliquid delectus!</Link>
           </Marquee>
        </div> 
    );
};

export default LatestNews;