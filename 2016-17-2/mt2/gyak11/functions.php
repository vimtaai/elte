<?php 

session_start();

function save_to_file($filename, $data) {
    $jsonData = json_encode($data);
    file_put_contents($filename, $jsonData);
}

function load_from_file($filename) {
    $jsonData = file_get_contents($filename);
    return json_decode($jsonData, true);
}

function allow($method) {
    if ($_SERVER['REQUEST_METHOD'] != $method) {
        die('Method not allowed');
    }
}

function redirect($url) {
    header('Location: ' . $url);
}

function auth() {

}

function save_to_flash($data) {
    $_SESSION['_flash'] = serialize($data);
}

function load_from_flash() {
    if (isset($_SESSION['_flash'])) {
        $data = unserialize($_SESSION['_flash']);
        unset($_SESSION['_flash']);
        return $data;
    }
}