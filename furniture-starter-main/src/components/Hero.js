import React from 'react';

//import data
import { hero } from '../data';

const Hero = () => {

  //destructure hero
  const {title, subtitle, buttonText} =hero;
  return (
    <section className='h-[850px] w-full bg-hero
    bg-right bg-cover bg-no-repeat text-white pt-[225px]'>
      <div className='container mx-auto'>hero</div>
    </section>
  );
};

export default Hero;
   