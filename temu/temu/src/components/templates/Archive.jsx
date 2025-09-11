import React, { useEffect, useState } from "react";
import Grid from "../organisms/Grid";
import "./archive.css";
import { fetchProducts } from "../../api/FetchProducts";

const Archive = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);

useEffect(() => {
  fetchProducts().then((data) => {
    console.log("Data from API:", data); 
    setProducts(data);
  });
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
  //     id: 4,
  //     title: "Portable Charger",
  //     price: "$25",
  //     oldPrice: 79.99,
  //     discount: "-50% limited time",
  //     rating: 4,
  //     image:
  //       "https://img.kwcdn.com/product/fancy/b342a29f-2f13-49b4-b7b5-f161185d8314.jpg?imageView2/2/w/800/q/70/format/webp",
  //   },
  //   {
  //     id: 5,
  //     title: "Fitness Band",
  //     price: "$45",
  //     oldPrice: 79.99,
  //     discount: "-50% limited time",
  //     rating: 5,
  //     image:
  //       "https://img.kwcdn.com/product/fancy/a80e573d-858e-4446-b47f-e0f57eebca26.jpg?imageView2/2/w/800/q/70/format/webp",
  //   },
  //   {
  //     id: 6,
  //     title: "Gaming Mouse",
  //     price: "$35",
  //     oldPrice: 79.99,
  //     discount: "-50% limited time",
  //     rating: 4,
  //     image:
  //       "https://img.kwcdn.com/product/fancy/2c474076-2e77-449b-9fa3-c39d12b80991.jpg?imageView2/2/w/800/q/70/format/webp",
  //   },
  //   {
  //     id: 7,
  //     title: "Laptop Stand",
  //     price: "$29",
  //     oldPrice: 79.99,
  //     discount: "-50% limited time",
  //     rating: 4,
  //     image:
  //       "https://img.kwcdn.com/product/open/d91c934ad42344b28845556a25e38726-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
  //   },
  //   {
  //     id: 8,
  //     title: "USB Hub",
  //     price: "$19",
  //     oldPrice: 79.99,
  //     discount: "-50% limited time",
  //     rating: 3,
  //     image:
  //       "https://img.kwcdn.com/product/fancy/cc93ced0-303c-4054-9a03-37cc49250c29.jpg?imageView2/2/w/800/q/70/format/webp",
  //   },
  //   {
  //     id: 9,
  //     title: "Webcam",
  //     price: "$49",
  //     oldPrice: 79.99,
  //     discount: "-50% limited time",
  //     rating: 4,
  //     image:
  //       "https://img.kwcdn.com/product/fancy/b3ab6fe9-77e7-4f10-a759-4dbbd1fe7d36.jpg?imageView2/2/w/800/q/70/format/webp",
  //   },
  //   {
  //     id: 10,
  //     title: "Desk Lamp",
  //     price: "$22",
  //     oldPrice: 79.99,
  //     discount: "-50% limited time",
  //     rating: 5,
  //     image:
  //       "https://img.kwcdn.com/product/open/564cb2dd551b47e380d5ad3a9bbf4fd2-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
  //   },
  //   {
  //     id: 11,
  //     title: "External Hard Drive",
  //     price: "$79",
  //     oldPrice: 79.99,
  //     discount: "-50% limited time",
  //     rating: 4,
  //     image:
  //       "https://img.kwcdn.com/product/fancy/fbfdd430-e5c5-42e5-a869-36a7396be3ff.jpg?imageView2/2/w/800/q/70/format/webp",
  //   },
  //   {
  //     id: 12,
  //     title: "Wireless Keyboard",
  //     price: "$49",
  //     oldPrice: 79.99,
  //     discount: "-50% limited time",
  //     rating: 5,
  //     image:
  //       "https://img.kwcdn.com/product/open/3b625add12d04aecbafa3c8a3694a48a-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
  //   },
  //   {
  //     id: 13,
  //     title: "VR Headset",
  //     price: "$199",
  //     oldPrice: 79.99,
  //     discount: "-50% limited time",
  //     rating: 4,
  //     image:
  //       "https://img.kwcdn.com/product/fancy/ecbdc513-8ae9-4509-be6f-eb2da6da3af8.jpg?imageView2/2/w/800/q/70/format/webp",
  //   },
  //   {
  //     id: 14,
  //     title: "Microphone",
  //     price: "$59",
  //     oldPrice: 79.99,
  //     discount: "-50% limited time",
  //     rating: 5,
  //     image:
  //       "https://img.kwcdn.com/product/open/8ba4266c74664897ba8ad0f534c3028e-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
  //   },
  //   {
  //     id: 15,
  //     title: "Ring Light",
  //     price: "$35",
  //     oldPrice: 79.99,
  //     discount: "-50% limited time",
  //     rating: 4,
  //     image:
  //       "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/5fd5acbadf15c8edc298fc37347b88b7.jpg?imageView2/2/w/800/q/70/format/webp",
  //   },
  //   {
  //     id: 16,
  //     title: "Action Camera",
  //     price: "$120",
  //     oldPrice: 239.99,
  //     discount: "-50% limited time",
  //     rating: 4,
  //     image:
  //       "https://img.kwcdn.com/product/fancy/00b216c1-deb0-4b45-bb83-788eee974486.jpg?imageView2/2/w/800/q/70/format/webp",
  //   },
  //   {
  //     id: 17,
  //     title: "Wireless Earbuds",
  //     price: "$79",
  //     oldPrice: 99.99,
  //     discount: "-50% limited time",
  //     rating: 5,
  //     image:
  //       "https://img.kwcdn.com/product/fancy/95c8581a-d2a1-4664-98e8-400171280f5c.jpg?imageView2/2/w/800/q/70/format/webp",
  //   },
  //   {
  //     id: 18,
  //     title: "Graphic Tablet",
  //     price: "$89",
  //     oldPrice: 99.99,
  //     discount: "-50% limited time",
  //     rating: 4,
  //     image:
  //       "https://img.kwcdn.com/product/open/1a063677fb974cce98c1a5c4f3e243d3-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
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
  //     id: 20,
  //     title: "Smart Home Hub",
  //     price: "$99",
  //     oldPrice: 129.99,
  //     discount: "-50% limited time",
  //     rating: 4,
  //     image:
  //       "https://img.kwcdn.com/product/fancy/b768591e-de27-4539-a1e3-6ba0e1c22bc2.jpg?imageView2/2/w/800/q/70/format/webp",
  //   },
  // ];

  return (
    <div className="ArchiveSection">
      <h2>BIG SAVINGS</h2>
      <h3>EXPLORE YOUR INTEREST</h3>
      <Grid
        Products={products}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  );
};

export default Archive;
