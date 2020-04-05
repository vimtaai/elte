import React from "react";
import { Link } from "react-router-dom";

export function Playlist({ playlist }) {
  const { id, name, tracks = [] } = playlist;

  return (
    <Link to={"/playlists/" + id} className="item">
      <i className="large middle aligned compact disc icon"></i>
      <div className="content">
        <strong className="header">{name}</strong>
        <small className="description">Number of tracks: {tracks.length}</small>
      </div>
    </Link>
  );
}
