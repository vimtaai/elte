<?php
ini_set("display_errors", "on");
error_reporting(E_ALL);

session_start();

require_once("utils/storage.php");
require_once("utils/input.php");
require_once("utils/flash.php");
require_once("utils/navigation.php");
require_once("utils/user.php");

const DATA_FILE_USERS = "data/users.json";
const DATA_FILE_NOTES = "data/notes.json";

$users = load_from_file(DATA_FILE_USERS);
$notes = load_from_file(DATA_FILE_NOTES);

$current_user = get_logged_in_user($users);
$notes_of_current_user = [];

if ($current_user !== null) {
  $notes_of_current_user = array_filter($notes, function ($note) use ($current_user) {
    return $note["owner"] === $current_user["username"];
  });
}

$messages = load_from_flash("messages") ?? [];
