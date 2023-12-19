import React, { useState, useEffect } from 'react';
import './SearchBar.css';

function SearchBar(props) {
    const [input, setInput] = useState('');
    const search = () => {
        props.onSearch(input);
    }
    const handleChange = (event) => {
        setInput(event.target.value);
    }
    return (
        <div className="SearchBar">
            <input 
                placeholder="Enter a song, artist or album"
                onChange={handleChange}
                onFocus={(e)=>e.target.select()} />
            <button className="SearchButton" onClick={search}>Search</button>
        </div>
    )
}

export default SearchBar;