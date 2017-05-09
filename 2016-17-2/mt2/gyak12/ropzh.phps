<?php

// EZ A RÉSZ A BEOLVASÁSHOZ/AUTOMATIKUS TESZTHEZ KELL
extract(json_decode(trim(fgets(STDIN)), true));
// BEOLVASÁS VÉGE

$errors = [];

if ($_POST) {
  // Itt végezd el a validálást
  if (is_array($_POST['tomb'])) {
    if (count($_POST['tomb']) >= 3) {
      $mind = true;
      foreach ($_POST['tomb'] as $elem) {
        if (!is_int($elem)) {
          $mind = false;
          break;
        }
      }
      if (!$mind) {
        $errors[] = 3;
      }
    } else {
      $errors[] = 2;
    }
  } else {
    $errors[] = 1;
  }
  
  if (is_int($_POST['ertek'])) {
    if ($_POST['ertek'] % 2 != 0) {
      $errors[] = 2;
    }
  } else {
    $errors[] = 1;
  }
}

foreach ($errors as $error) {
  echo $error . PHP_EOL;
} 