<?php

define('BR', '<br>' . PHP_EOL);

print("Hello world\n");
echo("Hello world\n");
print 'Hello world' . BR;
echo 'Hello world' . BR;
echo 1 . BR;

$nev = 'Elemér';
print "Hello $nev\n";
echo 'Hello ' . $nev . BR;
print "Üdvözlet ${nev}nek!\n";

function fakt($n) {
  if ($n == 0) {
    return 1;
  } else {
    return $n * fakt($n - 1);
  }
}

echo fakt(5) . BR;
echo fakt(6) . BR;

$kategoriak = [
  3  => "dráma",
  17 => "akció",
  42 => "kaland",
  7  => "romantikus"
];

echo '<select>' . PHP_EOL;
foreach ($kategoriak as $id => $kategoria) {
  echo '<option value="' . $id . '">' . $kategoria . '</option>' . PHP_EOL;
  echo "<option value=\"$id\">$kategoria</option>\n";
}
echo '</select>' . PHP_EOL;

$hibak = [
    "404-Not found",
    "403-Access denied"
];

echo '<ul>' . PHP_EOL;
foreach($hibak as $hiba) {
    echo '<li>' . $hiba . '</li>' . PHP_EOL;
}
echo '</ul>' . PHP_EOL;