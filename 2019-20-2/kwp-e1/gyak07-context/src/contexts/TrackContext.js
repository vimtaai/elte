import React, { createContext, useState } from "react";

export const TrackContext = createContext();

export function TrackContextProvider({ children }) {
  const [tracks, setTracks] = useState([
    { id: "1", artist: "AC/DC", title: "Highway to hell", length: "2:45" },
    { id: "2", artist: "AC/DC", title: "Thunderstruck", length: "4:01" },
    { id: "3", artist: "Bon Jovi", title: "It's my life", length: "3:12" },
  ]);

  const value = { tracks, setTracks };

  return (
    <TrackContext.Provider value={value}>{children}</TrackContext.Provider>
  );
}
