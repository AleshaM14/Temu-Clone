import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <div className="top-bar-item green">
          <span role="img" aria-label="truck">🚚</span>
          <strong> Free shipping </strong><span className="arrow">›</span>
          <span className="sub-text"> Special for you</span>
        </div>
        <div className="top-bar-item yellow">
          <span role="img" aria-label="box">📦</span>
          <strong> Delivery guarantee </strong>
          <span className="sub-text"> Refund for any issues</span>
        </div>
        <div className="top-bar-item yellow">
          <span role="img" aria-label="mobile">📱</span>
          <strong> Get the Temu App </strong>
        </div>
      </div>
      <div className="top-bar-right">
        <button className="seller-btn">Become a Seller</button>
        <button className="join-btn">Join Now <span className="arrow">›</span></button>
      </div>
    </div>
  );
};

export default TopBar;
