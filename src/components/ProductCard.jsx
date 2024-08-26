import React from 'react';

const ProductCard = ({ name, image }) => {
  return (
    <div className='product-card rounded-lg w-full sm:w-60 h-[26rem] bg-dark-brown flex flex-col items-start justify-start shadow-lg mb-12 transition-transform duration-300 hover:scale-105'>
      <img src={image} alt={name} className='w-full h-full object-cover opacity-45 rounded-t-lg' />
      <div className='flex flex-col p-2'>
        <h3 className='font-jost text-white text-lg ml-2 mb-0'>{name}</h3>
        <p className='font-jost text-white text-opacity-45 font-light text-sm ml-2 mb-2'>More detail</p>
      </div>
    </div>
  );
}

export default ProductCard;
