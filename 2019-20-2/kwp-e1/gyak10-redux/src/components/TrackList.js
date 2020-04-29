import React from "react";
import { Track } from "./TrackList/Track";

export function TrackList({ tracks = undefined }) {
  return (
    <div className="ui very relaxed selection list">
      {tracks.map((track) => (
        <Track key={track._id} track={track} />
      ))}
    </div>
  );
}
