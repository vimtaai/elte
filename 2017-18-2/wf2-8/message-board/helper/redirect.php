<?php

function redirect(string $path) {
  header('Location: ' . $path);
  exit;
}

function redirectToView(string $view) {
  redirect('../view/' . $view . '.php');
}

function redirectToController(string $controller) {
  redirect('../controller/' . $controller . '.php');
}
