<?php

class User {
  public $id;
  public $email;
  public $name;

  public $password {
    set($value) {
      $this->password = $value;
    }
    get {
      return null;
    }
  }

  function __construct($id = NULL, $email = NULL, $password = NULL, $name = NULL) {
    $this->id = $id ?? $this->id;
    $this->email = $email ?? $this->email;
    $this->password = $password ?? $this->password;
    $this->name = $name ?? $this->name;
  }

  public function verifyPassword($password) {
    return password_verify($password, $this->password);
  }
}
