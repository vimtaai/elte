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
  </div>
</form>

<ul class="list-group" id="track-list">
  <?php foreach ($tracks as $id => $track): ?>
  
  <?php endforeach; ?>
</ul>
<ul class="pagination"></ul>

<script>
const trackList = document.querySelector("#track-list");
const searchBox = document.querySelector("#search");

function handlePlaylistClick(e) {
  if (!event.target.matches(".playlist-list span")) {
    return;
  }

  const trackId = event.target.dataset.track;
  const playlistId = event.target.dataset.playlist;
  
  fetch(`api/add-to-playlist.php?track=${trackId}&playlist=${playlistId}`);
}
trackList.addEventListener("click", handlePlaylistClick);

async function fetchTracks(page = 1) {
  const query = searchBox.value;
  const response = await fetch(`api/get-tracks.php?search=${query}&page=${page}`);
  const data = await response.json();
  const tracks = data.tracks;

  trackList.innerHTML = Object.keys(tracks).map(key => renderTrack(tracks[key], key)).join("\n");
  pagination.innerHTML = renderPagination(data.page, data.numpages);

  // ikonok frissítése
  feather.replace();
}
window.addEventListener("load", () => fetchTracks());
searchBox.addEventListener("input", () => fetchTracks());

const pagination = document.querySelector(".pagination");

function handlePageClick() {
  if (!event.target.matches(".pagination .page-link")) {
    return;
  }

  const page = event.target.innerText;
  fetchTracks(page);
}
pagination.addEventListener("click", handlePageClick);

function renderPagination(page, numpages) {
  const pages = [...Array(numpages).keys()];
  return pages.map(page => `<li class="page-item"><span class="page-link">${page+1}</span></li>`).join("\n");
}

function renderTrack(track, id) {
  return `<li class="list-group-item d-flex justify-content-between align-items-center">
    <div>
      <a href="track.php?id=${id}"><strong class="title">${track.title}</strong></a><br>
      ${track.artist}
      <small>${track.length}</small>
    </div>
    <div>
      <?php if ($userStorage->authorize(["user"])) : ?>
      <span class="dropdown">
        <button class="btn btn-secondary btn-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i data-feather="plus"></i>
        </button>
        <div class="dropdown-menu playlist-list" aria-labelledby="dropdownMenuButton">
          <?php foreach ($playlists as $pid => $playlist) : ?>
          <span class="dropdown-item" data-track="${id}" data-playlist="<?= $pid ?>">
            <?= $playlist["title"] ?>
          </span>
          <?php endforeach; ?>
        </div>
      </span>
      <?php endif; ?>
      ${track.url ? 
        `<a href="${track.url}" target="blank">
          <span class="btn btn-success btn-sm"><i data-feather="play"></i></span>
        </a>`
      : ""}
    </div>
  </li>`;
}
</script>

<?php include("partials/footer.php"); ?>