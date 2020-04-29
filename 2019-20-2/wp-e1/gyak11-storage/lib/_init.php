<?php
define("INIT", TRUE);

// Dependencies
include_once("utils.php");
include_once("message.class.php");
include_once("storage.class.php");
// Model classes
include_once("track.class.php");
include_once("playlist.class.php");

// Array to store messages
$messages = [];

// Storage files
$trackStorage = new SerializeObjectStorage("storage/tracks.storage");
$playlistStorage = new SerializeObjectStorage("storage/playlists.storage");
