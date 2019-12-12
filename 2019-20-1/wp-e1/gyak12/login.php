<?php
require_once("_init.php");
authorize(NOT_LOGGED_IN);

$user_store = new FileStorage("storage/users.json");

function is_user_ok($email, $password) {
  return function ($user) use ($email, $password) {
    return $email === $user["email"] && 
           password_verify($password, $user["password"]);
  };
}

$errors = [];
if (verify_post("email", "password")) {
  $email = trim($_POST["email"]);
  $password = $_POST["password"];

  $users = $user_store->getContents();
  $user_id = array_find($users, is_user_ok($email, $password));

  if ($user_id === FALSE) {
    $errors[] = "Invalid username or password";
  }

  if (count($errors) === 0) {
    // ! bejelentkeztetem a felhasználót
    $_SESSION["user"] = $users[$user_id];
    $_SESSION["user_id"] = $user_id;
    redirect("index.php");
  }
}

?>
<?php require("partials/header.php") ?>

<div class="ui centered grid">
  <form action="login.php" method="post" class="ui ten wide form column">
    <h1>Sign in</h1>
    <label>Email</label>
    <br>
    <input type="email" name="email"> <br>
    <label>Password</label>
    <br>
    <input type="password" name="password"> <br>
    <br>
    <button type="submit" class="ui primary button">Login</button>
    <a href="signup.php" class="ui button">Sign up</a>
  </form>
</div>

<?php require("partials/footer.php") ?>