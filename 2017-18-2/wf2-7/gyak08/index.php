<?php

//var_dump($_GET);
$errors = [];

if (count($_GET) > 0) {
    if (($radius = filter_var($_GET['radius'], FILTER_VALIDATE_FLOAT)) !== FALSE && $radius > 0) {
      $result = 2 * $radius * pi();
    } else {
      $errors[] = 'Hibás a sugár értéke!';
    }
}

//echo $result;

?>
<meta charset="utf-8">
<link rel="stylesheet" href="https://bit.do/wf2css">

<form>
  <fieldset>
    <legend>Kerület számítás</legend>
    Sugár = 
    <input name="radius" value="<?= $_GET['radius'] ?? '' ?>">
    <input type="submit" value="Számol">
  </fieldset>
</form>

<form method="post" action="./">
  <fieldset>
    <legend>Számológép</legend>
    <input type="number" name="a">
    <select name="operator">
      <option>+</option>
      <option>-</option>
      <option>*</option>
      <option>/</option>
    </select>
    <input type="number">
    <input type="submit" value="Számol">
  </fieldset>
</form>

<output>
  <?php foreach ($errors as $error) : ?>
    <span class="error"><?= $error ?></span>
  <?php endforeach; ?>
  <?= $result ?? '' ?>
</output>