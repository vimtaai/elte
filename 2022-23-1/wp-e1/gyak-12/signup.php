<?php
require_once("helpers/init.php");

if (check_all_keys_in_post("username", "email", "password", "password-confirm")) {
  if (empty($_POST["username"])) {
    add_message("danger", "Invalid username");
  }

  if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    add_message("danger", "Invalid email");
  }

  if (strlen($_POST["password"]) < 8) {
    add_message("danger", "Invalid password");
  }

  if ($_POST["password-confirm"] !== $_POST["password"]) {
    add_message("danger", "Passwords do not match");
  }

  if (!has_error_messages()) {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT);

    $new_user = [
      "username" => $username,
      "email" => $email,
      "password" => $password,
      "roles" => ["user"]
    ];

    add_user($new_user);
    add_message("success", "User created successfully");
  }
}

?>
<?php require("partials/header.php"); ?>

<div class="d-flex justify-content-center">
  <form method="post" class="col col-12 col-sm-8 col-lg-6 col-xl-4">
    <h2>Sign up</h2>

    <div class="my-3">
      <label for="username" class="form-label">Username</label>
      <input type="text" name="username" class="form-control" id="username">
    </div>

    <div class="my-3">
      <label for="email" class="form-label">Email address</label>
      <input type="email" name="email" class="form-control" id="email">
      <div id="emailHelp" class="form-text">We"ll never share your email with anyone else.</div>
    </div>

    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" name="password" class="form-control" id="password">
      <div class="form-text">
        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
      </div>
    </div>

    <div class="mb-3">
      <label for="password-confirm" class="form-label">Confirm password</label>
      <input type="password" name="password-confirm" class="form-control" id="password-confirm">
    </div>

    <button type="submit" class="btn btn-primary mb-2">Sign up</button>
    <br>
    <small>Already ahve a user? Go and <a href="login.php">log in</a>.

    <?php require("partials/messages.php"); ?>
  </form>
</div>

<?php require("partials/footer.php"); ?>