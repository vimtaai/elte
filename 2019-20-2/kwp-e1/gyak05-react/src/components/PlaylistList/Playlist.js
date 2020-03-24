import React from "react";

export function Playlist({ playlist, setSelectedPlaylist }) {
  const { id, name, tracks = [] } = playlist;

  function handlePlaylistClick() {
    setSelectedPlaylist(id);
  }

  return (
    <div className="item" onClick={handlePlaylistClick}>
      <i className="large middle aligned compact disc icon"></i>
      <div className="content">
        <strong className="header">{name}</strong>
        <small className="description">Number of tracks: {tracks.length}</small>
      </div>
    </div>
  );
}
