import React from "react";
import { Link } from "react-router-dom";
import { List, Icon } from "semantic-ui-react";

export function Playlist({ playlist }) {
  const { _id, title, tracks = [] } = playlist;

  return (
    <List.Item as={Link} to={"/playlists/" + _id}>
      <List.Icon verticalAlign="middle">
        <Icon size="large" color="red" name="circle" />
      </List.Icon>
      <List.Content>
        <List.Header>{title}</List.Header>
        <List.Description>Number of tracks: {tracks.length}</List.Description>
      </List.Content>
    </List.Item>
  );
}
