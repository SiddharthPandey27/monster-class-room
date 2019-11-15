import React from 'react';

import './searchBox.css';

const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <input 
            type="search"
            className="search-box"
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}

export default SearchBox;