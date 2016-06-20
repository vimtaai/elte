<?php

if (!defined('TOKEN')) 
    die('A fájl közvetlenül nem elérhető!');

require_once __DIR__ . '/../common/valid.php';

function validate($input, &$data, &$errors) {
    $data = [];
    $errors = [];
    
    if (is_empty($input, 'todo')) {
        $errors[] = 'Nincs megadva todo!';
    } else {
        $data['todo'] = $input['todo'];
    }
    
    return !(bool)$errors;
}

$data = [];
$errors = [];
$input = $_POST;

if (validate($input, $data, $errors)) {
    $file = __DIR__ . '/../data/todos.json';
    $todos = file_load($file);
    $todos[] = [
        'text' => $data['todo'],
        'status' => 'active',
    ];
    file_save($file, $todos);
    
    header('Content-Type: application/json');
    echo json_encode($todos);
} 