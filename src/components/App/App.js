import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from "../SearchResults/SearchResults";
import Playlist from '../Playlist/Playlist.js';
import Spotify from '../MySpotify.js';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const updateName = (name) => {
    setPlaylistName(name);
  }
  const search = (input) => {
      if (input !== '')
        Spotify.search(input).then(setSearchResults);
    }

  const addTrack = (track) => {
        if (!playlistTracks.includes(track)){
            setPlaylistTracks((prev) => [...prev, track]);
        }
    }

    const removeTrack = (track) => {
        if(playlistTracks.includes(track)){
            setPlaylistTracks((prev) => 
            prev.filter((currTrack)=> currTrack.id !== track.id));
        }
    }

    const savePlaylist = () => {
      const uris = playlistTracks.map((track) => track.uri);
      Spotify.savePlaylist(playlistName, uris).then(()=> {
        updateName("New Playlist");
        setPlaylistTracks([]);
      })
    }

    return (
    <div className="Background">
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search}/>
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updateName}
            onRemove={removeTrack}
            onSave={savePlaylist}
            />
        </div>
      </div>
    </div>
  );
}

export default App;