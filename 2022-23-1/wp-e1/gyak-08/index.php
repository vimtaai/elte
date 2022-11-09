<?php
$items = ["Item 1", "Item 2", "Item 3", "Item 4"];

function printItems($items) {
  $output = "";
  foreach ($items as $item) {
    $output .= "<li>${item}</li>" . PHP_EOL;
  }
  return $output;
}

?>
<h1>My little list</h1>
<ul>
<?php foreach ($items as $item): ?>
  <li><?= $item ?></li>
<?php endforeach; ?>

<?= 
implode(PHP_EOL, array_map(function ($item) {  
  return "<li>${item}</li>";
}, $items))
?>

</ul>