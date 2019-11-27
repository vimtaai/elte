<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>My little application</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yegor256/tacit@gh-pages/tacit-css-1.5.1.min.css">
</head>

<nav>
  <ul>
    <li><a href="index.php">Home</a></li>
    <?php if (authorize("editor")) : ?>
      <li><a href="articles.php">Articles</a></li>
    <?php endif; ?>
    <?php if (is_logged_in()) : ?>
      <li><a href="logout.php">Log out (<?= $_SESSION["user"]["fullname"] ?>)</a></li>
    <?php else: ?>
      <li><a href="login.php">Log in</a></li>
    <?php endif; ?>
  </ul>
</nav>

<body>
<!-- PAGE -->
