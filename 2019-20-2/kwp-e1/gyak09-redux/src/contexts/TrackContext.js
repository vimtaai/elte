import React, { createContext, useState, useEffect } from "react";
import { trackService } from "../services/track-service";

export const TrackContext = createContext();

export function TrackContextProvider({ children }) {
  const [tracks, setTracks] = useState([]);

  async function loadFromDb() {
    const tracksFromDb = await trackService.find();
    setTracks(tracksFromDb);
  }

  useEffect(() => {
    loadFromDb();
  }, []);

  async function addTrack(title, artist, length) {
    const newTrack = {
      title,
      artist,
      length,
    };

    await trackService.insert(newTrack);
    loadFromDb();
  }

  async function deleteTrack(trackId) {
    await trackService.remove(trackId);
    loadFromDb();
  }

  const value = { tracks, addTrack, deleteTrack };

  return (
    <TrackContext.Provider value={value}>{children}</TrackContext.Provider>
  );
}
