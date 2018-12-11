<?php

// deklaráció és értékadás
$nev = "Kiskacsa";

// echo $nev . PHP_EOL;
// echo($nev) . "<br>" . PHP_EOL;
// print $nev . PHP_EOL;
// print($nev) . PHP_EOL;

$tomb = [
  "tej",
  "kenyér",
  "alma",
  "sör",
  "csipsz"
];

$kiskacsa = [
  "név" => "Kis Kacsa",
  "életkor" => 4,
  "fiú" => true
];

/*
let kiskacsa = {
  nev: "Kis Kacsa",
  eletkor: 4,
  fiu: true
}
*/

?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Alma</title>
</head>
<body>
<h1>Hello <?= $nev ?>!</h1>
Teljes név: <?= $kiskacsa["név"] ?><br>
Életkor: <?= $kiskacsa["életkor"] ?><br>
Nem: <?= $kiskacsa["fiú"] ? "fiú" : "lány" ?><br>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus veniam optio, pariatur esse explicabo id harum tempore omnis facilis officia? Aliquam culpa neque quisquam cumque ratione. Saepe accusamus id accusantium.</p>
<ul>
<?php
foreach ($tomb as $elem) {
  print("<li>${elem}</li>");
}
?>

<?php foreach ($tomb as $elem) : ?>
  <li><?= $elem ?></li>
<?php endforeach; ?>
</ul>
</body>
</html>






