import React from 'react';

const DiscountTag = ({ discount }) => {
  return (
    <div style={{ color: 'red', fontWeight: 'bold', marginTop: '5px' }}>{discount}</div>
  );
};

export default DiscountTag;
