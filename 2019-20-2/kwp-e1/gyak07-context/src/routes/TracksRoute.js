import React, { useContext } from "react";
import { TrackList } from "../components/TrackList";
import { TrackContext } from "../contexts/TrackContext";
import { Grid, Header } from "semantic-ui-react";

export function TracksRoute() {
  const { tracks } = useContext(TrackContext);

  return (
    <>
      <Grid.Row>
        <Header as="h1">My Tracks</Header>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <TrackList tracks={tracks} />
        </Grid.Column>
      </Grid.Row>
    </>
  );
}
