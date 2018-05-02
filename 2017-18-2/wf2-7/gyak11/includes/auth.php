<?php

define('USER_ONLY', 1);
define('GUEST_ONLY', 2);
define('ANYBODY', 4);

function auth($auth_level) {
  if ($auth_level === USER_ONLY && !isset($_SESSION['user'])) {
    header('Location: login.php?redirect=' . $_SERVER['REQUEST_URI']);
    exit;
  } else if ($auth_level == GUEST_ONLY && isset($_SESSION['user'])) {
    header('Location: index.php');
    exit;
  }
}