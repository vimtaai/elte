<?php $page = basename($_SERVER["SCRIPT_FILENAME"]); ?>
<!doctype html>

<meta charset="utf-8">
<title>Ticket kezelő rendszer</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

<div class="container">
  <nav class="navbar navbar-expand-sm navbar-light mb-3">
    <span class="navbar-brand">TicketManager</span>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link<?= $page === "index.php" ? " active" : "" ?>" href="index.php">
          Listanézet
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link<?= $page === "add.php" ? " active" : "" ?>" href="add.php">
          Új bejegyzés
        </a>
      </li>
    </ul>
    <span>
      <?php if (is_logged_in()) : ?>
        <strong class="mr-4">
          <i class="fa fa-user mr-2"></i>
          <?= $_SESSION["user"]["name"] ?>
        </strong>
        <a href="logout.php" class="btn btn-outline-secondary">Kijelentkezés</a>
      <?php else: ?>
        <a href="login.php" class="btn btn-outline-primary">Bejelentkezés</a>
      <?php endif; ?>
    </span>
  </nav>
</div>

<div class="container px-5">