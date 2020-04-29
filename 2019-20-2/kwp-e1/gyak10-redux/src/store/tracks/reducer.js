import { SET_TRACKS, ADD_TRACK, UPDATE_TRACK, DELETE_TRACK } from "./actions";

export function tracksReducer(state = [], action) {
  const { type } = action;

  if (type === SET_TRACKS) {
    const { tracks } = action;
    return tracks;
  }

  if (type === ADD_TRACK) {
    const { track } = action;
    return [...state, track];
  }

  if (type === UPDATE_TRACK) {
    const { track: updatedTrack } = action;
    return state.map((track) =>
      track._id === updatedTrack._id ? updatedTrack : track
    );
  }

  if (type === DELETE_TRACK) {
    const { track: deletedTrack } = action;
    return state.filter((track) => track._id !== deletedTrack._id);
  }

  return state;
}
