<?php

session_start();

$basedir = realpath(__DIR__ . "/..");

include("${basedir}/utils/utils.php");
include("${basedir}/utils/storage.php");

$trackStorage = new JsonStorage("${basedir}/storage/tracks.json");
$playlistStorage = new JsonStorage("${basedir}/storage/playlists.json");
$userStorage = new UserStorage("${basedir}/storage/users.json");

$errors = get_flash_data("errors") ?? [];