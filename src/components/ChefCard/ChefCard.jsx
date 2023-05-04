import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
const ChefCard = ({chef}) => {
    const {id, picture, chefName, bio, likes, recipes, experience } = chef
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <LazyLoad threshold={.95}>
                    <img src={picture} alt="Shoes" />
                </LazyLoad>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{chefName}</h2>
                <p className='text-sm'>{bio}</p>
                <p className='font-semibold'>Experience : {experience}</p>
                <p className='font-semibold'>Chef Likes : {likes.map((like, index)=> <span key={index}>{like},</span>)}</p>
                <p className='font-semibold'>Available Recipes : {recipes.length}</p>
                <div className="card-actions justify-end">
                    <Link to={`/recipes/${id}`} className='btn-custom'>View Recipes</Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;