<?php

require_once 'functions.php';
allow('POST');

$input = [];
$errors = [];

if (!empty($_POST['text'])) {
    $input['text'] = $_POST['text'];
} else {
    $errors[] = 1;
}

if (!$errors) {
    $messages = load_from_file('data.json');
    $messages[] = [
        "text" => $input['text'],
        "ip" => $_SERVER['REMOTE_ADDR'],
        "date" => time()
    ];
    save_to_file('data.json', $messages);
}