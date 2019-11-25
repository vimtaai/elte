<?php

require_once("utils.php");
require_once("filestorage.php");

authorize(NOT_LOGGED_IN);

$user_store = new FileStorage("storage/users.json");

$errors = [];
if (verify_post("email", "password", "fullname")) {
  $email = trim($_POST["email"]);
  $password = $_POST["password"];
  $fullname = trim($_POST["fullname"]);

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Invalid email format";
  }

  if (strlen($password) < 8) {
    $errors[] = "Password too short";
  }
  
  if (strlen($fullname) === 0) {
    $errors[] = "Full name must not be empty";
  }

  // ! ha nem volt error
  if (count($errors) === 0) {
    $user = [
      "email" => $email,
      "password" => password_hash($password, PASSWORD_DEFAULT),
      "fullname" => $fullname
    ];

    $user_store->add($user);
  }
}

?>
<?php require("partials/header.php"); ?>
<form action="signup.php" method="post">
  E-mail: 
  <input type="text" name="email">
  <br>
  Password:
  <input type="password" name="password">
  <br>
  Full name:
  <input type="text" name="fullname">
  <br>
  <button type="submit">Sign up</button>
</form>

<?php foreach ($errors as $error): ?>
<div><?= $error ?></div>
<?php endforeach; ?>

<?php require("partials/footer.php"); ?>