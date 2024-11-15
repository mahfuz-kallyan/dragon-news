import React from 'react';
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { author, title, rating, image_url, thumbnail_url, details, total_view } = news;

    return (
        <div className="card bg-base-100 shadow-xl space-y-5 mb-5 p-6">
            <div className='flex justify-between items-center bg-gray-200 p-2 rounded-lg'>
                <div className='flex justify-center items-center gap-3'>
                    <img className='w-[40px] rounded-full' src={author.img} alt="" />
                    <div>
                        <h3 className='text-[#403F3F] font-semibold'>{author.name}</h3>
                        <p className='text-[#706F6F]'>{author.published_date}</p>
                    </div>
                </div>
                <div className='space-x-2'>
                    <button>
                        <CiBookmark></CiBookmark>
                    </button>
                    <button>
                        <CiShare2></CiShare2>
                    </button>
                </div>
            </div>
            <h2 className='text-xl font-bold text-[#403F3F]'>{title}</h2>
            <figure>
                <img
                    src={image_url}
                    alt="Shoes" />
            </figure>
            <p className='p-2 text-sm text-[#706F6F]'>{details.slice(0, 150)}...{''}
                <Link to={`/news/${news._id}`}><span className='text-primary'>Read more</span></Link>
            </p>
            <div className='flex justify-between items-center px-2'>
                <div className='flex gap-3'>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className='text-[#706F6F]'>{rating.number}</p>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <FaRegEye className='text-[#706F6F]'></FaRegEye>
                    <p className='text-[#706F6F]'>{total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;