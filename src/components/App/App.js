import React, { useState } from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist.js';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from "../SearchResults/SearchResults";
import Track from '../Track/Track.js';
import Spotify from "../MySpotify.js";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = (track) => {
        if (!playlistTracks.includes(track)){
            setPlaylistTracks((prev) => [...prev, track]);
        }
        
    }
    const removeTrack = (track) => {
        if(playlistTracks.includes(track)){
            setPlaylistTracks((prev) => prev.filter((currTrack)=> currTrack.id !== track.id));
        }
    }
  
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div>
        <SearchBar />

        <div>
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <p>The search results are {searchResults}</p>
          <Playlist />
          <Track onAdd='re' onRemove='er' />
        </div>
      </div>
    </div>
  );
}

export default App;