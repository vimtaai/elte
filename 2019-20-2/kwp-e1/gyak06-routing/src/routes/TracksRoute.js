import React from "react";
import { TrackList } from "../components/TrackList";

export function TracksRoute({ tracks = [] }) {
  return (
    <>
      <div className="row">
        <h1>My Tracks</h1>
      </div>
      <div className="row">
        <div className="column">
          <TrackList tracks={tracks} />
        </div>
      </div>
    </>
  );
}
