import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button, Form } from "semantic-ui-react";
import { addPlaylist } from "../store/playlists/actions";

export function NewPlaylistModal({ trigger }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setOpen] = useState(false);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleButtonClick() {
    dispatch(addPlaylist(inputValue));
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
