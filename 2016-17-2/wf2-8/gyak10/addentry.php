<?php

require_once 'functions.php';
allow('POST');

$expenses = load_from_file('data.json');

$input = [];
$errors = [];
$messages = [];

if (not_empty($_POST, 'desc')) {
    $input['desc'] = (string)htmlentities($_POST['desc']);
} else {
    $errors[] = 'Nem adtál meg leírást!';
}

if (not_empty($_POST, 'amount')) {
    if (is_numeric($_POST['amount'])) {
        $input['amount'] = (int)$_POST['amount'];
    } else {
        $errors[] = 'A megadott összeg nem szám!';    
    }
} else {
    $errors[] = 'Nem adtál meg összeget!';
}

// Feldolgozás
if (!$errors) {
    $expenses[] = [
        'desc' => $input['desc'],
        'amount' => $input['amount']
    ];
    save_to_file('data.json', $expenses);
    $messages[] = 'Bejegyzés hozzáadva!';
}

save_to_flash([
    'errors'   => $errors,
    'messages' => $messages
]);
redirect('index.php');