import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { PlaylistsRoute } from "../routes/PlaylistsRoute";
import { TracksRoute } from "../routes/TracksRoute";
import { NavBar } from "./NavBar";

function App() {
  const [tracks, setTracks] = useState([
    { id: "1", artist: "AC/DC", title: "Highway to hell", length: "2:45" },
    { id: "2", artist: "AC/DC", title: "Thunderstruck", length: "4:01" },
    { id: "3", artist: "Bon Jovi", title: "It's my life", length: "3:12" }
  ]);

  return (
    <BrowserRouter>
      <NavBar />
      <div className="ui equal width grid container">
        <Switch>
          <Route path="/playlists/:playlistId?">
            <PlaylistsRoute tracks={tracks} />
          </Route>
          <Route path="/tracks">
            <TracksRoute tracks={tracks} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
