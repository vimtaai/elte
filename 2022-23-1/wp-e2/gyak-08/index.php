<?php
declare(strict_types=1);

// Adatfeldolgozás
$name = "John";
$var = "name";

function is_even(int $value): bool {
  return $value % 2 === 0;
}

$data = [1, 2, 4, "5.2", 3, 6, 3, 5];
$filtered_data = array_map(
  function ($x) { return $x * 100; },
  array_filter($data, "is_even")
);

$filtered_data = [];
foreach ($data as $value) {
  if ($value % 2 === 0) {
    $filtered_data[] = $value * 100;
  } 
}

$object = [
  "key1" => "value1",
  "key2" => "value2",
  "key3" => "value3"
];

?>
<!-- Sablon -->
<h1>Hello</h1>
<?= "Hello ${$var}" ?>
Typeof null: <?= gettype(null) ?>
<h1>There</h1>
<ul>
<?php foreach ($filtered_data as $value): ?>
  <li><?= $value ?></li>
<?php endforeach; ?>
</ul>

<pre>
{
<?php foreach ($object as $key => $value): ?>
  <?= $key ?>: "<?= $value ?>",
<?php endforeach; ?>
}
</pre>