<?php
// ? PHP block / Controller
// ? Make changes and prepare data

// Accessing input
// GET method
// var_dump($_GET["convert_amount"]);

function array_all_keys_exist($arr, $keys) {
  // Check if all names are set in $input
  foreach ($keys as $key) {
    if (!array_key_exists($key, $arr)) {
      return false;
    }
  }
  return true;
}

function verify_get(...$names) {
  return array_all_keys_exist($_GET, $names);
}

function verify_post(...$names) {
  return array_all_keys_exist($_POST, $names);
}

// ! STEP 1.
// ! CHECK IF THERE IS INPUT AT ALL
if (verify_post("convert_amount", "convert_from", "convert_to")) {
  // ! STEP 2.
  // ! Good practice: 
  // ! ALWAYS EXTRACT INPUT FIRST + TYPE CONVERSIONS + PREPROCESSING
  $convert_amount = floatval($_POST["convert_amount"]);
  $convert_from = $_POST["convert_from"];
  $convert_to = $_POST["convert_to"];

  // var_dump($convert_amount);
  // ! STEP 3.
  // ! PROCESS INPUT
  if ($convert_from === "cm" && $convert_to === "in") {
    $converted_amount = $convert_amount / 2.54;
  } else if ($convert_from === "in" && $convert_to === "cm") {
    $converted_amount = $convert_amount * 2.54;
  } else {
    $converted_amount = $convert_amount;
  }
}

?>
<!-- STEP 3. -->
<!-- Template / View -->
<!-- Show results and data to the user -->
<!doctype html>
<html>
  <head>
    <meta chatset="utf-8">
    <title>Unit converter</title>
  </head>
  <body>
    <h1>Unit converter</h1>

    <!-- FORM (user input) -->
    <form method="post">
      <label for="convert_amount">Convert: </label>
      <input id="convert_amount" name="convert_amount">
      <select name="convert_from">
        <option>cm</option>
        <option>in</option>
      </select>
      <label for="convert_to">Convert to: </label>
      <select id="convert_to" name="convert_to">
        <option>cm</option>
        <option>in</option>
      </select>
      <button type="submit">Convert</button>
    </form>
    <?php if (isset($converted_amount)) : ?>
      Converted value:
      <?= $converted_amount ?><?= $convert_to ?>
    <?php endif; ?>
  </body>
</html>