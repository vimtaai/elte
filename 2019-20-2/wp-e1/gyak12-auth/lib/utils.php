<?php 

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

function get_current_page() {
  $root_dir = realpath(__DIR__ . "/..");
  $script_file = $_SERVER["SCRIPT_FILENAME"];
  return substr($script_file, strlen($root_dir) + 1);
}

function is_page_active($page) {
  return get_current_page() === $page;
}

function redirect($url) {
  header("Location: ${url}");
  exit();
}