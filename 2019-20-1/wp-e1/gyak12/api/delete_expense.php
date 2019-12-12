<?php

require_once("../_init.php");

header("Content-Type: application/json");

if(!is_logged_in()) {
  http_response_code(403);
  print("null");
  exit();
}

if (!verify_get("expense_id")) {
  http_response_code(300);
  print("null");
  exit();
}

$expense_id = $_GET["expense_id"];
$user_id = $_SESSION["user_id"];
$expenses_store = new FileStorage("../storage/expenses/${user_id}.json");
$expenses_store->delete($expense_id);

print("\"OK\"");