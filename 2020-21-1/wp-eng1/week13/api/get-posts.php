<?php 
require_once("../utils/_init.php");
header("Content-Type: application/json; charset=UTF-8");

if (!$auth->authorize(["user"])) {
  http_response_code(403); // Forbidden
  print("{ \"error\" => \"You have to log in to request this information\" }");
  exit();
}

if (verify_get("topicId")) {
  $topicId = $_GET["topicId"];
  if ($topicStorage->findById($topicId)) {
    // The requested topic exists
    http_response_code(200);
    // Load all posts with given topic ID
    $posts = $postStorage->findAll(["topicId" => $topicId]);
    // Add user name information to the response object
    foreach ($posts as $index => $post) {
      // Insert the user's name based on the ID
      $posts[$index]["userFullname"] = $userStorage->findById($post["userId"])["fullname"];
    }
    print(json_encode($posts));
  } else {
    // Topic does not exist
    http_response_code(404); // Not found
    print("{}");
  }
} else {
  // No topicId was given
  http_response_code(400); // Bad request
  print("{}");
}