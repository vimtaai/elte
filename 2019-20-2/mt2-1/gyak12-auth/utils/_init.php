<?php

session_start();

include("utils/utils.php");
include("utils/storage.php");

$trackStorage = new JsonStorage("storage/tracks.json");
$playlistStorage = new JsonStorage("storage/playlists.json");
$userStorage = new UserStorage();

$errors = [];