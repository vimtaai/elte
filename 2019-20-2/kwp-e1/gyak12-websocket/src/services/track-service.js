import { ApiService } from "../utils/api.service";

class TrackService extends ApiService {
  constructor() {
    super("/tracks");
  }
}

export const trackService = new TrackService();
