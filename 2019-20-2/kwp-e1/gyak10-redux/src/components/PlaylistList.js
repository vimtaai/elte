import React from "react";
import { Playlist } from "./PlaylistList/Playlist";
import { NewPlaylist } from "./PlaylistList/NewPlaylist";
import { useSelector } from "react-redux";
import { getPlaylists } from "../store/playlists/selectors";

export function PlaylistList() {
  const playlists = useSelector(getPlaylists);

  return (
    <div className="ui very relaxed selection list">
      {playlists.map((playlist) => (
        <Playlist key={playlist._id} playlist={playlist} />
      ))}
      <NewPlaylist />
    </div>
  );
}
