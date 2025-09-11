import React, { useState } from "react";
import CategoryGrid from "../molecules/CategoryGrid";
import "./CategoriesDropdown.css";

const CategoriesDropdown = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuItems = [
    {
      title: "Home & Kitchen",
      subcategories: [
        {
          title: "Blankets & Throws",
          image:
            "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d607c476899532c9c0922a7613d677cb.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Cookware",
          image:
            "https://img.kwcdn.com/product/fancy/3a1ec5a9-484b-4791-960b-c6bd8223d01f.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Storage Boxes",
          image:
            "https://img.kwcdn.com/product/fancy/f0ad127a-ba56-47ad-84c3-b56bf553ae4e.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Blankets & Throws",
          image:
            "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d607c476899532c9c0922a7613d677cb.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Cookware",
          image:
            "https://img.kwcdn.com/product/fancy/3a1ec5a9-484b-4791-960b-c6bd8223d01f.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Storage Boxes",
          image:
            "https://img.kwcdn.com/product/fancy/f0ad127a-ba56-47ad-84c3-b56bf553ae4e.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Blankets & Throws",
          image:
            "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d607c476899532c9c0922a7613d677cb.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Cookware",
          image:
            "https://img.kwcdn.com/product/fancy/3a1ec5a9-484b-4791-960b-c6bd8223d01f.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Storage Boxes",
          image:
            "https://img.kwcdn.com/product/fancy/f0ad127a-ba56-47ad-84c3-b56bf553ae4e.jpg?imageView2/2/w/800/q/70/format/webp",
        },
      ],
    },
    {
      title: "Women's Fashion",
      subcategories: [
        {
          title: "Dresses",
          image:
            "https://img.kwcdn.com/product/fancy/5297332f-b232-4016-bbd7-a965813d534f.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Tops & Tees",
          image:
            "https://img.kwcdn.com/product/fancy/dc7c00f8-13c6-44d7-ac2f-ff8afc7b294f.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Shoes",
          image:
            "https://img.kwcdn.com/local-goods-image/20237f58f6/6a30a238-3ed6-47fb-b344-b141e34f281f_900x900.jpeg.format.jpg?imageView2/2/w/800/q/70/format/webp",
        },
         {
          title: "Dresses",
          image:
            "https://img.kwcdn.com/product/fancy/5297332f-b232-4016-bbd7-a965813d534f.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Tops & Tees",
          image:
            "https://img.kwcdn.com/product/fancy/dc7c00f8-13c6-44d7-ac2f-ff8afc7b294f.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Shoes",
          image:
            "https://img.kwcdn.com/local-goods-image/20237f58f6/6a30a238-3ed6-47fb-b344-b141e34f281f_900x900.jpeg.format.jpg?imageView2/2/w/800/q/70/format/webp",
        },
         {
          title: "Dresses",
          image:
            "https://img.kwcdn.com/product/fancy/5297332f-b232-4016-bbd7-a965813d534f.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Tops & Tees",
          image:
            "https://img.kwcdn.com/product/fancy/dc7c00f8-13c6-44d7-ac2f-ff8afc7b294f.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Shoes",
          image:
            "https://img.kwcdn.com/local-goods-image/20237f58f6/6a30a238-3ed6-47fb-b344-b141e34f281f_900x900.jpeg.format.jpg?imageView2/2/w/800/q/70/format/webp",
        },
      ],
    },
    {
      title: "Electronics",
      subcategories: [
        {
          title: "Headphones",
          image:
            "https://img.kwcdn.com/product/fancy/64dbb8f4-d6ff-4550-8722-6f1089660450.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Phone Accessories",
          image:
            "https://img.kwcdn.com/product/fancy/77270515-d487-4bdf-9ff1-36ca762e60ff.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Smart Watches",
          image:
            "https://img.kwcdn.com/local-goods-image/20237f3dc4/c2f2ada7-16cb-4da1-8cb5-4a0ce315207c_1000x1000.jpeg.format.jpg?imageView2/2/w/800/q/70/format/webp",
        },
         {
          title: "Headphones",
          image:
            "https://img.kwcdn.com/product/fancy/64dbb8f4-d6ff-4550-8722-6f1089660450.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Phone Accessories",
          image:
            "https://img.kwcdn.com/product/fancy/77270515-d487-4bdf-9ff1-36ca762e60ff.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Smart Watches",
          image:
            "https://img.kwcdn.com/local-goods-image/20237f3dc4/c2f2ada7-16cb-4da1-8cb5-4a0ce315207c_1000x1000.jpeg.format.jpg?imageView2/2/w/800/q/70/format/webp",
        },
         {
          title: "Headphones",
          image:
            "https://img.kwcdn.com/product/fancy/64dbb8f4-d6ff-4550-8722-6f1089660450.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Phone Accessories",
          image:
            "https://img.kwcdn.com/product/fancy/77270515-d487-4bdf-9ff1-36ca762e60ff.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Smart Watches",
          image:
            "https://img.kwcdn.com/local-goods-image/20237f3dc4/c2f2ada7-16cb-4da1-8cb5-4a0ce315207c_1000x1000.jpeg.format.jpg?imageView2/2/w/800/q/70/format/webp",
        },
      ],
    },
    {
      title: "Beauty & Personal Care",
      subcategories: [
        {
          title: "Skincare",
          image:
            "https://img.kwcdn.com/product/fancy/672bc832-b8e1-45a5-91fa-b340bcf6b45b.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Makeup",
          image:
            "https://img.kwcdn.com/product/fancy/68f0b976-f155-4c84-9b52-ab639f8105a6.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Hair Tools",
          image:
            "https://img.kwcdn.com/product/fancy/bac4ef92-78ae-4389-bec2-fb780b48afaf.jpg?imageView2/2/w/800/q/70/format/webp",
        },
         {
          title: "Skincare",
          image:
            "https://img.kwcdn.com/product/fancy/672bc832-b8e1-45a5-91fa-b340bcf6b45b.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Makeup",
          image:
            "https://img.kwcdn.com/product/fancy/68f0b976-f155-4c84-9b52-ab639f8105a6.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Hair Tools",
          image:
            "https://img.kwcdn.com/product/fancy/bac4ef92-78ae-4389-bec2-fb780b48afaf.jpg?imageView2/2/w/800/q/70/format/webp",
        },
         {
          title: "Skincare",
          image:
            "https://img.kwcdn.com/product/fancy/672bc832-b8e1-45a5-91fa-b340bcf6b45b.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Makeup",
          image:
            "https://img.kwcdn.com/product/fancy/68f0b976-f155-4c84-9b52-ab639f8105a6.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Hair Tools",
          image:
            "https://img.kwcdn.com/product/fancy/bac4ef92-78ae-4389-bec2-fb780b48afaf.jpg?imageView2/2/w/800/q/70/format/webp",
        },
      ],
    },
    {
      title: "Baby & Kids",
      subcategories: [
        {
          title: "Toys",
          image:
            "https://img.kwcdn.com/local-goods-image/1f193481a40/b3457758-68be-4a1a-91af-270b38c4fda6.jpeg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Clothing",
          image:
            "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/3864ac65a7bf86f814b21ceae46ba1a1.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Feeding",
          image:
            "https://img.kwcdn.com/product/fancy/63b681b6-b70e-4848-ba28-f44f49591149.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Toys",
          image:
            "https://img.kwcdn.com/local-goods-image/1f193481a40/b3457758-68be-4a1a-91af-270b38c4fda6.jpeg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Clothing",
          image:
            "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/3864ac65a7bf86f814b21ceae46ba1a1.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Feeding",
          image:
            "https://img.kwcdn.com/product/fancy/63b681b6-b70e-4848-ba28-f44f49591149.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Toys",
          image:
            "https://img.kwcdn.com/local-goods-image/1f193481a40/b3457758-68be-4a1a-91af-270b38c4fda6.jpeg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Clothing",
          image:
            "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/3864ac65a7bf86f814b21ceae46ba1a1.jpg?imageView2/2/w/800/q/70/format/webp",
        },
        {
          title: "Feeding",
          image:
            "https://img.kwcdn.com/product/fancy/63b681b6-b70e-4848-ba28-f44f49591149.jpg?imageView2/2/w/800/q/70/format/webp",
        },
      ],
    },
  ];

  return (
    <div className="categories-dropdown">
      <div className="dropdown-content">
        <div className="left">
          {menuItems.map((menuItems, idx) => (
            <div
              className={`menu-item ${idx === activeIndex ? "active" : ""}`}
              onMouseEnter={() => setActiveIndex(idx)}
              key={idx}
            >
              <p>{menuItems.title}</p>
              {/* <span>&#9662;</span> */}
            </div>
          ))}
        </div>
        <div className="right">
          <h4>{menuItems[activeIndex].title} </h4>

          <CategoryGrid item={menuItems[activeIndex].subcategories} />
        </div>
      </div>
    </div>
  );
};

export default CategoriesDropdown;
