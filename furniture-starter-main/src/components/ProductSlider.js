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
    <Swiper modules={[Pagination, Navigation]} pagination = {{clickable: true}}>
      {pages.map((page, index) => {
        return <SwiperSlide key={index}>

          <div>
            {page.productList.map((product, index) =>{
              //destructure product
              const {image, name, price,oldPrice} = product;
              return(
                <div>
                  <div>
                    <img src = {image.type} all='' />
                    <div>
                      <HiPlus className='text-xl text-primary' />
                    </div>
                  </div>
                  <div>{name}</div>
                  <div>
                    <div>$ {price}</div>
                    <div>$ {oldPrice}</div>
                  </div>
                </div>
              );
            })}
          </div>

        </SwiperSlide>
      })}
    </Swiper>
  );
};

export default ProductSlider;


