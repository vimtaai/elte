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

function generate_token($length = 8) {
  $token = "";

  for ($i = 0; $i < $length; $i++) {
    $ascii_code = rand(65, 90);
    $character = chr($ascii_code);
    $token .= $character;
  }

  return $token;
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

// function generate_token_alt() {
//   $random_bytes = random_bytes(6);
//   return base64_encode($random_bytes);
// }

// ! DO NOT CLOSE the PHP tag if the file has only PHP code