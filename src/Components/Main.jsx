import React from 'react';
import LeftAside from './layout-component/LeftAside';
import RightAside from './layout-component/RightAside';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='grid md:grid-cols-12 gap-6 mx-auto'>
            <div className='col-span-3'>
                <LeftAside></LeftAside>
            </div>
            <div className='col-span-6'>
                <Outlet />
            </div>
            <div className='col-span-3'>
                <RightAside></RightAside>
            </div>
        </div>
    );
};

export default Main;