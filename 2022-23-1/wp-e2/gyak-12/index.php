<?php
require_once("utils/init.php");
authorize($current_user, "user");

if (array_all_keys_exist($_POST, "save_note", "id", "icon", "title", "text")) {
  foreach ($notes as $index => $note) {
    if ($note["id"] === $_POST["id"] && $note["owner"] === $current_user["username"]) {
      $note_to_edit = $note;
      $note_to_edit_index = $index;
      break;
    }
  }

  if (!isset($note_to_edit)) {
    $messages[] = [ "type" => "danger", "text" => "Invalid note" ];
  }

  if (strlen($_POST["icon"]) !== 4) {
    $messages[] = [ "type" => "danger", "text" => "Invalid icon" ];
  }

  if (strlen($_POST["title"]) === 0) {
    $messages[] = [ "type" => "danger", "text" => "Title must not be empty" ];
  }

  if (empty($messages)) {
    $icon = $_POST["icon"];
    $title = $_POST["title"];
    $text = $_POST["text"];

    $note_to_edit["icon"] = $icon;
    $note_to_edit["title"] = $title;
    $note_to_edit["text"] = $text;
    $note_to_edit["last_edited_at"] = date("Y-m-d H:i:s");
    $note_to_edit["last_edited_by"] = $current_user["username"];

    $notes[$note_to_edit_index] = $note_to_edit;
    save_to_file(DATA_FILE_NOTES, $notes);
    redirect("index.php?note=" . $note_to_edit["id"]);
  }
}

if (array_all_keys_exist($_POST, "delete_note", "id")) {
  foreach ($notes as $index => $note) {
    if ($note["id"] === $_POST["id"] && $note["owner"] === $current_user["username"]) {
      $note_to_delete_index = $index;
      break;
    }
  }

  if (!isset($note_to_delete_index)) {
    $messages[] = [ "type" => "danger", "text" => "Invalid note" ];
  }

  if (empty($messages)) {
    array_splice($notes, $note_to_delete_index, 1);
    save_to_file(DATA_FILE_NOTES, $notes);
    redirect("index.php");
  }
}

if (array_all_keys_exist($_POST, "new_note")) {
  $new_note = [
    "id" => uniqid(),
    "icon" => "📝",
    "title" => "Untitled Note",
    "created_at" => date("Y-m-d H:i:s"),
    "last_edited_at" => date("Y-m-d H:i:s"),
    "last_edited_by" => $current_user["username"],
    "owner" => $current_user["username"],
    "text" => "Type your note here..."
  ];

  $notes[] = $new_note;
  save_to_file(DATA_FILE_NOTES, $notes);
  redirect("index.php?note=" . $new_note["id"]);
}

$current_note = null;
$selected_note_id = null;

if (array_all_keys_exist($_GET, "note")) {
  foreach ($notes_of_current_user as $note) {
    if ($note["id"] === $_GET["note"]) {
      $current_note = $note;
      $selected_note_id = $note["id"];
      break;
    }
  }
}

?>
<?php require("partials/header.php"); ?>

<div class="container-fluid flex-grow-1">
  <div class="row h-100">
    <div class="col col-12 col-sm-4 col-lg-2">
      <div class="d-grid gap-2 my-2">
        <?php foreach ($notes_of_current_user as $note): ?>
        <a class="btn btn-light text-start<?= $note["id"] === $selected_note_id ? " border-primary" : "" ?>" href="index.php?note=<?= $note["id"] ?>">
          <strong><?= $note["icon"] ?> <?= $note["title"] ?></strong>
        </a>
        <?php endforeach; ?>
      </div>

      <form method="post" action="index.php" class="d-grid">
        <button class="btn btn-primary btn-block my-2" name="new_note" type="submit">Add a New Note</button>
      </form>
    </div>

    <form method="post" action="index.php?note=<?= $current_note["id"] ?>" class="col col-12 col-sm-8 col-lg-10 d-flex flex-column">
      <?php if ($current_note !== null): ?>
      <input type="hidden" name="id" value="<?= $current_note["id"] ?>">

      <header class="d-flex align-items-center">
        <div class="flex-grow-1 d-flex me-5 mt-2 input-group">
          <input class="form-control form-control-lg input-group-text flex-grow-0 me-1 w-auto" name="icon" type="text" value="<?= $current_note["icon"] ?>" size="1">
          <input class="form-control form-control-lg flex-grow-1 w-auto" name="title" type="text" value="<?= $current_note["title"] ?>">
        </div>
        <button class="btn btn-secondary me-2" name="save_note" type="submit">Save</button>
        <button class="btn btn-danger" name="delete_note" type="submit">Delete</button>
      </header>

      <hr>

      <aside class="container-fluid">
        <div class="row my-1">
          <strong class="col col-6 col-md-4 col-lg-2">Created</strong>
          <div class="col"><?= $current_note["created_at"] ?></div>
        </div>

        <div class="row my-1">
          <strong class="col col-6 col-md-4 col-lg-2">Last edited</strong>
          <div class="col"><?= $current_note["last_edited_at"] ?></div>
        </div>

        <div class="row my-1">
          <strong class="col col-6 col-md-4 col-lg-2">Last edited by</strong>
          <div class="col">@<?= $current_note["last_edited_by"] ?></div>
        </div>
      </aside>

      <hr>

      <textarea name="text" class="form-control flex-grow-1 mb-2"><?= $current_note["text"] ?></textarea>
      <?php else: ?>
      <div class="alert alert-info">No note selected</div>
      <?php endif; ?>
      </form>
  </div>
</div>

<?php require("partials/messages.php"); ?>

<?php require("partials/footer.php"); ?>
