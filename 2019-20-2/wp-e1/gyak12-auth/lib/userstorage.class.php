<?php

class UserObjectStorage extends SerializeObjectStorage {
  public $user = NULL;
  public $userId = NULL;

  public function __construct() {
    parent::__construct("storage/users.storage");

    if (isset($_SESSION["user-id"])) {
      $user_id = $_SESSION["user-id"];
      $this->user = $this->findById($user_id);
      $this->userId = $user_id;
    }
  }

  public function register($username, $password, $fullname) {
    $password_hash = password_hash($password, PASSWORD_DEFAULT); 
    $user = new User($username, $password_hash, $fullname);

    return $this->add($user);
  }

  public function authenticate($username, $password) {
    $users = $this->query(function ($user) use ($username, $password) {
      return $user->username === $username && $user->verifyPassword($password);
    });

    if (empty($users)) {
      return FALSE;
    }

    $user_id = array_keys($users)[0];
    return $user_id;
  }

  public function isAuthenticated() {
    return !is_null($this->user);
  }

  public function authorize($roles = []) {
    if (!$this->isAuthenticated()) {
      return FALSE;
    }

    foreach ($roles as $role) {
      if ($this->user->hasRole($role)) {
        return TRUE;
      }
    }

    return FALSE;
  }

  public function login($user_id) {
    $this->user = $this->findById($user_id);
    $this->userId = $user_id;
    $_SESSION["user-id"] = $user_id;
  }

  public function logout() {
    $this->user = NULL;
    $this->userId = NULL;
    unset($_SESSION["user-id"]);
  }
}