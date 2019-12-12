<?php
require_once("_init.php");
authorize("reader", "editor");

if (!verify_get("id")) {
  redirect("articles.php");
}

$id = $_GET["id"];
$article = $article_storage->find($id);

if ($article === NULL) {
  redirect("articles.php");
}

?>
<?php require("partials/header.php"); ?>

<h1><?= $article["title"] ?></h1>
<p>Created: <?= date("Y-m-d H:i", $article["date"]) ?></p>
<small>
  <?php foreach ($article["tags"] as $tag) : ?>
    <span class="tag"><?= $tag ?></span>
  <?php endforeach; ?>
</small>
<p><?= $article["fulltext"] ?><p>

<?php require("partials/footer.php"); ?>