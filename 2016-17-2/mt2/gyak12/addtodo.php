<?php

require 'functions.php';
allow('POST');

$input = [];
$errors = [];
// Beolvassuk az adatokat a fájlból
$todos = load_from_file('todo.json');

// Input validálás (ha van $_POST['todo'] és nem üres)
if (isset($_POST['todo']) && strlen($_POST['todo']) > 0) {
    $input['todo'] = $_POST['todo'];
} else {
    $errors[] = 'Nem adtál meg semmit!';
}

// Ha nem volt hiba
if (!$errors) {
    // ... akkor hozzáfűzzük az új elemet
    $todos[] = $input['todo'];
    // ... és kimentjük az egészet egy fájlba
    save_to_file('todo.json', $todos);
} else {
    save_to_flash($errors);
}

redirect('index.php');