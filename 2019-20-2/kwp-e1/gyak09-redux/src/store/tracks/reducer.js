import { ADD_TRACK, DELETE_TRACK } from "./actions";

const initialState = [
  { _id: 1, title: "A", artist: "B", length: "1" },
  { _id: 2, title: "C", artist: "D", length: "2" },
  { _id: 3, title: "E", artist: "F", length: "3" },
  { _id: 4, title: "G", artist: "H", length: "4" },
];

export function tracksReducer(state = initialState, action) {
  const { type } = action;

  if (type === ADD_TRACK) {
    const { title, artist, length } = action;
    const newTrack = { title, artist, length };

    return Object.assign({}, state, { tracks: [...state.tracks, newTrack] });
  }

  if (type === DELETE_TRACK) {
    const { id } = action;

    return Object.assign({}, state, {
      tracks: state.tracks.filter((t) => t._id !== id),
    });
  }

  return state;
}
