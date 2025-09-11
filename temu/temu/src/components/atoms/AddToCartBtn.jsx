import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const AddToCartBtn = ({onClick}) => {
  return (
    <button className='AddToCartBtn' onClick={onClick}>
      <FaShoppingCart style={{ marginRight: "5px" }} />
    </button>
  )
}

export default AddToCartBtn