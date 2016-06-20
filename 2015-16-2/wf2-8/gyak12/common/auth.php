<?php

if (!defined('TOKEN')) 
    die('A fájl közvetlenül nem elérhető!');
    
function authorize($logged_in) {
    if ($logged_in && !isset($_SESSION['logged_in'])) {
        $messages = ['Az oldal megtekintéséhez bejelentkezés szükséges!'];
        flash_save('messages', $messages);
        redirect('login');
    }
    if (!$logged_in && isset($_SESSION['logged_in'])) {   
        die('Az adott oldal nem elérhető!');
    }
}