<div class="ui secondary menu">
  <a class="item<?= is_page_active("index.php") ? " active" : "" ?>" href="index.php">My Tracks</a>
  <?php if ($userStorage->authorize(["user"])) : ?>
  <a class="item<?= is_page_active("new-track.php") ? " active" : "" ?>" href="new-track.php">New Track</a>
  <a class="item<?= is_page_active("playlists.php") ? " active" : "" ?>" href="playlists.php">Playlists</a>
  <?php endif; ?>
  <div class="right menu">
    <?php if ($userStorage->isAuthenticated()) : ?>
    <a class="ui item" href="logout.php">Logout (<?= $userStorage->user->fullname ?>)</a>
    <?php else : ?>
    <a class="ui item" href="login.php">Log in</a>
    <?php endif; ?>
  </div>
</div>