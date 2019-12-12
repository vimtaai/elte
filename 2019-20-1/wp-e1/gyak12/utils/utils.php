<?php

function array_all_keys_exist($array, ...$required_keys) {
  foreach ($required_keys as $key) {
    if (!isset($array[$key])) {
      return false;
    }
  }

  return true;
}

function array_find($array, $condition) {
  $found = array_filter($array, $condition);

  if (count($found) === 0) {
    return FALSE;
  }

  return array_keys($found)[0];
}

function verify_post(...$required_keys) {
  return array_all_keys_exist($_POST, ...$required_keys);
}

function verify_get(...$required_keys) {
  return array_all_keys_exist($_GET, ...$required_keys);
}

function redirect($url) {
  header("Location: " . $url);
  exit;
}

function is_logged_in() {
  return isset($_SESSION["user"]);
}

const LOGGED_IN = 1;
const NOT_LOGGED_IN = 2;

function authorize($auth_type) {
  if ($auth_type & LOGGED_IN && !is_logged_in()) {
    redirect("login.php");
  }

  if ($auth_type & NOT_LOGGED_IN && is_logged_in()) {
    redirect("index.php");
  }
}

