<?php
include_once("lib/_init.php");

if (verify_post("username", "password")) {
  $username = $_POST["username"];
  $password = $_POST["password"];

  $user_id = $userStorage->authenticate($username, $password);
  if ($user_id === FALSE) {
    $messages[] = new ErrorMessage("Invalid username or password"); 
  }

  if (empty($messages)) {
    $userStorage->login($user_id);
    redirect("index.php");
  }
}

?>
<?php include("partials/header.php"); ?>
<?php include("partials/menu.php"); ?>

<h1>Log in</h1>

<div class="ui grid">
  <form class="ui six wide column form" method="post" action="login.php">
    <div class="field">
      <label for="username">Username</label>
      <input type="text" name="username" id="username">
    </div>
    <div class="field">
      <label for="password">Password</label>
      <input type="password" name="password" id="password">
    </div>
    <div class="field">
      <button type="submit" class="ui primary button">
        Log in
      </button>
    </div>
    <div class="field">
      <a href="signup.php">Create a new user</a>
    </div>
  </form>
</div>


<?php include("partials/messages.php"); ?>
<?php include("partials/footer.php"); ?>
