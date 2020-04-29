import { trackService } from "../../services/track-service";
import { removeTrackFromAllPlaylists } from "../playlists/actions";

// Action Type
export const SET_TRACKS = "UPDATE_TRACKS";
export const ADD_TRACK = "ADD_TRACK";
export const UPDATE_TRACK = "UPDATE_TRACK";
export const DELETE_TRACK = "DELETE_ACTION";

// Action Creator
export function setTracks(tracks) {
  return { type: SET_TRACKS, tracks };
}

export function addTrack(track) {
  return { type: ADD_TRACK, track };
}

export function updateTrack(track) {
  return { type: UPDATE_TRACK, track };
}

export function deleteTrack(track) {
  return { type: DELETE_TRACK, track: track };
}

// Async actions
export function addToTracks(title, artist, length) {
  return async (dispatch) => {
    const newTrack = await trackService.insert({ title, artist, length });
    dispatch(addTrack(newTrack));
  };
}

export function removeFromTracks(track) {
  return async (dispatch) => {
    await trackService.remove(track._id);
    dispatch(removeTrackFromAllPlaylists(track));
    dispatch(deleteTrack(track));
  };
}
