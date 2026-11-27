<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Hello <?= $user?->name ?? "Guest" ?></h1>
    <nav>
      <?php $currentPage = basename($_SERVER["SCRIPT_NAME"]); ?>
      <a href="index.php" <?= $currentPage === "index.php" ? 'class="active"' : "" ?>>Courses</a>
      <a href="new-course.php" <?= $currentPage === "new-course.php" ? 'class="active"' : "" ?>>New course</a>
    </nav>
    <a href="login.php"><button type="button">Log in</button></a>
    <?php /* <a href="logout.php"><button type="button">Log out</button></a> */ ?>
  </header>