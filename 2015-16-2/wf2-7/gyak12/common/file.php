<?php if (!defined('TOKEN')) die ('Ejnyebejnye!');

function file_load($filename, $base = []) {
  $string = @file_get_contents($filename);
  return ($string === false ? $base : json_decode($string, true));
}

function file_save($fajlnev, $adat) {
  $string = json_encode($adat);
  return file_put_contents($fajlnev, $string, LOCK_EX);
}