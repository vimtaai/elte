<?php

if (count($_POST) > 0) {
  if (isset($_POST["ft"])) {
    // ! ft-ból euróba
    $eredmeny = $_POST["ft"] / 325 . " EUR";
  } else {
    // ! euróból ft-ba
    $eredmeny = $_POST["eur"] * 325 . " Ft";
  }
}
?>
<?= $eredmeny ?? "Add meg az átváltandó értéket" ?>

<form action="atvalt.php" method="post">
  <input type="number" name="ft"> Ft
  <button type="submit">Átvált</button>
</form>

<form action="atvalt.php" method="post">
  <input type="number" name="eur"> EUR
  <button type="submit">Átvált</button>
</form>