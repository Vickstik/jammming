import React, { useState } from 'react';
import Tracklist from '../Tracklist/Tracklist.js'
import './Playlist.css';

function Playlist(props) {
    const [buttonText, setButtonText] = useState('Save to Spotify');
    const [playlistContent, setPlaylistContent] = useState('');
    const handleChange = (event) => {
        props.onNameChange(event.target.value);
    }
    const handleClick = (event) => {
        
        props.onSave(event.target);
        
        setTimeout(()=>{
            setButtonText('Saved');
            setPlaylistContent('The playlist has successfully been saved!')
        }, 1000);
    
        setTimeout(()=>{
            setButtonText('Save To Spotify');
            setPlaylistContent('');
        }, 5000)
    }

    return (
        <div className="Playlist">
            <label for='playlistName'>Name your Playlist:</label>
            <input onChange={handleChange} value={props.playlistName} onFocus={(e) => e.target.select()} />
            <Tracklist tracks={props.playlistTracks} isRemovable={true} onRemove={props.onRemove} />
            <h2 className='Playlist-saved'>{playlistContent}</h2>
            <button className="Playlist-save" onClick={handleClick}>{buttonText}</button>
        </div>
    );
}

export default Playlist;