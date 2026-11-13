<?php

$mood = "unhappy";
$name = "Marci";

if ($mood === "unhappy") {
  $name = "morcimarci";
}

class Post {
  public $title;
  public $text;

  function __construct($title, $text) {
    $this->title = $title;
    $this->text = $text;
  }
}

$posts = [
  new Post("ELMARAD", "A holnapi gyakorlat elmarad, ne gyertek be."),
  new Post("MEGSEM", "Megsem marad el a holnapi gyakorlat")
];

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
  <?php if ($mood === "unhappy"): ?>
    <strong><?= $name ?>, why are you unhappy?</strong>
  <?php endif; ?>

  <?php foreach (array_reverse($posts) as $post): ?>
  <article>
    <h2><?= $post->title ?></h2>
    <p><?= $post->text ?></p>
  </article>
  <?php endforeach; ?>
</body>
</html>