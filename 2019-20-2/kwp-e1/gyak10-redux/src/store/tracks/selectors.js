export const getTracks = (state) => state.tracks;

export const getPlaylistTracks = (playlist) => (state) => {
  const foundPlaylist = state.playlists.find((p) => p._id === playlist._id);

  if (!foundPlaylist) {
    return [];
  }

  return state.tracks.filter((track) =>
    foundPlaylist.tracks.includes(track._id)
  );
};
