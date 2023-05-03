import React from 'react';
import { FaBeer, FaHeart } from 'react-icons/fa';
const RecipeCard = ({recipe}) => {
    const {
        recipeName,
        recipeLike,
        recipeRating,
        recipePicture,
        ingredients,
        instructions
    } = recipe
        
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={recipePicture} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{recipeName}</h2>
            <h3 className='text-2xl'>Ingredients : </h3>
            <ol>
                {
                    ingredients.map(item=> <li>{item}</li>)
                }
            </ol>
            <h3 className='text-2xl'>instructions : </h3>
            <ul>
                {
                    instructions.map(item=> <li>{item}</li>)
                }
            </ul>
            <p className='font-semibold flex'> <FaHeart></FaHeart> {recipeLike} likes </p>

            <div className="card-actions justify-end">
                <button>Add To Favorite</button>
            </div>
        </div>
    </div>
    );
};

export default RecipeCard;