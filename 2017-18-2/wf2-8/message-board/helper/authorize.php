<?php

require_once '../model/message.php';
require_once '../helper/redirect.php';

define('GUEST', 1);
define('USER', 2);

function isLoggedIn() {
  return isset($_SESSION['user']);
}

function authorize(int $group = GUEST | USER) {
  if (isLoggedIn()) {
    if(!($group & USER)) {
      redirectToView('list-posts');
    }
  } else {
    if (!($group & GUEST)) {
      Message::addMessage(new Message('Access denied, please log in to continue', Message::ERROR));
      redirectToView('login'); 
    }
  }
}