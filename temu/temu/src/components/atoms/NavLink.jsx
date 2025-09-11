import React from 'react'

const NavLink = ({text, href="#"}) => {
  return (
    <div>
      <a href='#' className='nav-link'>{text}</a>
    </div>
  )
}

export default NavLink