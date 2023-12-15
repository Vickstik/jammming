import React, { useState, useEffect } from 'react';
import './SearchBar.css';

let accessToken
function SearchBar(props) {
    const [term, setTerm] = useState('');
    function handleTermChange(e) {
        setTerm(e.target.value)
    }

    return (
        <div>
            <input placeholder="Find song by title" onChange={handleTermChange} />
            <button onClick={props.search}>SEARCH</button>
        </div>
    );
}

export default SearchBar;