import React, { useState, useContext } from "react";
import { PlaylistContext } from "../contexts/PlaylistContext";
import { Modal, Button, Form } from "semantic-ui-react";

export function NewPlaylistModal({ trigger }) {
  const { addPlaylist } = useContext(PlaylistContext);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setOpen] = useState(false);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleButtonClick() {
    addPlaylist(inputValue);
    setInputValue("");
    setOpen(false);
  }

  function handleCancelClick() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Modal
      trigger={trigger}
      open={isOpen}
      onOpen={handleOpen}
      onClose={handleClose}
    >
      <Modal.Header>Add new playlist</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Name of the new playlist</label>
            <input value={inputValue} onChange={handleInputChange} />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleCancelClick}>Cancel</Button>
        <Button color="green" onClick={handleButtonClick}>
          Add
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
