import React from "react";
import CategoryCircleItem from "../atoms/CategoryCircleItem";
import "./CategoryGrid.css";

const CategoryGrid = ({ item }) => {
  return (
    <div className="category-grid">
      {item.map((item, i) => (
        <CategoryCircleItem key={i} image={item.image} label={item.title} />
      ))}
    </div>
  );
};

export default CategoryGrid;





