import React, { useContext } from "react";
import { List, Icon, Button } from "semantic-ui-react";
import { AddToPlaylist } from "./Track/AddToPlaylist";
import { TrackContext } from "../../contexts/TrackContext";
import { PlaylistContext } from "../../contexts/PlaylistContext";

import classes from "./Track.module.css";

export function Track({ track }) {
  const { artist = "Unknown", title, length } = track;
  const { deleteTrack } = useContext(TrackContext);
  const { removeFromTracks } = useContext(PlaylistContext);

  function handleDeleteClick(trackId) {
    deleteTrack(trackId);
    removeFromTracks(trackId);
  }

  return (
    <List.Item className={classes.track}>
      <List.Content floated="right" className={classes.actions}>
        <AddToPlaylist trackId={track._id} />
        <Button
          size="tiny"
          icon="trash"
          onClick={() => handleDeleteClick(track.id)}
        />
      </List.Content>
      <List.Icon verticalAlign="middle">
        <Icon size="large" color="violet" name="music" />
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
