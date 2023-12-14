import React, { useState } from 'react';
import Tracklist from '../Tracklist/Tracklist.js'
import './Playlist.css';

function Playlist() {
    const [playlistName, setPlaylistName] = useState('');
    const [playlistTracks, setPlaylistTracks] = useState('');
    function handleTracks(e) {
        setPlaylistTracks(e.target.value)
    }
    return (
        <div>
            <label for='playlistName'>Rename your Playlist:</label>
            <input
            type="text"
            value={playlistName}
            onChange={(e) => {setPlaylistName(e.target.value)}}
            />
            <div>
                <button onClick={handleTracks} value='winter'><Tracklist /></button>
            </div>
            <h2>{playlistName}</h2>
            <p>{playlistTracks}</p>
            
        </div>
    )
}

export default Playlist;