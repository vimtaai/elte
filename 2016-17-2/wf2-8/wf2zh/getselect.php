<?php

require_once 'functions.php';

$stars = load_from_file('star.json');

$star = array_filter($stars, function ($s) {
    $select = json_decode($_GET['select'], true);
    return ($s['x'] >= $select[1]['x'] && $s['x'] <= $select[2]['x'] &&
           $s['y'] >= $select[1]['y'] && $s['y'] <= $select[2]['y']);
});

if (count($star)) {
    echo json_encode(array_values($star));
}