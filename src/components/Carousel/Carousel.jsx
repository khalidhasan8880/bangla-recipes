import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Carousel = ({ chefs }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                chefs.map(chef =>
                    <SwiperSlide style={{
                        backgroundImage: `linear-gradient( rgba(1, 2, 2, 0.5),rgba(215, 0, 0, 0.4)), url(${chef?.recipes[0]?.recipePicture})`,
                        
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'

                    }}>
                        <div className='flex items-center justify-center h-full'>
                            <div className='grid sm:grid-cols-2 w-full sm:px-11 md:px-20 py-20 '>
                                <div className=' order-2 sm:order-1 flex items-center justify-center'>
                                    <div className='text-white  ms-2'>
                                      <h2 className='font-bold text-1xl sm:text-3xl'>{chef.chefName}</h2>
                                      <p className='my-5 text-sm'>{chef.bio}</p>
                                      <button className='btn-custom '>View Recipes</button>
                                    </div>
                                </div>
                                <div className=' order-1 sm:order-2 flex items-center justify-center'>
                                <img className='rounded-lg w-96 border-4' src={chef.picture} alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)

            }
        </Swiper>
    );
};
// onClick={()=> viewRecipesHandler(chef.id)} 
export default Carousel;