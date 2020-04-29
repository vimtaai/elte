<div class="ui secondary menu">
  <a class="item<?= is_page_active("index.php") ? " active" : "" ?>" href="index.php">My Tracks</a>
  <a class="item<?= is_page_active("new-track.php") ? " active" : "" ?>" href="new-track.php">New Track</a>
  <a class="item<?= is_page_active("playlists.php") ? " active" : "" ?>" href="playlists.php">Playlists</a>
  <div class="right menu">
    <div class="item">
      <div class="ui icon input">
        <input type="text" placeholder="Search...">
        <i class="search link icon"></i>
      </div>
    </div>
    <a class="ui item">Logout</a>
  </div>
</div>