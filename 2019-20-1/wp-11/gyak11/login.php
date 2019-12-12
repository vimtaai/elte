<?php
require_once("utils/_init.php");

if (verify_post("email", "password")) {
  // ! előfeldogozás
  $email = trim($_POST["email"]);
  $password = $_POST["password"];

  // ! hibaellenőrzés (authentication)
  $users = $user_storage->query(function ($user) use ($email, $password) {
    return $user["email"] === $email && password_verify($password, $user["password"]);
  });

  $user = array_shift($users);

  if ($user === NULL) {
    // ! hiba
    $errors[] = "Invalid username or password";
  }

  // ! feldolgozás
  if (empty($errors)) {
    // ! bejelentkeztetjük a felhasználót
    $_SESSION["user"] = $user;
    redirect("index.php");
  }
}
?>

<?php require_once("partials/header.php"); ?>

<form action="login.php" method="post">
  <!-- label+input:email+label+input:password+button:submit -->
  <label for="email">E-mail</label><br>
  <input type="email" name="email" id="email"><br>
  <label for="password">Password</label><br>
  <input type="password" name="password" id="password"><br>
  <button type="submit">Log in</button>
</form>

<?php require_once("partials/footer.php"); ?>