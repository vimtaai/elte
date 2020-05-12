import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Grid, Header } from "semantic-ui-react";
import { getPlaylistById } from "../store/playlists/selectors";
import { getPlaylistTracks } from "../store/tracks/selectors";
import { PlaylistList } from "../components/PlaylistList";
import { TrackList } from "../components/TrackList";
import { DeletePlaylist } from "../components/DeletePlaylist";

export function PlaylistsRoute() {
  const { playlistId } = useParams();
  const playlist = useSelector(getPlaylistById(playlistId));
  const tracks = useSelector(getPlaylistTracks(playlist));

  return (
    <>
      <Grid.Row>
        <Header as="h1">My Playlists</Header>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Header dividing as="h2">
                  Playlists
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <PlaylistList />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        {playlist ? (
          <Grid.Column>
            <Grid>
              <Grid.Row>
                <Grid.Column width="16">
                  <Header dividing as="h2">
                    {playlist.title}
                    <DeletePlaylist playlist={playlist} />
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <TrackList tracks={tracks} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        ) : null}
      </Grid.Row>
    </>
  );
}
