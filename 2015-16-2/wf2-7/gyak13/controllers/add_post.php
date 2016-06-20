<?php

function validate($input, &$data, &$errors) {
    // Eredmény nullázása
    $data = [];
    $errors = [];
    if (is_empty($input, 'name')) {
        $errors[] = 'Nem adtál meg nevet!';
    } else {
        $data['name'] = $input['name'];
    }

    if (is_empty($input, 'type')) {
        $errors[] = 'Nem adtál meg típust!';
    } elseif (!in_array($input['type'], ['Nap', 'Galaxis', 'Szupernova', 'Hullócsillag'])) {
        $errors[] = 'Rossz típus!';
    } else {
        $data['type'] = $input['type'];
    }

    if (is_empty($input, 'x')) {
        $errors[] = 'Nem adtál meg x-t!';
    } elseif ($input['x'] < 0 || $input['x'] > 500) {
	$errors[] = 'Hibás X érték!';
    } else {
        $data['x'] = $input['x'];
    }

    if (is_empty($input, 'y')) {
        $errors[] = 'Nem adtál meg y-t!';
    } elseif ($input['y'] < 0 || $input['y'] > 300) {
	$errors[] = 'Hibás y érték!';
    } else {
        $data['y'] = $input['y'];
    }
    
    return !(bool)$errors;
}

$data = [];
$errors = [];
$input = $_POST;

if (validate($input, $data, $errors)) {
    // Új felhasználó
    $star = [
        'id' => uniqid('id'),
        'name' => $data['name'],
        'type' => $data['type'],
        'x' => $data['x'],
        'y' => $data['y'],
    ];
    $file = __DIR__ . '/../data/stars.json';
    $stars = file_load($file);
    $stars[] = $star;
    file_save($file, $stars);
    // Sikeres
    $messages[] = "Sikeres hozzáadás";
    flash_set('messages', $messages);
    redirect('add');
} else {
    // Sikertelen
    
    flash_set('errors', $errors);
    redirect('add');
}
