import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import realdaam from '../images/realdaam.png'

const Works = () => {

    return (
        <section className='bg-white'>
            <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 py-16">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold capitalize mb-5">
                        Our works
                    </h2>
                </div>
                <div className='mb-16'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <div className=''>
                            <SwiperSlide>
                                <a href='https://www.realdaam.com/' >
                                    <img
                                        src={realdaam}
                                        alt="Realdaam"
                                        className="mx-auto w-full h-[250px] hover:scale-105 transition-all duration-300"
                                    />
                                </a>
                                <div className="mt-4 px-4 relative">
                                    <h4 className="text-base font-semibold mb-10 truncate">Realdaam (for all people in need)</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href='https://www.realdaam.com/' >
                                    <img
                                        src={realdaam}
                                        alt="Realdaam"
                                        className="mx-auto w-full h-[250px] hover:scale-105 transition-all duration-300"
                                    />
                                </a>
                                <div className="mt-4 px-4 relative">
                                    <h4 className="text-base font-semibold mb-2 truncate">Realdaam (for all people in need)</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href='https://www.realdaam.com/' >
                                    <img
                                        src={realdaam}
                                        alt="Realdaam"
                                        className="mx-auto w-full h-[250px] hover:scale-105 transition-all duration-300"
                                    />
                                </a>
                                <div className="mt-4 px-4 relative">
                                    <h4 className="text-base font-semibold mb-2 truncate">Realdaam (for all people in need)</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href='https://www.realdaam.com/' >
                                    <img
                                        src={realdaam}
                                        alt="Realdaam"
                                        className="mx-auto w-full h-[250px] hover:scale-105 transition-all duration-300"
                                    />
                                </a>
                                <div className="mt-4 px-4 relative">
                                    <h4 className="text-base font-semibold mb-2 truncate">Realdaam (for all people in need)</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href='https://www.realdaam.com/' >
                                    <img
                                        src={realdaam}
                                        alt="Realdaam"
                                        className="mx-auto w-full h-[250px] hover:scale-105 transition-all duration-300"
                                    />
                                </a>
                                <div className="mt-4 px-4 relative">
                                    <h4 className="text-base font-semibold mb-2 truncate">Realdaam (for all people in need)</h4>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};


export default Works