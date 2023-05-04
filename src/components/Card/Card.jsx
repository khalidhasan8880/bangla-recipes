import { Rating } from '@smastrom/react-rating';
import React from 'react';
import LazyLoad from 'react-lazy-load';
const Card = ({ recipe }) => {
    const {
        recipeName,
        recipeLike,
        recipeRating,
        recipePicture,
        ingredients,
        instructions
    } = recipe
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
                <LazyLoad threshold={.95}>
                    <img src={recipePicture} alt="Shoes" />
                </LazyLoad>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{recipeName}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <div className='flex justify-between items-center w-full'>
                        <div>
                            <Rating style={{ maxWidth: 100 }} value={Math.round(recipeRating || 0)} readOnly />
                        </div>
                        <button className='btn-custom'>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;