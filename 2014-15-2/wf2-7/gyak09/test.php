<?php

require_once 'functions.php';

$data = [
    [],
    [],
    [
        [],
        []
    ]    
];

save_to_file('awesome.png', $data);

var_dump(load_from_file('awesome.png'));
