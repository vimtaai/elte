<?php

require_once '../model/message.php';
require_once '../helper/redirect.php';
require_once '../helper/database.php';

session_start();

$db = connect('mysql:dbname=wf2_wp1c0x;host=localhost',
              'wp1c0x', 'wp1c0x');

if (count($_POST) > 0) {
    $users = select($db, 'SELECT * FROM `8_users` WHERE `username` = :u', [
        ':u' => $_POST['username'] 
    ]);
    if (count($users) === 0 || 
        !password_verify($_POST['password'], $users[0]['password'])) {
        Message::addMessage(new Message('Bad username or password', Message::MESSAGE_ERROR));
        redirect('../view/login.php');
    } else {
        // bejelentkeztetem a felhasználót
        $_SESSION['user'] = $users[0];
        Message::addMessage(new Message('Login successful', Message::MESSAGE_SUCCESS));
        redirect('../view/list-posts.php');
    }
}