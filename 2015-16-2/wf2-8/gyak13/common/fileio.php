<?php

if (!defined('TOKEN')) 
    die('A fájl közvetlenül nem elérhető!');

function file_load($filename, $base = array()) {
  $s = @file_get_contents($filename);
  return ($s === false ? $base : json_decode($s, true));
}

function file_save($filename, $data) {
  $string = json_encode($data);
  return file_put_contents($filename, $string, LOCK_EX);
}