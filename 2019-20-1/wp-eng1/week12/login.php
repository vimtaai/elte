<?php
require_once("_init.php");

if (verify_post("user_email", "user_password")) {
  // ! AUTHENTICATION
  $user_email = trim($_POST["user_email"]);
  $user_password = $_POST["user_password"];

  $logged_in_user = null;
  foreach ($user_storage->findAll() as $user) {
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
  <br>
  Don't have a user? <a href="signup.php">Sign up</a>
</form>

<?php require("partials/footer.php"); ?>