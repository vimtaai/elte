<?php

require_once 'functions.php';
allow('POST');

$expenses = load_from_file('data.json');

$input = [];
$errors = [];
$messages = [];

if (isset($expenses[$_POST['delkey']])) {
    $input['delkey'] = $_POST['delkey'];
} else {
    $errors[] = 'Nincs ilyen törlendő elem!';
}

if (!$errors) {
    unset($expenses[$input['delkey']]);
    save_to_file('data.json', $expenses);
    $messages[] = 'Bejegyzés törlve!';
}

save_to_flash([
    'errors'   => $errors,
    'messages' => $messages
]);
redirect('index.php');