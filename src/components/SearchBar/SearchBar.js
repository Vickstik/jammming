import React, { useState, useEffect } from 'react';

function SearchBar(props) {
    const [term, setTerm] = useState('');
    function handleTermChange(e) {
        setTerm(e.target.value)
    }

    return (
        <div>
            <input placeholder="Find song by title" onChange={handleTermChange} />
            <button>SEARCH</button>
        </div>
    );
}

export default SearchBar;