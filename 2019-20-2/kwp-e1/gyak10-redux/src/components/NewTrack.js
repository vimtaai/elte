import React from "react";
import { Button } from "semantic-ui-react";
import { NewTrackModal } from "./NewTrack/NewTrackModal";

export function NewTrack() {
  const trigger = (
    <Button color="green" floated="right">
      New Track
    </Button>
  );
  return <NewTrackModal trigger={trigger} />;
}
