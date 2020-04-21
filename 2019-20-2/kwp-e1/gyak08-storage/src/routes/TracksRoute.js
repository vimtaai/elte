import React from "react";
import { Grid, Header } from "semantic-ui-react";
import { TrackList } from "../components/TrackList";
import { NewTrack } from "../components/TrackList/NewTrack";

export function TracksRoute() {
  return (
    <>
      <NewTrack />
      <Grid.Row>
        <Header as="h1">My Tracks</Header>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <TrackList />
        </Grid.Column>
      </Grid.Row>
    </>
  );
}
