<?php

if (!defined('TOKEN')) 
    die('A fájl közvetlenül nem elérhető!');

function fajlbol_betolt($fajlnev, $alap = array()) {
  $s = @file_get_contents($fajlnev);
  return ($s === false ? $alap : json_decode($s, true));
}

function fajlba_ment($fajlnev, $adat) {
  $s = json_encode($adat);
  return file_put_contents($fajlnev, $s, LOCK_EX);
}