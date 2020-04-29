export const getPlaylists = (state) => state.playlists;

export const getPlaylistById = (id) => (state) =>
  state.playlists.find((playlist) => playlist._id === id);
