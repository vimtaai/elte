<?php
// Start session
session_start();

// Loading (all) dependencies
require_once("utils/input.inc.php");
require_once("utils/storage.inc.php");
require_once("utils/navigation.inc.php");
require_once("utils/auth.inc.php");
require_once("utils/flash.inc.php");

// Load (all) data sources
$userStorage = new Storage(new JsonIO("data/users.json"));
$topicStorage = new Storage(new JsonIO("data/topics.json"));

// Initialize Auth class
$auth = new Auth($userStorage);

// Create (all) global variables
$errors = load_from_flash("errors", []);
$successes = load_from_flash("successes", []);