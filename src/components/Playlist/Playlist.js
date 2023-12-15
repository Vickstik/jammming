import React, { useState } from 'react';
import Tracklist from '../Tracklist/Tracklist.js'
import './Playlist.css';

function Playlist(props) {
    const [playlistName, setPlaylistName] = useState('');
    const [playlistTracks, setPlaylistTracks] = useState('');

    return (
        <div>
            <label for='playlistName'>Name your Playlist:</label>
            <input
            id='playlistName'
            name="playlistName"
            type="text"
            value={playlistName}

            />
            <div>
                <Tracklist track={props.playlistTracks} isRemovable={true} removeTrack={props.removeTrack} />
            </div>
            <h2>{playlistName}</h2>
            <p>{playlistTracks}</p>
            
        </div>
    )
}

export default Playlist;