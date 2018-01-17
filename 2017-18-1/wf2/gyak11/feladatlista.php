<?php

require 'includes/db.php';

$statement = $db->prepare('SELECT * FROM feladatok');
$statement->execute();
$feladatok = $statement->fetchAll();

?>
<?php include './includes/header.php'; ?>
<main class="container">
  <ol class="breadcrumb mt-2">
    <li class="breadcrumb-item"><a href="feladatlista.php">Feltöltött fájlok</a></li>
  </ol>

  <h3 class="py-2">Feltöltött fájlok</h3>

  <div class="row">
    <!-- Kártya eleje -->
    <?php foreach ($feladatok as $feladat) : ?>
    <div class="col-md-4 col-sm-6">
      <a href="fajllista.php?feladat=<?= $feladat['id'] ?>" class="card-link text-white">
        <section class="card bg-primary h-100">
          <div class="card-body">
            <h4 class="text-<?= strtotime($feladat['hatarido']) < time() ? 
                              'danger' : 
                              'success' ?>"><?= $feladat['nev'] ?></h4>
            <p><?= $feladat['leiras'] ?></p>
          </div>
          <footer class="card-footer">
            <strong>Határidő: </strong>
            <time class="text-<?= strtotime($feladat['hatarido']) < time() ? 
                              'danger' : 
                              'success' ?>"><?= $feladat['hatarido'] ?></time>
          </footer>
        </section>
      </a>
    </div>
    <?php endforeach; ?>
    <!-- Kártya vége -->
  </div>
</main>
<?php include './includes/footer.php'; ?>