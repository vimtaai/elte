<?php if (!defined('TOKEN')) die ('Ejnyebejnye!');

echo json_encode(file_load(__DIR__ . '/../data/todos.json'));