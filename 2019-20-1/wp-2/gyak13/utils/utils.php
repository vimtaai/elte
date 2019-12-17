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

// ! Átirányítás
function redirect($url) {
  header("Location: " . $url);
  exit();
}

// ! Autorizáció
function is_logged_in() {
  return isset($_SESSION["user"]);
}

function authorize_page() {
  if (!is_logged_in()) {
    redirect("login.php");
  }
}


