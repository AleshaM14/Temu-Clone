import React, { useEffect, useState } from "react";
import "./lightningdeals.css";
import Grid from "../organisms/Grid";
import { fetchProducts } from "../../api/FetchProducts";

const LightningDeals = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((products) => {
        const formatted = products.slice(0, 5).map((item) => ({
          id: item.id,
          title: item.title,
          price: `$${item.price}`,
          oldPrice: (item.price * 1.5).toFixed(2),
          discount: `-${item.discountPercentage || 50}% limited time`,
          rating: Math.round(item.rating),
          image:
            item.images?.[0] ??
            item.thumbnail ??
            "https://via.placeholder.com/150",
        }));
        setProducts(formatted);

      })
      .catch((err) => console.error("Failed to fetch Lightning Deals:", err));
  }, []);

  // const products = [
  //   {
  //     id: 1,
  //     title: "Wireless Headphones",
  //     price: "$59",
  //     oldPrice: 79.99,
  //     discount: "-50% limited time",
  //     rating: 4,
  //     image:
  //       "https://img.kwcdn.com/product/fancy/1c7ee28b-afc5-41ce-991b-da503723c08e.jpg?imageView2/2/w/800/q/70/format/webp",
  //   },
  //   {
  //     id: 2,
  //     title: "Smartwatch",
  //     price: "$89",
  //     oldPrice: 99.99,
  //     discount: "-50% limited time",
  //     rating: 5,
  //     image:
  //       "https://img.kwcdn.com/product/fancy/537a5b50-aafd-410a-a779-2b0174fda9f7.jpg?imageView2/2/w/800/q/70/format/webp",
  //   },
  //   {
  //     id: 3,
  //     title: "Bluetooth Speaker",
  //     price: "$39",
  //     oldPrice: 79.99,
  //     discount: "-40% limited time",
  //     rating: 3,
  //     image:
  //       "https://img.kwcdn.com/product/fancy/6ffb76c4-7d7e-4c85-b0d8-df34bca8ec4c.jpg?imageView2/2/w/800/q/70/format/webp",
  //   },
  //   {
  //     id: 19,
  //     title: "Mini Projector",
  //     price: "$150",
  //     oldPrice: 189.99,
  //     discount: "-50% limited time",
  //     rating: 5,
  //     image:
  //       "https://img.kwcdn.com/product/fancy/af568403-379a-4d2c-9842-6fbb12d2ab16.jpg?imageView2/2/w/800/q/70/format/webp",
  //   },
  //   {
  //     id: 4,
  //     title: "Portable Charger",
  //     price: "$25",
  //     oldPrice: 79.99,
  //     discount: "-50% limited time",
  //     rating: 4,
  //     image:
  //       "https://img.kwcdn.com/product/fancy/b342a29f-2f13-49b4-b7b5-f161185d8314.jpg?imageView2/2/w/800/q/70/format/webp",
  //   },
  // ];

  return (
    <>
      <div className="banner-section">
        <div className="banner-text">
          <span className="emoji">⚡</span>
          <span className="title">Lightning deals</span>
          <span className="offer">Limited time offer →</span>
        </div>
      </div>

      <div>
        <Grid
          Products={products}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </div>
    </>
  );
};

export default LightningDeals;
