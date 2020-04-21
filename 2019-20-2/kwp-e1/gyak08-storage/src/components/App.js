import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { PlaylistsRoute } from "../routes/PlaylistsRoute";
import { TracksRoute } from "../routes/TracksRoute";
import { NavBar } from "./NavBar";
import { TrackContextProvider } from "../contexts/TrackContext";
import { PlaylistContextProvider } from "../contexts/PlaylistContext";
import { Grid } from "semantic-ui-react";

function App() {
  return (
    <TrackContextProvider>
      <PlaylistContextProvider>
        <BrowserRouter>
          <NavBar />
          <Grid container columns="equal">
            <Switch>
              <Route path="/playlists/:playlistId?">
                <PlaylistsRoute />
              </Route>
              <Route path="/tracks">
                <TracksRoute />
              </Route>
            </Switch>
          </Grid>
        </BrowserRouter>
      </PlaylistContextProvider>
    </TrackContextProvider>
  );
}

export default App;
