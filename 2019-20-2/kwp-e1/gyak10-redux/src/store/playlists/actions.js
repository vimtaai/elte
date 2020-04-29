import { playlistService } from "../../services/playlist-service";

// Action types
export const SET_PLAYLISTS = "SET_PLAYLISTS";
export const ADD_PLAYLIST = "ADD_PLAYLIST";
export const UPDATE_PLAYLIST = "UPDATE_PLAYLIST";
export const DELETE_PLAYLIST = "DELETE_PLAYLIST";

// Action creators
export function setPlaylists(playlists) {
  return { type: SET_PLAYLISTS, playlists };
}

export function addPlaylist(playlist) {
  return { type: ADD_PLAYLIST, playlist };
}

export function updatePlaylist(playlist) {
  return { type: UPDATE_PLAYLIST, playlist };
}

export function deletePlaylist(playlist) {
  return { type: DELETE_PLAYLIST, playlist };
}

// Async actions
export function addToPlaylists(name) {
  return async (dispatch) => {
    const playlist = await playlistService.insert({ name, tracks: [] });
    dispatch(addPlaylist(playlist));
  };
}

export function addTrackToPlaylist(playlistId, trackId) {
  return async (dispatch) => {
    const playlist = await playlistService.findOne({ _id: playlistId });

    if (!playlist || playlist.tracks.includes(trackId)) {
      return;
    }

    playlist.tracks.push(trackId);
    await playlistService.update(playlist._id, playlist);

    dispatch(updatePlaylist(playlist));
  };
}

export function removeFromPlaylists(playlist) {
  return async (dispatch) => {
    await playlistService.remove(playlist._id);

    dispatch(deletePlaylist(playlist));
  };
}

export function removeTrackFromPlaylist(playlist, track) {
  return async (dispatch) => {
    playlist.tracks = playlist.tracks.filter(
      (trackId) => trackId !== track._id
    );
    await playlistService.update(playlist._id, playlist);

    dispatch(updatePlaylist(playlist));
  };
}

export function removeTrackFromAllPlaylists(track) {
  return async (dispatch) => {
    const playlists = await playlistService.find();

    for (const playlist of playlists) {
      dispatch(removeTrackFromPlaylist(playlist, track));
    }
  };
}
