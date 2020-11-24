<?php
// Include dependencies
require_once("utils/storage.inc.php");

// Open/connect to data source
$topicStorage = new Storage(new JsonIO("data/topics.json"));
// Fetch all records from the data source
$topics = $topicStorage->findAll(); // Array of topics

?>
<?php require("partials/header.inc.php") ?>

<div class="float-right">
  <a class="btn btn-primary" href="new-topic.php">+ New Topic</a>
</div>

<h1>Topics</h1>

<div class="list-group mt-4">
  <?php foreach($topics as $topic) : ?>
    <div class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1"><?= $topic["title"] ?></h5>
        <small><?= $topic["lastUpdate"] ?></small>
      </div>
      <p class="mb-1"><?= $topic["description"] ?></p>
    </div>
  <?php endforeach; ?>
</div> <!-- END: .list-group -->

<?php require("partials/footer.inc.php") ?>