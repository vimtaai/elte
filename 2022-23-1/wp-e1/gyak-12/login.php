<?php
require_once("helpers/init.php");

if (is_user_logged_in()) {
  redirect("index.php");
}

if (check_all_keys_in_post("username", "password")) {
  foreach ($GLOBALS["users"] as $user) {
    if ($user["username"] === $_POST["username"] && password_verify($_POST["password"], $user["password"])) {
      $logged_in_user = $user;
      break;
    }
  }

  if (!isset($logged_in_user)) {
    add_message("danger", "Invalid username or password");
  }

  if (!has_error_messages()) {
    $username = $_POST["username"];

    login($username);
    redirect("index.php");
  }
}

?>
<?php require("partials/header.php"); ?>

<div class="d-flex justify-content-center">
  <form method="post" class="col col-12 col-sm-8 col-lg-6 col-xl-4">
    <h2>Log in</h2>

    <div class="my-3">
      <label for="username" class="form-label">Username</label>
      <input type="text" name="username" class="form-control" id="username">
    </div>

    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" name="password" class="form-control" id="password">
    </div>

    <button type="submit" class="btn btn-primary mb-2">Log in</button>
    <br>
    <small>Don't have a user? Go and <a href="signup.php">sign up</a>.

    <?php require("partials/messages.php"); ?>
  </form>
</div>

<?php require("partials/footer.php"); ?>