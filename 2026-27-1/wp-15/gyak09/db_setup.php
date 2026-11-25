<?php 

$database = new PDO("sqlite:./database.sqlite");

// $database->query("DROP TABLE `courses`");
$database->query("CREATE TABLE `courses` (
  `id`       INTEGER PRIMARY KEY AUTOINCREMENT,
  `name`     TEXT,
  `semester` INTEGER,
  `credits`  INTEGER
)");
$database->query("INSERT INTO `courses`
  (`name`, `semester`, `credits`) VALUES
  ('Web development', 1, 5),
  ('Web programming', 2, 4)  
");

// $database->query("DROP TABLE `users`");
$database->query("CREATE TABLE `users` (
  `id`       INTEGER PRIMARY KEY AUTOINCREMENT,
  `name`     TEXT
)");
$database->query("INSERT INTO `users`
  (`name`) VALUES ('Joe'), ('Jean')  
");

// $database->query("DROP TABLE `course_completion`");
$database->query("CREATE TABLE `course_completion` (
  `user_id`   INTEGER,
  `course_id` INTEGER
)");
$database->query("INSERT INTO `course_completion`
  (`user_id`, `course_id`) VALUES (1, 1)  
");