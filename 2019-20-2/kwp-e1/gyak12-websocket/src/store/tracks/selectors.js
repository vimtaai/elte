export const getTracks = (state) => state.tracks;

export const getPlaylistTracks = (playlist) => (state) => {
  if (!playlist) {
    return [];
  }

  return state.tracks.filter((track) =>
    playlist.tracks.map((id) => id.toString()).includes(track._id)
  );
};
