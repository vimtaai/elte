<?php

require_once("../utils/_init.php");
$avengers = $avenger_store->findAll();

$strength = $_GET["strength"];
$speed = $_GET["speed"];
$durability = $_GET["durability"];

$pairs = [];
$suitabilites = [];

foreach ($avengers as $avenger1) {
  foreach ($avengers as $avenger2) {
    if ($avenger1 === $avenger2) {
      continue;
    }

    $pairs[] = [$avenger1, $avenger2];
    $avg_strength = ($avenger1["strength"] + $avenger2["strength"]) / 2;
    $avg_speed = ($avenger1["speed"] + $avenger2["speed"]) / 2;
    $avg_durability = ($avenger1["durability"] + $avenger2["durability"]) / 2;

    $suitabilites[] = abs($avg_strength - $strength) + 
                      abs($avg_speed - $speed) +
                      abs($avg_durability - $durability);
  }
}

$idx = 0;
$min = $suitabilites[0];
foreach ($suitabilites as $i => $s) {
  if ($s < $min) {
    $idx = $i;
    $min = $suitabilites[$i];
  }
}

// $pairs[$idx];

header("Content-Type: application/json");
print(json_encode($pairs[$idx]));