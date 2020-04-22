import { Service } from "../utils/service";

class PlaylistService extends Service {
  constructor() {
    super("playlists.nedb");
  }
}

export const playlistService = new PlaylistService();
