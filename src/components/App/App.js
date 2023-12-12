import React, { useState } from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist.js';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../Spotify.js";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  return (
    <div>
      <h1>Jammming</h1>
      <div>
        <SearchBar />
        <div>
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;