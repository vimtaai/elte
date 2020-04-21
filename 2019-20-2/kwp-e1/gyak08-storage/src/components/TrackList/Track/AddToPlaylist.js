import React, { useContext } from "react";
import { PlaylistContext } from "../../../contexts/PlaylistContext";
import { Dropdown } from "semantic-ui-react";
import { NewPlaylistModal } from "../../NewPlaylistModal";

export function AddToPlaylist({ trackId }) {
  const { playlists, addTrackToPlaylist } = useContext(PlaylistContext);

  const trigger = <Dropdown.Item text="New Playlist..." />;

  return (
    <Dropdown icon="plus" floating button className="icon tiny">
      <Dropdown.Menu>
        {playlists.map((playlist) => (
          <Dropdown.Item
            key={playlist._id}
            text={playlist.name}
            onClick={() => addTrackToPlaylist(playlist._id, trackId)}
          />
        ))}
        <NewPlaylistModal trigger={trigger} />
      </Dropdown.Menu>
    </Dropdown>
  );
}
