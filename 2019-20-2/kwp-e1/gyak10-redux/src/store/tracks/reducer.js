import { ADD_TRACK, DELETE_TRACK, UPDATE_TRACKS } from "./actions";

const initialState = [];

export function tracksReducer(state = initialState, action) {
  const { type } = action;

  if (type === UPDATE_TRACKS) {
    const { tracks } = action;

    return tracks;
  }

  if (type === ADD_TRACK) {
    const { title, artist, length } = action;
    const newTrack = { _id: Date.now(), title, artist, length };

    return [...state, newTrack];
  }

  if (type === DELETE_TRACK) {
    const { id } = action;

    console.log(id, state);
    return state.filter((track) => track._id !== id);
  }

  return state;
}
