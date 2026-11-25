<?php

include("utils/init.php");
header("Content-Type: text/plain");

// Credit Cards table
print("> Creating Credit Cards table...\n");
$database->query("CREATE TABLE IF NOT EXISTS `creditcards` (
  `id`         INTEGER PRIMARY KEY AUTOINCREMENT,
  `cardnumber` TEXT,
  `name`       TEXT
)");
print("+ Created.\n");

// Credit Cards initial data
print("> Populating Credit Cards table...\n");
$database->query("INSERT OR IGNORE INTO `creditcards` 
  (`id`, `cardnumber`, `name`) VALUES 
    (1, '1234-1234-1234-1234', ''),
    (2, '2345-2345-2345-2345', '')
");
print("+ Inserted.\n");

// Transactions table
print("> Creating Transactions table...\n");
$database->query("CREATE TABLE IF NOT EXISTS `transactions` (
  `id`            INTEGER PRIMARY KEY AUTOINCREMENT,
  `creditcard_id` INTEGER,
  `vendor`        TEXT,
  `amount`        INTEGER,
  `currency`      TEXT
)");
print("+ Created.\n");

// Transactions initial data
print("> Populating Transactions table...\n");
$database->query("INSERT OR IGNORE INTO 
  `transactions` (`id`, `creditcard_id`, `vendor`, `amount`, `currency`) VALUES 
    (1, 1, 'Gyros Master', -42353, 'HUF'),
    (2, 1, 'CBA', -1234, 'USD'),
    (3, 2, 'Lidl', -2412, 'HUF'),
    (4, 2, 'ELTE', 144, 'HUF')
");
print("+ Inserted.\n");
