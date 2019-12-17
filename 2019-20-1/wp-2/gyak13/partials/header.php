<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>TicketZ</title>
  <link rel="stylesheet" href="https://igoradamenko.github.io/awsm.css/css/awsm.min.css">
</head>

<body>

<nav>
  <ul>
    <li><a href="index.php"><button>Tickets</button></a></li>
    <?php if (is_logged_in()) : ?>
    <li><a href="logout.php"><button>Log out (<?= $_SESSION["user"]["name"] ?>)</button></a></li>
    <?php else: ?>
    <li><a href="login.php"><button>Log in</button></a></li>
    <?php endif; ?>
  </ul>
</nav>

<main>