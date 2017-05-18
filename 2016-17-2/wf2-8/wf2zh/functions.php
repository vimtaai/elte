<?php

session_start();

function save_to_file($file, $data) {
    file_put_contents($file, json_encode($data));
}

function load_from_file($file) {
    return json_decode(file_get_contents($file), TRUE);
}

function not_empty(&$array, $key) {
    return isset($array[$key]) && !empty($array[$key]);
}

function allow($method) {
    if ($_SERVER['REQUEST_METHOD'] != $method) {
        die('Request method not allowed!');
    }
}

function redirect($url) {
    header('Location: ' . $url);
    exit;
}

function save_to_flash($data) {
    $_SESSION['_flash'] = $data;
}

function load_from_flash() {
    if (isset($_SESSION['_flash'])) {
        $data = $_SESSION['_flash'];
        unset($_SESSION['_flash']);
        return $data;
    } else {
        return NULL;
    }
}

function auth() {
    if (!isset($_SESSION['logged_in'])) {
        $errors = ['A folytatáshoz bejelentkezés szükséges'];
        save_to_flash([
            'errors' => $errors,
            'messages' => []
        ]);
        redirect('login.php');
    }
}