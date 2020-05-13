<?php
include("utils/_init.php");
if (!$userStorage->authorize(["user"])) {
  redirect("index.php");
}

if (verify_post("title")) {
  $title = trim($_POST["title"]);

  if (empty($title)) {
    $errors[] = "Title must not be empty";
  }

  if ($playlistStorage->findOne([ "title" => $title ])) {
    $errors[] = "Playlist already exsits";
  }

  if (empty($errors)) {
    $new_playlist = [
      "title" => $title,
      "tracks" => [],
      "user" => $userStorage->user["username"]
    ];

    $playlistStorage->add($new_playlist);
  }
}

$playlists = $playlistStorage->findAll(["user" => $userStorage->user["username"]]);

?>
<?php include("partials/header.php"); ?>

<form action="playlists.php" method="post" class="form">
  <div class="form-group">
    <label for="title">New playlist</label>
    <div class="input-group">
      <input type="text" name="title" id="title" class="form-control">
      <div class="input-group-append">
        <button type="submit" class="btn btn-success">Create new playlist</button>
      </div>
    </div>
  </div>
</form>

<ul class="list-group">
  <?php foreach ($playlists as $id => $playlist) : ?>
    <li class="list-group-item">
      <div data-toggle="collapse" data-target="#collapse_<?= $id ?>">
        <strong class="title"><?= $playlist["title"] ?></strong><br>
        <small>Number of tracks: <?= count($playlist["tracks"]) ?></small>
      </div>
      <div class="collapse" id="collapse_<?= $id ?>">
        <hr>
        <?php foreach ($playlist["tracks"] as $trackID): ?>
          <?php $track = $trackStorage->findById($trackID); ?>
          <div><?= $track["artist"] ?>: <?= $track["title"] ?></div>
        <?php endforeach; ?>
      </div>
    </li>
  <?php endforeach; ?>
</ul>

<?php include("partials/footer.php"); ?>
