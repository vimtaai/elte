<?php
require_once("utils/_init.php");

if (verify_post("email", "password", "fullname")) {
  // ! előfeldogozás
  $email = trim($_POST["email"]);
  $password = $_POST["password"];
  $fullname = trim($_POST["fullname"]);

  // ! hibaellenőrzés (authentication)
  $users = $user_storage->query(function ($user) use ($email) {
    return $user["email"] === $email;
  });

  if (!empty($users)) {
    // ! hiba
    $errors[] = "E-mail already registered";
  }

  if (strlen($password) < 8) {
    $errors[] = "Password too short";
  }

  if ($fullname === "") {
    $errors[] = "You must provide your full name";
  }

  // ! feldolgozás
  if (empty($errors)) {
    $user = [
      "email" => $email,
      "password" => password_hash($password, PASSWORD_DEFAULT),
      "fullname" => $fullname,
      "role" => "reader"
    ];
    $user_storage->add($user);

    // ! létrehozom a usert az adatbázisban
    redirect("login.php");
  }
}
?>

<?php require_once("partials/header.php"); ?>

<form action="signup.php" method="post">
  <label for="email">E-mail</label><br>
  <input type="email" name="email" id="email"><br>
  <label for="password">Password</label><br>
  <input type="password" name="password" id="password"><br>
  <label for="fullname">Full name</label><br>
  <input type="text" name="fullname" id="fullname"><br>
  <button type="submit">Sign up</button>
</form>

<?php require_once("partials/footer.php"); ?>