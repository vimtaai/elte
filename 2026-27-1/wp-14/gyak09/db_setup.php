<?php
ini_set("display_errors", "on");
error_reporting(E_ALL);

$dbConnection = new PDO("sqlite:./database.sqlite");

// Credit Cards table
print("<pre>");
print("> Creating Credit Cards table...\n");
$dbConnection->query("CREATE TABLE IF NOT EXISTS `creditcards` (
  `id`         INTEGER PRIMARY KEY AUTOINCREMENT,
  `cardnumber` TEXT,
  `name`       TEXT
)");
print("+ Created.\n");

// Credit Cards initial data
print("> Populating Credit Cards table...\n");
$dbConnection->query("INSERT OR IGNORE INTO `creditcards` 
  (`id`, `cardnumber`, `name`) VALUES 
    (1, '1234-1234-1234-1234', ''),
    (2, '2345-2345-2345-2345', '')
");
print("+ Inserted.\n");

// Transactions table
print("> Creating Transactions table...\n");
$dbConnection->query("CREATE TABLE IF NOT EXISTS `transactions` (
  `id`            INTEGER PRIMARY KEY AUTOINCREMENT,
  `creditcard_id` INTEGER,
  `vendor`        TEXT,
  `amount`        INTEGER,
  `currency`      TEXT
)");
print("+ Created.\n");

// Transactions initial data
print("> Populating Transactions table...\n");
$dbConnection->query("INSERT OR IGNORE INTO 
  `transactions` (`id`, `creditcard_id`, `vendor`, `amount`, `currency`) VALUES 
    (1, 1, 'Gyros Master', -42353, 'HUF'),
    (2, 1, 'CBA', -1234, 'USD'),
    (3, 2, 'Lidl', -2412, 'HUF'),
    (4, 2, 'ELTE', 144, 'HUF')
");
print("+ Inserted.\n");
