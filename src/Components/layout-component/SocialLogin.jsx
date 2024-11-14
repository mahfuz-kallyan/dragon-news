import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
           <h2 className='font-semibold mb-3'>Login with</h2> 
           <div className='space-y-3 mt-3'>
            <button className='btn w-full'><FaGoogle></FaGoogle> Login With Google
            </button>
            <button className='btn w-full'><FaGithub></FaGithub> Login With Github
            </button>
           </div>
        </div>
    );
};

export default SocialLogin;