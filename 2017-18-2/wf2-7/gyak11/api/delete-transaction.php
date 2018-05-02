<?php

include '../includes/auth.php';
session_start();
auth(USER_ONLY);

$dbConn = new PDO('mysql:dbname=wf2_wp1c0x;host=localhost', 'wp1c0x', 'wp1c0x');

if (count($_POST) > 0) {
    $q = 'DELETE FROM `transactions` WHERE `id` = :id';
    $stmt = $dbConn->prepare($q);
    $stmt->execute([
        ':id' => $_POST['id']
    ]);
    if ($stmt->rowCount() === 0) {
        echo json_encode(FALSE);
    } else {
        echo json_encode(TRUE);
    }
} else {
    header('HTTP/1.1 400 Bad Request');
}