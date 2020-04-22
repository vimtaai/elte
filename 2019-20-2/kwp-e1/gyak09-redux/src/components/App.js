import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Grid } from "semantic-ui-react";
import { PlaylistsRoute } from "../routes/PlaylistsRoute";
import { TracksRoute } from "../routes/TracksRoute";
import { TrackContextProvider } from "../contexts/TrackContext";
import { PlaylistContextProvider } from "../contexts/PlaylistContext";
import { NavBar } from "./NavBar";
import { store } from "../store/store";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
