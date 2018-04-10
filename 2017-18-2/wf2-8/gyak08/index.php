<?php

//var_dump($_GET);

//$result = '';
$errors = [];

//if (count($_GET) > 0) {
if (isset($_GET['radius'])) {
  // előfeltétel ellenőrzés
  if (filter_var($_GET['radius'], 
      FILTER_VALIDATE_FLOAT)) {
    $result = 2 * $_GET['radius'] * pi();
  } else {
    $errors[] = 'Helytelen a megadott sugár!';
  }
  //echo $result;
}

?>
<meta charset="utf-8">
<link rel="stylesheet" href="https://bit.do/wf2css">
<style>
  .error { color: red; }
</style>

<form>
  <fieldset>
    <legend>Kerület számítás</legend>
    Sugár = <input name="radius">
    <input type="submit" value="Számol">
  </fieldset>
</form>

<form method="post">
  <fieldset>
    <legend>Számológép</legend>
    <input type="number">
    <select>
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
    <?= $result ?? '' ?>
    <?php foreach ($errors as $error) : ?>
      <div class="error">
        <?= $error ?>
      </div>
    <?php endforeach; ?>
</output>