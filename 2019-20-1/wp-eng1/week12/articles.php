<?php
require_once("_init.php");
authorize("reader", "editor");

// ! load my articles from the database
$articles = $article_storage->findAll();
?>
<?php require("partials/header.php"); ?>
<h1>List of articles</h1>

<?php foreach ($articles as $id => $article) : ?>
  <article>
    <h2>
      <a href="view_article.php?id=<?= $id ?>">
        <?= $article["title"] ?>
      </a>
    </h2>
    <small>
      <?php foreach ($article["tags"] as $tag) : ?>
        <span class="tag"><?= $tag ?></span>
      <?php endforeach; ?>
    </small>
    <p><?= $article["excerpt"] ?><p>
  </article>
<?php endforeach; ?>
<?php require("partials/footer.php"); ?>