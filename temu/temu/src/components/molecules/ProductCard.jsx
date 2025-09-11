import React from "react";
import Image from "../atoms/Image";
import Price from "../atoms/Price";
import Para from "../atoms/Para";
import AddToCartBtn from "../atoms/AddToCartBtn";
import Stars from "../atoms/Ratings";
import "./ProductCard.css";
import OldPrice from "../atoms/OldPrice";
import DiscountTag from "../atoms/DiscountTag";
import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";


const ProductCard = ({ mProduct, cartItems, setCartItems }) => {
  const objToAddDefaultStyle = {
    image: mProduct.image || mProduct.thumbnail || "fallback.jpg",
    alt: mProduct.title,
    width: "100%",
    height: "auto",
    objectFit: "cover",
  };

  const handleAddToCart = (e) => {
    e.preventDefault(); // ✅ This prevents navigating to the product page when Add to Cart is clicked
    setCartItems([...cartItems, mProduct]);
    alert(`${mProduct.title} added to cart!`);
  };

  return (
    <Link
      to={`/product/${mProduct.id}`}
      className="Pcard"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Image obj={objToAddDefaultStyle} />
      <Para text={mProduct.title} />

      <div className="price-line">
        <Price price={mProduct.price} />
        <OldPrice oldPrice={mProduct.oldPrice} />
      </div>

      <DiscountTag discount={mProduct.discount} />

      <AddToCartBtn onClick={handleAddToCart} />

      <Stars rating={mProduct.rating} />
    </Link>
  );
};

export default ProductCard;




