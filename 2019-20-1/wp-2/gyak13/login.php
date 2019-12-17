<?php
require_once("utils/_init.php");

if (verify_post("user_email", "user_passwd")) {
  $user_email = trim($_POST["user_email"]);
  $user_passwd = $_POST["user_passwd"];

  $users = $user_store->query(function ($u) use ($user_email) {
    return $u["email"] === $user_email/* && password_verify($user_passwd, $u["password"])*/;
  });

  $user = array_shift($users);

  if ($user === NULL || !password_verify($user_passwd, $user["password"])) {
    $errors[] = "Invalid e-mail or password";
  }

  if (count($errors) === 0) {
    $_SESSION["user"] = $user;
    redirect("index.php");
  }
}

?>
<?php require_once("partials/header.php"); ?>
<form action="login.php" method="post">
  E-mail: <br>
  <input type="email" name="user_email"> <br>
  Password: <br>
  <input type="password" name="user_passwd"> <br>
  <button type="submit">Sign in</button>
  
  <?php require_once("partials/messages.php"); ?>
</form>


<?php require_once("partials/footer.php"); ?>