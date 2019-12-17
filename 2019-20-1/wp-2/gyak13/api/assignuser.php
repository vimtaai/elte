<?php
require_once("../utils/_init.php");
authorize_page();
header("Content-Type: application/json");

if (!verify_get("ticket_id", "user_id")) {
  http_response_code(300);
  exit();
}

$ticket_id = $_GET["ticket_id"];
$user_id = $_GET["user_id"] === "null" ? NULL : (int)$_GET["user_id"];


$ticket = $ticket_store->find($ticket_id);
$user = $user_store->find($user_id);

if ($ticket === NULL || $user === NULL) {
  http_response_code(404);
  exit();
}

$ticket["assigned"] = $user_id;
$ticket_store->update($ticket_id, $ticket);

http_response_code(200);
print(json_encode("OK"));

