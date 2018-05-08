<?php
require_once '../model/message.php';
require_once '../helper/redirect.php';
require_once '../helper/database.php';

session_start();

if (!isset($_SESSION['user'])) {
	Message::addMessage(new Message('Access denied', Message::MESSAGE_ERROR));
	redirect('login.php');
  }
}  

$db = connect('mysql:dbname=wf2_wp1c0x;host=localhost',
              'wp1c0x', 'wp1c0x');

// bemenet feldolozása
if (count($_POST) > 0) {
	if ($_POST['text'] == '') {
		// hiba
		Message::addMessage(new Message('A bejegyzés szövege nem lehet üres', Message::MESSAGE_ERROR));
	} else {
		// beszúrás az adatbázisba
		execute($db, 'INSERT INTO `posts` (`text`) VALUES (:t)', [
			':t' => $_POST['text']
		]);
		Message::addMessage(new Message('Sikeres hozzászólás', Message::MESSAGE_SUCCESS));
	}
}

redirect('../index.php');