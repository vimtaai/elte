<?php

function array_all_keys_exist($arr, $keys) {
  // Check if all names are set in $input
  foreach ($keys as $key) {
    if (!array_key_exists($key, $arr)) {
      return false;
    }
  }
  return true;
}

function verify_get(...$names) {
  return array_all_keys_exist($_GET, $names);
}

function verify_post(...$names) {
  return array_all_keys_exist($_POST, $names);
}
