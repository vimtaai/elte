import React, { createContext, useState, useEffect } from "react";
import { playlistService } from "../services/playlist-service";

export const PlaylistContext = createContext();

export function PlaylistContextProvider({ children }) {
  const [playlists, setPlaylists] = useState([]);

  async function loadFromDb() {
    const playlistsFromDb = await playlistService.find();
    setPlaylists(playlistsFromDb);
  }

  useEffect(() => {
    loadFromDb();
  }, []);

  async function addPlaylist(name) {
    const newPlaylist = {
      name,
      tracks: [],
    };

    await playlistService.insert(newPlaylist);
    loadFromDb();
  }

  async function addTrackToPlaylist(playlistId, trackId) {
    const playlist = await playlistService.findOne({ _id: playlistId });

    if (!playlist) {
      return;
    }

    if (!playlist.tracks.includes(trackId)) {
      const playlistToEdit = { ...playlist };
      playlistToEdit.tracks.push(trackId);
      console.log(playlistToEdit);

      await playlistService.update(playlistToEdit._id, playlistToEdit);
      loadFromDb();
    }
  }

  async function removeFromTracks(trackId) {
    await playlistService.remove({ id: trackId });
    loadFromDb();
  }

  const value = {
    playlists,
    addPlaylist,
    addTrackToPlaylist,
    removeFromTracks,
  };

  return (
    <PlaylistContext.Provider value={value}>
      {children}
    </PlaylistContext.Provider>
  );
}
