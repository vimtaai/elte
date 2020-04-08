import React from "react";
import { useParams } from "react-router-dom";
import { PlaylistList } from "../components/PlaylistList";
import { TrackList } from "../components/TrackList";
import { Grid, Header } from "semantic-ui-react";

export function PlaylistsRoute() {
  const { playlistId } = useParams();

  return (
    <>
      <Grid.Row>
        <Header as="h1">My Playlists</Header>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Header as="h2">Playlists</Header>
          <PlaylistList />
        </Grid.Column>
        {playlistId ? (
          <Grid.Column>
            <Header as="h2">Tracks</Header>
            <TrackList playlistId={playlistId} />
          </Grid.Column>
        ) : null}
      </Grid.Row>
    </>
  );
}
