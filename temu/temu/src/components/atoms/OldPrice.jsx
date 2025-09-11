import React from 'react'

const OldPrice = ({oldPrice}) => {
  return (
    <span style={{textDecoration: 'line-through', color: 'grey', marginLeft: '8px'}}>${oldPrice}</span>
  )
};

export default OldPrice;