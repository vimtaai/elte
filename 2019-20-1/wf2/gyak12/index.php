<?php
$connection = mysqli_connect("localhost", "wp1c0x", "wp1c0x", "wf2_wp1c0x");
mysqli_set_charset($connection, "utf8");

$query = mysqli_prepare($connection, "SELECT * FROM `wf2zh`");
mysqli_execute($query);
mysqli_stmt_bind_result($query, $id, $nev, $vonalkod, $db);

$irodaszerek = [];
while (mysqli_stmt_fetch($query)) {
  $irodaszerek[] = [
    "id" => $id,
    "nev" => $nev,
    "vonalkod" => $vonalkod,
    "db" => $db
  ];
}
?>

<meta charset="utf-8">
<table>
  <tr>
    <th>Azonosító</th>
    <th>Terméknév</th>
    <th>Vonalkód</th>
    <th>Darabszám</th>
  </tr>
  <?php foreach ($irodaszerek as $irodaszer) : ?>
    <tr>
      <td><?= $irodaszer["id"] ?></td>
      <td><?= $irodaszer["nev"] ?></td>
      <td><?= $irodaszer["vonalkod"] ?></td>
      <td>
        <?php if ($irodaszer["db"] === 0) : ?>
          Elfogyott
        <?php else: ?>
          <?= $irodaszer["db"] ?>
        <?php endif; ?>
      </td>
      <td><?= $irodaszer["db"] === 0 ? "Elfogyott" : $irodaszer["db"] ?></td>
    </tr>
  <?php endforeach; ?>
</table>

<a href="lekerdez.php">Lekérdezés</a>
<a href="atvalt.php">Pénzváltó</a>