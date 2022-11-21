import React from 'react'
import {Images} from '../images/images'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import "swiper/css/pagination";
import {Autoplay, Pagination} from 'swiper'
import { CategoriesList } from './categoriesList';

export const Banner = () => {
    return (
        <>
            <div className='topContent'>
                <Swiper
                    modules={[Pagination,Autoplay]}
                    autoplay={{delay: 5000}}
                    speed={800}
                    pagination={{
                        clickable: true,
                    }}
                    loop
                    className='slider'>
                    <SwiperSlide className='slide'>
                        <img src={Images.banner1} alt=''/>
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <img src={Images.banner2} alt=''/>
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <img src={Images.banner3} alt=''/>
                    </SwiperSlide>
                </Swiper>
                <CategoriesList/>
            </div>
        </>
    )
}
