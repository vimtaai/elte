<?php
include "_auth.php";
include "_db.php";

$errors = [];
if (count($_POST) > 0) {
  // Ellenőrzés
  if (!$_POST["username"]) { // ha nincs vagy üres
    $errors[] = "Nem adtál meg felhasználót!";
  }
  if (!$_POST["password"]) { // ha nincs vagy üres
    $errors[] = "Nem adtál meg jelszót!";
  }

  if (count($errors) === 0) {
    // Előfeldolgozás
    $username = trim($_POST["username"]);
    $password = $_POST["password"];
    // Lekérdezés
    $query = "SELECT * FROM `users` WHERE `username` = :u";
    $stmt = $conn->prepare($query);
    $stmt->execute([
      ":u" => $username
    ]);
    $user = $stmt->fetch(); // Egy darab rekord lekérdezése

    // Ha van ilyen felhasználó ÉS jó a jelszó
    if ($user && password_verify($password, $user["password"])) {
      // Beléptetem...
      $_SESSION["user"] = $user;
      redirect("index.php");
    } else { // Ha nincs ilyen azonosítójú felhasználó
      $errors[] = "Hibás felhasználónév vagy jelszó!";
    }
  }
}
?>
<?php include "_header.php" ?>
<form action="login.php" method="post">
  <div class="form-group">
    <input type="text" name="username" class="form-control"
           placeholder="Felhasználónév">
  </div>
  <div class="form-group">
    <input type="password" name="password" class="form-control"
           placeholder="Jelszó">
  </div>
  <button type="submit" class="btn btn-primary">Bejelentkezés</button>
  <a href="signup.php" class="btn btn-secondary">Regisztráció</a>
</form>
<?php include "_footer.php" ?>




