<?php

if (!defined('TOKEN')) 
    die('A fájl közvetlenül nem elérhető!');

function flashbe_ment($nev, $adat) {
    if (!isset($_SESSION['_flash'])) {
        $_SESSION['_flash'] = [];
    }
    $_SESSION['_flash'][$nev] = $adat;
}

function flashbol_betolt($nev) {
    if (isset($_SESSION['_flash'][$nev])) {
        $adat = $_SESSION['_flash'][$nev];
        unset($_SESSION['_flash'][$nev]);
    }
    return $adat ?? NULL;
}

function atiranyit($oldal) {
    header('Location: index.php?' . $oldal);
    exit;
}