<?php
require_once '../model/message.php';
require_once '../helper/authorize.php';
require_once '../helper/redirect.php';
require_once '../helper/database.php';
session_start();

authorize(USER);

if (count($_POST) > 0) {
	if ($_POST['text'] == '') {
		Message::addMessage(new Message('A bejegyzés szövege nem lehet üres', Message::SUCCESS));
	}

	if (!Message::hasErrors()) {
		Database::execute('INSERT INTO `8_posts` (`text`, `userid`, `postid`) VALUES (:t, :u, :p)', [
			':t' => $_POST['text'],
			':u' => $_SESSION['user']['id'],
			':p' => $_POST['replyid'] ?? null
		]);

		Message::addMessage(new Message('Sikeres hozzászólás', Message::SUCCESS));
		redirectToView('list-posts');
	} else {
		redirectToView('list-posts');
	}
}
