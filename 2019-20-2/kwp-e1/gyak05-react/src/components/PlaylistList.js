import React from "react";
import { Playlist } from "./PlaylistList/Playlist";

export function PlaylistList({ playlists, setSelectedPlaylist }) {
  return (
    <div className="ui very relaxed selection list">
      {playlists.map(playlist => (
        <Playlist
          playlist={playlist}
          setSelectedPlaylist={setSelectedPlaylist}
        />
      ))}
    </div>
  );
}
