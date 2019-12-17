<?php

function redirect($url) {
  header("Location: " . $url);
  exit();
}

function verify_get(...$required_keys): bool {
  foreach ($required_keys as $key) {
      // if any of the keys are missing
      if (!isset($_GET[$key])) {
          return false;
      }
  }
  return true;
}

function verify_post(...$required_keys): bool {
  foreach ($required_keys as $key) {
      // if any of the keys are missing
      if (!isset($_POST[$key])) {
          return false;
      }
  }
  return true;
}

function is_logged_in() {
  return isset($_SESSION["user"]);
}

function authorize(...$roles) {
  if (!is_logged_in() || 
      !in_array($_SESSION["user"]["role"], $roles)) {
    return false;
  }

  return true;
}

function authorize_page(...$roles) {
  if (!authorize(...$roles)) {
    redirect("index.php");
  }
}
