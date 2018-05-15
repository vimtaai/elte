<?php

session_start();

// oldal levédése
if (!isset($_SESSION['felhasznalo'])) {
  header('Location: bejelentkezes.php');
  exit;
}

include 'seged/adatbazis.php';

$adatbazis = kapcsolodas('mysql:host=localhost;dbname=wf2_wp1c0x', 'wp1c0x', 'wp1c0x');

if (count($_POST) > 0) {
  $sql = 'INSERT INTO `tranzakciok` (`osszeg`) VALUES (:osszeg)';
  vegrehajtas($adatbazis, $sql, [
    ':osszeg' => $_POST['amount']
  ]);
}

$sql = 'SELECT * FROM `tranzakciok`';
$tranzakciok = lekerdezes($adatbazis, $sql);

$sql = 'SELECT SUM(`osszeg`) as `osszeg` FROM `tranzakciok`';
$osszeg = lekerdezes($adatbazis, $sql)[0]['osszeg'];

?>

<?php include 'sablon/fejlec.php'; ?>

  <?php include 'sablon/navigacio.php'; ?>

  <!-- TARTALOM -->
  <div class="ui main container">
    <!-- KÜLDŐ ŰRLAP -->
    <div class="ui large header">Új tétel felvétele</div>
    <form method="post" class="ui form fields center">
      <input type="number" name="amount" class="three wide field" placeholder="Összeg">
      <input type="submit" value="Mentés" class="ui button three wide field">
    </form>
    <!-- KÜLDŐ ŰRLAP VÉGE -->

    <br>

    <div>
      Kiadás: <input type="checkbox" id="kiadas" checked>
      <br>
      Bevétel: <input type="checkbox" id="bevetel" checked>
    </div>

    <!-- TÁBLÁZAT -->
    <div class="ui large header">Nyilvántartás</div>
    <table class="ui selectable celled table">
      <caption>
        <div class="ui large header" style="color: <?= $osszeg < 0 ? 'red' : 'green' ?>">
          <?= ($osszeg > 0 ? '+' : '') . $osszeg ?>
        </div>
      </caption>
      <thead>
        <tr>
          <th>Tranzakció azon.</th>
          <th>Dátum</th>
          <th>Összeg</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($tranzakciok as $t) : ?>
        <tr>
          <td><?= $t['id'] ?></td>
          <td><?= $t['datum'] ?></td>
          <td style="color: <?= $t['osszeg'] < 0 ? 'red' : 'green' ?>">
            <?= ($t['osszeg'] > 0 ? '+' : '') . $t['osszeg'] ?>
          </td>
        </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
    <!-- TÁBLÁZAT VÉGE -->
  </div>
  <!-- TARTALOM VÉGE -->

  <script src="kereses.js"></script>
<?php include 'sablon/lablec.php'; ?>