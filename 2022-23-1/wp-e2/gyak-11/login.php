<?php
require_once("utils/init.php");

if (array_all_keys_exist($_POST, "username", "password")) {
  foreach ($users as $user) {
    if ($user["username"] === $_POST["username"] && password_verify($_POST["password"], $user["password"])) {
      $found_user = $user;
      break;
    }
  }

  if (!isset($found_user)) {
    $messages[] = [ "type" => "danger", "text" => "Invalid username or password" ];
  }

  if (empty($messages)) {
    $username = $_POST["username"];
    login($username);
    redirect("index.php");
  }
}
?>
<?php require("partials/header.php"); ?>

<div class="d-flex justify-content-center">
  <form class="col col-12 col-sm-8 col-lg-6 col-xl-4" method="post" action="login.php">
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

    <?php require("partials/messages.php"); ?>
  </form>
</div>

<?php require("partials/footer.php"); ?>