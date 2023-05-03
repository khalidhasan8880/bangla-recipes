import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Carousel from '../components/Carousel/Carousel';

const Home = () => {
    const {chefs} = useLoaderData()
    console.log(chefs);
    return (
        <div>
            {/* banner  */}
            <div>
                <Carousel chefs={chefs}></Carousel>
            </div>
            {/* chef cards */}
            <div>
                
            </div>
        </div>
    );
};

export default Home;