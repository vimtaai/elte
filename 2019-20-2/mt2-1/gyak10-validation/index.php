<?php

include("utils/utils.php");

$tracks = [
  [ "title" => "It's my life", "artist" => "Bon Jovi", "length" => "3:14", "url" => "https://www.youtube.com/watch?v=vx2u5uUu3DE" ],
  [ "title" => "Living on a prayer", "artist" => "Bon Jovi", "length" => "4:01" ],
  [ "title" => "Highway to hell", "artist" => "AC/DC", "length" => "4:42" ],
  [ "title" => "Back in black", "artist" => "AC/DC", "length" => "2:59" ]
];

// Bemenet meglétének ellenőrzése
if (verify_get("search")) {
  // Beolvasás/előfeldolozás
  $search = strtolower(trim($_GET["search"]));

  // Ellenőrzés (nem kell)
  if ($search === "") {
    $filtered_tracks = $tracks;
  } else {
    // Feldolgozás
    $filtered_tracks = array_filter($tracks, function ($track) use ($search) {
      return (
        strpos(strtolower($track["title"]), $search) !== FALSE || 
        strpos(strtolower($track["artist"]), $search) !== FALSE
      );
    });
  }
} else {
  $filtered_tracks = $tracks;
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
  <?php foreach ($filtered_tracks as $track): ?>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div>
      <strong class="title"><?= $track["title"] ?></strong><br>
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