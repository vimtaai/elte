<?php

function is_user_logged_in() {
  return isset($_SESSION["user"]);
}

function user_has_role($user, $role) {
  return in_array($role, $user["roles"]);
}

function get_logged_in_user() {
  if (!is_user_logged_in()) {
    return null;
  }

  foreach ($GLOBALS["users"] as $user) {
    if ($user["username"] === $_SESSION["user"]) {
      return $user;
    }
  }

  logout();

  return null;
}

function is_user_authorized($role) {
  $user = get_logged_in_user();

  if ($user === null) {
    return false;
  }

  return user_has_role($user, $role);
}

function login($username) {
  $_SESSION["user"] = $username;
}

function logout() {
  unset($_SESSION["user"]);
}
