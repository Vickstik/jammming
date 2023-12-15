import React, { useState } from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist.js';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from "../SearchResults/SearchResults";
import Spotify from '../MySpotify.js';

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

    const search = (term) => {
      if (term !== '')
        Spotify.search(term).then(setSearchResults)
    } 
  let term;
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div>
        <SearchBar search={search} value={term}/>
        <div>
          <SearchResults searchResults={searchResults} addTrack={addTrack} />
          <p>The search results are {searchResults}</p>
          <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            removeTrack={removeTrack}
            />
        </div>
      </div>
    </div>
  );
}

export default App;