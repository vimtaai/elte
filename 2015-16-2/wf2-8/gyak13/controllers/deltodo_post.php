<?php

if (!defined('TOKEN')) 
    die('A fájl közvetlenül nem elérhető!');

require_once __DIR__ . '/../common/valid.php';

function validate($input, &$data, &$errors) {
    $data = [];
    $errors = [];
    
    if (is_empty($input, 'todoid')) {
        $errors[] = 'Nincs megadva todoid!';
    } else {
        $data['todoid'] = $input['todoid'];
    }
    
    return !(bool)$errors;
}

$data = [];
$errors = [];
$input = $_POST;

function array_lookup($tomb, $T_fv) {
    foreach ($tomb as $elem) {
        if ($T_fv($elem)) {
            return $elem;
        }
    }
    return FALSE;
}

if (validate($input, $data, $errors)) {
    $file = __DIR__ . '/../data/todos.json';
    $todos = file_load($file);
    
    #barkácsmegoldás
    foreach ($todos as $key => $todo) {
        if ($todo['id'] == $data['todoid']) {
            unset($todos[$key]);
            break;
        }
    }
    $todos = array_values($todos);
    
    file_save($file, $todos);
    
    header('Content-Type: application/json');
    echo json_encode($todos);
} 