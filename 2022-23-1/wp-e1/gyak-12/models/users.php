<?php
require_once("helpers/utils.php");

const USER_DATA_FILE = "data/users.json";
$GLOBALS["users"] = load_from_file(USER_DATA_FILE);

function add_user($user) {
  $GLOBALS["users"][] = $user;
  save_to_file(USER_DATA_FILE, $GLOBALS["users"]);
}
