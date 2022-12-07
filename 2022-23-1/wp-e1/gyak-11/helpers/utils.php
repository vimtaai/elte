<?php

function check_all_keys_in_post(...$required_keys): bool {
  foreach ($required_keys as $key) {
    if (!isset($_POST[$key])) {
      return false;
    }
  }

  return true;
}

function save_to_file($filename, $data) {
  file_put_contents($filename, json_encode($data));
}

function load_from_file($filename) {
  return json_decode(file_get_contents($filename), true) ?? [];
}

function redirect($page) {
  header("Location: ${page}");
  exit;
}
