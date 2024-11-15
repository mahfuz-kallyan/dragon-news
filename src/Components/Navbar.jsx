import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import user1 from '../assets/images/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)

    return (
        <div className='w-11/12 mx-auto flex justify-between my-8'>
           <div>{user && user.email}</div>
           <div className='space-x-6'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/career">Career</NavLink>
            <NavLink to="/about">About</NavLink>
           </div>
           <div className='flex justify-center items-center gap-4'>
            <img src={user1} alt="" />
            {
                user && user?.email ? <button onClick={logOut}  className='btn btn-neutral'>Log Out</button> : <Link to={"/auth/login"} className='btn btn-neutral'>Login</Link> 
            }
           
           </div>
        </div>
    );
};

export default Navbar;