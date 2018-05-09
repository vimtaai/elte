<?php

class Message {
  const DEFAULT = '';
  const ERROR = 'negative';
  const SUCCESS = 'positive';

  private $text;
  private $type;

  public function __construct($text, $type = self::DEFAULT) {
    $this->text = $text;
    $this->type = $type;
  }

  public function __toString() {
    return '<div class="ui message ' . $this->type . '">' . $this->text . '</div>';
  }

  public static function addMessage(Message $message) {
    if (!isset($_SESSION['messages'])) {
      $_SESSION['messages'] = [];
    }
    $_SESSION['messages'][] = $message;
  }

  public static function getMessages() : array {
    $messages = $_SESSION['messages'] ?? [];
    unset($_SESSION['messages']);
    return $messages;
  }

  public static function hasErrors() : bool {
    foreach ($_SESSION['messages'] as $message) {
      if ($message->type == self::ERROR) {
        return TRUE;
      }
    }
    return FALSE;
  }
}
