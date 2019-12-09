<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>TicketZ</title>
</head>
<body>

<nav>
  <ul>
    <li><a href="index.php">Tickets</a></li>
    <?php if (is_logged_in()) : ?>
    <li><a href="logout.php">Log out (<?= $_SESSION["user"]["name"] ?>)</a></li>
    <?php else: ?>
    <li><a href="login.php">Log in</a></li>
    <?php endif; ?>
  </ul>
</nav>