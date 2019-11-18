<?php

function array_all_keys_exist($array, $keys) {
  foreach ($keys as $key) {
    if (!isset($array[$key])) {
        return false;
    }
  }

  return true;
}

// ! Input ellenőrzés

function verify_get(...$names) {
  return array_all_keys_exist($_GET, $names);
}

function verify_post(...$names) {
  return array_all_keys_exist($_POST, $names);
}

// ! Fájlkezelés
function read_from_json($filename, $default_value = []) {
  if (!file_exists($filename)) {
    return $default_value;
  }

  $file_contents = file_get_contents($filename);

  return json_decode($file_contents, TRUE);
}

function write_to_json($filename, $content) {
  $json_content = json_encode($content, JSON_PRETTY_PRINT);

  file_put_contents($filename, $json_content);
}

// ! Átirányítás
function redirect($url) {
  header("Location: " . $url);
  exit();
}
