<?php

session_start();
require_once("utils/utils.php");
require_once("utils/filestorage.php");

$user_storage = new JSONStorage("storage/users.json");
$article_storage = new JSONStorage("storage/articles.json");

$errors = [];