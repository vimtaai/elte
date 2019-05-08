<?php
include "_auth.php";
include "_db.php";

$errors = [];
if (count($_POST) > 0) {
  // Ellenőrzés
  if (strlen($_POST["password"]) < 6) {
    $errors[] = "Túl rövid jelszó!";
  }

  if (strlen($_POST["fullname"]) == 0) {
    $errors[] = "Nem adtad meg a nevedet!";
  }

  if (!$_POST["username"]) { // ha nincs vagy üres
    $errors[] = "Nem adtál meg felhasználót!";
  }

  $username = trim($_POST["username"]); // itt már feldolgoztam a usernevet
  $query = "SELECT * FROM `users` WHERE `username` = :u";
  $stmt = $conn->prepare($query);
  $stmt->execute([
    ":u" => $username
  ]);
  $user = $stmt->fetch();

  if ($user) {
    $errors[] = "Már létezik ilyen felhasználó!";
  }
  
  if (count($errors) === 0) {
    // Előfeldolgozás
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT);
    $fullname = htmlentities($_POST["fullname"]);
    // Beszúrás
    $query = "INSERT INTO `users` (`username`, `password`, `name`) VALUES (:u, :p, :n)";
    $stmt = $conn->prepare($query);
    $stmt->execute([
      ":u" => $username,
      ":p" => $password,
      ":n" => $fullname
    ]);
    $errorInfo = $stmt->errorInfo();
    if ($errorInfo[0] !== "00000") { // Ha hiba volt a lekérdezésben
      $errors[] = "SQL hiba: " . $errorInfo[2]; // A hiba szöveges leírása
    } else {
      redirect("login.php");
    }
  }
}

?>
<?php include "_header.php" ?>
<form action="signup.php" method="post">
  <div class="form-group">
    <input type="text" name="username" class="form-control"
           placeholder="Felhasználónév">
  </div>
  <div class="form-group">
    <div class="input-group">
      <input type="password" name="password" class="form-control"
            placeholder="Jelszó" id="pwd">
      <div class="input-group-append">
        <button type="button" class="btn btn-outline-secondary" 
                onclick="togglePasswordVisibility('#pwd');">
          <i class="fa fa-eye"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="form-group">
    <input type="text" name="fullname" class="form-control"
           placeholder="Teljes neved">
  </div>
  <button type="submit" class="btn btn-primary">Regisztráció</button>
</form>
<script>
function togglePasswordVisibility(selector) {
  const element = document.querySelector(selector);
  element.type = element.type === "password" ? "text" : "password";
}
</script>

<?php include "_footer.php" ?>