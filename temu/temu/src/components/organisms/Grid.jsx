import React from "react";
import ProductCard from "../molecules/ProductCard";
import Price from "../atoms/Price";
import "./grid.css";




const Grid = ({ Products, cartItems, setCartItems }) => {
  // ✅ Debug: Check if Products array is coming properly
  console.log(Products);

  return (
    <div className="ProductGrid">
      {Products.map((product) => (
        <ProductCard 
          key={product.id}           // ✅ Each child in a list needs a unique key(React needs a key for each item to handle updates properly.)
          mProduct={product}         // ✅ Pass the product object as prop / You pass the whole product object as mProduct to ProductCard. 
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
};

export default Grid;









