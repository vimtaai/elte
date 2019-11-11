<?php

// ! Szuperglobális változó
// print($_SERVER["QUERY_STRING"]);
// var_dump($_GET);
// print($_GET["bgcolor"]);

function verify_post(...$required_keys) {
  foreach ($required_keys as $key) {
    if (!isset($_POST[$key])) {
      return false;
    }
  }

  return true;
}

$convert_rates = [
  "mm" => [
    "rate" => 0.001,
    "name" => "millimeters"
  ],
  "cm" => [
    "rate" => 0.01,
    "name" => "centimeters"
  ],
  "in" => [
    "rate" => 0.0254,
    "name" => "inches"
  ],
  "m" => [
    "rate" => 1,
    "name" => "meters"
  ],
  "km" => [
    "rate" => 1000,
    "name" => "kilometers"
  ]
];

if (verify_post("value", "convert_from", "convert_to")) {
  $value = $_POST["value"]; // GOOD PRACTICE
  $convert_to = $_POST["convert_to"];
  $convert_from = $_POST["convert_from"];

  $convert_rate = 
    $convert_rates[$convert_from]["rate"] / 
    $convert_rates[$convert_to]["rate"];
  $converted_value = $value * $convert_rate;
}

?>
<style>
  body { background: <?= $_POST["bgcolor"] ?? "#ffffff" ?>; }
</style>
<form action="index.php" method="post">
  <input type="color" name="bgcolor">
  <button type="submit">Change color</button>
</form>

<form action="index.php" method="post">
  <input type="number" name="value">
  <select name="convert_from">
    <?php foreach($convert_rates as $index => $value) : ?>
      <option value="<?= $index ?>"><?= $value["name"] ?></option>
    <?php endforeach; ?>

    <?php 
    // foreach($convert_rates as $index => $value) {
    //   print("<option value=\"${index}\">" . $value["name"] . "</option>");
    // } 
    ?>
  </select>
  &rarr;
  <select name="convert_to">
    <?php foreach($convert_rates as $index => $value) : ?>
      <option value="<?= $index ?>"><?= $value["name"] ?></option>
    <?php endforeach; ?>
  </select>
  <button type="submit">Convert</button>
</form>

<?= $converted_value ?? "" ?>