<?php

require 'includes/db.php';

if (!isset($_GET['feladat'])) {
  header('Location: feladatlista.php');
  exit;
}
$feladat = $_GET['feladat'];

$statement = $db->prepare(
  'SELECT * FROM fajlok WHERE feladat = :feladat'
);
$statement->execute([
  'feladat' => $feladat
]);
$fajlok = $statement->fetchAll();

$statement = $db->prepare(
  'SELECT nev FROM feladatok WHERE id = :id'
);
$statement->execute([
  'id' => $feladat
]);
//$feladatNev = ($statement->fetchAll())[0]['nev'];
$feladatNev = $statement->fetchColumn();
//var_dump($feladatNev);

?>
<?php include './includes/header.php'; ?>
<main class="container">
  <ol class="breadcrumb mt-2">
    <li class="breadcrumb-item"><a href="feladatlista.php">Feltöltött fájlok</a></li>
    <li class="breadcrumb-item"><a href=""><?= $feladatNev ?></a></li>
  </ol>

  <h3 class="py-2"><?= $feladatNev ?></h3>

  <table class="table table-striped table-hover table-bordered">
    <thead class="thead-dark">
      <tr>
        <th>Feltöltő</th>
        <th>Fájl neve</th>
        <th>Fájl mérete</th>
        <th>Feltöltés ideje</th>
        <th>Letöltés</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="5">
          <a href="feladatlista.php">Vissza a feladatokhoz</a>
        </td>
      </tr>

      <!-- Feladat eleje -->
      <?php foreach ($fajlok as $fajl) : ?>
      <tr>
        <td><?= $fajl['feltolto'] ?></td>
        <td><?= $fajl['fajlnev'] ?></td>
        <td><?= filesize($fajl['hely']) ?> B</td>
        <td><?= $fajl['feltoltve'] ?></td>
        <td>
          <a href="<?= $fajl['hely'] ?>" class="btn btn-secondary btn-sm btn-block">Letöltés</a>
        </td>
      </tr>
      <?php endforeach; ?>
      <!-- Feladat vége -->
    </tbody>
  </table>
</main>
<?php include './includes/footer.php'; ?>