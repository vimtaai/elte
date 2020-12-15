<?php
// Include init code
require_once("utils/_init.php");

// Restricting access to admins
if (!$auth->authorize(["user"])) {
  $errors[] = "You have log in to view this page";
  save_to_flash("errors", $errors);
  redirect("index.php");
}

if (verify_get("id")) {
  $id = $_GET["id"];
  // Query the data source
  $topic = $topicStorage->findById($id);

  // If the topic does not exist
  if ($topic === null) {
    redirect("index.php");
  }
}

?>
<?php require("partials/header.inc.php") ?>

<h1><?= $topic["title"] ?></h1>
<p><?= $topic["description"] ?></p>
<div class="form">
  <div class="form-group">
    <label for="post" class="form-label">Your post message</label>
    <textarea id="post" class="form-control"></textarea>
  </div>
  <button id="send-post" class="btn btn-primary">Send</button>
</div>
<hr>
<div id="posts"></div>

<script src="view-topic.js"></script>
<?php require("partials/footer.inc.php") ?>