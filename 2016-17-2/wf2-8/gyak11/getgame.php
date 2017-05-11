<?php

require_once 'functions.php';
allow('GET');

$gameData = load_from_file('game.json');

echo json_encode($gameData);

// echo file_get_contents('game.json');