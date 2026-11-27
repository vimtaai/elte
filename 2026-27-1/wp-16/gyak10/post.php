<?php

include("model/post.php");
include("utils/database.php");
include("utils/helpers.php");

$name = "Marci";

// Check if we have the post id
if (isset($_GET["post"])) {
  $inputs["post"] = (int)$_GET["post"];
}

// Find post for details view
if (isset($inputs["post"])) {
  $statement = $database->prepare("SELECT * FROM `posts` WHERE id = ?");
  $statement->execute([$inputs["post"]]);
  $statement->setFetchMode(PDO::FETCH_CLASS, "Post");
  $currentPost = $statement->fetch();
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>PHP intro</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello <?= $name ?></h1>

  <a href="index.php">Back to list</a>

  <?php if (!empty($currentPost)): ?>
    <h2><?= $currentPost->title ?></h2>
    <p><?= $currentPost->text ?></p>
  <?php else: ?>
    <div class="error"><strong>Post not found.</strong></div>
  <?php endif; ?>
</body>
</html>