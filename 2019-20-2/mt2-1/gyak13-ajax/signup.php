<?php
include("utils/_init.php");

if (verify_post("username", "password", "password-again", "fullname")) {
  $username = $_POST["username"];
  $password = $_POST["password"];
  $password_again = $_POST["password-again"];
  $fullname = $_POST["fullname"];

  if (empty($username)) {
    $errors[] = "Username must not be empty";
  }

  if ($userStorage->findOne([ "username" => $username ])) {
    $errors[] = "Username taken";
  }

  if (strlen($password) < 4) {
    $errors[] = "Password must be at least 4 characters long";
  }

  if ($password !== $password_again) {
    $errors[] = "Password mismatch";
  }

  if (empty($fullname)) {
    $errors[] = "Full name must not be empty";
  }

  if (!verify_post("tac")) {
    $errors[] = "You must accept the terms and conditions";
  }

  if (empty($errors)) {
    $user_id = $userStorage->register($username, $password, $fullname);
    $userStorage->login($user_id);
    redirect("index.php");
  }
}

?>
<?php include("partials/header.php"); ?>

<form method="post" action="signup.php">
  <h1>Sign up</h1>
  <div class="form-group">
    <label for="username">Username</label>
    <input type="text" class="form-control" id="username" name="username" value="<?= $username ?? "" ?>">
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" name="password">
  </div>
  <div class="form-group">
    <label for="password-again">Password again</label>
    <input type="password" class="form-control" id="password-again" name="password-again">
    <small class="text-muted">Password must be at least 4 characters long</small>
  </div>
  <div class="form-group">
    <label for="fullname">Full name</label>
    <input type="text" class="form-control" id="fullname" name="fullname" value="<?= $fullname ?? "" ?>">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="tac" name="tac">
    <label class="form-check-label" for="tac">I agree to the TERMS AND CONDITIONS</label>
  </div>
  <button type="submit" class="btn btn-primary">Sign up</button>
  <a href="login.php">Already have a user? Log in here.</a>
</form>

<?php foreach ($errors as $error): ?>
  <div class="alert alert-danger"><?= $error ?></div>
<?php endforeach; ?>

<?php include("partials/footer.php"); ?>