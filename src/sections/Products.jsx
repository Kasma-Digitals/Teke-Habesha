import React from 'react';
import { ProductCardArray } from '../constants'; // Ensure the correct path
import ProductCard from '../components/ProductCard'; // Ensure the correct path

const Products = () => {
  // Limit the number of products to a maximum of 8
  const displayedProducts = ProductCardArray.slice(0, 8);

  return (
    <section className='flex flex-col items-center'>
      <h3 className='font-jost font-bold text-2xl mb-4'>Products</h3>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-lg px-4'>
        {displayedProducts.map((product) => (
          <ProductCard 
            key={product.name}
            name={product.name}
            image={product.image} 
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
