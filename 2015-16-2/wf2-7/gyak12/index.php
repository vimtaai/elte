<?php

define('TOKEN', TRUE);

session_start();

require_once __DIR__ . '/common/validation.php';
require_once __DIR__ . '/common/file.php';
require_once __DIR__ . '/common/flash.php';
require_once __DIR__ . '/common/auth.php';


function start_routing() {
    $request_method = $_SERVER['REQUEST_METHOD'];
    $query_string = $_SERVER['QUERY_STRING'];

    $qsarr = explode('&', $query_string);
    $page = array_shift($qsarr) ?: 'login';
    $data = $_GET;

    if ($page) {
        unset($data[$page]);
    }

    $method = strtolower($request_method);
    $page_with_method = $page . '_' . $method;

    $controller_path = __DIR__ . '/controllers/' . $page_with_method . '.php';
    if (file_exists($controller_path)) {
        require $controller_path;
    } else {
        $controller_path = __DIR__ . '/controllers/' . $page . '.php';
        if (file_exists($controller_path)) {
            require $controller_path;
        } else {
            die('A(z) ' . $page . ' oldal nem található!');
        }   
    }
    if ($method == 'get') {
        $view_path = __DIR__ . '/views/' . $page . '.php';
        if (file_exists($view_path)) {
            require __DIR__ . '/partials/header.php';
            require $view_path;
        }
    }
}

start_routing();