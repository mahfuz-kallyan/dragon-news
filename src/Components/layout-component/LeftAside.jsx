import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftAside = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category)
            )
            .catch(error => console.log(error)
            )
    }, [])

    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-3'>
                <h2 className='text-lg font-semibold mb-2'>All category</h2>
                {
                    categories.map(category => <NavLink
                        to={`/category/${category.category_id}`}
                        className='btn'
                        key={category.category_id}>
                        {category.category_name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftAside;