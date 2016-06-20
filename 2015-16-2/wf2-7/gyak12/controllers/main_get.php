<?php if (!defined('TOKEN')) die ('Ejnyebejnye!');

authorize(TRUE);

$file = __DIR__ . '/../data/todos.json';
$todos = file_load($file);