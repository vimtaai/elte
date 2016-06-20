<?php if (!defined('TOKEN')) die ('Ejnyebejnye!');

function validate($input, &$data, &$errors) {
    // Eredmény nullázása
    $data = [];
    $errors = [];
    
    if (is_empty($input, 'todo')) {
        $errors[] = 'Nem adtál meg semmit!';
    } else {
        $data['todo'] = $input['todo'];
    }
    
    if (is_empty($input, 'color')) {
        $errors[] = 'Nem adtál meg semmit!';
    } else {
        $data['color'] = $input['color'];
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
        "id" => uniqid('id'),
        "text" => $data['todo'],
        "status" => "pending",
        "color" => $data['color']
    ];
    file_save($file, $todos);
    
    $res = json_encode($todos);
    echo $res;
} else {
    echo json_encode([
        "errors" => $errors
    ]);
}