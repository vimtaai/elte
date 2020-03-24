import React, { useState } from "react";
import { TrackList } from "./TrackList";
import { PlaylistList } from "./PlaylistList";

function App() {
  const [playlists, setPlaylists] = useState([
    { id: "1", name: "AC/DC", tracks: ["1", "2"] },
    { id: "2", name: "Bon Jovi", tracks: ["3"] }
  ]);
  const [tracks, setTracks] = useState([
    { id: "1", artist: "AC/DC", title: "Highway to hell", length: "2:45" },
    { id: "2", artist: "AC/DC", title: "Thunderstruck", length: "4:01" },
    { id: "3", artist: "Bon Jovi", title: "It's my life", length: "3:12" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleButtonClick() {
    setPlaylists([...playlists, { name: inputValue }]);
    setInputValue("");
  }

  return (
    <div className="ui equal width grid container">
      <div class="row">
        <div className="ui action input">
          <input value={inputValue} onChange={handleInputChange} />
          <button className="ui primary button" onClick={handleButtonClick}>
            Add new playlist
          </button>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h2>Playlists</h2>
          <PlaylistList
            playlists={playlists}
            setSelectedPlaylist={setSelectedPlaylist}
          />
        </div>
        {selectedPlaylist !== null ? (
          <div className="column">
            <h2>Tracks</h2>
            <TrackList
              tracks={tracks.filter(track =>
                playlists
                  .find(playlist => playlist.id === selectedPlaylist)
                  .tracks.includes(track.id)
              )}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
