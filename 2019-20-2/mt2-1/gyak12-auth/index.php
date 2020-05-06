<?php
include("utils/_init.php");

$tracks = $trackStorage->findAll();

// Bemenet meglétének ellenőrzése
if (verify_get("search")) {
  // Beolvasás/előfeldolozás
  $search = strtolower(trim($_GET["search"]));

  // Ellenőrzés (nem kell)
  if ($search !== "") {
    $tracks = $trackStorage->query(function ($track) use ($search) {
      return (
        strpos(strtolower($track["title"]), $search) !== FALSE || 
        strpos(strtolower($track["artist"]), $search) !== FALSE
      );
    });
  }
}

if ($userStorage->authorize(["user"])) {
  $playlists = $playlistStorage->findAll(["user" => $userStorage->user["username"]]);
}

?>
<?php include("partials/header.php"); ?>

<form action="index.php" method="get" class="my-3">
  <div class="input-group">
    <input type="text" name="search" id="search" placeholder="Search tracks..." class="form-control">
    <div class="input-group-append">
      <button type="submit" class="btn btn-primary">Search</button>
    </div>
  </div>
</form>

<ul class="list-group">
  <?php foreach ($tracks as $id => $track): ?>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div>
      <a href="track.php?id=<?= $id ?>"><strong class="title"><?= $track["title"] ?></strong></a><br>
      <?= $track["artist"] ?>
      <small><?= $track["length"] ?></small>
    </div>
    <div>
      <?php if ($userStorage->authorize(["user"])) : ?>
      <span class="dropdown">
        <button class="btn btn-secondary btn-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i data-feather="plus"></i>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <?php foreach ($playlists as $pid => $playlist) : ?>
          <a class="dropdown-item" href="add-to-playlist.php?track=<?= $id ?>&playlist=<?= $pid ?>">
            <?= $playlist["title"] ?>
          </a>
          <?php endforeach; ?>
        </div>
      </span>
      <?php endif; ?>
      <?php if (isset($track["url"])): ?>
      <a href="<?= $track["url"] ?>" target="blank">
        <span class="btn btn-success btn-sm"><i data-feather="play"></i></span>
      </a>
      <?php endif; ?>
    </div>
  </li>
  <?php endforeach; ?>
</ul>
  
<?php include("partials/footer.php"); ?>