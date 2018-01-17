<?php

require 'includes/db.php';
if (!isset($_GET['feladat'])) {
  header('Location: index.php');
  exit;
}
$feladat = $_GET['feladat'];

const MAX_SIZE = 4194304;

$errors = [];
$messages = [];

if (count($_FILES) > 0 && count($_POST) > 0) {
  // Hibaellenőrzés
  if ($_FILES['fajl']['size'] > MAX_SIZE) {
    $errors[] = 'Túl nagy a fájlméret.';
  }
  if ($_FILES['fajl']['error'] !== 0) {
    $errors[] = 'Hiba a fájlfeltöltésben.';
  }
  if (count($errors) == 0) {
    // A fájl elmentése
    $folder = 'files/' . $feladat . '/';
    if (!file_exists($folder)) {
      mkdir($folder);
    }
    $user = strtolower($_POST['neptun']);
    $time = time();
    $timestamp = date('Y-m-d-H-i-s', $time);
    $name = $_FILES['fajl']['name'];
    $fileName =  $folder . $user . '-' . $timestamp . '-' . $name;
    if (move_uploaded_file($_FILES['fajl']['tmp_name'], $fileName)) {
      // Beszúrjuk az adatbázisba
      $statement = $db->prepare(
        'INSERT INTO fajlok
        (feltolto, fajlnev, feltoltve, hely, feladat)
        VALUES
        (:feltolto, :fajlnev, :feltoltve, :hely, :feladat)'
      );
      $statement->execute([
        'feltolto' => $user,
        'fajlnev' => $name,
        'feltoltve' => date('Y-m-d H:i:s', $time),
        'hely' => $fileName,
        'feladat' => $feladat
      ]);
      $messages[] = 'Sikeres feltöltés.';
    } else {
      $error[] = 'Hiba a fájl mentésekor.';
    }
  }
}

?>
<?php include './includes/header.php'; ?>
<main class="container">
  <ol class="breadcrumb mt-2">
    <li class="breadcrumb-item"><a href="index.php">Feladatok</a></li>
    <li class="breadcrumb-item"><a href="feladatlista.php">Feladat beadása (PHP beadandó)</a></li>
  </ol>

  <h3 class="py-2">Feladat beadása</h3>

  <form method="post" action="" enctype="multipart/form-data">
    <fieldset>
      <legend><?= $feladat ?>. feladat</legend>
      <section class="row">
        <div class="col-sm-6">
          <div class="row">
            <div class="form-group col-md-8 col-sm-12">
              <label for="neptun">Neptun kód</label>
              <input name="neptun" type="text" class="form-control col-md-6 col-sm-8" id="neptun" pattern="[0-9a-zA-Z]{6}" required>
              <small class="form-text text-muted">Add meg a Neptun kódodat, hogy be lehessen azonoístani a beadandódat.</small>
            </div>
            <div class="form-group col-md-8 col-sm-12">
              <label for="fajl">Feltöltendő fájl</label>
              <input name="fajl" type="file" class="form-control col-sm-12" id="fajl" required>
              <small class="form-text text-muted">A feltöltendő fájl mérete nem haladhatja meg a 4 MB-ot.</small>
            </div>
            <div class="form-group col-md-8 col-sm-12">
              <input type="submit" class="btn btn-lg btn-success" value="Feltöltés">
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <h4>Mit kell beadni?</h4>
          <p>
            Beadni egy darab fájt kell. Amennyiben a megoldás több fájlból áll, akkor azt egy tömörített állomány formájában kell beadni.
          </p>
        </div>
      </section>
    </fieldset>
  </form>

  <!-- Ide jönnek majd az üzenetek -->
  <?php foreach ($messages as $message): ?>
    <div class="alert alert-success"><?= $message ?></div>
  <?php endforeach; ?>
  <?php foreach ($errors as $error): ?>
    <div class="alert alert-danger"><?= $error ?></div>
  <?php endforeach; ?>
  <!-- Üzenetek vége -->
</main>
<?php include './includes/footer.php'; ?>