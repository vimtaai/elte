<?php

$BASE_DIR = realpath(__DIR__ . "/..");

session_start();
require_once("utils.php");
require_once("storage.php");

$menu_store = new JSONStorage("${BASE_DIR}/storage/menu.json");
$food_store = new JSONStorage("${BASE_DIR}/storage/etel.json");

$errors = [];