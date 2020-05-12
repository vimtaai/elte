import React from "react";
import { Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { removeFromPlaylists } from "../store/playlists/actions";

export function DeletePlaylist({ playlist }) {
  const dispatch = useDispatch();

  function handleButtonClick() {
    dispatch(removeFromPlaylists(playlist));
  }

  return (
    <Button
      color="red"
      size="tiny"
      basic
      floated="right"
      onClick={handleButtonClick}
    >
      Delete
    </Button>
  );
}
