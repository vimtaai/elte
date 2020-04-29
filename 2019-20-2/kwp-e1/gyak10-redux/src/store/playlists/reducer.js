import {
  ADD_PLAYLIST,
  ADD_TRACK_TO_PLAYLIST,
  REMOVE_TRACK_FROM_PLAYLIST,
  REMOVE_TRACK,
  UPDATE_PLAYLISTS,
} from "./actions";

const intitialState = [];

export function playlistsReducer(state = intitialState, action) {
  const { type } = action;

  if (type === UPDATE_PLAYLISTS) {
    const { playlists } = action;

    return playlists;
  }

  if (type === ADD_PLAYLIST) {
    const { playlist } = action;

    return [...state, playlist];
  }

  if (type === ADD_TRACK_TO_PLAYLIST) {
    const { playlistId, trackId } = action;

    const newState = [...state];
    const playlist = newState.find((playlist) => playlist._id === playlistId);

    if (!playlist.tracks.includes(trackId)) {
      playlist.tracks.push(trackId);
    }

    return newState;
  }

  if (type === REMOVE_TRACK_FROM_PLAYLIST) {
    const { playlistId, trackId } = action;

    const newState = [...state];
    const playlist = newState.find((playlist) => playlist._id === playlistId);
    const trackIdIdx = playlist.tracks.indexOf(trackId);

    if (trackIdIdx !== -1) {
      playlist.tracks.splice(trackIdIdx, 1);
    }

    return newState;
  }

  if (type === REMOVE_TRACK) {
    const { trackId } = action;

    const newState = state.map((playlist) => ({
      ...playlist,
      tracks: playlist.tracks.filter((track) => track !== trackId),
    }));

    return newState;
  }

  return state;
}
