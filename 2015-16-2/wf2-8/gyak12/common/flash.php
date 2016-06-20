<?php

if (!defined('TOKEN')) 
    die('A fájl közvetlenül nem elérhető!');

function flash_save($name, $data) {
    if (!isset($_SESSION['_flash'])) {
        $_SESSION['_flash'] = [];
    }
    $_SESSION['_flash'][$name] = $data;
}

function flash_load($name) {
    if (isset($_SESSION['_flash'][$name])) {
        $data = $_SESSION['_flash'][$name];
        unset($_SESSION['_flash'][$name]);
    }
    return $data ?? NULL;
}

function redirect($page) {
    header('Location: index.php?' . $page);
    exit;
}