import React from 'react'
import './CategoryCircleItem.css'

const CategoryCircleItem = ({ image, label}) => {
  return (
     <div className="category-circle-item">
      <img src={image} alt={label} className='circle-image'/>
      <p className='circle-label'>{label}</p>


    </div>
  )
}

export default CategoryCircleItem