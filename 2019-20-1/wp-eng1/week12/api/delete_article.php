<?php
chdir("..");
require_once("_init.php");
header("Content-type: application/json");

if (!authorize("editor")) {
  http_response_code(403); // ! unauhtorized
  exit();
}

if (!verify_get("id")) {
  http_response_code(300); // ! bad request
  exit();
}

$id = $_GET["id"];
$article = $article_storage->find($id);

if ($article === NULL) {
  http_response_code(404); // ! not found
  exit();
}

$article_storage->delete($id);
http_response_code(200); // ! OK boomer
print("null");