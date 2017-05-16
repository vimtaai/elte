<?php

require_once 'functions.php';
allow('POST');

$texts = load_from_file('text.json');

if (!empty($_POST['text'])) {
    $texts[] = [
        "text" => $_POST['text'],
        "date" => time(),
        "sender" => $_SERVER['REMOTE_ADDR']
    ];
    save_to_file('text.json', $texts);
}