<?php if (!defined('TOKEN')) die ('Ejnyebejnye!');

function validate($input, &$data, &$errors) {
    // Eredmény nullázása
    $data = [];
    $errors = [];
    
    if (is_empty($input, 'id')) {
        $errors[] = 'Nem adtál meg semmit!';
    } else {
        $data['id'] = $input['id'];
    }

    
    return !(bool)$errors;
}

$data = [];
$errors = [];
$input = $_POST;

if (validate($input, $data, $errors)) {
    $file = __DIR__ . '/../data/todos.json';
    $todos = file_load($file);
    foreach ($todos as $key => $todo) {
        if ($todo['id'] == $data['id']) {
            unset($todos[$key]);
            break;
        }
    }
    file_save($file, array_values($todos));
} else {
    echo json_encode([
        "errors" => $errors
    ]);
}