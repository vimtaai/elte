<?php 

if (!defined('TOKEN')) 
    die('A fájl közvetlenül nem elérhető!');
    
authorize(FALSE);

$data = flash_load('data');
$errors = flash_load('errors');
$messages = flash_load('messages');