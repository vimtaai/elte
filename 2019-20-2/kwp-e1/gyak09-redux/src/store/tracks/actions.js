// Action Type
export const ADD_TRACK = "ADD_TRACK";
export const DELETE_TRACK = "DELETE_ACTION";

// Action Creator
export function addTrack(title, artist, length) {
  return {
    type: ADD_TRACK,
    title,
    artist,
    length,
  };
}

export function deleteTrack(trackId) {
  return {
    type: DELETE_TRACK,
    id: trackId,
  };
}
