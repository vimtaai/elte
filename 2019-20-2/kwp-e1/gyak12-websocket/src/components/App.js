import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { PlaylistsRoute } from "../routes/PlaylistsRoute";
import { TracksRoute } from "../routes/TracksRoute";
import { NavBar } from "./NavBar";
import { LoginRoute } from "../routes/LoginRoute";
import { useDispatch, useSelector } from "react-redux";
import { socketService } from "../services/socket-service";
import { deleteMessage, addMessage } from "../store/messages/actions";
import { MessageList } from "./MessageList";
import { isAuthenticated } from "../store/user/selectors";
import { restoreUser } from "../store/user/actions";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(isAuthenticated);

  useEffect(() => {
    function handleMessageRecieved(data) {
      const message = { id: Date.now(), text: data.text };

      setTimeout(function () {
        dispatch(deleteMessage(message));
      }, 2000);

      dispatch(addMessage(message));
    }

    if (!socketService.isConnected) {
      socketService.connect();
      socketService.socket.on("messages created", handleMessageRecieved);
    }
  });

  useEffect(() => {
    dispatch(restoreUser());
  });

  return (
    <>
      {!isLoggedIn ? <Redirect to="/login" /> : null}
      <NavBar />
      <Grid container columns="equal">
        <Switch>
          <Route path="/playlists/:playlistId?">
            <PlaylistsRoute />
          </Route>
          <Route path="/tracks">
            <TracksRoute />
          </Route>
          <Route path="/login">
            <LoginRoute />
          </Route>
        </Switch>
      </Grid>
      <MessageList />
    </>
  );
}

export default App;
