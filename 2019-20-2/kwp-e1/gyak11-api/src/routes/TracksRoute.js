import React from "react";
import { useSelector } from "react-redux";
import { Grid, Header } from "semantic-ui-react";
import { getTracks } from "../store/tracks/selectors";
import { TrackList } from "../components/TrackList";
import { NewTrack } from "../components/NewTrack";

export function TracksRoute() {
  const tracks = useSelector(getTracks);

  return (
    <>
      <Grid.Row>
        <Grid.Column>
          <Header dividing as="h1">
            My Tracks
            <NewTrack />
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <TrackList tracks={tracks} />
        </Grid.Column>
      </Grid.Row>
    </>
  );
}
