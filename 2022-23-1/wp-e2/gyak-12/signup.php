<?php
require_once("utils/init.php");

if (array_all_keys_exist($_POST, "username", "email", "password", "password-confirm")) {
  if (empty($_POST["username"])) {
    $messages[] = [ "type" => "danger", "text" => "Username must not be empty" ];
  }

  if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    $messages[] = [ "type" => "danger", "text" => "Email format is invalid" ];
  }

  if (strlen($_POST["password"]) < 8) {
    $messages[] = [ "type" => "danger", "text" => "Password must be at least 8 characters long" ];
  }

  if ($_POST["password"] !== $_POST["password-confirm"]) {
    $messages[] = [ "type" => "danger", "text" => "Password mismatch" ];
  }

  if (empty($messages)) {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT);

    $user = [
      "username" => $username,
      "email" => $email,
      "password" => $password,
      "role" => "user"
    ];

    $users[] = $user;
    save_to_file(DATA_FILE_USERS, $users);
    $messages[] = [ "type" => "success", "text" => "Registration successful. <a href='login.php'>Go to login</a>." ];
  }
}
?>
<?php require("partials/header.php"); ?>

<div class="d-flex justify-content-center">
  <form class="col col-12 col-sm-8 col-lg-6 col-xl-4" method="post" action="signup.php">
    <h2>Register</h2>

    <div class="my-3">
      <label for="username" class="form-label">Username</label>
      <input type="text" name="username" class="form-control" id="username">
    </div>

    <div class="my-3">
      <label for="email" class="form-label">Email address</label>
      <input type="email" name="email" class="form-control" id="email">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
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

    <?php require("partials/messages.php"); ?>
  </form>
</div>

<?php require("partials/footer.php"); ?>