<?php

include("utils/utils.php");
include("utils/storage.php");

$trackStorage = new JsonStorage("storage/tracks.json");
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
    <?php if (isset($track["url"])): ?>
    <a href="<?= $track["url"] ?>" target="blank">
      <span class="btn btn-success btn-sm"><i data-feather="play"></i></span>
    </a>
    <?php endif; ?>
  </li>
  <?php endforeach; ?>
</ul>
  
<?php include("partials/footer.php"); ?>