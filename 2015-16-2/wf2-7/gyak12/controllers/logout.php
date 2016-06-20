<?php if (!defined('TOKEN')) die ('Ejnyebejnye!');

unset($_SESSION['logged_in']);

flash_set('messages', ['Sikeres kijelentkezés']);

redirect('login');