<?php

function is_user_logged_in(): bool {
  return isset($_SESSION["user"]);
}

function get_logged_in_user(array $users) {
  if (!is_user_logged_in()) {
    return null;
  }

  foreach ($users as $user) {
    if ($user["username"] === $_SESSION["user"]) {
      return $user;
    }
  }
}

function login(string $username): void {
  $_SESSION["user"] = $username;
}

function logout(): void {
  unset($_SESSION["user"]);
}

function authorize($user, string $required_role = "user") {
  if (!is_user_logged_in() || $user["role"] !== $required_role) {
    save_to_flash("messages", [[ "type" => "danger", "text" => "Permission denied" ]]);
    redirect("login.php");
  }
}