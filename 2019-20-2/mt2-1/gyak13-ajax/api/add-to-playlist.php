<?php
include("../utils/_init.php");

if (!$userStorage->authorize(["user"])) {
  http_response_code(403);
  exit();
}

if (verify_get("track", "playlist")) {
  $track_id = $_GET["track"];
  $playlist_id = $_GET["playlist"];

  $track = $trackStorage->findById($track_id);
  $playlist = $playlistStorage->findById($playlist_id);

  if (!$track || !$playlist) {
    http_response_code(404);
    exit();
  }

  if ($playlist["user"] !== $userStorage->user["username"]) {
    http_response_code(403);
    exit();
  }

  if (!in_array($track_id, $playlist["tracks"])) {
    $playlist["tracks"][] = $track_id;
    $playlistStorage->update($playlist_id, $playlist);
  }
  
  http_response_code(200);
  exit();
}

http_response_code(400);
exit();
