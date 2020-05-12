import {
  SET_PLAYLISTS,
  ADD_PLAYLIST,
  UPDATE_PLAYLIST,
  DELETE_PLAYLIST,
} from "./actions";

export function playlistsReducer(state = [], action) {
  const { type } = action;

  if (type === SET_PLAYLISTS) {
    const { playlists } = action;
    return playlists;
  }

  if (type === ADD_PLAYLIST) {
    const { playlist } = action;
    return [...state, playlist];
  }

  if (type === UPDATE_PLAYLIST) {
    const { playlist: updatedPlaylist } = action;
    return state.map((playlist) =>
      playlist._id === updatedPlaylist._id ? updatedPlaylist : playlist
    );
  }

  if (type === DELETE_PLAYLIST) {
    const { playlist: deletedPlaylist } = action;
    return state.filter((playlist) => playlist._id !== deletedPlaylist._id);
  }

  return state;
}
