import { ApiService } from "../utils/api.service";

class PlaylistService extends ApiService {
  constructor() {
    super("/playlists");
  }
}

export const playlistService = new PlaylistService();
