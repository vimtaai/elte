<?php

$connection = mysqli_connect("localhost", "wp1c0x", "wp1c0x", "wf2_wp1c0x");

if (count($_GET) > 0) {
  $query = mysqli_prepare(
    $connection, 
    "SELECT `nev` FROM `wf2zh` WHERE `nev` LIKE CONCAT('%', ?, '%');"
  );
  mysqli_stmt_bind_param($query, "s", $_GET["kereses"]);
  mysqli_execute($query);
  mysqli_stmt_bind_result($query, $nev);

  $nevek = [];
  while (mysqli_stmt_fetch($query)) {
    $nevek[] = $nev;
  }
}

?>
<form action="lekerdez.php" method="get">
  Keresés a raktárban: 
  <input type="text" name="kereses">
  <button type="submit">Keresés</button>
</form>

<ul>
  <?php foreach ($nevek ?? [] as $nev) : ?>
    <li><?= $nev ?></li>
  <?php endforeach; ?>
</ul>