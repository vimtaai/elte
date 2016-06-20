<?php

define('TOKEN', TRUE);

session_start();

require_once __DIR__ . '/common/fileio.php';    
require_once __DIR__ . '/common/valid.php';
require_once __DIR__ . '/common/flash.php';
require_once __DIR__ . '/common/auth.php';

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

    $controller_path = __DIR__ . '/controllers/' . $page_with_method . '.php';
    if (file_exists($controller_path)) {
        require $controller_path;
    } else {
        $controller_path = __DIR__ . '/controllers/' . $page . '.php';
        if (file_exists($controller_path)) {
            require $controller_path;
        } else {
            $sapi_type = php_sapi_name();
            if (substr($sapi_type, 0, 3) == 'cgi')
                header("Status: 404 Not Found", true, 404);
            else
                header("HTTP/1.1 404 Not Found", true, 404);
            die('A(z) ' . $page . ' oldal nem található!');
        }   
    }
    if ($method == 'get') {
        $template_path = __DIR__ . '/templates/' . $page . '.php';
        if (file_exists($template_path)) {
            require __DIR__ .'/templates/header.php';
            require $template_path;
        } else {
            $sapi_type = php_sapi_name();
            if (substr($sapi_type, 0, 3) == 'cgi')
                header("Status: 404 Not Found", true, 404);
            else
                header("HTTP/1.1 404 Not Found", true, 404);
            die('A(z) ' . $page . ' oldal nem található!');
        }
    }
}

start_routing();