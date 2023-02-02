import React from 'react';

//import data
import { products } from '../data';

//import components
import ProductSlider from '../components/ProductSlider';

const Products = () => {
  //destructure products
  const {title, subtitle } = products;
  return (
    <section className='section'>Products</section>
  );
};

export default Products;



