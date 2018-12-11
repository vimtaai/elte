<?php
include 'adatb.php';

if (count($_POST) > 0) { // ha volt küldött adat
  $q = 'INSERT INTO `ebed` (`nev`, `diak`, `befizetve`) VALUES (:n, :d, :b)';
  $lekerdezes = $kapcsolat->prepare($q);
  $lekerdezes->execute([
    ':n' => $_POST['nev'],
    ':d' => $_POST['diak'],
    ':b' => isset($_POST['befizetve'])
  ]);
}

$lekerdezes = $kapcsolat->prepare('SELECT * FROM `ebed`');
$lekerdezes->execute();
$diakok = $lekerdezes->fetchAll();

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Ebédbefizetés</title>
</head>
<body>
  <table>
    <tr>
      <th>Azonosító</th>
      <th>Név</th>
      <th>Diákigazolvány</th>
      <th>Befizetve</th>
    </tr>
    <?php
    foreach ($diakok as $diak) {
      echo '<tr>';
      echo '<td>' . $diak['id'] . '</td>';
      echo '<td>' . $diak['nev'] . '</td>';
      echo '<td>' . $diak['diak'] . '</td>';
      echo '<td>' . $diak['befizetve'] . '</td>';
      echo '</tr>';
    }
    ?>
  </table>

  <form method="post">
    Név:
    <br>
    <input type="text" name="nev">
    <br>
    Diakszám:
    <br>
    <input type="number" name="diak">
    <br>
    Befizetve:
    <br>
    <input type="checkbox" name="befizetve">
    <br>
    <button type="submit">Mentés</button>
  </form>

</body>
</html>