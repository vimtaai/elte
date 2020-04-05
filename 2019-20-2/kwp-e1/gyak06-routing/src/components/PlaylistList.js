import React from "react";
import { Playlist } from "./PlaylistList/Playlist";

export function PlaylistList({ playlists }) {
  return (
    <div className="ui very relaxed selection list">
      {playlists.map(playlist => (
        <Playlist key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
}
