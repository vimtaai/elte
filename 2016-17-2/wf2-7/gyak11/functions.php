<?php

session_start();

function save_to_file($file, $data) {
    $encoded_data = json_encode($data);
    //$encoded_data = serialize($data);
    file_put_contents($file, $encoded_data);
}

function load_from_file($file) {
    $data = file_get_contents($file);
    //return unserialize($data);
    return json_decode($data, TRUE);
}

function not_empty(&$array, $key) {
    //array_key_exists($key, $array);
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
    }
}

function auth() {
    if (!$_SESSION['logged_in']) {
        $errors = [];
        $errors[] = 'A folytatáshoz bejelenkezés szükséges!';
        save_to_flash($errors);
        redirect('login.php');
    }
}