<?php

include("model/post.php");
include("utils/database.php");
include("utils/helpers.php");

$name = "Marci";
$inputs = [];

// Read possible inputs
if (isset($_GET["post"])) {
  $inputs["post"] = (int)$_GET["post"];
}

if (isset($_GET["search"])) {
  $inputs["search"] = htmlspecialchars(strtolower($_GET["search"]));
}

if (array_all_keys_exist(["title", "content"], $_POST)) {
  $inputs["title"] = htmlspecialchars($_POST["title"]);
  $inputs["content"] = htmlspecialchars($_POST["content"]);
}

$errors = [];
$messages = [];

// Create new Post if needed
if (array_all_keys_exist(["title", "content"], $inputs)) {
  // Input validation
  if ($inputs["title"] === "") {
    $errors[] = "Title must not be empty.";
  }

  if ($inputs["content"] === "") {
    $errors[] = "Post body must not be empty.";
  }

  if (strlen($inputs["title"]) > 50) {
    $errors[] = "Title must be less than 50 characters.";
  }

  if (count($errors) === 0) {
    $newPost = new Post(NULL, $inputs["title"], $inputs["content"]);
    $database
      ->prepare("INSERT INTO `posts` (`title`, `text`) VALUES (?, ?)")
      ->execute([$newPost->title, $newPost->text]);
    $messages[] = "Post created.";
  }
}

$posts = $database
  ->query("SELECT * FROM `posts`")
  ->fetchAll(PDO::FETCH_CLASS, "Post");

// Filter posts with search
$filteredPosts = $posts;

if (isset($inputs["search"])) {
  $filteredPosts = array_filter($posts, function ($post) use ($inputs) {
    return strstr(strtolower($post->text), $inputs["search"]) !== false;
  });
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

  <form action="index.php" method="post">
    <label for="title">Title</label>
    <input type="text" id="title" name="title">
    <label for="content">Content</label>
    <textarea id="content" name="content"></textarea>
    <button type="submit">Send</button>
  </form>

  <?php foreach ($errors as $error): ?>
    <div class="error"><strong><?= $error ?></strong></div>
  <?php endforeach; ?>
  <?php foreach ($messages as $message): ?>
    <div class="messages"><strong><?= $message ?></strong></div>
  <?php endforeach; ?>

  <form action="index.php" method="get">
    <input type="text" name="search" value="<?= $inputs["search"] ?? "" ?>">
    <button type="submit">Search</button>
  </form>

  <?php foreach ($filteredPosts as $post): ?>
  <a href="post.php?post=<?= $post->id ?>">
    <article>
      <h2><?= $post->title ?></h2>
      <p><?= $post->text ?></p>
    </article>
  </a>
  <?php endforeach; ?>
</body>
</html>