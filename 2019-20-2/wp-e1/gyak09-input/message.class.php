<?php
if (!defined("INIT")) { die; }

abstract class Message {
  public $type;
  public $message;

  public function __construct($message) {
    $this->message = $message;
  }
}

class ErrorMessage extends Message {
  public function __construct($message) {
    parent::__construct($message);
    $this->type = "error";
  }
}

class SuccessMessage extends Message {
  public function __construct($message) {
    parent::__construct($message);
    $this->type = "success";
  }
}