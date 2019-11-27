<?php

session_start();
require_once("utils.php");
require_once("filestorage.php");

$user_storage = new JSONStorage("users.json");

$errors = [];
if (verify_post("user_email", "user_password")) {
  // ! AUTHENTICATION
  $user_email = trim($_POST["user_email"]);
  $user_password = $_POST["user_password"];

  $logged_in_user = null;
  foreach ($user_storage->contents as $user) {
    if ($user_email === $user["email"] && 
        password_verify($user_password, $user["password"])) {
      $logged_in_user = $user;
      break;
    }
  }

  if (is_null($logged_in_user)) {
    $errors[] = "Invalid email or password";
  }

  // ! if there are no errors
  if (count($errors) === 0) {
    // ! i can log in the user
    $_SESSION["user"] = $logged_in_user;
  }
}

// print($_SESSION["user"]);
?>
<?php require("partials/header.php"); ?>
<form action="login.php" method="post">
  E-mail:<br>
  <input type="email" name="user_email">
  <br>
  Password:<br>
  <input type="password" name="user_password">
  <br>
  <button type="submit">Log in</button>
</form>

<?php require("partials/errors.php"); ?>
<?php require("partials/footer.php"); ?>