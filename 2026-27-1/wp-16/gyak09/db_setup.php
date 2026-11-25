<?php

include("utils/database.php");

$database->query("CREATE TABLE IF NOT EXISTS `posts` (
  `id`    INTEGER PRIMARY KEY AUTOINCREMENT,
  `title` TEXT,
  `text`  TEXT
)");

$database->query("INSERT OR IGNORE INTO `posts` (`id`, `title`, `text`) VALUES
  (1, 'ELMARAD', 'A holnapi gyakorlat elmarad, ne gyertek be.'),
  (2, 'MEGSEM', 'Megsem marad el a holnapi gyakorlat')
");