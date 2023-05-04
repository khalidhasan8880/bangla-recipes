import React from 'react';
import sponser1 from '../../assets/1.png'
import sponser2 from '../../assets/2.png'
import sponser3 from '../../assets/3.png'
import sponser4 from '../../assets/4.png'
import sponser5 from '../../assets/5.png'
import Marquee from 'react-fast-marquee';
const Sponsers = () => {
    return (
        <div className='mt-52'>
            <h2 className='text-center mb-16 text-3xl font-semibold'>Sponsored by (not actually):</h2>
            <Marquee speed={70}>
                <img className='w-20 mx-28' src={sponser1} alt="" />
                <img className='w-20 mx-28' src={sponser2} alt="" />
                <img className='w-20 mx-28' src={sponser3} alt="" />
                <img className='w-20 mx-28' src={sponser4} alt="" />
                <img className='w-20 mx-28' src={sponser5} alt="" />
            </Marquee>
        </div>
    );
};

export default Sponsers;