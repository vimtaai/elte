<?php

$BASE_DIR = realpath(__DIR__ . "/..");

session_start();
require_once("utils.php");
require_once("storage.php");

$avenger_store = new JSONStorage("${BASE_DIR}/storage/avengers.json");
$mission_store = new JSONStorage("${BASE_DIR}/storage/missions.json");

$errors = [];