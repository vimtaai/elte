import { playlistService } from "../../services/playlist-service";

// Action types
export const UPDATE_PLAYLISTS = "UPDATE_PLAYLIST";
export const ADD_PLAYLIST = "ADD_PLAYLIST";
export const ADD_TRACK_TO_PLAYLIST = "ADD_TRACK_TO_PLAYLIST";
export const REMOVE_TRACK_FROM_PLAYLIST = "REMOVE_TRACK_FROM_PLAYLIST";
export const REMOVE_TRACK = "REMOVE_TRACK";

// Action creators
export function updatePlaylists(playlists) {
  return {
    type: UPDATE_PLAYLISTS,
    playlists,
  };
}

export function addPlaylist(name) {
  return async (dispatch) => {
    const playlist = await playlistService.insert({
      name,
      tracks: [],
    });

    console.log(playlist);

    dispatch({
      type: ADD_PLAYLIST,
      playlist,
    });
  };
}

export function addTrackToPlaylist(playlistId, trackId) {
  return {
    type: ADD_TRACK_TO_PLAYLIST,
    playlistId,
    trackId,
  };
}

export function removeTrackFromPlaylist(playlistId, trackId) {
  return {
    type: REMOVE_TRACK_FROM_PLAYLIST,
    playlistId,
    trackId,
  };
}

export function removeTrack(trackId) {
  return {
    type: REMOVE_TRACK,
    trackId,
  };
}
