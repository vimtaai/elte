<?php
// Include init code
require_once("utils/_init.php");

// Fetch all records from the data source
$topics = $topicStorage->findAll(); // Array of topics

?>
<?php require("partials/header.inc.php") ?>

<?php if ($auth->authorize(["admin"])): ?>
  <div class="float-right">
    <a class="btn btn-primary" href="new-topic.php">+ New Topic</a>
  </div>
<?php endif; ?>

<h1>Topics</h1>

<?php require("partials/errors.inc.php") ?>

<div class="list-group mt-4">
  <?php foreach($topics as $topic) : ?>
    <a href="view-topic.php?id=<?= $topic["id"] ?>" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1"><?= $topic["title"] ?></h5>
        <small><?= $topic["lastUpdate"] ?></small>
      </div>
      <p class="mb-1"><?= $topic["description"] ?></p>
    </a>
  <?php endforeach; ?>
</div> <!-- END: .list-group -->

<?php require("partials/footer.inc.php") ?>