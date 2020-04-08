import React, { createContext, useState } from "react";

export const PlaylistContext = createContext();

export function PlaylistContextProvider({ children }) {
  const [playlists, setPlaylists] = useState([
    { id: "1", name: "AC/DC", tracks: ["1", "2"] },
    { id: "2", name: "Bon Jovi", tracks: ["3"] },
  ]);

  function addPlaylist(name) {
    const newPlaylist = {
      id: Date.now().toString(),
      name: name,
      tracks: []
    };

    setPlaylists([...playlists, newPlaylist]);
  }

  const value = { playlists, addPlaylist };

  return (
    <PlaylistContext.Provider value={value}>
      {children}
    </PlaylistContext.Provider>
  );
}
