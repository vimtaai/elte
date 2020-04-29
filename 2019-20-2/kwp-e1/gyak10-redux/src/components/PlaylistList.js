import React from "react";
import { Playlist } from "./PlaylistList/Playlist";
import { NewPlaylist } from "./PlaylistList/NewPlaylist";
import { useSelector } from "react-redux";
import { getPlaylists } from "../store/playlists/selectors";
import { List } from "semantic-ui-react";

export function PlaylistList() {
  const playlists = useSelector(getPlaylists);

  return (
    <List relaxed="very" selection>
      {playlists.map((playlist) => (
        <Playlist key={playlist._id} playlist={playlist} />
      ))}
      <NewPlaylist />
    </List>
  );
}
