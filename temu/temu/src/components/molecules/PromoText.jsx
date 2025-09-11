import React from 'react'
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import Para from '../atoms/Para';

const PromoText = () => {
  return (
    <div>
      <Para  text="MISSED TEMU WEEK? MORE DEALS AWAIT!" className="small-heading"/>
      <Heading text="GREAT PRICES" className="main-heading"/>
      <Button className="cta-button">  ⏰ ENDS ON 7/18 | SHOP NOW!</Button>

    </div>
  )
}

export default PromoText