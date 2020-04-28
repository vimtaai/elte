<?php
include("lib/_init.php");

$cities = [
  ["name" => "London", "country" => "United Kingdom"], 
  ["name" => "Paris", "country" => "France"], 
  ["name" => "Berlin", "country" => "Germany"],
  ["name" => "Amsterdam", "country" => "The Netherlands"],
  ["name" => "Brussels", "country" => "Belgium"],
  ["name" => "Copenhagen", "country" => "Denmark"],
  ["name" => "Madrid", "country" => "Spain"],
  ["name" => "Lisbon", "country" => "Portugal"],
  ["name" => "Rome", "country" => "Italy"],
  ["name" => "Prague", "country" => "Czechia"],
  ["name" => "Budapest", "country" => "Hungary"],
  ["name" => "Bratislava", "country" => "Slovakia"],
  ["name" => "Warsaw", "country" => "Poland"],
  ["name" => "Wien", "country" => "Austria"],
  ["name" => "Kiev", "country" => "Ukraine"],
  ["name" => "Vilnius", "country" => "Lithuania"],
  ["name" => "Riga", "country" => "Latvia"],
  ["name" => "Tallin", "country" => "Estonia"],
  ["name" => "Stockholm", "country" => "Sweden"],
  ["name" => "Oslo", "country" => "Norway"],
  ["name" => "Helsinki", "country" => "Finland"],
  ["name" => "Zagreb", "country" => "Croatia"]
];

// Hibakezelés
$messages = [];

// Csak akkor akarjunk adatot feldolgozni, ha az rendelkezésre áll
// if (verify_post("username", "password", "full_name", "email")) {}

if (verify_post("country")) {
  // Beolvasás
  $country = $_POST["country"];

  // Feldolgozás
  $city = array_find($cities, function ($city) use ($country) {
    return $city["country"] === $country;
  });

  if ($city === FALSE) {
    $messages[] = new ErrorMessage("City not found");
  } else {
    $messages[] = new SuccessMessage("City found: {$city["name"]}");
  }
}

?>
<style>
.error { color: red; }
.success { color: green; }
</style>

<form method="post">
  <div><label for="country">Country</label></div>
  <div><input type="text" name="country" id="country"></div>
  <div><button type="submit">Search</button></div>
</form>

<?php if (isset($city) && $city !== FALSE): ?>
Capitol of <?= $country ?> is <?= $city["name"] ?>
<?php endif; ?>

<?php foreach ($messages as $message): ?>
<div class="<?= $message->type ?>"><?= $message->message ?></div>
<?php endforeach; ?>