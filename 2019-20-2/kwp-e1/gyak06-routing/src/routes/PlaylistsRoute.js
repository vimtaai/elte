import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { PlaylistList } from "../components/PlaylistList";
import { TrackList } from "../components/TrackList";

export function PlaylistsRoute({ tracks }) {
  const [playlists, setPlaylists] = useState([
    { id: "1", name: "AC/DC", tracks: ["1", "2"] },
    { id: "2", name: "Bon Jovi", tracks: ["3"] }
  ]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleButtonClick() {
    setPlaylists([...playlists, { name: inputValue }]);
    setInputValue("");
  }

  const { playlistId } = useParams();

  return (
    <>
      <div className="row">
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
          <PlaylistList playlists={playlists} />
        </div>
        {playlistId ? (
          <div className="column">
            <h2>Tracks</h2>
            <TrackList
              tracks={tracks.filter(track =>
                playlists
                  .find(playlist => playlist.id === playlistId)
                  .tracks.includes(track.id)
              )}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}
