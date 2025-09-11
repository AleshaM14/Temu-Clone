
import React from 'react';
import PromoText from "../molecules/PromoText";
import PromoItem from '../molecules/PromoItem';
import './PromoBanner.css';


const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <PromoText />
      <PromoItem imgSrc="https://img.kwcdn.com/product/algo_check/auto/3bcf2854ac40e0d93a0b738b48107e8b_1745417187310.jpg?imageView2/2/w/800/q/70/format/webp"/>
      <PromoItem imgSrc="https://img.kwcdn.com/product/fancy/b17c1e8d-8a0e-4ea4-af57-de9d8e2ebcd4.jpg?imageView2/2/w/800/q/70/format/webp"/>
    </div> 
  );
};

export default PromoBanner;
