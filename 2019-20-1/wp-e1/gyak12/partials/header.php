<!doctype html>

<head>
  <title>Expense manager</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css">
</head>

<body class="ui container">
  <nav class="ui pointing secondary menu">
    <a class="item" href="about.php">About</a>
    <a class="item" href="index.php">My Expenses</a>
    <div class="right menu">
      <?php if (is_logged_in()) : ?>
        <a class="item" href="logout.php">
          Log out (<?= $_SESSION["user"]["fullname"] ?>)
        </a>
      <?php else : ?>
        <a class="item" href="login.php">Log in</a>
      <?php endif; ?>
    </div>
  </nav>