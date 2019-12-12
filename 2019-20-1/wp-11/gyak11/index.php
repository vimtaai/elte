<?php
require_once("utils/_init.php");

$articles = $article_storage->findAll();
?>
<?php require_once("partials/header.php"); ?>

<h1>Articles</h1>

<?php foreach ($articles as $id => $article) : ?>
  <article>
    <h4>
      <a href="viewarticle.php?article=<?= $id ?>">
        <?= $article["title"] ?>
      </a>
    </h4>
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
  <hr>
<?php endforeach; ?>

<?php require_once("partials/footer.php"); ?>