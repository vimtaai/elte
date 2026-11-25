<!doctype html>
<html>
<head>
  <link rel="stylesheet" href="styles/index.css">
</head>

<body>
  <nav class="menubar">
    <a href="index.php" class="<?= $page === "index.php" ? "active" : "" ?>">Transactions</a>
    <a href="data-entry.php" class="<?= $page === "data-entry.php" ? "active" : "" ?>">Data entry</a>

    <!--
    <div class="user-menu">
      <span>Logged in as <strong>User</strong></span>
      <a href="login.php">Logout</a>
    </div>
    -->

  </nav>

  <h1>Hello User</h1>
