<?php
include("utils/_init.php");
if (!$userStorage->authorize(["admin"])) {
  redirect("index.php");
}

// Van-e bemenet?
if (verify_post("title", "artist", "length", "url")) {
  // Beolvasás/előfeldolgozás
  $title = trim($_POST["title"]);
  $artist = trim($_POST["artist"]);
  $length = trim($_POST["length"]);
  $url = trim($_POST["url"]);

  // Ellenőrzés 
  // (`title`, `artist` nem üres, `length` pp:mm formátumú, `url` youtube vagy spoitfy link)
  if (empty($title)) {
    $errors[] = "Title must not be empty";
  }

  if (empty($artist)) {
    $errors[] = "Artist must not be empty";
  }

  if (!preg_match("/^[0-5][0-9]:[0-5][0-9]$/", $length)) {
    $errors[] = "Invalid length format";
  }

  if (!filter_var($url, FILTER_VALIDATE_URL)) {
    $errors[] = "Invalid URL format";
  } else {
    $regex_list = [
      "/^https?:\/\/(www\.)?youtube\.com\/watch/", 
      "/^https?:\/\/youtu\.be\//",
      "/^https?:\/\/open\.spotify\.com/"
    ];

    $match = FALSE;
    foreach ($regex_list as $regex) {
      if (preg_match($regex, $url)) {
        $match = TRUE;
        break;
      }
    }
    
    if (!$match) {
      $errors[] = "The URL must be a Youtube or Spotify link";
    }
  }

  if (empty($errors)) {
    $new_track = [
      "title" => $title,
      "artist" => $artist,
      "length" => $length,
      "url" => $url
    ];

    $trackStorage->add($new_track);
  }
}

?>
<?php include("partials/header.php"); ?>

<form method="post" action="add.php">
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" name="title" id="title" class="form-control">
  </div>
  <div class="form-group">
    <label for="artist">Artist</label>
    <input type="text" name="artist" id="artist" class="form-control">
  </div>
  <div class="form-group">
    <label for="length">Length</label>
    <input type="text" name="length" id="length" class="form-control">
    <small class="text-muted">Format: <code>mm:ss</code></small>
  </div>
  <div class="form-group">
    <label for="url">URL</label>
    <input type="text" name="url" id="url" class="form-control" placeholder="http://">
  </div>
  <button type="submit" class="btn btn-primary">Add track</button>
</form>

<?php foreach ($errors as $error): ?>
  <div class="alert alert-danger"><?= $error ?></div>
<?php endforeach; ?>

<?php include("partials/footer.php"); ?>