<?php

function array_all_keys_exist($keys, $array) {
    foreach($keys as $key) {
        if (!array_key_exists($key, $array)) {
            return false;
        }
    }

    return true;
}

function load_data_from_file($file) {
    return json_decode(file_get_contents($file), true);
}

function save_data_to_file($file, $data) {
    file_put_contents($file, json_encode($data));
}
