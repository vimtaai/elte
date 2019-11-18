<?php

function array_all_keys_exist($array, ...$required_keys) {
  foreach ($required_keys as $key) {
    if (!isset($array[$key])) {
      return false;
    }
  }

  return true;
}

function verify_post(...$required_keys) {
  return array_all_keys_exist($_POST, ...$required_keys);
}

function verify_get(...$required_keys) {
  return array_all_keys_exist($_GET, ...$required_keys);
}