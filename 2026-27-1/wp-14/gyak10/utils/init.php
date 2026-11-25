<?php

ini_set("display_errors", "on");
error_reporting(E_ALL);

const ROOT = __DIR__ . "/..";

include(ROOT . "/model/creditcard.php");
include(ROOT . "/model/transaction.php");
include(ROOT . "/utils/database.php");

// Input and message variables
$inputs = [];
$errors = [];
