<?php
include("utils/_init.php");

if (verify_post("username", "password")) {
  $username = $_POST["username"];
  $password = $_POST["password"];

  $user_id = $userStorage->authenticate($username, $password);
  if ($user_id === FALSE) {
    $errors[] = "Invalid username or password";
  }

  if (empty($errors)) {
    $userStorage->login($user_id);
    redirect("index.php");
  }
}

?>
<?php include("partials/header.php"); ?>

<form method="post" action="login.php">
  <h1>Log in</h1>
  <div class="form-group">
    <label for="username">Username</label>
    <input type="text" class="form-control" id="username" name="username">
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" name="password">
  </div>
  <button type="submit" class="btn btn-primary">Log in</button>
  <a href="signup.php">Create a user</a>
</form>

<?php foreach ($errors as $error): ?>
  <div class="alert alert-danger"><?= $error ?></div>
<?php endforeach; ?>

<?php include("partials/footer.php"); ?>