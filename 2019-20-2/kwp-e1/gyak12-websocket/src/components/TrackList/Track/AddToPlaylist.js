import React from "react";
import { Dropdown } from "semantic-ui-react";
import { NewPlaylistModal } from "../../NewPlaylistModal";
import { addTrackToPlaylist } from "../../../store/playlists/actions";
import { useSelector, useDispatch } from "react-redux";
import { getPlaylists } from "../../../store/playlists/selectors";

export function AddToPlaylist({ trackId }) {
  const playlists = useSelector(getPlaylists);
  const dispatch = useDispatch();

  const trigger = <Dropdown.Item text="New Playlist..." />;

  return (
    <Dropdown icon="plus" floating button className="icon tiny">
      <Dropdown.Menu>
        {playlists.map((playlist) => (
          <Dropdown.Item
            key={playlist._id}
            text={playlist.title}
            onClick={() => dispatch(addTrackToPlaylist(playlist._id, trackId))}
          />
        ))}
        <NewPlaylistModal trigger={trigger} />
      </Dropdown.Menu>
    </Dropdown>
  );
}
