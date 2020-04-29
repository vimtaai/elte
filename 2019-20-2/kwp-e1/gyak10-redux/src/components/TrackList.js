import React from "react";
import { Track } from "./TrackList/Track";
import { useSelector } from "react-redux";
import { getTracks } from "../store/tracks/selectors";
import { getPlaylists } from "../store/playlists/selectors";

export function TrackList({ playlistId = undefined }) {
  // const { tracks } = useContext(TrackContext);
  const tracks = useSelector(getTracks);
  const playlists = useSelector(getPlaylists);

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
