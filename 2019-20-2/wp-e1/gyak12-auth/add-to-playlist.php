<?php
include_once("lib/_init.php");

if (verify_get("track", "playlist")) {
  $track_id = $_GET["track"];
  $playlist_id = $_GET["playlist"];

  $track = $trackStorage->findById($track_id);
  $playlist = $playlistStorage->findById($playlist_id);

  if ($track && $playlist) {
    if ($playlist->isOwnedBy($userStorage->userId) && !$playlist->hasTrack($track_id)) {
      $playlist->addTrack($track_id);
      $playlistStorage->update($playlist_id, $playlist);
    }
  }
}

redirect("index.php");
