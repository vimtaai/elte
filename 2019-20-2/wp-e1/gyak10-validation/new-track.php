<?php
include_once("lib/_init.php");

if (verify_post("title", "artist", "length")) {
  $title = trim($_POST["title"]);
  $artist = trim($_POST["artist"]);
  $length = trim($_POST["length"]);

  if (empty($title)) {
    $messages[] = new ErrorMessage("Title must not be empty");
  }

  if (empty($artist)) {
    $messages[] = new ErrorMessage("Artist must not be empty");
  }
  
  if (!preg_match("/^[0-5][0-9]:[0-5][0-9]$/", $length)) {
    $messages[] = new ErrorMessage("Invalid length format");
  }

  if (empty($messages)) {
    // track hozzáadása a listához (TODO)
    $messages[] = new SuccessMessage("Track \"${title}\" added");
  }
}

?>
<?php include("partials/header.php"); ?>
<?php include("partials/menu.php"); ?>

<h1>New Track</h1>

<form method="post" action="new-track.php" class="ui form">
  <div class="field">
    <label for="title">Title</label>
    <input type="text" id="title" name="title">
  </div>
  <div class="field">
    <label for="artist">Artist</label>
    <input type="text" id="artist" name="artist">
  </div>
  <div class="field">
    <label for="length">Length</label>
    <input type="text" id="length" name="length">
  </div>
  <button type="submit" class="ui primary button">
    Add track
  </button>
</form>

<?php include("partials/messages.php"); ?>
<?php include("partials/footer.php"); ?>
