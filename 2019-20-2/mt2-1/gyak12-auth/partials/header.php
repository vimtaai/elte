<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>myMusic</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  </head>
  <body>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <a href="#" class="navbar-brand">myMusic</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item"><a class="nav-link" href="index.php">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="add.php">New track</a></li>
          <li class="nav-item"><a class="nav-link" href="playlists.php">Playlists</a></li>
        </ul>
        <div class="navbar-nav">
          <?php if ($userStorage->isAuthenticated()) : ?>
            <a class="navbar-item" href="logout.php" <?= $userStorage->user["username"] === "Wololooo" ? "style='color: red'" : "" ?>>
              Log out (<?= $userStorage->user["fullname"] ?>)
            </a>
          <?php else : ?>
            <a class="navbar-item" href="login.php">Log in</a>
          <?php endif; ?>
        </div>
      </div>
    </nav>

    <div class="container mt-4">