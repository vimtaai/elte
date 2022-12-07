<?php
require_once("helpers/init.php");

if (!is_user_authorized("user")) {
  add_flash_message("danger", "You don't have the necessary permissions.");
  redirect("login.php");
}

$selected_note = null;

if (check_all_keys_in_post("new_note")) {
  $new_note = [
    "id" => uniqid(),
    "title" => "Untitled note",
    "icon" => "📝",
    "created_at" => date("Y-m-d H:i:s"),
    "last_edited_at" => date("Y-m-d H:i:s"),
    "last_edited_by" => get_logged_in_user()["username"],
    "owner" => get_logged_in_user()["username"],
    "text" => "Type your note here"
  ];

  add_note($new_note);
  redirect("index.php?note=" . $new_note["id"]);
}

if (check_all_keys_in_get("note")) {
  foreach ($GLOBALS["notes"] as $note) {
    if ($note["id"] === $_GET["note"] && $note["owner"] === get_logged_in_user()["username"]) {
      $selected_note = $note;
      break;
    }
  }

  if (!isset($selected_note)) {
    add_message("danger", "There is no note with this id");
  }
}

if (check_all_keys_in_post("id", "delete_note")) {
  $note_to_delete_index = find_note_index_by_id($_POST["id"]);

  if (is_nan($note_to_delete_index)) {
    add_message("danger", "There is no such note");
  }

  $note = $GLOBALS["notes"][$note_to_delete_index];

  if ($note["owner"] !== get_logged_in_user()["username"]) {
    add_message("danger", "You cannot delete someone else's note");
  }

  if (!has_error_messages()) {
    delete_note($_POST["id"]);
    add_flash_message("success", "Note deleted");
    redirect("index.php");
  }
}

if (check_all_keys_in_post("id", "icon", "title", "text")) {
  if (strlen($_POST["icon"]) !== 4) {
    add_message("danger", "Icon must be a single emoji");
  }

  if (strlen($_POST["title"]) === 0) {
    add_message("danger", "Title must not be empty");
  }

  if (!has_error_messages()) {
    $id = $_POST["id"];
    $icon = $_POST["icon"];
    $title = $_POST["title"];
    $text = $_POST["text"];

    $note_to_edit_index = find_note_index_by_id($id);
    $note_to_edit = $GLOBALS["notes"][$note_to_edit_index];

    $note_to_edit["icon"] = $icon;
    $note_to_edit["title"] = $title;
    $note_to_edit["text"] = $text;
    $note_to_edit["last_edited_at"] = date("Y-m-d H:i:s");
    $note_to_edit["last_edited_by"] = get_logged_in_user()["username"];

    edit_note($id, $note_to_edit);
    $selected_note = $note_to_edit;
  }
}

?>
<?php require("partials/header.php"); ?>

<div class="container-fluid flex-grow-1">
  <div class="row h-100">
    <div class="col col-12 col-sm-4 col-lg-2">
      <div class="d-grid gap-2 my-2">
        <?php foreach (get_notes_for_user(get_logged_in_user()) as $note): ?>
          <a class="btn btn-light text-start <?= is_note_selected($note, $selected_note) ? "border-primary" : "" ?>" href="index.php?note=<?= $note["id"] ?>">
            <strong><?= $note["icon"] ?> <?= $note["title"] ?></strong>
          </a>
        <?php endforeach; ?>
      </div>

      <div class="d-grid">
        <form method="post" action="index.php">
          <input type="hidden" name="new_note">
          <button class="btn btn-primary btn-block my-2" type="submit">Add a New Note</button>
        </form>
      </div>
    </div>

    <main class="col col-12 col-sm-8 col-lg-10 d-flex flex-column">
      <?php if ($selected_note !== null): ?>
      <form method="post" action="index.php?note=<?= $selected_note["id"] ?>">
        <input type="hidden" name="id" value="<?= $selected_note["id"] ?>">

        <header class="d-flex align-items-center">
          <div class="flex-grow-1 d-flex me-5 mt-2 input-group">
            <input class="form-control form-control-lg input-group-text flex-grow-0 me-1 w-auto" type="text" name="icon" value="<?= $selected_note["icon"] ?>" size="1">
            <input class="form-control form-control-lg flex-grow-1 w-auto" type="text" name="title" value="<?= $selected_note["title"] ?>">
          </div>
          <button class="btn btn-secondary me-2" type="submit">Save</button>
          <button class="btn btn-danger" type="submit" name="delete_note">Delete</button>
        </header>

        <hr>

        <aside class="container-fluid">
          <div class="row my-1">
            <strong class="col col-6 col-md-4 col-lg-2">Created</strong>
            <div class="col"><?= $selected_note["created_at"] ?></div>
          </div>

          <div class="row my-1">
            <strong class="col col-6 col-md-4 col-lg-2">Last edited</strong>
            <div class="col"><?= $selected_note["last_edited_at"] ?></div>
          </div>

          <div class="row my-1">
            <strong class="col col-6 col-md-4 col-lg-2">Last edited by</strong>
            <div class="col">@<?= $selected_note["last_edited_by"] ?></div>
          </div>
        </aside>

        <hr>

        <textarea name="text" class="form-control flex-grow-1 mb-2"><?= $selected_note["text"] ?></textarea>
      </form>
      <?php else: ?>
        <div class="alert alert-info">No note selected</div>
      <?php endif; ?>
    </main>
  </div>
</div>

<?php require("partials/messages.php"); ?>
<?php require("partials/footer.php"); ?>
