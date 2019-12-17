<?php
require_once("utils/_init.php");

if (verify_post("user_email", "user_passwd", "user_name")) {
  // ! Előfeldogozás
  $user_email = trim($_POST["user_email"]);
  $user_passwd = $_POST["user_passwd"];
  $user_name = trim($_POST["user_name"]);

  // ! Hibaellenőrzés
  if (!filter_var($user_email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Invalid email format";
  }

  if (strlen($user_passwd) < 8) {
    $errors[] = "Password too short";
  }

  if ($user_name === "") {
    $errors[] = "Name cannot be empty";
  }

  if (count($errors) === 0) {
    // ! Beszúrás az adatbázisba
    $user = [
      "email" => $user_email,
      "password" => password_hash($user_passwd, PASSWORD_DEFAULT),
      "name" => $user_name
    ];

    $user_store->add($user);

    $messages[] = "User ${user_email} created";
  }
}

?>
<?php require_once("partials/header.php"); ?>
<form action="signup.php" method="post">
  E-mail: <br>
  <input type="email" name="user_email"> <br>
  Password: <br>
  <input type="password" name="user_passwd"> <br>
  Full name: <br>
  <input type="text" name="user_name"> <br>
  <button type="submit">Sign up</button>
  
  <?php require_once("partials/messages.php"); ?>
</form>


<?php require_once("partials/footer.php"); ?>