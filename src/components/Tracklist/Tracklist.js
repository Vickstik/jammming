import React, { useState } from 'react';
import tracks from '../Track/Track.js'

function Tracklist(props) {
    const [results, setResults] = useState([]);
    //let tracks = results;
    return(
        tracks[0].name
    )
}

export default Tracklist;