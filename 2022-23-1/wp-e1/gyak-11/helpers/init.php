<?php
require_once("datafiles.php");
require_once("utils.php");

session_start();

$users = load_from_file(USER_DATA_FILE);
$messages = [];
