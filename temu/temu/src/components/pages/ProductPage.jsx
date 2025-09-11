import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // useParams helps us get the id from the URL.For example: in /product/1, it will give id = 1.
// import { Pr } from "../../assets/data/ProductData";
import { fetchProducts } from "../../api/FetchProducts";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import Price from "../atoms/Price";
import "./ProductPage.css";

export const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  // useEffect(() => {
  //   fetchProducts()
  //     .then(function (data) {
  //       console.log(data.products);
  //       return setProducts(data.products);
  //     })
  //     .catch((err) => console.error(err)); //shorthand
  // }, []);

  const { id } = useParams();
  console.log(id);

  const product = products.find((p) => String(p.id) === id); //useParams() gives the id from the URL as a string

  if (!product) return <h2>Product not found</h2>;

  const imageObj = {
    image: product.images[0],
    alt: product.title,
    width: "100%",
    height: "auto",
    objectFit: "cover",
  };

  return (
    <div className="product-page">
      <Image obj={imageObj} />

      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <Price price={product.price} />
        <Button className="add-to-cart-btn">Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductPage;
