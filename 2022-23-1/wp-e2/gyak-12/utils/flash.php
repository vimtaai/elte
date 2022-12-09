<?php

function load_from_flash(string $key) {
  $value = $_SESSION[$key] ?? null;
  unset($_SESSION[$key]);

  return $value;
}

function save_to_flash(string $key, $data): void {
  $_SESSION[$key] = $data;
}