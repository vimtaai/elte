<?php
include_once("lib/_init.php");

if (verify_get("id")) {
  $id = $_GET["id"];
  $track = $trackStorage->findById($id);

  if (!$track) {
    $messages[] = new ErrorMessage("Track not found. <a href=\"index.php\">Back to track list</a>");
  }

  if (verify_get("delete")) {
    $trackStorage->delete($id);
    redirect("index.php");
  }

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
      $new_track = new Track($title, $artist, $length);
      $trackStorage->update($id, $new_track);

      $messages[] = new SuccessMessage("Track \"${title}\" updated");
    }
  }
} else {
  $messages[] = new ErrorMessage("No track id provided. <a href=\"index.php\">Back to track list</a>");
}

?>
<?php include("partials/header.php"); ?>
<?php include("partials/menu.php"); ?>

<?php if ($track ?? FALSE) : ?>
  <form class="ui form" method="post" action="">
    <h4 class="ui dividing header"><?= $track->title ?></h4>
    <div class="field">
      <label for="title">Title</label>
      <input type="text" id="title" name="title" value="<?= $track->title ?>" disabled>
    </div>
    <div class="field">
      <label for="artist">Artist</label>
      <input type="text" id="artist" name="artist" value="<?= $track->artist ?>" disabled>
    </div>
    <div class="field">
      <label for="length">Length</label>
      <input type="text" id="length" name="length" value="<?= $track->length ?>" disabled>
    </div>
    <div class="ui divider"></div>
    <div>
      <span id="save-button-span" hidden>
        <button type="submit" class="ui primary button" id="save-button">Save</button>
      </span>
      <span id="edit-button-span">
        <button type="button" class="ui orange labeled icon button" id="edit-button">
          <i class="edit icon"></i> Edit
        </button>
        <a href="track.php?id=<?= $id ?>&delete" class="ui negative labeled icon button">
          <i class="trash icon"></i> Delete
        </a>
      </span>
    </div>
  </form>
<?php endif; ?>

<script>
  const editButton = document.querySelector("#edit-button");
  const editButtonSpan = document.querySelector("#edit-button-span");
  const saveButton = document.querySelector("#save-button");
  const saveButtonSpan = document.querySelector("#save-button-span");
  const inputs = document.querySelectorAll("input");

  editButton.addEventListener("click", function () {
    for (const input of inputs) {
      input.disabled = false;
    }
    editButtonSpan.hidden = true;
    saveButtonSpan.hidden = false;
  });
</script>

<?php include("partials/messages.php"); ?>
<?php include("partials/footer.php"); ?>
