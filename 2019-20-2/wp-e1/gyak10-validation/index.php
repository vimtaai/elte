<?php
include_once("lib/_init.php");

$tracks = [
  new Track("Angus McFife", "Gloryhammer", "03:45"),
  new Track("Universe on fire", "Gloryhammer", "04:05"),
  new Track("To Erebor", "Wind Rose", "3:55"),
  new Track("Highway to hell", "AC/DC", "2:33")
];

$filtered_tracks = $tracks;

if (verify_get("query", "target")) {
  $query = strtolower(trim($_GET["query"]));
  $target = $_GET["target"];

  $available_targets = ["all", "title", "artist"];
  if (!in_array($target, $available_targets)) {
    $messages[] = new ErrorMessage("Invalid search target");
  }

  if (empty($messages)) {
    if ($query !== "") {
      $filtered_tracks = array_filter($tracks, function ($track) use ($query, $target) {
        $title_contains = strpos(strtolower($track->title), $query) !== FALSE;
        $artist_contains = strpos(strtolower($track->artist), $query) !== FALSE;

        return (
          (($target === "title" || $target === "all") && $title_contains) || 
          (($target === "artist" || $target === "all") && $artist_contains)
        );
      });
    }
  }
}

?>
<?php include("partials/header.php"); ?>
<?php include("partials/menu.php"); ?>

<h1>My Tracks</h1>

<form action="index.php" method="get">
  <div class="ui action input">
    <input type="text" placeholder="Search..." name="query" value="<?= $query ?? "" ?>">
    <select class="ui compact selection dropdown" name="target">
      <option value="all"<?= ($target ?? "") === "all" ? " selected" : "" ?>>All</option>
      <option value="title"<?= ($target ?? "") === "title" ? " selected" : "" ?>>Title</option>
      <option value="artist"<?= ($target ?? "") === "artist" ? " selected" : "" ?>>Artist</option>
    </select>
    <button type="submit" class="ui primary button">Search</button>
  </div>
</form>

<?php include("partials/messages.php"); ?>

<div class="ui relaxed selection list">
  <?php foreach ($filtered_tracks as $track) : ?>
  <div class="item">
    <i class="music icon"></i>
    <div class="content">
      <strong class="header"><?= $track->title ?></strong>
      <span><?= $track->artist ?><span>
      <small><?= $track->length ?></small>
    </div>
  </div>
  <?php endforeach; ?>
</div>
    
<?php include("partials/footer.php"); ?>