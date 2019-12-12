<?php

$root_dir = __DIR__ . "/../";

session_start();

require_once("${root_dir}/utils/utils.php");
require_once("${root_dir}/utils/storage.php");

$article_storage = new JSONStorage("${root_dir}/storage/articles.json");
$user_storage = new JSONStorage("${root_dir}/storage/users.json");

$errors = [];