<?php
require_once("_init.php");

if (verify_post("email", "password", "password_again", "fullname")) {
  $email = trim($_POST["email"]);
  $password = $_POST["password"];
  $password_again = $_POST["password_again"];
  $fullname = $_POST["fullname"];

  // ! checking for errors
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Invalid email format";
  }

  if ($password !== $password_again) {
    $errors[] = "Password mismatch";
  }

  if (strlen($password) < 8) {
    $errors[] = "Wrong password";
  }

  if (trim($fullname) === "") {
    $errors[] = "You must provide your full name";
  }

  if (count($errors) === 0) {
    $user = [
      "email" => $email,
      "password" => password_hash($password, PASSWORD_DEFAULT),
      "fullname" => $fullname,
      "role" => "reader"
    ];

    $user_storage->add($user);
    redirect("login.php");
  }
}

?>
<?php require("partials/header.php"); ?>
<form action="signup.php" method="post">
  E-mail:<br>
  <input type="email" name="email" value="<?= $email ?? "" ?>">
  <br>
  Password:<br>
  <input type="password" name="password">
  <br>
  Password again:<br>
  <input type="password" name="password_again">
  <br>
  Full name:<br>
  <input type="text" name="fullname" value="<?= $fullname ?? "" ?>">
  <br>
  <button type="submit">Sign up</button>
  <br>
  Already have a user? <a href="login.php">Log in</a>
</form>

<?php require("partials/footer.php"); ?>