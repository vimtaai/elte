<?php

function save_to_file($filename, $data) {
    if (@file_put_contents($filename, json_encode($data)) === false) {
        die('Could not save data to file.');
    }
}

function load_from_file($filename) {
    if (($data = @file_get_contents($filename)) === false) {
        die('Could not load data from file.');
    }
    return json_decode($data);
}

