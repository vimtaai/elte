<?php

// Loading (all) dependencies
require_once("utils/input.inc.php");
require_once("utils/storage.inc.php");
require_once("utils/navigation.inc.php");

// Load (all) data sources
$topicStorage = new Storage(new JsonIO("data/topics.json"));

// Create (all) global variables
$errors = [];