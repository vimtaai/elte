<?php
require_once("helpers/utils.php");

const MESSAGE_FLASH_KEY = "messages";
$GLOBALS[MESSAGE_FLASH_KEY] = get_flash_data("messages") ?? [];
$_SESSION[MESSAGE_FLASH_KEY] = [];

function add_message($type, $text) {
  $GLOBALS["messages"][] = [
    "type" => $type,
    "message" => $text
  ];
}

function add_flash_message($type, $text) {
  $_SESSION[MESSAGE_FLASH_KEY][] = [
    "type" => $type,
    "message" => $text
  ];
}

function has_error_messages(): bool {
  foreach ($GLOBALS["messages"] as $message) {
    if ($message["type"] === "danger") {
      return true;
    }
  }

  return false;
}