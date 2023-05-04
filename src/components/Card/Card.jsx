import { Rating } from '@smastrom/react-rating';
import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
const Card = ({ recipe }) => {
    const {
        recipeId,
        recipeName,
        recipeRating,
        recipePicture
    } = recipe
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
                <LazyLoad threshold={.95}>
                    <img src={recipePicture} alt="Shoes" />
                </LazyLoad>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white">{recipeName}</h2>
                <p></p>
                <div className="card-actions justify-end">
                    <div className='flex justify-between w-full'>
                        <div>
                            <Rating style={{ maxWidth: 100 }} value={Math.round(recipeRating || 0)} readOnly />
                        </div>
                        <Link to={`/recipe/${recipeId}`} className='btn-custom'>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;