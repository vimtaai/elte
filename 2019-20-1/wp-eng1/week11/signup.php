<?php

session_start();
require_once("utils.php");
require_once("filestorage.php");

$user_storage = new JSONStorage("users.json");

$errors = [];
if (verify_post(
  "user_email", 
  "user_password", 
  "user_password_again", 
  "user_fullname"
)) {
  $user_email = trim($_POST["user_email"]);
  $user_password = $_POST["user_password"];
  $user_password_again = $_POST["user_password_again"];
  $user_fullname = $_POST["user_fullname"];

  // ! checking for errors
  if (!filter_var($user_email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Invalid email format";
  }

  if ($user_password !== $user_password_again) {
    $errors[] = "Password mismatch";
  }

  if (strlen($user_password) < 8) {
    $errors[] = "Wrong password";
  }

  if (trim($user_fullname) === "") {
    $errors[] = "You must provide your full name";
  }

  if (count($errors) === 0) {
    $user = [
      "email" => $user_email,
      "password" => password_hash($user_password, PASSWORD_DEFAULT),
      "fullname" => $user_fullname,
      "role" => "reader"
    ];

    $user_storage->contents[] = $user;
    redirect("login.php");
  }
}

?>
<?php require("partials/header.php"); ?>
<form action="signup.php" method="post">
  E-mail:<br>
  <input type="email" name="user_email" value="<?= $user_email ?? "" ?>">
  <br>
  Password:<br>
  <input type="password" name="user_password">
  <br>
  Password again:<br>
  <input type="password" name="user_password_again">
  <br>
  Full name:<br>
  <input type="text" name="user_fullname" value="<?= $user_fullname ?? "" ?>">
  <br>
  <button type="submit">Sign up</button>
</form>

<?php require("partials/errors.php"); ?>
<?php require("partials/footer.php"); ?>