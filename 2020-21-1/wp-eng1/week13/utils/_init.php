<?php
// Start session
session_start();

// Loading (all) dependencies
require_once(__DIR__ . "/input.inc.php");
require_once(__DIR__ . "/storage.inc.php");
require_once(__DIR__ . "/navigation.inc.php");
require_once(__DIR__ . "/auth.inc.php");
require_once(__DIR__ . "/flash.inc.php");

// Load (all) data sources
$userStorage = new Storage(new JsonIO(__DIR__ . "/../data/users.json"));
$topicStorage = new Storage(new JsonIO(__DIR__ . "/../data/topics.json"));
$postStorage = new Storage(new JsonIO(__DIR__ . "/../data/posts.json"));

// Initialize Auth class
$auth = new Auth($userStorage);

// Create (all) global variables
$errors = load_from_flash("errors", []);
$successes = load_from_flash("successes", []);