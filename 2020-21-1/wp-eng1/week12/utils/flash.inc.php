<?php
if (!isset($_SESSION["flash"])) {
  $_SESSION["flash"] = [];
}

function save_to_flash($name, $data) {
  $_SESSION["flash"][$name] = $data;
}

function load_from_flash($name, $default_value = NULL) {
  if (!isset($_SESSION["flash"][$name])) {
    return $default_value;
  }

  $data = $_SESSION["flash"][$name];
  unset($_SESSION["flash"][$name]);
  return $data;
}