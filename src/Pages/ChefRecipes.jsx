import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard/RecipeCard';
import LazyLoad from 'react-lazy-load';
const ChefRecipes = () => {
    const { id, picture, chefName, bio, likes, recipes, experience } = useLoaderData()

    return (
        <div className='container mx-auto rounded-lg p-4'>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure>
                    <LazyLoad >
                        <img style={{ height: '77vh' }} src={picture} alt="recipe" />
                    </LazyLoad>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{chefName}</h2>
                    <p className='text-sm'>{bio}</p>
                    <p className='font-semibold'>Experience : {experience}</p>
                    <p className='font-semibold'>Chef Likes : {likes.map((like, index) => <span className='mx-2' key={index}>{like}</span>)}</p>
                    <p className='font-semibold'>Available Recipes : {recipes.length}</p>
                </div>
            </div>

            <div className='container mx-auto flex flex-col items-center justify-center mt-36'>
                <h3 className='text-center mb-11 text-2xl font-bold'>Available Recipes</h3>
                <div className='grid sm:grid-cols-2 gap-3 justify-center  '>
                    {
                        recipes.map((recipe, index) => <RecipeCard key={index} recipe={recipe}> </RecipeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefRecipes;