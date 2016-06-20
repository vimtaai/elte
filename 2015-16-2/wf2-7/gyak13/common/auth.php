<?php if (!defined('TOKEN')) die ('Ejnyebejnye!');

function authorize($logged_in) {
    if ($logged_in && !isset($_SESSION['logged_in'])) {
        flash_set('errors', ['A kért oldal megtekintéséhez bejelenkezés szükséges!']);
        redirect('login');
    }
    
    if (!$logged_in && isset($_SESSION['logged_in'])) {
        redirect('main');
    }
}