import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Recipe = () => {
    // const [recipe, setRecipe]= useState()
    const recipe =   useLoaderData()
    
    const {recipe_img} = recipe
    return (
        <div className='container mx-auto'>
            <img className='w-full h-screen' src={recipe_img} alt="" />
            <div className='grid grid-cols-2 sm:grid-cols-4'>
                <div className='flex justify-center items-center'>
                    icon 
                    <div>
                        Cook Time
                        <p>{55} Min</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;