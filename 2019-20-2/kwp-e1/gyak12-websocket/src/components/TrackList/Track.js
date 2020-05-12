import React from "react";
import { useDispatch } from "react-redux";
import { List, Button } from "semantic-ui-react";
import { removeFromTracks } from "../../store/tracks/actions";
import { AddToPlaylist } from "./Track/AddToPlaylist";

import classes from "./Track.module.css";
import { socketService } from "../../services/socket-service";

export function Track({ track }) {
  const { artist = "Unknown", title, length, spotifyURL } = track;
  const dispatch = useDispatch();

  function handleDeleteClick() {
    dispatch(removeFromTracks(track));
  }

  function handlePlaySongClick() {
    window.open(spotifyURL, "blank");
    socketService.socket.emit("create", "messages", {
      text: `Someone started to listen to "${artist}: ${title}"`,
    });
  }

  return (
    <List.Item className={classes.track}>
      <List.Content floated="right" className={classes.actions}>
        <AddToPlaylist trackId={track._id} />
        <Button size="tiny" icon="trash" onClick={handleDeleteClick} />
      </List.Content>
      <List.Icon verticalAlign="middle">
        <Button
          size="tiny"
          basic
          color="green"
          icon="play"
          disabled={spotifyURL === null}
          onClick={handlePlaySongClick}
        />
      </List.Icon>
      <List.Content>
        <List.Header>
          {artist} - {title || "No title provided"}
        </List.Header>
        <List.Description>{length || "Unknown length"}</List.Description>
      </List.Content>
    </List.Item>
  );
}
