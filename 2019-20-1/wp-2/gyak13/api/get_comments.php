<?php
require_once("../utils/_init.php");
header("Content-Type: application/json");

if (!verify_get("ticket_id")) {
  http_response_code(300);
  exit();
}

$ticket_id = $_GET["ticket_id"];
$ticket = $ticket_store->find($ticket_id);

if ($ticket === NULL) {
  http_response_code(404);
  exit();
}

http_response_code(200);
print(json_encode($ticket["comments"]));




