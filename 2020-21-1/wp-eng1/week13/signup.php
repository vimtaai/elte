<?php
require_once("utils/_init.php");

if (verify_post("username", "password", "confirm-password", "fullname")) {
  $username = trim($_POST["username"]);
  $password = $_POST["password"];
  $confirm_password = $_POST["confirm-password"];
  $fullname = trim($_POST["fullname"]);

  // Username must not be empty
  if (empty($username)) {
    $errors[] = "Username must not be empty";
  }

  // Username not taken
  if ($auth->user_exists($username)) {
    $errors[] = "Username already taken";
  }

  // Password length
  if (strlen($password) < 8) {
    $errors[] = "Password must be at least 8 characters long";
  }

  // Passwords match
  if ($password !== $confirm_password) {
    $errors[] = "Passwords do not match";
  }

  // Name is not empty
  if (empty($fullname)) {
    $errors[] = "Full name must not be empty";
  }

  // If there were no errors...
  if (empty($errors)) {
    $successes[] = "Registration successful. Please log in.";
    save_to_flash("successes", $successes);
    
    // Register the new user
    $auth->register([
      "username" => $username,
      "password" => $password,
      "fullname" => $fullname
    ]);
    redirect("login.php");
  }
}

?>
<?php require("partials/header.inc.php") ?>
<h1>Sign up</h1>

<form class="col-md-6 col-xs-12" method="post">
  <div class="form-group">
    <label for="username">Username</label>
    <input class="form-control" type="text" name="username" id="username" value="<?= $username ?? "" ?>">
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input class="form-control" type="password" name="password" id="password">
  </div>
  <div class="form-group">
    <label for="confirm-password">Confirm password</label>
    <input class="form-control" type="password" name="confirm-password" id="confirm-password">
  </div>
  <div class="form-group">
    <label for="fullname">Full name</label>
    <input class="form-control" type="text" name="fullname" id="fullname" value="<?= $fullname ?? "" ?>">
  </div>
  <button class="btn btn-primary">Submit</button>
  <a href="login.php">If you already have a user yet, you can log in here</a>

  <?php require("partials/errors.inc.php") ?>
</form>

<?php require("partials/footer.inc.php") ?>