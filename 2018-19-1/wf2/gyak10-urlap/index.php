<?php

// print_r($_GET);
$nev = $_POST["nev"] ?? "Nemtudomki";

// Beolvasás

// if ($_POST) { // akkor lehet, ha egy űrlap van
if (isset($_POST["a"]) && isset($_POST["b"]) && isset($_POST["op"])) {
  $a = $_POST["a"];
  $b = $_POST["b"];
  $op = $_POST["op"];

  $eredmeny = szamol($a, $b, $op);
}

// Feldolgozás
function szamol($a, $b, $op) {
  if ($op == "+") {
    return $a + $b;
  } else if ($op == "-") {
    return $a - $b;
  } else if ($op == "x") {
    return $a * $b;
  } else if ($op == "÷") {
    return $a / $b;
  }

  return NAN;
}

// Kiírás
?>
<!doctype html>

<meta charset="utf-8">
<title>Űrlapkezelés</title>

<form method="post">
  <label>Neved: </label>
  <input type="text" name="nev">
  <select name="nem">
    <option value="no">Nő</option>
    <option value="ferfi">Férfi</option>
    <option value="non-binary">Non-binary</option>
  </select>
  <input type="submit" value="Küldés">
  <button type="submit">Küldés</button>
</form>
Szia, <?= $nev ?>!

<form method="post">
  <input type="number" name="a">
  <select name="op">
    <option>+</option>
    <option>-</option>
    <option value="x">&bullet;</option>
    <option>÷</option>
  </select>
  <input type="number" name="b">
  <input type="submit" value="Számol">
</form>
<?= $eredmeny ?? "" ?>