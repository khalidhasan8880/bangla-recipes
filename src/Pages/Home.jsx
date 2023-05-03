import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Carousel from '../components/Carousel/Carousel';
import ChefCard from '../components/ChefCard/ChefCard';

const Home = () => {
    const { chefs } = useLoaderData()
    console.log(chefs);
    
    return (
        <div>
            {/* banner  */}
            <div>
                <Carousel chefs={chefs}></Carousel>
            </div>
            {/* chef cards */}
            <div className='container mx-auto flex flex-col items-center justify-center mt-36'>
                <h3 className='text-center mb-11 text-2xl font-bold'>Chefs</h3>
                <div className='flex flex-wrap gap-8 justify-center  '>
                    {
                        chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;