<?php

if (!defined('TOKEN')) 
    die('A fájl közvetlenül nem elérhető!');

authorize(TRUE);

unset($_SESSION['logged_in']);

flash_save('messages', ['Sikeres kijelentkezés']);

redirect('login');