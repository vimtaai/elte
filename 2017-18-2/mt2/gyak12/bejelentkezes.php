<?php

session_start();
include 'seged/adatbazis.php';

$adatbazis = kapcsolodas('mysql:host=localhost;dbname=wf2_wp1c0x', 'wp1c0x', 'wp1c0x');

$hibak = [];

if (count($_POST) > 0) {
  $sql = 'SELECT * FROM `felhasznalok` WHERE `felhasznalo` = :f';
  $felhasznalok = lekerdezes($adatbazis, $sql, [
    ':f' => $_POST['felhasznalo']
  ]);
  if (count($felhasznalok) == 0 || 
      !password_verify($_POST['jelszo'], $felhasznalok[0]['jelszo'])) {
    $hibak[] = 'Hibás felhasználónév vagy jelszó!';
  }

  if (count($hibak) == 0) {
    $_SESSION['felhasznalo'] = $felhasznalok[0];
    header('Location: index.php');
    exit;
  }
}

?>
<?php include 'sablon/fejlec.php'; ?>

  <?php include 'sablon/navigacio.php'; ?>

  <!-- TARTALOM -->
  <div class="ui main container">
    <!-- KÜLDÕ ÛRLAP -->
    <div class="ui large header">Bejelentkezés</div>
    <form method="post" class="ui form fields center">
      <div class="field"><input type="text" name="felhasznalo" placeholder="Felhasználónév"></div>
      <div class="field"><input type="password" name="jelszo" placeholder="Jelszó"></div>
      <div class="field"><input type="submit" value="Bejelentkezés" class="ui button three wide field primary"></div>
    </form>
    <!-- KÜLDÕ ÛRLAP VÉGE -->
    <br>
    <a href="regisztral.php" class="ui button right floated">Regisztáció</a>
    <?php foreach ($hibak as $hiba) : ?>
      <div class="ui message negative"><?= $hiba ?></div>
    <?php endforeach; ?>
  </div>
  <!-- TARTALOM VÉGE -->

<?php include 'sablon/lablec.php'; ?>