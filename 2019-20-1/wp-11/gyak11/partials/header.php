<!doctype html>

<head>
  <meta charset="utf-8">
  <title>My owosum online newspaper</title>
  <link rel="stylesheet" href="https://unpkg.com/marx-css/css/marx.min.css">
</head>

<body>
  <nav style="padding: 10px;">
    <strong><a href="index.php">View Articles</a></strong>
    
    <?php if (authorize("writer")): ?>
      <strong><a href="addarticle.php">Add new article</a></strong>
    <?php endif; ?>

    <?php if (isset($_SESSION["user"])): ?>
      <strong>
        <a href="logout.php">
          Log out (<?= $_SESSION["user"]["fullname"] ?>)
        </a>
      </strong>
    <?php else: ?>
      <strong><a href="login.php">Log in</a></strong>
    <?php endif; ?>
  </nav>
  <main>