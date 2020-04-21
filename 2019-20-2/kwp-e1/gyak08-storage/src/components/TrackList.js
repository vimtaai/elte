import React, { useContext } from "react";
import { Track } from "./TrackList/Track";
import { TrackContext } from "../contexts/TrackContext";
import { PlaylistContext } from "../contexts/PlaylistContext";

export function TrackList({ playlistId = undefined }) {
  const { tracks } = useContext(TrackContext);
  const { playlists } = useContext(PlaylistContext);

  const currentPlaylist = playlists.find(
    (playlist) => playlist._id === playlistId
  );
  const renderedTracks = currentPlaylist
    ? tracks.filter((track) => currentPlaylist.tracks.includes(track._id))
    : tracks;

  return (
    <div className="ui very relaxed selection list">
      {renderedTracks.map((track) => (
        <Track key={track._id} track={track} />
      ))}
    </div>
  );
}
