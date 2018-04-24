<?php

class Message {
  const MESSAGE_DEFAULT = '';
  const MESSAGE_ERROR = 'negative';
  const MESSAGE_SUCCESS = 'positive';

  private $text;
  private $type;

  public function __construct($text, $type = self::MESSAGE_DEFAULT) {
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
}