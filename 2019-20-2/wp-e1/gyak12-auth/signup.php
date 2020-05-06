<?php
include_once("lib/_init.php");

if (verify_post("name", "username", "password", "password_re")) {
  $fullname = trim($_POST["name"]);
  $username = trim($_POST["username"]);
  $password = $_POST["password"];
  $password_re = $_POST["password_re"];

  if (empty($fullname)) {
    $messages[] = new ErrorMessage("Name must not be empty");
  }

  if (empty($username)) {
    $messages[] = new ErrorMessage("Username must not be empty");
  }

  if ($userStorage->findOne([ "username" => $username ])) {
    $messages[] = new ErrorMessage("Username already taken");
  }

  if (strlen($password) < 8) {
    $messages[] = new ErrorMessage("Password must be at least 8 characters long");
  }

  if ($password !== $password_re) {
    $messages[] = new ErrorMessage("Passwords must be the same");
  }

  if (empty($messages)) {
    $user_id = $userStorage->register($username, $password, $fullname);
    $messages[] = new SuccessMessage("User ${username} created. <a href=\"login.php\">Log in to continue</a>");
  }
}

?>
<?php include("partials/header.php"); ?>
<?php include("partials/menu.php"); ?>

<h1>Sign up</h1>

<div class="ui grid">
  <form class="ui six wide column form" method="post" action="signup.php">
    <div class="field">
      <label for="name">Your name</label>
      <input type="text" name="name" id="name" value="<?= $fullname ?? "" ?>">
    </div> 
    <div class="field">
      <label for="username">Username</label>
      <input type="text" name="username" id="username" value="<?= $username ?? "" ?>">
    </div>
    <div class="field">
      <label for="password">Password</label>
      <input type="password" name="password" id="password">
    </div>
    <div class="field">
      <label for="password_re">Password again</label>
      <input type="password" name="password_re" id="password_re">
    </div>
    <div class="field">
      <button type="submit" class="ui primary button">
        Sign up
      </button>
    </div>
    <div class="field">
      <a href="login.php">Already have a user? Log in now.</a>
    </div>
  </form>
</div>


<?php include("partials/messages.php"); ?>
<?php include("partials/footer.php"); ?>
