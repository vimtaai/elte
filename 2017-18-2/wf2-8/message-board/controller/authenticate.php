<?php
require_once '../model/message.php';
require_once '../helper/authorize.php';
require_once '../helper/redirect.php';
require_once '../helper/database.php';
session_start();

authorize(GUEST);

if (count($_POST) > 0) {
  $user = Database::selectOne('SELECT * FROM `8_users` WHERE `username` = :u', [
    ':u' => $_POST['username'] 
  ]);

  if ($user === FALSE || !password_verify($_POST['password'], $user['password'])) {
    Message::addMessage(new Message('Bad username or password', Message::ERROR));
  }

  if (!Message::hasErrors()) {
    $_SESSION['user'] = $user;

    Message::addMessage(new Message('Login successful', Message::SUCCESS));
    redirectToView('list-posts');
  } else {
    redirectToView('login');
  }
}