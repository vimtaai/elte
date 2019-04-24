<?php
include "_db.php";

$errors = [];
$messages = [];
// Ha érkezett a felhasználótól adat
if (count($_POST) > 0) {
  // Ellenőrzés
  if ($_POST["text"] === "") {
    $errors[] = "Nem adtál meg leírást!"; // új elemet rakok a tömbbe
  }

  // Felveszem egy tömbbe a lehetséges értékeket
  $types = ["REQUEST", "QUERY", "ERROR", "ISSUE"];
  if (!in_array($_POST["type"], $types)) {
    $errors[] = "Hibás bejegyzés típus!";
  }

  if (count($errors) === 0) { // Ha nem volt hiba...
    // Előfeldolgozás
    $text = htmlentities($_POST["text"]); // Kiveszem a HTML elemeket
    $type = $_POST["type"];
    // Beszúrás
    $query = "INSERT INTO `tickets` (`type`, `description`) VALUES (:type, :text)";
    $stmt = $conn->prepare($query);
    $stmt->execute([
      ":type" => $type,
      ":text" => $text
    ]);
    $errorInfo = $stmt->errorInfo();
    if ($errorInfo[0] !== "00000") { // Ha hiba volt a lekérdezésben
      $errors[] = "SQL hiba: " . $errorInfo[2]; // A hiba szöveges leírása
    } else {
      $messages[] = "Sikeres beküldés!";
    }
  }
}

?>
<?php include "_header.php" ?>

<form method="post" action="add.php">
  <div class="form-group">
    <label for="type">Típus</label><br>
    <select class="form-control" id="type" name="type">
      <option value="REQUEST">Kérés</option>
      <option value="ISSUE">Probléma</option>
      <option value="ERROR">Hiba</option>
      <option value="QUERY">Kérdés</option>
    </select>
  <div>
  <div class="form-group">
  <label for="text">Leírás</label><br>
  <textarea class="form-control" id="text" name="text"></textarea>
  </div>
  <button class="btn btn-primary" type="submit">Beküldés</button>
</form>

<?php include "_footer.php" ?>