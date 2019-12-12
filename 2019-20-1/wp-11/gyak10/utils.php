<?php

function array_check_all_keys($arr, $keys) {
  foreach ($keys as $key) {
    if (!isset($arr[$key])) {
      return FALSE;
    }
  }
  return TRUE;
}

function verify_get(...$required_keys) {
  return array_check_all_keys($_GET, $required_keys);
}

function verify_post(...$required_keys) {
  return array_check_all_keys($_POST, $required_keys);
}