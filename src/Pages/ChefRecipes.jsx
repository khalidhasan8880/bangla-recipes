import React from 'react';

const ChefRecipes = () => {
    return (
        <div className='container mx-auto rounded-lg p-4'>
            <div className='grid grid-cols-2'>
            <img className='w-full h-96 rounded-md mb-1' src="" alt="" />
            <div className='bg-pr'>

            </div>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-x-1'>
                <div className='flex justify-center items-center rounded-md bg-red-200 h-28 gap-x-6'>
                    <FaBeer size={44}></FaBeer>
                    <div >
                        <h4 className='font-semibold'>Cook Time </h4>
                        <p >{55} Min</p>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default ChefRecipes;