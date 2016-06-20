<?php

if (!defined('TOKEN')) 
    die('A fájl közvetlenül nem elérhető!');

function is_empty($input, $key) {
  return !(isset($input[$key]) && 
           trim($input[$key]) !== '');
}