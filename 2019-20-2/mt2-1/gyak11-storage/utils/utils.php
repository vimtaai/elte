<?php

function verify_get(...$inputs) {
  foreach ($inputs as $input) {
    if (!isset($_GET[$input])) {
      return FALSE;
    }
  }

  return TRUE;
}

function verify_post(...$inputs) {
  foreach ($inputs as $input) {
    if (!isset($_POST[$input])) {
      return FALSE;
    }
  }

  return TRUE;
}

function redirect($url) {
  header("Location: ${url}");
  exit();
}

