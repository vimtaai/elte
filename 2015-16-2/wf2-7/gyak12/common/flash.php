<?php if (!defined('TOKEN')) die ('Ejnyebejnye!');

function redirect($page) {
    header('Location: index.php?' . $page);
    exit;
}

function flash_set($name, $value) {
    if (!isset($_SESSION['_flash']))
        $_SESSION['_flash'] = [];
        
    $_SESSION['_flash'][$name] = $value;
}

function flash_get($name) {
    $adat = isset($_SESSION['_flash'][$name]) ? 
                  $_SESSION['_flash'][$name] : 
                  NULL;
    unset($_SESSION['_flash'][$name]);
    return $adat;
}