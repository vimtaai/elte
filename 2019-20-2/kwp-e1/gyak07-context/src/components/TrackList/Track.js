import React from "react";
import { List, Icon, Button } from "semantic-ui-react";

export function Track({ track }) {
  const { artist = "Unknown", title, length } = track;
  
  return (
    <List.Item>
      <Button.Group floated="right" size="tiny">
        <Button icon="plus" basic color="green" />
        <Button icon="edit" basic color="orange" />
        <Button icon="trash" basic color="red" />
      </Button.Group>
      <List.Icon verticalAlign="middle">
        <Icon size="large" color="violet" name="music" />
      </List.Icon>
      <List.Content>
        <List.Header>{artist} - {title || "No title provided"}</List.Header>
        <List.Description>{length || "Unknown length"}</List.Description>
      </List.Content>
    </List.Item>
  );
}
