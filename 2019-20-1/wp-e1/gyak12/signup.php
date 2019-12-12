<?php
require_once("_init.php");
authorize(NOT_LOGGED_IN);

$user_store = new FileStorage("storage/users.json");

$errors = [];
if (verify_post("email", "password", "fullname")) {
  $email = trim($_POST["email"]);
  $password = $_POST["password"];
  $fullname = trim($_POST["fullname"]);

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Invalid email format";
  }

  if (strlen($password) < 8) {
    $errors[] = "Password too short";
  }
  
  if (strlen($fullname) === 0) {
    $errors[] = "Full name must not be empty";
  }

  // ! ha nem volt error
  if (count($errors) === 0) {
    $user = [
      "email" => $email,
      "password" => password_hash($password, PASSWORD_DEFAULT),
      "fullname" => $fullname
    ];

    $user_store->add($user);
  }
}

?>
<?php require("partials/header.php"); ?>
<div class="ui centered grid">
  <form action="signup.php" method="post" class="ui ten wide form column">
    <h1>Sign up</h1>
    <label>E-mail: </label>
    <input type="text" name="email">
    <br>
    <label>Password:</label>
    <input type="password" name="password">
    <br>
    <label>Full name:</label>
    <input type="text" name="fullname"> <br>
    <br>
    <button type="submit" class="ui primary button">Sign up</button>
  </form>
</div>

<?php require("partials/footer.php"); ?>