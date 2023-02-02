import React from 'react';

//import swiper react components
import { Swiper , SwiperSlide } from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider.css';

//import required modules
import { Navigation, Pagination } from 'swiper';

//import data
import { products } from '../data';

//import icons
import { HiPlus } from 'react-icons/hi';

const ProductSlider = () => {
  //destructure products
  const { pages } = products;
  return (
    <Swiper>
      {pages.map((page, index) => {
        return <SwiperSlide></SwiperSlide>
      })}
    </Swiper>
  );
};

export default ProductSlider;
