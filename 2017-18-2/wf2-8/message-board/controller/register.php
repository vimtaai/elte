<?php
require_once '../model/message.php';
require_once '../helper/authorize.php';
require_once '../helper/redirect.php';
require_once '../helper/database.php';
session_start();

authorize(GUEST);

if (count($_POST) > 0) {
    if (strlen($_POST['username']) < 4) {
        Message::addMessage(new Message('The username is too short', Message::ERROR));
    }
    if (strlen($_POST['password']) < 4) {
        Message::addMessage(new Message('The password is too short', Message::ERROR));
    }
    if ($_POST['password'] !== $_POST['password-re']) {
        Message::addMessage(new Message('Password mismatch', Message::ERROR));
    }
    $user = Database::selectOne('SELECT * FROM `8_users` WHERE `username` = :u', [
        ':u' => $_POST['username']
    ]);
    if ($user === FALSE) {
        Message::addMessage(new Message('User already exists', Message::ERROR));
    }

    if (!Message::hasErrors()) {
        Database::execute('INSERT INTO `8_users` (`username`, `password`) VALUES (:u, :p)', [
            ':u' => $_POST['username'],
            ':p' => password_hash($_POST['password'], PASSWORD_DEFAULT)
        ]);

        Message::addMessage(new Message('Registration successful', Message::SUCCESS));
        redirectToView('login');
    } else {
        redirectToView('signup');
    }
}