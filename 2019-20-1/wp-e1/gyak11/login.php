<?php

session_start();
require_once("utils.php");
require_once("filestorage.php");

authorize(NOT_LOGGED_IN);

$user_store = new FileStorage("storage/users.json");

function is_user_ok($email, $password) {
  return function ($user) use ($email, $password) {
    print_r($user);
    print($email);
    print($password);
    return $email === $user["email"] && 
           password_verify($password, $user["password"]);
  };
}

$errors = [];
if (verify_post("email", "password")) {
  $email = trim($_POST["email"]);
  $password = $_POST["password"];

  $users = $user_store->getContents();

  if (!array_find($users, is_user_ok($email, $password))) {
    $errors[] = "Invalid username or password";
  }

  if (count($errors) === 0) {
    // ! bejelentkeztetem a felhasználót
    $_SESSION["user"] = $email;
    redirect("index.php");
  }
}

?>
<?php require("partials/header.php") ?>

<form action="login.php" method="post">
  Email
  <input type="email" name="email">
  <br>
  Password
  <input type="password" name="password">
  <br>
  <button type="submit">Login</button>
</form>

<a href="signup.php">Sign up</a>

<?php require("partials/footer.php") ?>