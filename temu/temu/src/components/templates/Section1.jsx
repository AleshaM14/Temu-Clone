import React from "react";
import Grid from "../organisms/Grid";
import price from "../atoms/Price";

const Section1 = ({cartItems, setCartItems}) => {
  const Products = [
    {
      id: "1",
      title: "charger",
      price: "$12",
      rating:5,
      image:
        "https://img.kwcdn.com/product/fancy/44716bfd-8d35-404c-a331-27e9b3759728.jpg?imageView2/2/w/500/q/60/format/webp",
    },
    {
      id: "2",
      title: "Toys",
      price: "$62",
      rating:3,
      image:
        "https://img.kwcdn.com/product/fancy/44716bfd-8d35-404c-a331-27e9b3759728.jpg?imageView2/2/w/500/q/60/format/webp",
    },
    {
      id: "3",
      title: "AC",
      price: "$92",
      rating:1,
      image:
        "https://img.kwcdn.com/product/fancy/44716bfd-8d35-404c-a331-27e9b3759728.jpg?imageView2/2/w/500/q/60/format/webp",
    },
    {
      id: "4",
      title: "Mat",
      price: "$2",
      rating:4,
      image:
        "https://img.kwcdn.com/product/fancy/44716bfd-8d35-404c-a331-27e9b3759728.jpg?imageView2/2/w/500/q/60/format/webp",
    },
    {
      id: "1",
      title: "charger",
      price: "$12",
      rating:5,
      image:
        "https://img.kwcdn.com/product/fancy/44716bfd-8d35-404c-a331-27e9b3759728.jpg?imageView2/2/w/500/q/60/format/webp",
    },
    {
      id: "2",
      title: "Toys",
      price: "$62",
      rating:3,
      image:
        "https://img.kwcdn.com/product/fancy/44716bfd-8d35-404c-a331-27e9b3759728.jpg?imageView2/2/w/500/q/60/format/webp",
    },
    {
      id: "3",
      title: "AC",
      price: "$92",
      rating:1,
      image:
        "https://img.kwcdn.com/product/fancy/44716bfd-8d35-404c-a331-27e9b3759728.jpg?imageView2/2/w/500/q/60/format/webp",
    },
    {
      id: "4",
      title: "Mat",
      price: "$2",
      rating:4,
      image:
        "https://img.kwcdn.com/product/fancy/44716bfd-8d35-404c-a331-27e9b3759728.jpg?imageView2/2/w/500/q/60/format/webp",
    },
  ];

  return (
    <div className="Section1">
      <Grid Products={Products} cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default Section1;

