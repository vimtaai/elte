<?php

require_once("utils.php");
require_once("storage.php");

$article_storage = new JSONStorage("articles.json");

if (verify_post("title", "text")) {
  $title = $_POST["title"];
  $text = $_POST["text"];
  $date = time();
  $views = 0;
  $likes = 0;

  $article = [
    "title" => $title,
    "text" => $text,
    "date" => $date,
    "views" => $views,
    "likes" => $likes
  ];

  $article_storage->add($article);
}

?>
<?php require_once("partials/header.php"); ?>
<form action="addarticle.php" method="post">
  Title: <br>
  <input type="text" name="title"> <br>
  Article text: <br>
  <textarea name="text" cols="30" rows="10"></textarea> <br>
  <button type="submit">Save</button>
</form>
<?php require_once("partials/footer.php"); ?>