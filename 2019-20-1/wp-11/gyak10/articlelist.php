<?php

require_once("utils.php");
require_once("storage.php");

$article_storage = new JSONStorage("articles.json");

$articles = $article_storage->findAll();

?>
<?php require_once("partials/header.php"); ?>
<h1>Articles</h1>

<?php foreach ($articles as $id => $article) : ?>
  <article>
    <h2>
      <a href="viewarticle.php?article=<?= $id ?>">
        <?= $article["title"] ?>
      </a>
    </h2>
    Published: 
    <time value="<?= $article["date"] ?>">
      <?= date("M d, Y", $article["date"]) ?>
    </time>
    <p><?= preg_split("/[\.?!]/", $article["text"])[0] ?>...</p>
    <small>
      Viewed <?= $article["views"] ?> times.
      Liked by <?= $article["likes"] ?> people.
    </small>
  </article>
<?php endforeach; ?>
<?php require_once("partials/footer.php"); ?>