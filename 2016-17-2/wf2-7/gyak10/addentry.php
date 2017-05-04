<?php
const DATAFILE = 'data.json';
require_once 'functions.php';
allow('POST');

$input = [];
$errors = [];

$expenses = load_from_file(DATAFILE);

//var_dump($_POST);

// Input-validálás
if (not_empty($_POST, 'desc')) {
    $input['desc'] = $_POST['desc'];
} else {
    $errors[] = 'Nem adtál meg leírást!';
}

if (not_empty($_POST, 'amount')) {
    if (is_numeric($_POST['amount'])) {
        $input['amount'] = $_POST['amount'];
    } else {
        $errors[] = 'A megadott összeg nem szám!';
    }
} else {
    $errors[] = 'Nem adtál meg összeget!';
}

// Feldologzás, ha nincs hiba
if (!$errors) {
    $expenses[] = [
        'desc' => $input['desc'],
        'amount' => $input['amount']
    ];
    save_to_file(DATAFILE, $expenses);
}


save_to_flash($errors);
redirect('index.php');