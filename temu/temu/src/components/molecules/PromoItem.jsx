// import React from 'react'
// import Image from '../atoms/Image'

// const PromoItem = ({imgSrc}) => {
//   return (
//     <div>
//       <img src='' alt="promo product" className='promo-img'></img>
//     </div>
//   )
// }

// export default PromoItem


import React from 'react';
import Image from '../atoms/Image';

const PromoItem = ({ imgSrc }) => {
  const imageData = {
    image: imgSrc,
    alt: "promo product",
    width: "200px",
    height: "250px",
    objectFit: "cover",
  };

  return (
    <div className="promo-item">
      <Image obj={imageData} />
    </div>
  );
};

export default PromoItem;

