<?php

$stars = file_load(__DIR__ . '/../data/stars.json');

foreach ($stars as $star) {
    if ($star['id'] == $_POST['id']) {
        $res = $star;
        break;
    }
}

if ($res) {
    echo json_encode($res);
}
