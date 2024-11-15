import React from 'react';
import { Outlet } from 'react-router-dom';

const Authlayout = () => {
    return (
        <div>
            <h2>AuthLayout</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Authlayout;