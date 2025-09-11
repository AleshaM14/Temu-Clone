import React from 'react'
import './formBtn.css'

const FormBtn = ({ text, onClick, type = "button" }) => (
  <button type={type} onClick={onClick} className="btn">
    {text}
  </button>
);


export default FormBtn;