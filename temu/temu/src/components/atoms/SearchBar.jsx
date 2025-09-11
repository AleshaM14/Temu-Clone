import React from 'react'

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <input type='text' className='search-input' 
      placeholder='Search on Temu'/>
      <button className='search-button circle-hover'>🔍</button>

    </div>
  )
}

export default SearchBar