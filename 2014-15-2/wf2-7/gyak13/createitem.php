<?php

require_once 'functions.php';

if (isset($_POST['newitem'])) {
    $data = load_from_file('data');
    $data[] = $_POST['newitem'];
    save_to_file('data', $data);
}
