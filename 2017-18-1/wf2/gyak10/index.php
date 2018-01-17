<?php

$dbFile = __DIR__ . '/db/db.sqlite';
$db = new PDO('sqlite:' . $dbFile);

if (count($_POST) > 0) {
  // Beszúrás az adatbázisba
  $nev = $_POST['nev'];
  $leiras = $_POST['leiras'];
  $hatarido = $_POST['hatarido'];
  $statement = $db->prepare("INSERT INTO feladatok (nev, leiras, hatarido)
                             VALUES (:nev, :leiras, :hatarido)");
  $statement->execute([
    'nev' => $nev,
    'leiras' => $leiras,
    'hatarido' => $hatarido
  ]);
}

$statement = $db->prepare('SELECT * FROM feladatok');
$statement->execute();
$feladatok = $statement->fetchAll();

?>
<?php include './includes/header.php'; ?>
<main class="container">
  <ol class="breadcrumb mt-2">
    <li class="breadcrumb-item"><a href="index.php">Feladatok</a></li>
  </ol>

  <h3 class="py-2">Feladatok</h3>
  <form method="post" action="index.php">
    <table class="table table-striped table-hover table-bordered">
      <thead class="thead-dark">
        <tr>
          <th>Feladat neve</th>
          <th>Rövid leírás</th>
          <th>Határidő</th>
          <th>Beadás</th>
        </tr>
      </thead>
      <tbody>

        <!-- Feldat eleje -->
        <?php foreach ($feladatok as $feladat) : ?>
        <tr>
          <td><?= $feladat['nev'] ?></td>
          <td><?= $feladat['leiras'] ?></td>
          <td class="text-<?= strtotime($feladat['hatarido']) < time() ? 
                              'danger' : 
                              'success' ?>">
            <?= date('Y. m. d. H:i', strtotime($feladat['hatarido'])) ?>
          </td>
          <td>
            <?php if (strtotime($feladat['hatarido']) > time()) : ?>
            <a href="bead.php?feladat=<?= $feladat['id'] ?>" 
               class="btn btn-primary btn-sm btn-block">
              Feladat beadása
            </a>
            <?php endif; ?>
          </td>
        </tr>
        <?php endforeach; ?>
        <!-- Feldat vége -->

      </tbody>
      <tfoot>
        <tr class="thead-dark">
            <th colspan="4">Új feladat kiírása</th>
          </tr>
        </thead>
        <!-- Új feladat -->
        <tr>
          <td><input name="nev" type="text" placeholder="Feladat neve" class="form-control"></td>
          <td><input name="leiras" type="text" placeholder="Rövid leírás" class="form-control"></td>
          <td><input name="hatarido" type="datetime-local" placeholder="Határidő" class="form-control"></td>
          <td>
            <input type="submit" class="btn btn-primary btn-block" value="Új feladat">
          </td>
        </tr>
        <!-- Új feladat vége -->
      </tfoot>
    </table>
  </form>
</main>
<?php include './includes/footer.php'; ?>
