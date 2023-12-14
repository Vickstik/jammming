import React, { useState, useEffect } from 'react';
import './SearchBar.css';

let accessToken
function SearchBar(props) {
    const [term, setTerm] = useState('');
    function handleTermChange(e) {
        setTerm(e.target.value)
    }
    function handleOnSearch() {}
        return (
        <div>
            <input placeholder="Find song by title" onChange={handleTermChange} value={term} />
            <button onClick={handleOnSearch}>SEARCH</button>
            <p></p>
        </div>
        );
}

export default SearchBar;