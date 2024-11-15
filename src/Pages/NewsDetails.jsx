import React from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/layout-component/RightAside';

const NewsDetails = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-6'>
                <div className='col-span-9'>
                    <h1 className='text-2xl font-semibold mb-6'>Dragon News</h1>
                </div>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;