<?php
include_once("lib/_init.php");
if (!$userStorage->authorize(["user"])) {
  redirect("index.php");
}

if (verify_post("title")) {
  $title = trim($_POST["title"]);
  
  if (empty($title)) {
    $messages[] = new ErrorMessage("Title must not be empty");
  }
  
  if (empty($messages)) {
    $new_playlist = new Playlist($title, $userStorage->userId);
    $playlistStorage->add($new_playlist);
    
    $messages[] = new SuccessMessage("Playlist ${title} added.");
  }
}

$playlists = $playlistStorage->query(function ($playlist) use ($userStorage) {
  return $playlist->isOwnedBy($userStorage->userId);
});

?>
<?php include("partials/header.php"); ?>
<?php include("partials/menu.php"); ?>

<h1>My Playlists</h1>

<form method="post" action="playlists.php" class="ui inline form">
  <div class="inline fields">
    <div class="five wide field">
      <input type="text" id="title" name="title" placeholder="Type playlist name here..">
    </div>
    <div class="five wide field">
      <button type="submit" class="ui primary button">
        Create playlist
      </button>
    </div>
  </div>
</form>

<?php include("partials/messages.php"); ?>

<div class="ui relaxed list">
  <?php foreach ($playlists as $id => $playlist) : ?>
  <a class="item" href="playlist.php?id=<?= $id ?>">
    <i class="music icon"></i>
    <div class="content">
      <strong class="header"><?= $playlist->title ?></strong>
      <small>Number of tracks: <?= $playlist->getTrackCount() ?></small>
      <div class="ui relaxed selection list">
        <?php foreach ($playlist->getTracks() as $track) : ?>
          <a class="item" href="track.php?id=<?= $id ?>">
            <i class="music icon"></i>
            <div class="content">
              <strong class="header"><?= $track->title ?></strong>
              <span><?= $track->artist ?><span>
              <small><?= $track->length ?></small>
            </div>
          </a>
        <?php endforeach; ?>
      </div>
    </div>
  </a>
  <?php endforeach; ?>
</div>

<?php include("partials/footer.php"); ?>