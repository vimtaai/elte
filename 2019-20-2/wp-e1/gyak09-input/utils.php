<?php 
if (!defined("INIT")) { die; }

// Universal util functions
function array_find($arr, $pred) {
  foreach ($arr as $elem) {
    if ($pred($elem)) {
      return $elem;
    }
  }

  return FALSE;
}

function array_all_keys_exist($arr, ...$indexes) {
  foreach ($indexes as $index) {
    if (!isset($arr[$index])) {
      return FALSE;
    }
  }

  return TRUE;
}

// Specific util functions
function verify_get(...$indexes) {
  return array_all_keys_exist($_GET, ...$indexes);
}

function verify_post(...$indexes) {
  return array_all_keys_exist($_POST, ...$indexes);
}
