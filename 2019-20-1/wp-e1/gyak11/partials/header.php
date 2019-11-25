<!doctype html>

<head>
  <title>Expense manager</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yegor256/tacit@gh-pages/tacit-css-1.5.1.min.css">
</head>

<body>
  <nav>
    <ul>
      <li><a href="about.php">About</a></li>
      <li><a href="index.php">My Expenses</a></li>
      <?php if (is_logged_in()) : ?>
      <li><a href="logout.php">Log out (<?= $_SESSION["user"] ?>)</a></li>
      <?php else : ?>
      <li><a href="login.php">Log in</a></li>
      <?php endif; ?>
    </ul>
  </nav>