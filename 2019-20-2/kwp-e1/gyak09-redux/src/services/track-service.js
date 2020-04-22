import { Service } from "../utils/service";

class TrackService extends Service {
  constructor() {
    super("tracks.nedb");
  }
}

export const trackService = new TrackService();
