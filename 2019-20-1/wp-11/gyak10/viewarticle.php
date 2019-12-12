<?php

require_once("utils.php");
require_once("storage.php");

$article_storage = new JSONStorage("articles.json");

if (verify_get("article")) {
  $id = $_GET["article"];

  $article = $article_storage->find($id);

  if ($article !== NULL) {
    // ! ha a like gombon keresztül jutottam ide
    if (verify_post("like")) {
      $article["likes"] += 1;
    } else {
      $article["views"] += 1;
    }

    $article_storage->update($id, $article);
  }
}

?>
<?php require_once("partials/header.php"); ?>
<?php if ($article) : ?>
<h1><?= $article["title"] ?></h1>
Published: 
<time value="<?= $article["date"] ?>">
  <?= date("M d, Y", $article["date"]) ?>
</time>
<br>
<small>
  Viewed <?= $article["views"] ?> times.
  Liked by <?= $article["likes"] ?> people.
</small>
<p><?= $article["text"] ?></p>

<form action="" method="post">
  <input type="hidden" name="like" value="true">
  <button type="submit">Like</button>
</form>

<?php else: ?>
<h1>This is not the article you are looking for...</h1>
<?php endif; ?>

<a href="articlelist.php">Back to articles</a>
<?php require_once("partials/footer.php"); ?>