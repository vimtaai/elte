<?php
session_start();

$BASE_DIR = realpath(__DIR__ . "/..");

require_once("utils.php");
require_once("storage.php");

$user_store = new JSONStorage("${BASE_DIR}/data/users.json");
$ticket_store = new JSONStorage("${BASE_DIR}/data/tickets.json");

$errors = [];
$messages = [];