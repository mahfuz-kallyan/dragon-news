import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='mt-3'>
            <h2 className='font-semibold'>Find On Us</h2>
            <div className="join flex join-vertical">
                <button className="btn join-item justify-start">
                    <FaFacebook></FaFacebook> Facebook
                </button>
                <button className="btn join-item justify-start">
                    <FaGithub></FaGithub> Github
                </button>
                <button className="btn join-item justify-start">
                    <FaInstagram></FaInstagram> Instagram
                </button>
                <button className="btn join-item justify-start">
                    <FaTwitter></FaTwitter> Twitter
                </button>
            </div>
        </div>
    );
};

export default FindUs;