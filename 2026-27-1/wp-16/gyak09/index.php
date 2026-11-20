<?php

$name = "Marci";

class Post {
  public $id;
  public $title;
  public $text;

  function __construct($id, $title, $text) {
    $this->id = $id;
    $this->title = $title;
    $this->text = $text;
  }
}

function array_all_keys_exist(array $keys, array $array): bool {
  return array_all($keys, function ($key) use ($array) {
    return array_key_exists($key, $array);
  });
}

$posts = [
  new Post(0, "ELMARAD", "A holnapi gyakorlat elmarad, ne gyertek be."),
  new Post(1, "MEGSEM", "Megsem marad el a holnapi gyakorlat")
];

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

// Create new Post if needed
if (array_all_keys_exist(["title", "content"], $inputs)) {
  // Get proper new id
  $newPost = new Post(100, $inputs["title"], $inputs["content"]);
  $posts[] = $newPost;
  // Save in database
}

// Find post for details view
if (isset($inputs["post"])) {
  $currentPost = array_find($posts, function ($post) use ($inputs) {
    return $post->id === $inputs["post"];
  });
}

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

  <?php if (isset($currentPost)): ?>
    <a href="index.php">Back to list</a>
    <h2><?= $currentPost->title ?></h2>
    <p><?= $currentPost->text ?></p>
  <?php else: ?>
    <form action="index.php" method="post">
      <label for="title">Title</label>
      <input type="text" id="title" name="title">
      <label for="content">Content</label>
      <textarea id="content" name="content"></textarea>
      <button type="submit">Send</button>
    </form>

    <form action="index.php" method="get">
      <input type="text" name="search" value="<?= $inputs["search"] ?? "" ?>">
      <button type="submit">Search</button>
    </form>

    <?php foreach ($filteredPosts as $post): ?>
    <a href="index.php?post=<?= $post->id ?>">
      <article>
        <h2><?= $post->title ?></h2>
        <p><?= $post->text ?></p>
      </article>
    </a>
    <?php endforeach; ?>
  <?php endif; ?>
</body>
</html>