import { trackService } from "../services/track-service";
import { playlistService } from "../services/playlist-service";
import { setTracks } from "./tracks/actions";
import { setPlaylists } from "./playlists/actions";

export function initStore() {
  return async (dispatch) => {
    const tracks = await trackService.find();
    const playlists = await playlistService.find();

    dispatch(setTracks(tracks));
    dispatch(setPlaylists(playlists));
  };
}

export function clearStore() {
  return async (dispatch) => {
    dispatch(setTracks([]));
    dispatch(setPlaylists([]));
  };
}
