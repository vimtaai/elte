<?php

include 'seged/adatbazis.php';

$adatbazis = kapcsolodas('mysql:host=localhost;dbname=wf2_wp1c0x', 'wp1c0x', 'wp1c0x');

$hibak = [];

// Ha jött bármilyen adat
if (count($_POST) > 0) {
  // Bemenet ellenőrzése
  if ($_POST['vezeteknev'] == '') {
    $hibak[] = 'Üres vezetéknév!';
  }
  if ($_POST['keresztnev'] == '') {
    $hibak[] = 'Üres keresztnév!';
  }
  if (strlen($_POST['felhasznalo']) < 4) { 
    $hibak[] = 'Túl rövid felhasználónév!'; 
  }
  if (strlen($_POST['jelszo']) < 4) { 
    $hibak[] = 'Túl rövid jelszó!'; 
  }
  if ($_POST['jelszo'] != $_POST['jelszo-ujra']) {
    $hibak[] = 'A két jelszó nem egyezik meg';
  }
  // Ellenőrizzük, hogy van-e már ilyen felhasználó
  $sql = 'SELECT * FROM `felhasznalok` WHERE `felhasznalo` = :f';
  $felhasznalok = lekerdezes($adatbazis, $sql, [
    ':f' => $_POST['felhasznalo']
  ]);
  if (count($felhasznalok) > 0) {
    $hibak[] = 'Az adott felhasználó már létezik!';
  }
  // Ha nem volt hiba...
  if (count($hibak) == 0) {
    // Beszúrás az adatbázisba
    $sql = 'INSERT INTO `felhasznalok` ' .
           '(`vezeteknev`, `keresztnev`, `felhasznalo`, `jelszo`) ' . 
           'VALUES (:v, :k, :f, :j)';
    vegrehajtas($adatbazis, $sql, [
      ':v' => $_POST['vezeteknev'],
      ':k' => $_POST['keresztnev'],
      ':f' => $_POST['felhasznalo'],
      ':j' => password_hash($_POST['jelszo'], PASSWORD_DEFAULT)
    ]);
  }
}

?>
<?php include 'sablon/fejlec.php'; ?>

  <?php include 'sablon/navigacio.php'; ?>

  <!-- TARTALOM -->
  <div class="ui main container">
    <!-- KÜLDÕ ÛRLAP -->
    <h1>Regisztráció</h1>
    <form method="post" class="ui form">
      <div class="field"><input type="text" name="vezeteknev" placeholder="Vezetéknév" class="field"></div>
      <div class="field"><input type="text" name="keresztnev" placeholder="Keresztnév" class="field"></div>
      <div class="field"><input type="text" name="felhasznalo" placeholder="Felhasználónév" class="field"></div>
      <div class="field"><input type="password" name="jelszo" placeholder="Jelszó" class="field"></div>
      <div class="field"><input type="password" name="jelszo-ujra" placeholder="Jelszó megerősítése" class="field"></div>
      <div class="field"><input type="submit" value="Regisztrál" class="ui button three wide field primary"></div>
    </form>
    <!-- KÜLDÕ ÛRLAP VÉGE -->
    <br>
    <a href="bejelentkezes.php" class="ui button right floated">Vissza a bejelentkezéshez</a>
    <?php foreach ($hibak as $hiba) : ?>
      <div class="ui message negative"><?= $hiba ?></div>
    <?php endforeach; ?>
  </div>
  <!-- TARTALOM VÉGE -->

<?php include 'sablon/lablec.php'; ?>
  