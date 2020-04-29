<?php
include_once("lib/_init.php");

$tracks = $trackStorage->findAll();
$playlists = $playlistStorage->findAll();

if (verify_get("query", "target")) {
  $query = strtolower(trim($_GET["query"]));
  $target = $_GET["target"];

  $available_targets = ["all", "title", "artist"];
  if (!in_array($target, $available_targets)) {
    $messages[] = new ErrorMessage("Invalid search target");
  }

  if (empty($messages)) {
    if ($query !== "") {
      $tracks = $trackStorage->query(function ($track) use ($query, $target) {
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

<div class="ui relaxed list">
  <?php foreach ($tracks as $id => $track) : ?>
  <div class="item">
    <div class="right floated">
      <div class="ui compact icon top right pointing dropdown button">
        <i class="plus icon"></i>
        <div class="menu">
          <div class="header">Add to playlist</div>
          <?php foreach ($playlists as $playlist) : ?>
            <div class="item"><?= $playlist->title ?></div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
    <i class="music icon"></i>
    <div class="content">
      <a href="track.php?id=<?= $id ?>">
        <strong class="header"><?= $track->title ?></strong>
      </a>
      <span><?= $track->artist ?><span>
      <small><?= $track->length ?></small>
    </div>
  </div>
  <?php endforeach; ?>
</div>
    
<?php include("partials/footer.php"); ?>