import React from 'react';

//import components
import TestimonialSlider from './TestimonialSlider';

//import data
import { testimonial } from '../data';

const Testimonial = () => {
  //destructure testimonial
  const { image , title } = testimonial;
  
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-10 gap-y-2'>
          <div>
            {/*title*/}
            <h2>{title}</h2>
            {/*slider*/}
            <TestimonialSlider />
          </div>
          {/*image*/}
          <div className='order-1'>
            <img src={image.type} all='' />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;


