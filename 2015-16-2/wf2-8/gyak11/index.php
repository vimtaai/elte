<?php

define('TOKEN', TRUE);

session_start();

require_once __DIR__ . '/segedfv/fileio.php';    
require_once __DIR__ . '/segedfv/valid.php';
require_once __DIR__ . '/segedfv/flash.php';

function start_routing() {
    $request_method = $_SERVER['REQUEST_METHOD'];
    $query_string = $_SERVER['QUERY_STRING'];
    $data = $_GET;

    $qsarr = explode('&', $query_string);
    $page = array_shift($qsarr);

    if ($page) {
        unset($data[$page]);
    }

    $method = strtolower($request_method);
    $page_with_method = $page . '_' . $method;

    $controller_path = __DIR__ . '/vezerlok/' . $page_with_method . '.php';
    if (file_exists($controller_path)) {
        require $controller_path;
    } else {
        $controller_path = __DIR__ . '/vezerlok/' . $page . '.php';
        if (file_exists($controller_path)) {
            require $controller_path;
        } else {
            die('A(z) ' . $page . ' oldal nem található!');
        }   
    }
    if ($method == 'get') {
        $template_path = __DIR__ . '/sablonok/' . $page . '.php';
        if (file_exists($template_path)) {
            require __DIR__ .'/sablonok/fejlec.php';
            require $template_path;
        } else {
            die('A(z) ' . $page . ' oldal nem található!');
        }
    }
}

start_routing();