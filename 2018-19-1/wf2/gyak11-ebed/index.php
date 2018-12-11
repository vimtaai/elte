<?php
include('adatb.php');

if (isset($_POST['diak'])) {
  // lekérdezés
  $lekerdezes = $kapcsolat->prepare('SELECT * FROM `ebed` WHERE `diak` = :diak');
  $lekerdezes->execute([
    ':diak' => $_POST['diak']
  ]);
  // adatok kinyerése
  $adatok = $lekerdezes->fetch(); // ha egy darab rekordot szeretnénk kapni
  // $adatok = $lekerdezes->fetchAll(); // ha rekordok tömbjét szeretnénk kapni
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Ebédbefizetés ellenőrzése</title>
</head>
<body>
  <!-- Ez itt egy komment -->
  <form method="post">
    <input type="text" name="diak">
    <button type="submit">Ellenőrzés</button>
  </form>
  <?php 
  if (isset($adatok)) {
    echo $adatok['befizetve'] ? 'befizetve' : 'nincs befizetve';
  }
  ?>
  <script>
  document.querySelector('input').addEventListener('input', function () {
    document.querySelector('button').click();
  });
  </script>
</body>
</html>