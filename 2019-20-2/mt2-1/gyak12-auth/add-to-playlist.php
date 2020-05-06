<?php
include("utils/_init.php");

if (verify_get("track", "playlist")) {
  $track_id = $_GET["track"];
  $playlist_id = $_GET["playlist"];

  $track = $trackStorage->findById($track_id);
  $playlist = $playlistStorage->findById($playlist_id);

  if ($track && $playlist && !in_array($track_id, $playlist["tracks"])) {
    $playlist["tracks"][] = $track_id;
    $playlistStorage->update($playlist_id, $playlist);
  }
}

redirect("index.php");