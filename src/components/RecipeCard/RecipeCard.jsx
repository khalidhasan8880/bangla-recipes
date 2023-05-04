import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import toast, { Toaster } from 'react-hot-toast';
import LazyLoad from 'react-lazy-load';
const RecipeCard = ({ recipe }) => {
    const [favorite, setFavorite] = useState(false)
    const {
        recipeName,
        recipeLike,
        recipeRating,
        recipePicture,
        ingredients,
        instructions
    } = recipe

    const favoriteHandler = (name)=>{
        setFavorite(true)
        toast.success(name + ' Added Favorite')
        
    }
    return (
        <div className="card card-compact w-full  bg-base-100 shadow-xl">
            <Toaster />
            <figure>
                <LazyLoad>
                    <img src={recipePicture} alt="recipe" />
                </LazyLoad>
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{recipeName}</h2>
                <h3 className='text-2xl'>Ingredients : </h3>
                <ol>
                    {
                        ingredients.map((item,index) => <li key={index}>{item}</li>)
                    }
                </ol>
                <h3 className='text-2xl'>Instructions : </h3>
                <ul>
                    {
                        instructions.map((item, index)=> <li key={index} >{item}</li>)
                    }
                </ul>
                <div>
                    <p className='font-semibold text-xl flex items-center gap-x-1'> <FaHeart size={19} className='text-pr'></FaHeart>  {recipeLike ? recipeLike : 0} likes</p>
                </div>

                <div className="card-actions">
                    <div className='flex justify-between items-center w-full'>
                        <div>
                        <Rating style={{ maxWidth: 100 }} value={Math.round(recipeRating || 0)}  readOnly/>
                        </div>
                    <button onClick={()=> favoriteHandler(recipeName)} className={favorite? 'btn' : 'btn-custom'} disabled={favorite ? true : false}>{favorite? <>Added Favorite</>: <>Add To Favorite</>}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;