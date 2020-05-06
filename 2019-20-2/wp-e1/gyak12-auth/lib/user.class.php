<?php 

class User {
  public $username;
  public $fullname;
  public $roles;
  private $password;

  public function __construct($username, $password, $fullname, $roles = ["user"]) {
    $this->username = $username;
    $this->password = $password;
    $this->fullname = $fullname;
    $this->roles = $roles;
  }

  public function hasRole($role) {
    return in_array($role, $this->roles);
  }

  public function verifyPassword($password) {
    return password_verify($password, $this->password);
  }
}