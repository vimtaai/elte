import React from "react";
import { List, Icon } from "semantic-ui-react";
import { NewPlaylistModal } from "../NewPlaylistModal";

export function NewPlaylist() {
  const trigger = (
    <List.Item>
      <List.Icon verticalAlign="middle">
        <Icon size="large" color="green" name="plus" />
      </List.Icon>
      <List.Content>
        <List.Header>New</List.Header>
        <List.Description>Click here to create a new playlist</List.Description>
      </List.Content>
    </List.Item>
  );

  return <NewPlaylistModal trigger={trigger} />;
}
