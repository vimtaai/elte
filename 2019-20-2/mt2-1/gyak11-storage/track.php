<?php

include("utils/utils.php");
include("utils/storage.php");

$trackStorage = new JsonStorage("storage/tracks.json");

$errors = [];
$track = NULL;

if (verify_get("id")) {
  $id = $_GET["id"];
  $track = $trackStorage->findById($id);

  if (!$track) {
    $errors[] = "Track not found. <a href=\"index.php\">Go back to list view.</a>";
  }

  if (empty($errors) && verify_post("delete")) {
    $delete = $_POST["delete"];

    if ($id === $delete) {
      $trackStorage->delete($id);
      redirect("index.php");
    }
  }
} else {
  $errors[] = "No track id provided. <a href=\"index.php\">Go back to list view.</a>";
}

?>
<?php include("partials/header.php"); ?>

<?php if ($track) : ?>
  <div class="card">
    <div class="card-header"><strong><?= $track["title"] ?></strong></div>
    <div class="card-body">
      <div><strong>Title:</strong> <?= $track["title"] ?></div>
      <div><strong>Artist: </strong> <?= $track["artist"] ?></div>
      <div><strong>Length: </strong> <?= $track["length"] ?></div>
      <div><strong>URL:</strong> <a href="<?= $track["url"] ?>"><?= $track["url"] ?></a></div>
    </div>
    <div class="card-footer">
      <form action="" method="post" class="form-inline">
        <a href="<?= $track["url"] ?>" class="btn btn-primary mr-2">Play track</a>
        <input type="hidden" name="delete" value="<?= $id ?>">
        <button type="submit" class="btn btn-danger">Delete track</button>
      </form>
    </div>
  </div>
<?php endif; ?>

<?php foreach ($errors as $error): ?>
  <div class="alert alert-danger"><?= $error ?></div>
<?php endforeach; ?>

<?php include("partials/footer.php"); ?>