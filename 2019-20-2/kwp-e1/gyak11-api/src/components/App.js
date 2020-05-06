import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Grid, Loader } from "semantic-ui-react";
import { PlaylistsRoute } from "../routes/PlaylistsRoute";
import { TracksRoute } from "../routes/TracksRoute";
import { NavBar } from "./NavBar";
import { store } from "../store/store";
import { trackService } from "../services/track-service";
import { playlistService } from "../services/playlist-service";
import { setTracks } from "../store/tracks/actions";
import { setPlaylists } from "../store/playlists/actions";

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(function () {
    async function getDataFromDb() {
      const tracks = await trackService.find();
      const playlists = await playlistService.find();

      store.dispatch(setTracks(tracks));
      store.dispatch(setPlaylists(playlists));

      setLoading(false);
    }

    getDataFromDb();
  });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Grid container columns="equal">
          {isLoading ? (
            <Loader />
          ) : (
            <Switch>
              <Route path="/playlists/:playlistId?">
                <PlaylistsRoute />
              </Route>
              <Route path="/tracks">
                <TracksRoute />
              </Route>
            </Switch>
          )}
        </Grid>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
