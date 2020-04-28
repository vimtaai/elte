<?php
$cities = [
  "London", 
  "Paris", 
  "Berlin",
  "Amsterdam",
  "Brussels",
  "Copenhagen",
  "Madrid",
  "Lisbon",
  "Rome",
  "Prague",
  "Budapest",
  "Bratislava",
  "Warsaw",
  "Wien",
  "Kiev",
  "Vilnius",
  "Riga",
  "Tallin",
  "Stockholm",
  "Oslo",
  "Helsinki",
  "Zagreb"
];
// Beolvasás / Feldolgozás
// Szuperglobális változó
$name = $_GET["name"] ?? "Anonymus";
$age = $_GET["age"] ?? "unknown";

$page = (int)$_GET["page"] ?? 1;
$items_per_page = 10;
$page_start_index = ($page - 1) * 10;
$number_of_pages = (int)ceil(count($cities) / $items_per_page);
$cities_to_show = array_slice($cities, $page_start_index, $items_per_page);

?>
<!-- Kiírás -->
<h1>Hello, <?= $name ?>! You are <?= $age ?> old.</h1>

<ul>
  <?php foreach ($cities_to_show as $city) : ?>
  <li><?= $city ?></li>
  <?php endforeach; ?>
</ul>
<?php if ($page !== 1): ?>
<a href="?page=<?= $page - 1 ?>">&lt;</a>
<?php endif; ?>

<?php for ($i = 1; $i <= $number_of_pages; $i++): ?>
<a href="?page=<?= $i ?>"><?= $i ?></a>
<?php endfor; ?>

<?php if ($page !== $number_of_pages): ?>
<a href="?page=<?= $page + 1 ?>">&gt;</a>
<?php endif; ?>