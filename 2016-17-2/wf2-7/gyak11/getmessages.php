<?php

require_once 'functions.php';
allow('GET');

$messages = load_from_file('data.json');

if (isset($_GET['time'])) {
    $messages = array_filter($messages, function ($elem) {
        return $elem['date'] > $_GET['time'];
    });
}

echo json_encode(array_reverse($messages));