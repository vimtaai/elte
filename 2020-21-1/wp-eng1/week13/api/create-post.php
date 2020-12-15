<?php
require_once("../utils/_init.php");
header("Content-Type: application/json; charset=UTF-8");

if (!$auth->authorize(["user"])) {
  http_response_code(403); // Forbidden
  print("{ \"error\" => \"You have to log in to request this information\" }");
  exit();
}

if (!verify_post("text", "topicId")) {
  // No text was recieved
  http_response_code(400); // Bad request
  print("{ \"error\" => \"You have to send a topic ID and the post text\" }");
  exit();
}


$text = $_POST["text"];
$topicId = $_POST["topicId"];

// Create new post
$postStorage->add([
  "userId" => $auth->authenticated_user()["id"],
  "topicId" => $topicId,
  "date" => date("Y-m-d H:i:s"),
  "text" => $text
]);
