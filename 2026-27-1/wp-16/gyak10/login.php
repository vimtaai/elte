<?php

include("model/post.php");
include("model/user.php");
include("utils/database.php");
include("utils/helpers.php");

$errors = [];
$messages = [];

if (isset($_POST["email"]) && isset($_POST["password"])) {
  $inputs["email"] = trim($_POST["email"]);
  $inputs["password"] = $_POST["password"];
}

if (isset($inputs["email"]) && isset($inputs["password"])) {
  $statement = $database->prepare("SELECT * FROM `users` WHERE `email` = ?");
  $statement->execute([$inputs["email"]]);
  $users = $statement->fetchAll(PDO::FETCH_CLASS, "User");

  if (count($users) === 0) {
    $errors[] = "Invalid username or password.";
  }

  if (count($errors) === 0) {
    $user = $users[0];
    
    if (!$user->verifyPassword($inputs["password"])) {
      $errors[] = "Invalid username or password.";
    }
  }

  if (count($errors) === 0) {
    // Log the user in.
    $messages[] = "Successful login.";
  }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Bulletin Board</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Log in</h1>

  <form action="login.php" method="post">
    <label for="email">Email</label>
    <input type="text" id="email" name="email">
    <label for="password">Password</label>
    <input type="password" id="password" name="password">
    <button type="submit">Log in</button>
  </form>

  <?php foreach ($errors as $error): ?>
    <div class="error"><strong><?= $error ?></strong></div>
  <?php endforeach; ?>
  <?php foreach ($messages as $message): ?>
    <div class="messages"><strong><?= $message ?></strong></div>
  <?php endforeach; ?>

</body>
</html>