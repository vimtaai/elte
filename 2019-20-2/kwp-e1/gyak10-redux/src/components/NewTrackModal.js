import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button, Form } from "semantic-ui-react";
import { addTrack } from "../store/tracks/actions";

export function NewTrackModal({ trigger }) {
  // const { addTrack } = useContext(TrackContext);
  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState("");
  const [artistValue, setArtistValue] = useState("");
  const [lengthValue, setLengthValue] = useState("");
  const [isOpen, setOpen] = useState(false);

  function handleTitleChange(event) {
    setTitleValue(event.target.value);
  }

  function handleArtistChange(event) {
    setArtistValue(event.target.value);
  }

  function handleLengthChange(event) {
    setLengthValue(event.target.value);
  }

  function handleButtonClick() {
    dispatch(addTrack(titleValue, artistValue, lengthValue));
    setTitleValue("");
    setArtistValue("");
    setLengthValue("");
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
      <Modal.Header>Add new track</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Title of the track</label>
            <input value={titleValue} onChange={handleTitleChange} />
          </Form.Field>
          <Form.Field>
            <label>Artist</label>
            <input value={artistValue} onChange={handleArtistChange} />
          </Form.Field>
          <Form.Field>
            <label>Track length</label>
            <input value={lengthValue} onChange={handleLengthChange} />
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
