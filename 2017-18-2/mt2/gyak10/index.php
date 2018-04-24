<?php

include 'adatbazis.php';

$adatbazis = kapcsolodas('mysql:host=localhost;dbname=wf2_wp1c0x',
                         'wp1c0x', 'wp1c0x');

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
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Családi pénznyilvántartás</title>
    <link rel="stylesheet" href="https://bit.do/wf2css">
    <style>table td,table th{line-height: 1;height: initial;width: initial;padding: 10px;}</style>
</head>
<body>
    <form method="post">
        Összeg: 
        <input type="number" name="amount">
        <input type="submit" value="Mentés">
    </form>
    <table>
      <caption style="color: <?= $osszeg < 0 ? 'red' : 'green' ?>">
        <?= $osszeg ?>
      </caption>
      <tr>
        <th>Tranzakció azon.</th>
        <th>Dátum</th>
        <th>Összeg</th>
      </tr>
      <?php foreach ($tranzakciok as $t) : ?>
      <tr>
        <td><?= $t['id'] ?></td>
        <td><?= $t['datum'] ?></td>
        <td style="color: <?= $t['osszeg'] < 0 ? 'red' : 'green' ?>">
          <?= ($t['osszeg'] > 0 ? '+' : '') . $t['osszeg'] ?>
        </td>
      </tr>
      <?php endforeach; ?>
    </table>
</html>