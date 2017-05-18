<?php

require_once 'functions.php';

$stars = load_from_file('star.json');

$star = array_filter($stars, function ($s) {
    return $s['id'] == $_GET['id'];
});

if (count($star) == 1) {
    echo json_encode(array_values($star)[0]);
}