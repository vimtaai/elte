import React, { useContext } from "react";
import { Playlist } from "./PlaylistList/Playlist";
import { PlaylistContext } from "../contexts/PlaylistContext";
import { NewPlaylist } from "./PlaylistList/NewPlaylist";

export function PlaylistList() {
  const { playlists } = useContext(PlaylistContext);

  return (
    <div className="ui very relaxed selection list">
      {playlists.map((playlist) => (
        <Playlist key={playlist._id} playlist={playlist} />
      ))}
      <NewPlaylist />
    </div>
  );
}
