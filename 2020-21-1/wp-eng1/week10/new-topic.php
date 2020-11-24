<?php
// Include dependencies
require_once("utils/input.inc.php");
require_once("utils/storage.inc.php");
// Open/connect to data source
$topicStorage = new Storage(new JsonIO("data/topics.json"));

// Array to store all my error messages
$errors = [];

// Process the input
// 1: Check if input exists
if (verify_post("title", "description")) {
  // 2: Read/preprocess the input
  $title = trim($_POST["title"]);
  $description = trim($_POST["description"]);

  // 3: Validate input / check for errors
  if (empty($title)) {
    $errors[] = "Title must not be empty";
  }

  if (empty($description)) {
    $errors[] = "Description must not be empty";
  }

  // 4: If there are no errors then process input
  if (empty($errors)) {
    // 5: Add the new record to the data file
    $newTopic = [
      "title" => $title,
      "description" => $description,
      "lastUpdate" => date("Y-m-d H:i:s")
    ];
    $topicStorage->add($newTopic);
  }
}

?>
<?php require("partials/header.inc.php") ?>
<h1>New Topic</h1>
<form class="col-md-6 col-xs-12" method="post">
  <div class="form-group">
    <label for="title">Topic title</label>
    <input class="form-control" type="text" name="title" id="title" value="<?= $title ?? "" ?>">
  </div>
  <div class="form-group">
    <label for="description">Topic description</label>
    <input class="form-control" type="text" name="description" id="description" value="<?= $description ?? "" ?>">
  </div>
  <button class="btn btn-primary">Submit</button>
</form>
<?php foreach($errors as $error) : ?>
  <div class="alert alert-danger"><?= $error ?></div>
<?php endforeach; ?>
<?php require("partials/footer.inc.php") ?>