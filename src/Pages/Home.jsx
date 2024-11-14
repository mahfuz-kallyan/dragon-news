import React from 'react';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import Main from '../Components/Main';
import Header from '../Components/Header';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto py-5'>
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <Main></Main>
        </div>
    );
};

export default Home;