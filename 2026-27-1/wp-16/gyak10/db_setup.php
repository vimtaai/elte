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

$database->query("CREATE TABLE IF NOT EXISTS `users` (
  `id`       INTEGER PRIMARY KEY AUTOINCREMENT,
  `email`    TEXT UNIQUE,
  `password` TEXT,
  `name`     TEXT
)");

$database->query("INSERT OR IGNORE INTO `users` (`id`, `email`, `password`, `name`) VALUES
  (1, 'admin@admin.hu', '" . password_hash("adminpass", PASSWORD_DEFAULT) . "', 'T Csor'),
  (2, 'student@student.hu', '" . password_hash("studentpass", PASSWORD_DEFAULT) . "', 'Stu Dent')
");