<?php

if (!defined('TOKEN')) 
    die('A fájl közvetlenül nem elérhető!');
    
// Az oldalhoz bejelentkezés szükséges
authorize(TRUE);

$file = __DIR__ . '/../data/todos.json';
$todos = file_load($file);