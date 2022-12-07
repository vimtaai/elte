<?php

function array_all_keys_exist($array, ...$keys): bool {
  foreach ($keys as $key) {
    if (!isset($array[$key])) {
      return false;
    }
  }

  return true;
}

function check_all_keys_in_post(...$required_keys): bool {
  return array_all_keys_exist($_POST, ...$required_keys);
}

function check_all_keys_in_get(...$required_keys): bool {
  return array_all_keys_exist($_GET, ...$required_keys);
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

function set_flash_data($key, $value) {
  $_SESSION[$key] = $value;
}

function get_flash_data($key) {
  $value = $_SESSION[$key] ?? null;
  unset($_SESSION[$key]);
  return $value;
}