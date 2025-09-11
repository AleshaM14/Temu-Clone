import React from "react";
import "./BlackBar.css";

const BlackBar = () => {
  return (
    <div className="black-bar">
      Shop now, pay later with
      <img
        src="https://aimg.kwcdn.com/upload_aimg/temu/7d02a691-5391-418d-a38e-eadde739e22e.png.slim.png?imageView2/2/w/300/q/70/format/webp"
        alt="Afterpay"
      />
      <img
        src="https://aimg.kwcdn.com/upload_aimg/temu/baacbca4-6cbb-41ce-bc81-59eab8ac3638.png.slim.png?imageView2/2/w/300/q/70/format/webp"
        alt="Klarna"
      />
      <img
        src="https://aimg.kwcdn.com/upload_aimg/temu/8d57d602-98bf-4da0-b127-ff667db68fdf.png.slim.png?imageView2/2/w/300/q/70/format/webp"
        alt="Affirm"
      />
    </div>
  );
};

export default BlackBar;
