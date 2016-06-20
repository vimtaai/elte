<?php if (!defined('TOKEN')) die ('Ejnyebejnye!');

function fajlbol_betolt($fajlnev, $alap = []) {
  $s = @file_get_contents($fajlnev);
  return ($s === false ? $alap : json_decode($s, true));
}

function fajlba_ment($fajlnev, $adat) {
  $s = json_encode($adat);
  return file_put_contents($fajlnev, $s, LOCK_EX);
}