<?php
require_once '../model/message.php';
require_once '../helper/redirect.php';
require_once '../helper/database.php';

session_start();

$db = connect('mysql:dbname=wf2_wp1c0x;host=localhost',
              'wp1c0x', 'wp1c0x');

// bemenet feldolgozása
if (count($_POST) > 0) {
    $hasError = false;
    if (strlen($_POST['username']) < 4) {
        Message::addMessage(new Message('The username is too short', Message::MESSAGE_ERROR));
    }
    if (strlen($_POST['password']) < 4) {
        Message::addMessage(new Message('The password is too short', Message::MESSAGE_ERROR));
    }
    if ($_POST['password'] !== $_POST['password-re']) {
        Message::addMessage(new Message('Password mismatch', Message::MESSAGE_ERROR));
    }
    $users = select($db, 'SELECT * FROM `8_users` WHERE `username` = :u', [
        ':u' => $_POST['username']
    ]);
    if (count($users) > 0) {
        Message::addMessage(new Message('User already exists', Message::MESSAGE_ERROR));
    }

    // volt-e hiba
    if (!Message::hasErrors()) {
        // beszúrás az adatbázisba
        $q = 'INSERT INTO `8_users` (`username`, `password`) VALUES (:u, :p)';
        execute($db, $q, [
            ':u' => $_POST['username'],
            ':p' => password_hash($_POST['password'], PASSWORD_DEFAULT)
        ]);
        Message::addMessage(new Message('Registration successful', Message::MESSAGE_SUCCESS));
        redirect('../view/login.php');
    } else {
        redirect('../view/signup.php');
    }
}